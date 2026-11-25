#!/usr/bin/env python3
"""逐頁 SEO 健檢：讀 sitemap，抓每頁 HTML，檢查 meta、OG、hreflang、JSON-LD、H1、圖片 alt。
用法：python3 seo_audit.py http://localhost:3123"""
import json, re, sys, urllib.request
from collections import Counter

BASE = sys.argv[1].rstrip("/")
PROD = "https://ciaohua.genesis131.com"


def get(url):
    with urllib.request.urlopen(url, timeout=30) as r:
        return r.status, r.read().decode("utf-8", "replace")


_, sm = get(f"{BASE}/sitemap.xml")
urls = [u.replace(PROD, BASE) for u in re.findall(r"<loc>([^<]+)</loc>", sm)]
issues = Counter()
rows = []


def meta(h, attr, name):
    m = re.search(rf'<meta {attr}="{re.escape(name)}" content="([^"]*)"', h)
    return m.group(1) if m else None


for u in urls:
    try:
        st, h = get(u)
    except Exception as e:  # noqa
        rows.append((u, [f"FETCH {e}"])); issues["fetch"] += 1; continue
    p = []
    title = re.search(r"<title>([^<]*)</title>", h)
    t = title.group(1) if title else ""
    desc = meta(h, "name", "description") or ""
    path = u.replace(BASE, "")
    en = path == "/en" or path.startswith("/en/")
    tl = len(t) if en else len(t.encode("utf-8")) // 3 * 1  # 中文大約以字數算
    if not t: p.append("no title")
    elif en and len(t) > 70: p.append(f"title {len(t)}c")
    elif not en and len(t) > 40: p.append(f"title {len(t)}字")
    if not desc: p.append("no description")
    elif en and not (70 <= len(desc) <= 170): p.append(f"desc {len(desc)}c")
    elif not en and not (40 <= len(desc) <= 120): p.append(f"desc {len(desc)}字")
    if 'rel="canonical"' not in h: p.append("no canonical")
    if not meta(h, "property", "og:image"): p.append("no og:image")
    if not meta(h, "property", "og:title"): p.append("no og:title")
    if not meta(h, "property", "og:description"): p.append("no og:description")
    loc = meta(h, "property", "og:locale")
    if en and loc != "en_US": p.append(f"og:locale {loc}")
    if not meta(h, "name", "twitter:card"): p.append("no twitter:card")
    if 'hrefLang="en"' not in h and 'hreflang="en"' not in h.lower(): p.append("no hreflang")
    types = []
    for m in re.findall(r'<script type="application/ld\+json">(.*?)</script>', h, re.S):
        try:
            d = json.loads(m)
            g = d.get("@graph", [d])
            types += [x.get("@type") for x in g if isinstance(x, dict)]
        except Exception:
            p.append("bad JSON-LD")
    page_types = [x for x in types if x not in ("WebSite", "Person", "Organization")]
    if not page_types: p.append("no page JSON-LD")
    if "BreadcrumbList" not in types and u.rstrip("/") not in (BASE, f"{BASE}/en"): p.append("no breadcrumb")
    h1 = len(re.findall(r"<h1[\s>]", h))
    if h1 != 1: p.append(f"h1 x{h1}")
    noalt = len(re.findall(r"<img(?![^>]*\balt=\"[^\"]+\")[^>]*>", h))
    if noalt: p.append(f"img no alt x{noalt}")
    if en and 'lang="en"' not in h: p.append("no lang=en wrapper")
    for x in p: issues[re.sub(r"[\d]+", "N", x)] += 1
    rows.append((u.replace(BASE, ""), p, ",".join(sorted(set(page_types)))))

for r in rows:
    if r[1]:
        print(f"{r[0] or '/':55s} {'; '.join(r[1])}   [{r[2] if len(r) > 2 else ''}]")
print(f"\n{len(urls)} URLs")
for k, v in issues.most_common(): print(f"  {v:3d}  {k}")
