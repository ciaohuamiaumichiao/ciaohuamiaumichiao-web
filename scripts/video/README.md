# 剪輯流水線：小花只錄，Claude 剪

小花不剪輯。這個資料夾讓 Claude 在雲端環境裡完成長片與 Shorts 的剪接。

## 小花要做的事（每支片 3 步）

1. **錄**：手機或相機，1080p 就夠。單機正面、一盞燈、收音靠近嘴巴。
   - 講錯了**停兩秒，從那句開頭重講**，不用喊卡、不用重來整段。我會從逐字稿認出重講的地方剪掉。
   - 想做 Shorts 的段落，錄的時候可以說一句「這段可以切短影音」，我會找到它。
2. **傳**：上傳到 Google Drive，分享設定改成「知道連結的任何人都能檢視」，把連結貼給 Claude。
3. **看**：我交回長片與 Shorts，你只回「OK」或一句修改（例如「第二支 Shorts 標題換掉」）。

## Claude 做的事

```bash
pip install -r scripts/video/requirements.txt        # 每次新環境裝一次
python3 scripts/video/edit.py transcribe raw.mp4 --out work/ep01 [--model medium]
#   → work/ep01/transcript.txt：一句一行、帶時間碼
# Claude 讀逐字稿，寫 work/ep01/cutlist.json：
#   保留段落（丟掉講錯重講）、錯字修正、Shorts 切點與標題
python3 scripts/video/edit.py render raw.mp4 --out work/ep01
#   → long.mp4（16:9）＋ short-*.mp4（9:16）＋ 各自的 .srt
```

render 會自動：
- 依 cutlist 剪接，並把字與字之間超過 `max_gap` 秒的停頓剪掉（jump cut）
- 依剪完的時間軸重算字幕，燒進畫面（長片底部；Shorts 上方標題、中下字幕）
- Shorts 從中間裁成 9:16
- 音量標準化到 -14 LUFS（YouTube 標準）
- 也輸出 .srt，上傳 YouTube 時可以當 CC 字幕

## 已知限制

- 第一次執行會從 HuggingFace 下載語音模型（small 約 500MB）。正式片建議 `--model medium` 或 `large-v3`，比較準但比較慢。
- 字型預設找 `Noto Sans TC`，沒有就用文泉驛正黑。可以用環境變數 `EDIT_FONT` 換字型。
- b-roll、配樂、片頭片尾還沒自動化，之後依需要加。
- 雲端環境是暫時的：素材和成品不要只放在這裡，剪完就交回給你。
- 影片不放進 git（`work/` 已在 .gitignore）。
