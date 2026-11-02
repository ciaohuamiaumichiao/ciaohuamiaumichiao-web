import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { BASE_URL, PERSON_ID, WEBSITE_ID } from "@/lib/site";
import { CHECKED_DATE } from "./data";

const PAGE_URL = `${BASE_URL}/tools`;
const DESCRIPTION =
  "導演張正杰自己付費、真的拿去做案子的影像與 AI 工具實測，用了多少、花了多少、哪裡不好用都照寫。部分連結是聯盟連結，每一頁都會標清楚。";

export const metadata: Metadata = {
  title: { absolute: "工具實測：導演真的在用的影像與 AI 工具｜小花貓咪叫" },
  description: DESCRIPTION,
  keywords: ["影像工具推薦", "AI 影片工具", "導演工具", "Higgsfield", "工具實測"],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "工具實測：導演真的在用的影像與 AI 工具",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "zh_TW",
  },
  twitter: {
    card: "summary_large_image",
    title: "工具實測：導演真的在用的影像與 AI 工具",
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${PAGE_URL}#page`,
  url: PAGE_URL,
  name: "工具實測",
  description: DESCRIPTION,
  inLanguage: "zh-Hant-TW",
  isPartOf: { "@id": WEBSITE_ID },
  author: { "@id": PERSON_ID },
};

export default function ToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="px-6 pb-32 pt-40 lg:pt-48">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="font-mono text-[10px] tracking-[0.15em] text-accent">
              FIELD NOTES
              <span className="ml-4 uppercase text-muted">工具實測</span>
            </p>
            <h1 className="mt-8 max-w-3xl text-4xl leading-[1.25] tracking-tight lg:text-6xl lg:leading-[1.2]">
              我真的有在用的工具
            </h1>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.9] text-muted">
              這裡放我用過的工具，規則很簡單，要我自己花錢用過、拿去做過事情的才寫，有些連結我會拿到分潤，每一頁最上面都會講清楚，不好用的地方也照寫，這樣你看起來比較安心吧。
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Link
              href="/tools/higgsfield"
              className="group mt-16 block max-w-2xl border border-border/60 bg-surface p-7 transition-colors hover:border-accent/30"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-[10px] tracking-[0.15em] text-accent">AI 影像生成</span>
                <span className="font-mono text-[10px] text-muted">含聯盟連結｜{CHECKED_DATE}</span>
              </div>
              <h2 className="mt-5 text-2xl tracking-tight transition-colors group-hover:text-accent">Higgsfield</h2>
              <p className="mt-3 text-[14px] leading-[1.9] text-muted">
                13 天花掉 1,100 點的實測帳單，Kling、Seedance、GPT Image 2.5 怎麼選，哪裡值得，哪裡是在繳學費。
              </p>
              <p className="mt-5 text-sm tracking-wide text-accent">看實測 →</p>
            </Link>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
