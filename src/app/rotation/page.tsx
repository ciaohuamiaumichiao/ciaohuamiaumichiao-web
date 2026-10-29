import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RotationContent } from "./RotationContent";
import { FAQS, SERVICE_DESCRIPTION } from "./data";

const BASE_URL = "https://ciaohuamiaumichiao-web.vercel.app";
const PAGE_URL = `${BASE_URL}/rotation`;

export const metadata: Metadata = {
  title: "排班陪跑 — 陪你的教會把服事排班理順｜小花貓咪叫",
  description:
    "陪你的團隊把服事排班理順。一日工作坊加八週陪跑，系統留給你們，之後沒有月費。從 HOLYWOOD 影視團隊每週在用的系統長出來。NT$30,000 起。",
  keywords: [
    "教會排班系統",
    "服事排班",
    "敬拜團排班",
    "志工排班",
    "教會媒體團隊",
    "LINE 排班通知",
    "排班陪跑",
    "教會數位轉型",
    "排班工作坊",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "排班陪跑 — 陪你的教會把服事排班理順",
    description:
      "一日工作坊加八週陪跑，排班系統留給你們，之後沒有月費。從 HOLYWOOD 影視團隊每週在用的系統長出來。",
    url: PAGE_URL,
    type: "website",
    locale: "zh_TW",
  },
  twitter: {
    card: "summary_large_image",
    title: "排班陪跑 — 陪你的教會把服事排班理順｜小花貓咪叫",
    description: "一日工作坊加八週陪跑，排班系統留給你們，之後沒有月費。",
  },
};

/* 結構化資料：Service + FAQPage，給搜尋引擎與 AI 引擎引用 */
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "排班陪跑 — 服事排班系統陪伴建置",
  serviceType: "排班系統建置陪跑（Workshop + 教練陪跑）",
  description: SERVICE_DESCRIPTION,
  url: PAGE_URL,
  areaServed: { "@type": "Country", name: "Taiwan" },
  availableLanguage: "zh-TW",
  provider: {
    "@type": "Person",
    name: "張正杰",
    alternateName: "小花貓咪叫 ciaohuamiaumichiao",
    url: BASE_URL,
    sameAs: [
      "https://www.instagram.com/ciaohuamiaumichiao/",
      "https://www.youtube.com/@ciaohuamiaumichiao",
    ],
  },
  audience: {
    "@type": "Audience",
    audienceType: "教會媒體團隊、敬拜團、志工與活動人力團隊",
  },
  offers: {
    "@type": "Offer",
    price: "30000",
    priceCurrency: "TWD",
    description: "一日工作坊＋八週陪跑，依團隊規模 NT$30,000 起；系統交還團隊後不收月費。",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RotationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <RotationContent />
      <Footer />
    </>
  );
}
