#!/usr/bin/env python3
"""檢查 content/writing/en/*.md：frontmatter、日期、破折號、內部連結、結尾註記、殘留中文。"""
import re, sys
from pathlib import Path
import yaml

ROOT = Path(__file__).resolve().parents[2] / "content" / "writing"
EN = ROOT / "en"
en_slugs = {p.stem for p in EN.glob("*.md")}
zh_slugs = {p.stem for p in ROOT.glob("*.md")}
problems = 0


def fm(path):
    raw = path.read_text(encoding="utf-8")
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", raw, re.S)
    if not m:
        return None, raw
    return yaml.safe_load(m.group(1)), m.group(2)


for p in sorted(EN.glob("*.md")):
    issues = []
    try:
        meta, body = fm(p)
    except Exception as e:  # noqa
        print(f"✗ {p.stem}: YAML error {e}"); problems += 1; continue
    if meta is None:
        print(f"✗ {p.stem}: no frontmatter"); problems += 1; continue
    zmeta, zbody = fm(ROOT / f"{p.stem}.md")
    for k in ("title", "date", "excerpt", "tags", "description", "source"):
        if not meta.get(k):
            issues.append(f"missing {k}")
    if meta.get("source") != p.stem:
        issues.append(f"source={meta.get('source')}")
    if zmeta and str(meta.get("date")) != str(zmeta.get("date")):
        issues.append(f"date {meta.get('date')} != {zmeta.get('date')}")
    if zmeta and bool(zmeta.get("draft")) != bool(meta.get("draft")):
        issues.append("draft mismatch")
    text = body + " " + str(meta.get("title")) + " " + str(meta.get("excerpt")) + " " + str(meta.get("description"))
    if "—" in text or " – " in text:
        issues.append(f"dash x{text.count('—') + text.count(' – ')}")
    for link in [l for l in re.findall(r"\]\((/[^)\s]+)\)", body) if not re.search(r"\.(jpe?g|png|gif|webp|svg)$", l)]:
        if link.startswith("/en/writing/"):
            if link.split("/")[3] not in en_slugs:
                issues.append(f"broken en link {link}")
        elif link.startswith("/writing/"):
            slug = link.split("/")[2]
            if slug not in zh_slugs:
                issues.append(f"broken zh link {link}")
            elif slug != p.stem and slug != "opinion-not-neutral" and "Mandarin original" not in body[body.find(link) - 30: body.find(link)]:
                issues.append(f"zh link should be en? {link}")
    if f"[Mandarin original](/writing/{p.stem})" not in body:
        issues.append("missing translated-from note")
    cjk = len(re.findall(r"[一-鿿]", body))
    if cjk > 60:
        issues.append(f"CJK chars {cjk}")
    words = len(body.split())
    zlen = len(re.sub(r"\s", "", zbody or ""))
    ratio = words / max(zlen, 1)
    if ratio < 0.35:
        issues.append(f"short? {words}w vs {zlen}zh ({ratio:.2f})")
    flag = "✗" if issues else "✓"
    problems += bool(issues)
    print(f"{flag} {p.stem:40s} {words:5d}w  {'; '.join(issues)}")

print(f"\n{len(en_slugs)} files, {problems} with issues; untranslated published:",
      sorted(s for s in zh_slugs - en_slugs if not (fm(ROOT / f'{s}.md')[0] or {}).get('draft')))
