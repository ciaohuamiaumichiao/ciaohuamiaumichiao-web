# Newsletter 設定指南（Substack）

## 為什麼選 Substack

- 內建讀者來源（Substack 的 explore / network）
- 未來想做付費訂閱可以無痛切換
- Substack 的 app 跟 email 體驗都很好
- 寫作介面乾淨、不用裝外掛

## 設定步驟

### 1. 註冊
到 [substack.com](https://substack.com) 用 `ciaohuamiaumichiao@gmail.com` 註冊。

### 2. 開設 publication
建議使用：
- **Publication URL**：`ciaohuamiaumichiao.substack.com`（要跟程式碼裡一致）
- **名稱**：小花貓咪叫｜寫作（或你想要的）
- **副標**：影像導演張正杰的寫作筆記。一個月最多兩封信。
- **Logo / 頭像**：用網站同一張，保持一致

### 3. 確認程式碼設定
打開 `src/components/EmailSubscribe.tsx`，確認這一行：

```ts
const SUBSTACK_URL = "https://ciaohuamiaumichiao.substack.com/subscribe";
```

如果你用了不同的 publication URL，把這個改掉。

### 4. 部署
```bash
git add src/components/EmailSubscribe.tsx && git commit -m "chore: 更新 Substack URL" && git push
```

### 5. 測試
到 https://ciaohuamiaumichiao-web.vercel.app/writing 滑到底，按「訂閱電子報」，會跳到你的 Substack 訂閱頁。

## 寫第一封信（創刊號）

草稿在 `content/_sources/newsletter/2026-04-26_創刊號.md`。

步驟：
1. 登入 Substack 後台 → New post
2. 把 markdown 內容**複製貼上**到 Substack 編輯器（會自動轉成富文字）
3. 主旨用 markdown 第一行 `> 寄信主旨`
4. 預覽文字用第二行 `> 預覽文字`
5. 圖片要重新上傳（Substack 不吃外部圖片連結作為內嵌圖）
6. 第一次先**寄給自己**（Substack 後台 → Send test）確認排版
7. 確認後再正式發送

## 其他設定建議

- **About 頁面**：Substack 預設會有；填一段你的自介（可從網站 About 區塊複製）
- **Welcome email**：開啟，新訂閱者第一封信會收到歡迎信。建議內容：
  - 自我介紹一句話
  - 給他們三篇文章的連結（網站上的，不是 Substack 上的）
  - 說「下封信會在某時間」
- **Notes**（Substack 內的 micro-blogging）：可以把 Threads / IG 的短內容也轉貼，多一個曝光點

## 之後想換服務？

Substack 可以隨時匯出訂閱者名單（settings → export subscribers）。換到 Beehiiv / ConvertKit / Buttondown 都行。

## 整合進網站的進階做法（未來）

如果之後想要：
- 文章在自己網站發、訂閱者透過 Substack 收信 → 用 Substack 的 RSS import 功能
- 把 Substack 訂閱表單真正 embed 到網站 → 用 `<iframe src="https://ciaohuamiaumichiao.substack.com/embed">`；缺點是樣式不能客製、載入慢
- 雙向：Substack 寫信 + 網站也展示 → 把 Substack 的 RSS feed 拉進網站，再加一個 `/newsletter` 頁面

現階段（剛開始）建議：**外連 + 主力寫信寫在 Substack**，等寫到 10 篇以上再考慮整合。
