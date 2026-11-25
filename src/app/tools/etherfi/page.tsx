import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EtherfiContent } from "./EtherfiContent";
import { BASE_URL, PERSON_ID, WEBSITE_ID } from "@/lib/site";
import { ETHERFI_PUBLISHED_ISO, etherfiFaqs } from "../data";

const PAGE_URL = `${BASE_URL}/tools/etherfi`;
const TITLE = "ether.fi Cash 卡評價：台灣能辦嗎？導演半年刷 1,353 美元的帳單";
const DESCRIPTION =
  "ether.fi Cash 卡在台灣好用嗎？導演張正杰公開 5 月到 10 月的交易紀錄，刷 1,353 美元拿回 37.6 美元回饋、被拒絕 47 次的原因、台幣換匯加收多少、怎麼儲值、會員等級與常見問題都整理在這裡。本頁含推薦連結，不是投資建議。";

export const metadata: Metadata = {
  title: { absolute: `${TITLE}｜小花貓咪叫` },
  description: DESCRIPTION,
  keywords: [
    "ether.fi",
    "ether.fi Cash",
    "ether.fi 評價",
    "ether.fi 台灣",
    "ether.fi 推薦碼",
    "加密貨幣卡",
    "USDT 刷卡",
    "加密貨幣 信用卡 回饋",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    locale: "zh_TW",
    publishedTime: ETHERFI_PUBLISHED_ISO,
    modifiedTime: ETHERFI_PUBLISHED_ISO,
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
      datePublished: ETHERFI_PUBLISHED_ISO,
      dateModified: ETHERFI_PUBLISHED_ISO,
      isPartOf: { "@id": WEBSITE_ID },
      author: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
      about: {
        "@type": "Product",
        name: "ether.fi Cash",
        brand: { "@type": "Brand", name: "ether.fi" },
        url: "https://www.ether.fi/cash",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: etherfiFaqs.map((f) => ({
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
        { "@type": "ListItem", position: 3, name: "ether.fi Cash", item: PAGE_URL },
      ],
    },
  ],
};

export default function EtherfiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <EtherfiContent />
      <Footer />
    </>
  );
}
