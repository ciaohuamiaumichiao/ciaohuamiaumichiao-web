import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HiggsfieldContent } from "./HiggsfieldContent";
import { BASE_URL, PERSON_ID, WEBSITE_ID } from "@/lib/site";
import { PUBLISHED_ISO, faqs } from "../data";

const PAGE_URL = `${BASE_URL}/tools/higgsfield`;
const TITLE = "Higgsfield 評價與價格：導演 13 天花掉 1,100 點的實測";
const DESCRIPTION =
  "Higgsfield 值得訂嗎？導演張正杰公開自己的帳單，13 天用掉 1,100 點，Kling 3.0、Seedance、GPT Image 2.5 怎麼選、實際扣多少、哪裡不好用，方案價格和常見問題都整理在這裡。本頁含聯盟連結。";

export const metadata: Metadata = {
  title: { absolute: `${TITLE}｜小花貓咪叫` },
  description: DESCRIPTION,
  keywords: [
    "Higgsfield",
    "Higgsfield 評價",
    "Higgsfield 價格",
    "Higgsfield 教學",
    "Higgsfield 點數",
    "Higgsfield MCP",
    "Kling 3.0 首尾幀",
    "AI 影片生成",
    "AI 動態分鏡",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      url: PAGE_URL,
      mainEntityOfPage: PAGE_URL,
      image: `${PAGE_URL}/opengraph-image`,
      inLanguage: "zh-Hant-TW",
      datePublished: PUBLISHED_ISO,
      dateModified: PUBLISHED_ISO,
      isPartOf: { "@id": WEBSITE_ID },
      author: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
      about: {
        "@type": "SoftwareApplication",
        name: "Higgsfield",
        url: "https://higgsfield.ai",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首頁", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "工具實測", item: `${BASE_URL}/tools` },
        { "@type": "ListItem", position: 3, name: "Higgsfield", item: PAGE_URL },
      ],
    },
  ],
};

export default function HiggsfieldPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <HiggsfieldContent />
      <Footer />
    </>
  );
}
