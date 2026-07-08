# 小花貓咪叫 ciaohuamiaumichiao

張正杰（Kimi Chang）的個人品牌網站。導演、策展人，2026 年起以「一個導演＋AI 協作系統」的方式，同時交付影像、節目、直播、網站四條線。

正式站：https://ciaohuamiaumichiao-web.vercel.app

## 技術

Next.js 16（App Router）＋ React 19 ＋ Tailwind CSS v4 ＋ framer-motion。文章放在 `content/writing/*.md`，以 frontmatter（title / date / excerpt / tags / draft）管理，build 時靜態產生。

## 開發

```bash
npm install
npm run dev
```

## 部署

push 到 `main` 後由 Vercel 自動 build 部署。
