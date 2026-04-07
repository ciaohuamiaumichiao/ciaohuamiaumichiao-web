import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const BASE_URL = "https://ciaohuamiaumichiao-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "小花貓咪叫 ciaohuamiaumichiao — 張正杰｜導演・策展人",
    template: "%s | 小花貓咪叫 ciaohuamiaumichiao",
  },
  description:
    "張正杰 Kimi Chang——影像導演、策展人。15 年以上影像製作經驗，30+ 音樂 MV，擎光媒體工作室、甚好創意有限公司。提供影像製作、影像與藝術顧問、創意數位建置服務。",
  keywords: [
    "張正杰",
    "Kimi Chang",
    "Cheng Chieh Chang",
    "小花貓咪叫",
    "ciaohuamiaumichiao",
    "導演",
    "策展人",
    "影像製作",
    "音樂MV",
    "影像顧問",
    "藝術顧問",
    "創意數位建置",
    "擎光媒體工作室",
    "甚好創意",
    "短影音顧問",
    "短影音策略",
    "社群經營顧問",
    "Reels 顧問",
    "影像團隊培訓",
    "Backstage is a WORLD",
    "幕後人聚場",
  ],
  authors: [{ name: "張正杰 Kimi Chang" }],
  creator: "張正杰",
  publisher: "小花貓咪叫 ciaohuamiaumichiao",
  openGraph: {
    title: "小花貓咪叫 ciaohuamiaumichiao — 張正杰｜導演・策展人",
    description:
      "影像導演、策展人。15 年以上影像製作經驗，30+ 音樂 MV。影像製作、影像與藝術顧問、創意數位建置服務。",
    url: BASE_URL,
    siteName: "小花貓咪叫 ciaohuamiaumichiao",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "小花貓咪叫 ciaohuamiaumichiao — 張正杰｜導演・策展人",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "小花貓咪叫 ciaohuamiaumichiao — 張正杰",
    description:
      "影像導演、策展人。影像製作、影像與藝術顧問、創意數位建置服務。",
    images: [`${BASE_URL}/opengraph-image`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "arts & entertainment",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "小花貓咪叫 ciaohuamiaumichiao",
      description: "張正杰——影像導演、策展人、創意數位建置",
      inLanguage: "zh-TW",
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "張正杰",
      alternateName: ["Kimi Chang", "Cheng Chieh Chang", "小花貓咪叫"],
      url: BASE_URL,
      jobTitle: ["導演", "策展人"],
      worksFor: [
        {
          "@type": "Organization",
          name: "擎光媒體工作室",
        },
        {
          "@type": "Organization",
          name: "甚好創意有限公司",
        },
      ],
      knowsAbout: [
        "影像製作",
        "音樂MV導演",
        "策展",
        "影像與藝術顧問",
        "創意數位建置",
      ],
      sameAs: [
        "https://www.instagram.com/ciaohuamiaumichiao/",
        "https://www.youtube.com/@ciaohuamiaumichiao",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "小花貓咪叫 ciaohuamiaumichiao",
      provider: { "@id": `${BASE_URL}/#person` },
      url: BASE_URL,
      description:
        "影像製作、影像與藝術顧問、創意數位建置服務",
      areaServed: {
        "@type": "Country",
        name: "Taiwan",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "服務項目",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "影像製作",
              description:
                "音樂MV、廣告、紀錄片、演唱會紀錄影像製作",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "影像與藝術顧問",
              description:
                "影像團隊建立與培訓、短影音內容策略、社群經營顧問、藝術策展顧問、品牌視覺策略",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "創意數位建置",
              description:
                "品牌網站建置、影音硬體整合、數位系統規劃",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "首頁",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "關於",
          item: `${BASE_URL}/#about`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "服務項目",
          item: `${BASE_URL}/#services`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "作品影像",
          item: `${BASE_URL}/#showreel`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "經歷與作品",
          item: `${BASE_URL}/#exhibitions`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "幕後人聚場",
          item: `${BASE_URL}/#backstage`,
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "聯絡",
          item: `${BASE_URL}/#contact`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "張正杰是誰？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "張正杰（Kimi Chang）是台灣影像導演與策展人，品牌名「小花貓咪叫 ciaohuamiaumichiao」。擁有 15 年以上影像製作經驗，執導超過 30 支音樂 MV，現為擎光媒體工作室及甚好創意有限公司負責人。",
          },
        },
        {
          "@type": "Question",
          name: "小花貓咪叫提供哪些服務？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "提供三大服務：(1) 影像製作——企業形象片、紀錄片、展覽紀錄、活動側拍，NT$50,000 起；(2) 影像與藝術顧問——策展規劃、影像團隊建立與培訓、短影音內容策略、社群經營顧問，初次諮詢 NT$5,000 + 執行費；(3) 創意數位建置——品牌網站、影音硬體規劃與系統整合，NT$60,000 起。",
          },
        },
        {
          "@type": "Question",
          name: "如何聯繫張正杰？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "可透過 LINE 官方帳號 @097eutou 聯繫，或 Email 至 ciaohuamiaumichiao@gmail.com。也可追蹤 Instagram @ciaohuamiaumichiao。",
          },
        },
        {
          "@type": "Question",
          name: "什麼是 the Backstage 幕後人聚場？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "the Backstage 幕後人聚場是由張正杰發起的創意產業工作者社群，透過每週聚會、每月沙龍、雙月工作坊等節奏，連結幕後工作者，分享經驗與資源。",
          },
        },
        {
          "@type": "Question",
          name: "張正杰有哪些代表作品？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "代表作品包括：約書亞樂團 MV 30+ 支、Gateway Worship 聯名 MV、孟庭葦巡迴演唱會執行導演、馬偕紀念醫院 145 週年院慶形象影片、MOMO TV 球場第一排編導，以及 2026 年策展「Backstage is a WORLD」攝影展。",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* Prevent flash: set theme before render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme-preference");if(!t){var h=new Date().getHours();t=h>=6&&h<18?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
