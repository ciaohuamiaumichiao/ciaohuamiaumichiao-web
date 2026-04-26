# Email 訂閱設定指南（Buttondown）

選 Buttondown 的理由：
- 免費 100 訂閱以內
- 不用後端、不用 API key（embed 表單即可）
- UI 乾淨、沒廣告
- 個人寫作者導向，不像 Mailchimp 那麼擾民

## 設定步驟

### 1. 註冊
到 [buttondown.com](https://buttondown.com)，用 `ciaohuamiaumichiao@gmail.com` 註冊。

### 2. 選使用者名稱
建議用 `ciaohuamiaumichiao`（跟 IG 一致）。
這個名稱會出現在 embed 表單的 URL，要跟程式碼裡的設定一致。

### 3. 開啟 embed 訂閱
登入後 → Settings → Subscribers → 開啟 "Allow embedded subscription forms"。

### 4. 確認程式碼設定
打開 `src/components/EmailSubscribe.tsx`，確認這一行：

```ts
const BUTTONDOWN_USERNAME = "ciaohuamiaumichiao"; // ← 改成你的 Buttondown 帳號
```

如果你註冊的帳號不是 `ciaohuamiaumichiao`，把這個常數改成你的帳號。

### 5. 部署
```bash
git add . && git commit -m "feat: 上線 Email 訂閱" && git push
```

### 6. 測試
到 https://ciaohuamiaumichiao-web.vercel.app/writing 滑到底部，輸入測試 email，按訂閱。
應該會跳出 Buttondown 的確認視窗。

## 之後寫電子報

兩個方式：
1. **Buttondown 後台寫**：直接在 buttondown.com 寫 markdown，按發送。
2. **本機寫好再貼**：在 `content/_sources/newsletter/` 寫 markdown 草稿，複製貼到 Buttondown。

推薦方式 2 — 同一份內容可以同時放在 Obsidian 歸檔、貼到 Buttondown 寄信。

## 之後想換服務？

| 服務 | 適合誰 |
|------|--------|
| Buttondown | 一個人寫、訂閱 < 1000 |
| Substack | 想做付費訂閱、有社群 |
| Resend | 想完全自訂寄信流程（要自己寫程式） |
| ConvertKit / Beehiiv | 認真做 newsletter 生意 |

現在用 Buttondown，未來想換的時候可以匯出名單。
