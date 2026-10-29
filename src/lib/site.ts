/* 全站共用的網址、人物與法人資料（metadata、JSON-LD、llms.txt 都從這裡讀） */

export const BASE_URL = "https://ciaohua.genesis131.com";
export const SITE_NAME = "小花貓咪叫 ciaohuamiaumichiao";
export const OG_IMAGE = {
  url: `${BASE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "小花貓咪叫 ciaohuamiaumichiao — 張正杰｜導演",
};

export const PERSON_ID = `${BASE_URL}/#person`;
export const WEBSITE_ID = `${BASE_URL}/#website`;
export const GENESIS_ID = `${BASE_URL}/#genesis131`;
export const CHINGKUANG_ID = `${BASE_URL}/#chingkuang`;

export const SAME_AS = [
  "https://www.instagram.com/ciaohuamiaumichiao/",
  "https://www.threads.net/@ciaohuamiaumichiao",
  "https://www.youtube.com/@ciaohuamiaumichiao",
  "https://line.me/R/ti/p/@097eutou",
];

export const personNode = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "張正杰",
  alternateName: ["Kimi Chang", "Cheng-Chieh Chang", "小花", "小花貓咪叫", "ciaohuamiaumichiao"],
  url: BASE_URL,
  email: "mailto:ciaohuamiaumichiao@gmail.com",
  jobTitle: "導演",
  description:
    "台灣影像導演、策展人。拍了十五年，做紀錄片、音樂 MV、Video Podcast 節目與多平台直播，也陪教會、學校與公益團體建立自己的影像團隊。",
  nationality: { "@type": "Country", name: "Taiwan" },
  homeLocation: { "@type": "Place", name: "台北" },
  worksFor: [{ "@id": GENESIS_ID }, { "@id": CHINGKUANG_ID }],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "世新大學 廣播電視電影學系 電影組",
    },
    { "@type": "EducationalOrganization", name: "靈糧生命培訓學院" },
  ],
  knowsAbout: [
    "紀錄片導演",
    "音樂 MV 導演",
    "Video Podcast 節目製作",
    "多平台直播與轉播統籌",
    "策展",
    "影像團隊培訓",
    "教會影像媒體",
    "剪輯工作流程",
    "短影音策略",
  ],
  sameAs: SAME_AS,
};

export const orgNodes = [
  {
    "@type": "Organization",
    "@id": GENESIS_ID,
    name: "甚好創意有限公司",
    alternateName: "GENESIS131",
    founder: { "@id": PERSON_ID },
  },
  {
    "@type": "Organization",
    "@id": CHINGKUANG_ID,
    name: "擎光媒體工作室",
    founder: { "@id": PERSON_ID },
  },
];

export const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: BASE_URL,
  name: SITE_NAME,
  alternateName: ["小花貓咪叫", "張正杰 Kimi Chang"],
  inLanguage: "zh-Hant-TW",
  publisher: { "@id": PERSON_ID },
};
