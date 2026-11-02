/* 工具實測頁共用資料：聯盟連結只放這裡，之後換連結或加工具都從這裡改。
   數字來源是 Higgsfield 帳戶 transactions（2026-11-02 抓），價格來自官網定價頁同日內容。 */

export const HIGGSFIELD_URL = "https://higgsfield.ai?fpr=ciaohua";
export const HIGGSFIELD_PRICING_URL = "https://higgsfield.ai/pricing";
export const HIGGSFIELD_AFFILIATE_URL = "https://higgsfield.ai/affiliate";
export const CHECKED_DATE = "2026 年 11 月 2 日";
export const PUBLISHED_ISO = "2026-11-02";

export const stats = [
  { value: "1,100", unit: "點", label: "實際花掉的點數" },
  { value: "13", unit: "天", label: "10/20 到 11/1" },
  { value: "250", unit: "張", label: "生成的圖，大約" },
  { value: "44", unit: "段", label: "生成的影片" },
];

export const spend = [
  { name: "GPT Image 2.5", credits: 580, note: "240 張" },
  { name: "Kling 3.0", credits: 346, note: "36 段" },
  { name: "Soul ID", credits: 50, note: "2 次" },
  { name: "Seedance 2.5", credits: 35, note: "1 段" },
  { name: "Genjutsu", credits: 35, note: "1 段" },
  { name: "放大與擴圖", credits: 30, note: "15 次" },
  { name: "Nano Banana", credits: 21, note: "11 張" },
  { name: "Seedance 2.0 Mini", credits: 12, note: "6 段" },
];

export const cases = [
  {
    tag: "建築空拍",
    title: "替企業活動試做一鏡到底的飛行動畫",
    cost: "第一輪 70 點，第二輪 138 點",
    desc: "五張關鍵幀，再用 Kling 3.0 Pro 的首尾幀補動態，接起來 32 秒，從地球一路衝到建案前面。第二輪多花的點數，大部分是拿三個模型比同一段鏡頭，比完就知道之後該用哪一個了。",
  },
  {
    tag: "插畫",
    title: "幫一套插畫書找風格",
    cost: "三輪約 18 點",
    desc: "GPT Image 2.5 最穩，高規格輸出 2480×3312，印出來是夠用的。Nano Banana 有一張讓角色站在水面上，這個邏輯錯誤自己要看得出來才行啊。Recraft 的向量圖被誤判成 NSFW 直接失敗，還好點數有退回來。",
  },
  {
    tag: "紀錄片",
    title: "把老照片放大到 4K",
    cost: "一張 2 點",
    desc: "紀錄片裡有幾張年代久遠的照片，放大之後臉沒有被改掉，這對紀錄片來說是最重要的事。後來我貪心，想讓照片動起來，拿 Kling 試了一支，結果它把人的臉改了，那支就不用了，最後還是回去用慢慢往臉上推的老方法。",
  },
  {
    tag: "動畫",
    title: "水彩風動畫的便宜試片",
    cost: "4 秒 2 點",
    desc: "用 Seedance 2.0 Mini 開 480p、沒有聲音，先看節奏和質感對不對，水彩的紙感和角色造型都有留住，兩支 16 秒的試片總共 13.5 點。可是角色的嘴不會對台詞，動作快慢也沒辦法精準指定，配音和卡拍點的鏡頭都還是要回到後期處理。",
  },
];

export const models = [
  { job: "一鏡到底、建築環繞", model: "Kling 3.0 Pro 首尾幀", cost: "5 秒 8.75 點", note: "我的主力，同一棟建築下降環繞最好" },
  { job: "靜態關鍵幀、插畫", model: "GPT Image 2.5", cost: "一張 0.25 到 4.25 點", note: "最穩，規格差很多，價差也差很多" },
  { job: "跟著參考片學運鏡", model: "Seedance 2.5", cost: "720p 5 秒 35 點", note: "價錢是 Kling 的 4 倍，遮擋物反而比較假" },
  { job: "人物動作轉移", model: "Genjutsu", cost: "720p 35 點", note: "拿來學空拍不行，它連參考片的內容都一起搬過來" },
  { job: "便宜先看節奏", model: "Seedance 2.0 Mini", cost: "4 秒 2 點", note: "480p 沒聲音，當動態分鏡剛好" },
];

export const plans = [
  { name: "Starter", price: "US$19", credits: "270 點", frames: "沒有", commercial: "可以" },
  { name: "Plus", price: "US$47", credits: "1,200 點", frames: "有", commercial: "可以" },
  { name: "Ultra", price: "US$99", credits: "3,000 點", frames: "有", commercial: "可以" },
];

export const faqs = [
  {
    q: "Higgsfield 是什麼？",
    a: "一個把 Kling、Seedance、GPT Image、Nano Banana 這些影像模型放在同一個帳號裡的平台，用點數付費，另外還有自家的 Genjutsu 和 Soul。對我來說最方便的地方，是同一段鏡頭可以馬上換模型比較，不用每家都訂一次。",
  },
  {
    q: "Higgsfield 多少錢？",
    a: `我在${CHECKED_DATE}看到的官網定價，年繳換算每月是 Starter US$19、Plus US$47、Ultra US$99，稅另計。它的促銷變很快，下單前請以官網結帳畫面為準。`,
  },
  {
    q: "1,000 點大概可以用多久？",
    a: "看你怎麼用。我拿來跑案子加上大量比較測試，1,100 點 13 天就用完了。如果全部拿來做 Kling 3.0 Pro 五秒的鏡頭，以我實際扣的 8.75 點來算，大約是 114 段。",
  },
  {
    q: "Higgsfield 的點數會累積嗎？",
    a: "訂閱附的點數不會累積，官網寫的是每個週期結束就歸零，訂閱也會自動續約。不想續的話，記得在到期前自己去取消。",
  },
  {
    q: "Starter 方案夠用嗎？",
    a: "要做首尾幀就不夠，定價頁的功能表寫 Starter 沒有 Start & End Frame，Kling 3.0 的 1080p 也沒有。只是想生圖或做短短的試片的話，可以先從 Starter 開始。",
  },
  {
    q: "Higgsfield 免費版可以商用嗎？",
    a: "官網的功能比較表寫免費版不包含商業使用，付費方案才有。至於純生成的內容有沒有著作權、能不能把權利讓給客戶，那是另一個問題，接案之前請問過法務。",
  },
  {
    q: "可以用 Claude Code 或 MCP 操作 Higgsfield 嗎？",
    a: "可以，我平常就是這樣用的，一次丟一批關鍵幀、跑完下載回來很方便。只是官網有寫，方案裡的 Unlimited 和免費生成額度只能在 higgsfield.ai 網頁用，走 MCP 或 CLI 一律扣點，所以我的點數才會掉得這麼快。",
  },
  {
    q: "從你的連結訂閱，真的有折扣嗎？",
    a: "官方寫的是從聯盟連結登入的人，有最高 50% 的折扣，從登入開始算三小時內有效。最高不代表每個人都拿得到，實際幾折我沒辦法保證，請看結帳畫面上的金額。",
  },
  {
    q: "你推薦 Higgsfield 有拿錢嗎？",
    a: "有。從這頁的連結訂閱，我可以拿到分潤，官方寫的是最高 25%，最長 12 個月，退款的訂單不算。Higgsfield 沒有看過這篇，內容是我自己寫的。",
  },
];
