import { BASE_URL, PERSON_ID, WEBSITE_ID } from "@/lib/site";

/* 首頁專屬的結構化資料：個人檔案頁、服務、代表作、FAQ。
   內容要跟頁面上看得到的文字一致，改作品或服務時兩邊一起改。 */

const director = { "@id": PERSON_ID };

const works = [
  {
    "@type": "Movie",
    name: "只為遇見你",
    alternateName: "夢想之家 20 週年徒步紀錄片",
    genre: "Documentary",
    director,
    duration: "PT60M",
    dateCreated: "2026",
    inLanguage: "zh-Hant",
    description:
      "夢想之家教育基金會 20 週年，從台北西門走到台東，16 天、348 公里，全程跟拍。31.5 小時素材剪成 60 分鐘紀錄片，2026 年 11 月 13 日首映。",
    funder: { "@type": "Organization", name: "夢想之家教育基金會" },
    url: "https://dreams.org.tw/%E5%A4%A2%E6%83%B3%E6%B6%88%E6%81%AF/20%E9%80%B1%E5%B9%B4%E5%8F%AA%E7%82%BA%E9%81%87%E8%A6%8B%E4%BD%A0/",
  },
  {
    "@type": "PodcastSeries",
    name: "Mission On Air 宣教事",
    description:
      "靈糧教牧宣教神學院的 Video Podcast，把宣教拉回日常。第二季 12 集 2026 年 10 月 26 日開播，每週一更新。",
    url: "https://missionair.genesis131.com",
    inLanguage: "zh-Hant",
    contributor: director,
  },
  {
    "@type": "CreativeWorkSeries",
    name: "放學後 SHOW",
    description: "給青少年、也給陪他們長大的大人看的談話節目，2026 年 7 月開播，每週四更新。",
    url: "https://afterschool.genesis131.com",
    inLanguage: "zh-Hant",
    contributor: director,
  },
  {
    "@type": "CreativeWorkSeries",
    name: "跑者肌地 跑步路線系列",
    description: "跑步訓練頻道長期合作的路線長片：民權大橋、淡江大橋、大鹿林道，含中英日字幕與 Reels 攻略系列。",
    url: "https://www.youtube.com/@RST321go",
    contributor: director,
  },
  {
    "@type": "Book",
    name: "我的攝影不像樣",
    description: "遠鄉閃閃偏鄉攝影教育計畫第五年攝影合輯，13 所學校影像採訪，208 頁。",
    numberOfPages: 208,
    datePublished: "2026",
    contributor: director,
  },
  {
    "@type": "ExhibitionEvent",
    name: "Backstage is a WORLD",
    description: "張正杰策展的攝影展，把二十年幕後生涯的攝影搬到台前。",
    startDate: "2026-03-03",
    endDate: "2026-03-30",
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "Place", name: "遠企購物中心", address: "台北市大安區" },
    organizer: director,
    url: "https://backstageworld.vercel.app",
  },
];

const faqs: [string, string][] = [
  [
    "張正杰是誰？",
    "張正杰（Kimi Chang），大家叫他小花，品牌名「小花貓咪叫 ciaohuamiaumichiao」。台灣影像導演、策展人，拍了十五年，執導超過 30 支音樂 MV，也做紀錄片、Video Podcast 節目與多平台直播。在台北靈糧堂 Holywood 影視團隊服事超過二十年。",
  ],
  [
    "張正杰 2026 年做了哪些作品？",
    "2026 年執導夢想之家教育基金會 20 週年徒步紀錄片《只為遇見你》（60 分鐘，11 月 13 日首映）；製作 Video Podcast「Mission On Air 宣教事」（第二季 10 月 26 日開播）與青少年談話節目「放學後 SHOW」；統籌桃園、新竹、台中、台南、澎湖五場城市禱告會多平台轉播，五場都沒有中斷；也做跑者肌地跑步路線系列、遠鄉閃閃 208 頁攝影合輯，3 月策展「Backstage is a WORLD」攝影展。",
  ],
  [
    "可以找張正杰做哪些案子？",
    "影像製作（紀錄片、企業形象片、展覽紀錄，NT$50,000 起）、節目製作（Video Podcast 與系列節目，以季報價）、直播與轉播統籌（三機 EFP、多平台同步直播，單場 NT$60,000 起）、創意數位建置（節目官網、管理系統，NT$60,000 起）、影像與藝術顧問（初次諮詢 NT$5,000），以及教會服事團隊的排班陪跑（NT$30,000 起）。",
  ],
  [
    "張正杰可以做直播或轉播嗎？",
    "可以。三機 EFP 現場切換、YouTube 與 Facebook 等最多六個平台同步直播，加上備援網路與自己寫的即時訊號監控系統。2026 年轉播五場城市禱告會，五場都沒有中斷。",
  ],
  [
    "張正杰有教會媒體和敬拜特會的經驗嗎？",
    "有。在台北靈糧堂 Holywood 影視團隊服事超過二十年並擔任團長，執導約書亞樂團 30 多支 MV 與 Gateway Worship 聯名 MV，做過國度豐收協會的特會媒體，也陪台北靈糧堂、台北真道教會、高雄靈糧堂、the Hope 等十多間教會建立影像團隊。",
  ],
  [
    "合作是用哪一家公司開發票？",
    "依案子性質由張正杰創立的甚好創意有限公司或擎光媒體工作室承接，報價時會說明。",
  ],
  [
    "怎麼聯絡張正杰？",
    "LINE 官方帳號 @097eutou，Email ciaohuamiaumichiao@gmail.com，或 Instagram @ciaohuamiaumichiao。",
  ],
];

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${BASE_URL}/#profile`,
      url: BASE_URL,
      name: "張正杰 Kimi Chang｜導演・紀錄片・節目製作",
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: director,
      inLanguage: "zh-Hant-TW",
      dateModified: new Date().toISOString(),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "小花貓咪叫 影像與節目製作",
      url: `${BASE_URL}/#services`,
      founder: director,
      areaServed: { "@type": "Country", name: "Taiwan" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "服務項目",
        itemListElement: [
          ["影像製作", "紀錄片、企業形象片、展覽紀錄、活動側拍"],
          ["節目製作", "Video Podcast 與系列節目：定位、季度企劃、錄影、後製、多平台上架與節目官網"],
          ["直播與轉播統籌", "三機 EFP 現場切換、多平台同步直播、備援網路與即時訊號監控"],
          ["創意數位建置", "節目與品牌官網、管理系統、影音硬體與數位工作流程"],
          ["影像與藝術顧問", "影像團隊組建與培訓、短影音策略、展覽策劃"],
          ["排班陪跑", "教會與服事團隊排班系統，一日工作坊加八週陪跑"],
        ].map(([name, description]) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description, provider: director },
        })),
      },
    },
    {
      "@type": "ItemList",
      "@id": `${BASE_URL}/#work`,
      name: "張正杰 2026 代表作",
      itemListElement: works.map((item, i) => ({ "@type": "ListItem", position: i + 1, item })),
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: faqs.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};
