#!/usr/bin/env python3
"""小花頻道剪輯流水線：你只負責錄，剩下交給這支程式＋Claude。

三步：
  1. transcribe  原始影片 → 逐字稿（繁中、字級時間碼）
       python3 scripts/video/edit.py transcribe raw.mp4 --out work/ep01
  2. （Claude 讀 work/ep01/transcript.txt，寫出 work/ep01/cutlist.json：
       保留哪些段落、哪些是講錯重講要丟掉、Shorts 從哪裡切、字幕錯字修正）
  3. render      依 cutlist 自動剪接、去掉停頓、上字幕、音量標準化，
                 輸出 16:9 長片與 9:16 Shorts
       python3 scripts/video/edit.py render raw.mp4 --out work/ep01

cutlist.json 格式：
{
  "title": "攝影不是技巧，是感受",
  "keep": [[0.0, 35.2], [41.8, 300.5]],          # 長片保留的區段（秒，原始時間）
  "fixes": {"臨良堂": "靈糧堂", "服飾": "服事"},   # 字幕錯字修正
  "max_gap": 0.6,                                  # 字與字之間超過幾秒的停頓要剪掉
  "shorts": [
    {"name": "s1", "title": "我拒絕教他攝影", "keep": [[12.0, 58.0]]}
  ]
}
"""

import argparse
import json
import os
import subprocess
import sys
from pathlib import Path

FONT = os.environ.get("EDIT_FONT", "Noto Sans TC")
FONT_FALLBACK = "WenQuanYi Zen Hei"


def run(cmd):
    print("$", " ".join(str(c) for c in cmd), file=sys.stderr)
    subprocess.run(cmd, check=True)


def ts(t, sep=","):
    h, rem = divmod(max(t, 0), 3600)
    m, s = divmod(rem, 60)
    return f"{int(h):02d}:{int(m):02d}:{s:06.3f}".replace(".", sep)


# ---------------------------------------------------------------- transcribe
def transcribe(args):
    from faster_whisper import WhisperModel

    try:
        from opencc import OpenCC

        to_tw = OpenCC("s2twp").convert
    except ImportError:  # 沒裝 opencc 就不轉
        to_tw = lambda s: s  # noqa: E731

    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    import numpy as np

    # 用 ffmpeg 解碼成 16k 單聲道 float32，不依賴 PyAV 版本
    pcm = subprocess.run(
        ["ffmpeg", "-nostdin", "-loglevel", "error", "-i", args.video, "-vn", "-ac", "1", "-ar", "16000", "-f", "f32le", "-"],
        capture_output=True, check=True,
    ).stdout
    audio = np.frombuffer(pcm, dtype=np.float32)

    model = WhisperModel(args.model, device="cpu", compute_type="int8")
    segments, info = model.transcribe(
        audio,
        language="zh",
        word_timestamps=True,
        vad_filter=True,
        initial_prompt="以下是繁體中文的影片口白，講者是影像導演張正杰（小花），內容關於影像、創作、幕後、敬拜與個人品牌。",
    )

    segs = []
    for s in segments:
        words = [{"s": round(w.start, 2), "e": round(w.end, 2), "w": to_tw(w.word)} for w in (s.words or [])]
        segs.append({"s": round(s.start, 2), "e": round(s.end, 2), "text": to_tw(s.text.strip()), "words": words})
        print(f"[{ts(s.start, '.')}] {segs[-1]['text']}", file=sys.stderr)

    (out / "transcript.json").write_text(json.dumps(segs, ensure_ascii=False, indent=1))
    lines = phrases(normalize([w for s in segs for w in s["words"]]))
    (out / "transcript.txt").write_text(
        "\n".join(f"[{a:8.2f} – {b:8.2f}] {t}" for a, b, t in lines) + "\n"
    )
    write_srt(out / "transcript.srt", lines)
    print(f"\n完成：{out}/transcript.txt（{info.duration:.0f} 秒）", file=sys.stderr)


PUNCT = set("（）()，。、？！,.?!：:；; 「」『』…-—")


def normalize(words):
    """Whisper 會把停頓算進標點或下一個字裡。標點變成斷句記號，過長的字把開頭往後收。"""
    out = []
    for w in words:
        t = w["w"].strip()
        if not t or all(ch in PUNCT for ch in t):
            if out:
                out[-1]["brk"] = True
            continue
        s, e = w["s"], w["e"]
        per = 0.45 * max(1, len(t))
        if e - s > per:
            s = e - per
        out.append({"s": s, "e": e, "w": t})
    return out


def clean(t):
    return t.replace("（", "，").replace("(", "，").strip()


def phrases(words, gap=0.35):
    """依停頓把字串成一句一句，方便 Claude 判斷哪裡要剪。"""
    out, cur = [], []
    for w in words:
        if cur and (w["s"] - cur[-1]["e"] > gap or cur[-1].get("brk")):
            out.append(cur)
            cur = []
        cur.append(w)
    if cur:
        out.append(cur)
    return [(c[0]["s"], c[-1]["e"], clean("".join(x["w"] for x in c)).strip("，")) for c in out]


# ---------------------------------------------------------------- render
def speech_ranges(words, keep, max_gap, pad=0.12):
    """把保留區段內的字串成連續說話區段，超過 max_gap 的停頓剪掉。"""
    out = []
    for ks, ke in keep:
        ws = [w for w in words if w["s"] >= ks - 0.05 and w["e"] <= ke + 0.05]
        if not ws:
            continue
        cur = [max(ks, ws[0]["s"] - pad), min(ke, ws[0]["e"] + pad)]
        for w in ws[1:]:
            if w["s"] - cur[1] > max_gap:
                out.append(cur)
                cur = [max(ks, w["s"] - pad), min(ke, w["e"] + pad)]
            else:
                cur[1] = min(ke, w["e"] + pad)
        out.append(cur)
    # 合併重疊
    merged = []
    for r in sorted(out):
        if merged and r[0] <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], r[1])
        else:
            merged.append(list(r))
    return merged


def remap(t, ranges):
    """原始時間 → 剪完後的時間；不在保留區段內回傳 None。"""
    acc = 0.0
    for s, e in ranges:
        if s <= t <= e:
            return acc + (t - s)
        acc += e - s
    return None


def captions(words, ranges, fixes, max_chars):
    """用字級時間碼重新斷句，產生剪完後時間軸的字幕。"""
    lines, cur, prev_e = [], [], 0.0
    for w in words:
        a, b = remap(w["s"], ranges), remap(w["e"], ranges)
        if a is None or b is None:
            continue
        txt = clean(w["w"])
        if not txt:
            continue
        # 原始時間停頓超過 0.8 秒視為換句（剪掉停頓後就看不出來了，所以用原始時間判斷）
        if cur and w["s"] - prev_e > 0.8 and len("".join(x[2] for x in cur)) >= 2:
            lines.append(cur)
            cur = []
        prev_e = w["e"]
        cur.append((a, b, txt))
        text = "".join(x[2] for x in cur)
        if len(text) >= max_chars or (w.get("brk") and len(text) >= 5):
            lines.append(cur)
            cur = []
    if cur:
        lines.append(cur)
    subs = []
    for ln in lines:
        text = "".join(x[2] for x in ln).strip("，。,. ")
        for k, v in fixes.items():
            text = text.replace(k, v)
        if text:
            subs.append((ln[0][0], ln[-1][1] + 0.1, text))
    return subs


def write_srt(path, subs):
    with open(path, "w") as f:
        for i, (s, e, t) in enumerate(subs, 1):
            f.write(f"{i}\n{ts(s)} --> {ts(e)}\n{t}\n\n")


def font_name():
    have = subprocess.run(["fc-list", ":", "family"], capture_output=True, text=True).stdout
    return FONT if FONT in have else FONT_FALLBACK


def write_ass(path, subs, w, h, vertical, title=None):
    font = font_name()
    size = int(h * (0.045 if vertical else 0.055))
    margin = int(h * (0.28 if vertical else 0.07))
    head = f"""[Script Info]
ScriptType: v4.00+
PlayResX: {w}
PlayResY: {h}
WrapStyle: 0

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Sub,{font},{size},&H00FFFFFF,&H00FFFFFF,&H00000000,&H64000000,1,0,0,0,100,100,1,0,1,{max(2, size // 14)},1,2,60,60,{margin},1
Style: Title,{font},{int(size * 1.25)},&H00FFFFFF,&H00FFFFFF,&H00000000,&H96000000,1,0,0,0,100,100,2,0,3,{max(2, size // 10)},0,8,60,60,{int(h * 0.12)},1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""

    def at(t):
        h_, rem = divmod(t, 3600)
        m_, s_ = divmod(rem, 60)
        return f"{int(h_)}:{int(m_):02d}:{s_:05.2f}"

    with open(path, "w") as f:
        f.write(head)
        if title:
            end = subs[-1][1] if subs else 60
            f.write(f"Dialogue: 0,{at(0)},{at(end)},Title,,0,0,0,,{title}\n")
        for s, e, t in subs:
            f.write(f"Dialogue: 0,{at(s)},{at(e)},Sub,,0,0,0,,{t}\n")


def probe(video):
    r = subprocess.run(
        ["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "json", video],
        capture_output=True, text=True, check=True,
    )
    st = json.loads(r.stdout)["streams"][0]
    return st["width"], st["height"]


def render_one(video, ranges, subs, out_file, ass_file, vertical, title=None):
    w, h = probe(video)
    parts = []
    for i, (s, e) in enumerate(ranges):
        parts.append(f"[0:v]trim={s:.3f}:{e:.3f},setpts=PTS-STARTPTS[v{i}];[0:a]atrim={s:.3f}:{e:.3f},asetpts=PTS-STARTPTS,afade=t=in:d=0.02,afade=t=out:st={max(e - s - 0.02, 0):.3f}:d=0.02[a{i}]")
    concat = "".join(f"[v{i}][a{i}]" for i in range(len(ranges)))
    graph = ";".join(parts) + f";{concat}concat=n={len(ranges)}:v=1:a=1[cv][ca]"
    if vertical:
        ow, oh = 1080, 1920
        graph += f";[cv]crop=ih*9/16:ih,scale={ow}:{oh}[fv]"
    else:
        ow, oh = (w, h) if h <= 1080 else (1920, 1080)
        graph += f";[cv]scale={ow}:{oh}[fv]"
    write_ass(ass_file, subs, ow, oh, vertical, title)
    graph += f";[fv]ass={ass_file}[ov];[ca]loudnorm=I=-14:TP=-1.5:LRA=11[oa]"
    run(["ffmpeg", "-nostdin", "-y", "-loglevel", "error", "-stats", "-i", video, "-filter_complex", graph,
         "-map", "[ov]", "-map", "[oa]", "-c:v", "libx264", "-preset", "medium", "-crf", "20",
         "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", out_file])


def render(args):
    out = Path(args.out)
    words = normalize([w for s in json.loads((out / "transcript.json").read_text()) for w in s["words"]])
    cut = json.loads((out / "cutlist.json").read_text())
    fixes, gap = cut.get("fixes", {}), cut.get("max_gap", 0.6)

    jobs = [("long", cut["keep"], False, None)]
    if not args.long_only:
        jobs += [(f"short-{s['name']}", s["keep"], True, s.get("title")) for s in cut.get("shorts", [])]

    for name, keep, vertical, title in jobs:
        ranges = speech_ranges(words, keep, gap)
        subs = captions(words, ranges, fixes, 12 if vertical else 18)
        write_srt(out / f"{name}.srt", subs)
        dur = sum(e - s for s, e in ranges)
        print(f"\n▶ {name}: {len(ranges)} 段，剪完 {dur:.0f} 秒", file=sys.stderr)
        render_one(args.video, ranges, subs, out / f"{name}.mp4", out / f"{name}.ass", vertical, title)
    print(f"\n完成，輸出在 {out}/", file=sys.stderr)


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sp = p.add_subparsers(dest="cmd", required=True)
    t = sp.add_parser("transcribe")
    t.add_argument("video")
    t.add_argument("--out", required=True)
    t.add_argument("--model", default="small", help="small（快）／medium／large-v3（準，慢）")
    t.set_defaults(fn=transcribe)
    r = sp.add_parser("render")
    r.add_argument("video")
    r.add_argument("--out", required=True)
    r.add_argument("--long-only", action="store_true")
    r.set_defaults(fn=render)
    a = p.parse_args()
    a.fn(a)


if __name__ == "__main__":
    main()
