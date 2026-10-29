import type { Metadata } from "next";
import "./globals.css";
import { BASE_URL, SITE_NAME, personNode, orgNodes, websiteNode } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "張正杰 Kimi Chang｜導演・紀錄片・節目製作｜小花貓咪叫",
    template: "%s｜小花貓咪叫 張正杰",
  },
  description:
    "張正杰（Kimi Chang），台灣影像導演、策展人。拍了十五年，做紀錄片、音樂 MV、Video Podcast 節目與多平台直播。2026 年執導夢想之家 20 週年徒步紀錄片《只為遇見你》，製作 Mission On Air 宣教事、放學後 SHOW。",
  applicationName: SITE_NAME,
  authors: [{ name: "張正杰 Kimi Chang", url: BASE_URL }],
  creator: "張正杰",
  publisher: "張正杰",
  openGraph: {
    title: "張正杰 Kimi Chang｜導演・紀錄片・節目製作",
    description:
      "台灣影像導演、策展人。紀錄片、音樂 MV、Video Podcast 節目、多平台直播。",
    url: BASE_URL,
    siteName: SITE_NAME,
    locale: "zh_TW",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": `${BASE_URL}/rss.xml` },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "arts & entertainment",
};

/* 全站共用：網站、人物、兩家法人。首頁專屬的 FAQ 與作品在 page.tsx */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [websiteNode, personNode, ...orgNodes],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
