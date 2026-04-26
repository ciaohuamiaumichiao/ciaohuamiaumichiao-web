# 2026-03-22 講座素材：讓理念被看見

**場合**：Backstage is a WORLD 展覽期間，Ivy 場地舉辦的講座
**時間**：2026/3/22 下午 4:00-5:00
**長度**：約 55 分鐘
**講者**：張正杰（小花貓咪叫）
**主題**：個人品牌、影像本質、AI 時代的脆弱與真實

## 檔案

| 檔案 | 說明 | 入 git |
|------|------|--------|
| `transcript.txt` | Whisper 逐字稿（純文字） | ✅ |
| `transcript.srt` | 帶時間軸字幕 | ✅ |
| `audio.mp3` | 16kHz 單聲道（從原 MOV 抽出） | ❌（gitignore） |
| 原始 MOV | 12.2GB，4K | 留在 `~/Downloads/IMG_8093.MOV` |

## 已產出文章

逐字稿經 humanly 規則編輯後切成三篇：

1. [我做完白內障手術，才發現以前的顏色都調錯了](../../writing/cataract-and-blind-spot.md)
2. [攝影不是技巧，是感受](../../writing/photography-is-feeling.md)
3. [在 AI 時代，你最有力的素材是你看不見的那些日子](../../writing/invisible-days.md)

## 轉錄方式

- 模型：whisper-cpp `large-v3-turbo`
- 語言：`-l zh`
- prompt：`以下是繁體中文演講逐字稿，內容關於影像導演、品牌敘事、創作者職涯、幕後工作。`
- 耗時：約 10 分鐘（M 系 Mac）
