# 導演的 Claude Code 起始包（v0.2）

> **v0.2 更新**：`/拆案` 升級——支援逐字稿格式、多案分析、`--context` 歷史脈絡、報價估算。詳見 [CHANGELOG](./CHANGELOG.md)。



> 給影像工作者的 AI 工作環境配置。打開就能用，不用再寫 prompt。

---

## 這是什麼

這是 **「ciaohuamiaumichiao 導演 x AI 起始包」** 的 v0.1 雛形。

如果你是影像導演 / MV 攝影師 / 自由 filmmaker，每天要：
- 拆客戶 brief、寫 treatment、寫提案
- 想腳本骨架、寫 shot list
- 拍完寫案例文、發社群
- 跟客戶開會前準備問句
- 給學生 / 助理影像反饋

這個 starter kit 會給你一個**「副導演式的 Claude」**，幫你做這些粗活，但不會搶你的判斷。

不是教你 AI、不是教你 prompt 工程。是把一個經驗豐富的導演的工作方式，變成你打開 Claude Code 就能用的 commands。

---

## 安裝（5 分鐘）

### 前置
1. 已安裝 [Claude Code](https://claude.com/claude-code)
2. 已登入 Anthropic 帳號（會用到 API credits）

### 步驟
1. **clone 或下載** 這個 repo / zip
2. 把 `.claude/` 資料夾跟 `CLAUDE.md` 放到你的工作專案根目錄
3. 在那個目錄打開 Claude Code（`claude` 指令）
4. 試打 `/拆案` ——應該會看到 command 出現

### 第一次使用
打開 Claude Code 之後，貼一段你最近收到的客戶 brief，輸入：

```
/拆案

[貼上客戶訊息或檔案路徑或 URL]
```

Claude 會幫你產出 8 段拆解。

#### 進階用法（v0.2）

**指定歷史脈絡：**
```
/拆案 --context "之前博社案我中途被換掉" /path/to/meeting.srt
```

**處理多支影片的會議：**
直接餵會議逐字稿，命令會自動切換成多案結構。

**處理會議錄音：**
先用 whisper 轉成 srt（已內建在你工作流），再餵 srt 路徑進來：
```
/拆案 ~/Library/.../會議逐字稿.srt
```

---

## 包含的 commands（v0.1）

| 指令 | 用途 |
|---|---|
| `/拆案` | 客戶 brief / Email / 對話 → 結構化導演視角分析（8 段）|
| `/treatment`（即將）| brief → treatment 文件骨架 |
| `/pitch`（即將）| 提案大綱 + 賣點包裝 |
| `/腳本初稿`（即將）| MV / 廣告 / 紀錄片不同類型骨架 |
| `/shotlist`（即將）| 拍攝清單 |
| `/案例文`（即將）| 拍完寫對外案例文 |
| `/客戶問句`（即將）| 開會前提問清單 |
| `/影像反饋`（即將）| 給學生 / 助理的影像評析 |

v0.1 內含 `/拆案` 一個完整 command 作為示範。其他 commands 在 Pro 版陸續釋出。

---

## 包含的 sub-agents（v0.1）

| Agent | 用途 |
|---|---|
| `現場決策顧問`（即將）| 拍攝現場進退兩難時諮詢 |
| `剪接思考夥伴`（即將）| 剪接室卡關時的對話 |
| `品牌敘事副手`（即將）| 品牌客戶的 pre-work |
| `影像審美教練`（即將）| 看片 + 給意見 |

---

## 包含的 skills（v0.1）

- `humanly`：去 AI 味、繁中創作者語氣（與 [@ciaohuamiaumichiao](https://ciaohuamiaumichiao-web.vercel.app) 寫作風格一致）

---

## 為什麼這樣設計

### 為什麼不用 Notion / Airtable / 其他工具

因為**那些工具是「整理」用的**，但導演的工作是**判斷 + 創作**。Claude Code 是 conversation-driven，跟導演現場決策的思路最吻合。

### 為什麼這些 commands 是中文

導演講的是中文。客戶 brief 是中文。產出的 treatment / 案例文也要中文。
英文 prompt + 中文輸出會讓 Claude 切換成本變高。

### 為什麼 commands 都很「主觀」

這些 commands 不會給你「客觀中立平衡」的答案。會給你「**有 15 年經驗的導演會建議的方向**」。

如果你想要「絕對中性、絕對不會錯」的答案，免費的 ChatGPT 都能給你。
這個 starter kit 的價值在「**有方向感**」。

---

## 為什麼是 v0.1

這個版本是給 **早期使用者 / 朋友 / beta 測試者**。
- 只有 1 個完整 command（其他在路上）
- 沒有完整 agents / skills
- 沒有 walkthrough 影片
- 但**核心架構已經穩定**，後續是內容填充

我會根據早期使用者的回饋，在 v1.0 公開銷售前持續迭代。

---

## 如何反饋 / 提問

- 直接 email 給 ciaohuamiaumichiao@gmail.com
- 或在 GitHub issues 開 issue（如果你在用 repo 版）

---

## 授權

v0.1 beta 版：**個人使用免費**。商業使用、改作、再發布需聯絡作者。
v1.0 公開版會有正式授權條款。

---

## 作者

[張正杰｜小花貓咪叫](https://ciaohuamiaumichiao-web.vercel.app)
15 年影像導演 / 30+ MV / 用 Claude Code 工作
