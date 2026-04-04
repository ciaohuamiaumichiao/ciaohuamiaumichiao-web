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
  },
  twitter: {
    card: "summary_large_image",
    title: "小花貓咪叫 ciaohuamiaumichiao — 張正杰",
    description:
      "影像導演、策展人。影像製作、影像與藝術顧問、創意數位建置服務。",
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
                "影像團隊建立、成長陪跑、藝術策展顧問",
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
