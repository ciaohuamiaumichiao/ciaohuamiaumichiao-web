import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompanionContent } from "./CompanionContent";
import { BASE_URL, PERSON_ID, WEBSITE_ID } from "@/lib/site";

const PAGE_URL = `${BASE_URL}/companion`;
const DESCRIPTION =
  "張正杰的影像陪伴計畫：陪教會、偏鄉學校、公益團體和幕後的人，把自己的故事拍出來。遠鄉閃閃、十多間教會影像團隊、KUA 與台北基督書院課堂、《只為遇見你》都收在這裡，未來想慢慢走成公益協會。";

export const metadata: Metadata = {
  title: { absolute: "影像陪伴計畫：陪你把自己的故事拍出來｜小花貓咪叫 張正杰" },
  description: DESCRIPTION,
  keywords: ["影像陪伴", "公益影像", "教會影像團隊", "偏鄉攝影教育", "紀錄片", "影像教育", "張正杰"],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "影像陪伴計畫：陪你把自己的故事拍出來",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "zh_TW",
  },
  twitter: {
    card: "summary_large_image",
    title: "影像陪伴計畫：陪你把自己的故事拍出來",
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#page`,
  url: PAGE_URL,
  name: "影像陪伴計畫",
  description: DESCRIPTION,
  inLanguage: "zh-Hant-TW",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": PERSON_ID },
  author: { "@id": PERSON_ID },
};

export default function CompanionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <CompanionContent />
      <Footer />
    </>
  );
}
