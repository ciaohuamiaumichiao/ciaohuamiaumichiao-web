import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Now } from "@/components/Now";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";
import { Showreel } from "@/components/Showreel";
import { Exhibitions } from "@/components/Exhibitions";
import { OnlineExhibition } from "@/components/OnlineExhibition";
import { Backstage } from "@/components/Backstage";
import { LatestWriting } from "@/components/LatestWriting";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { homeJsonLd } from "./home-jsonld";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site";

/* 中英互指：首頁有英文版 /en。alternates 會整包覆蓋 layout 的設定，所以 canonical 和 RSS 也要一起寫 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { "zh-Hant": "/", en: "/en", "x-default": "/" },
    types: { "application/rss+xml": `${BASE_URL}/rss.xml` },
  },
};

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Now />
        <SelectedWork />
        <Services />
        <Showreel />
        <Exhibitions />
        <OnlineExhibition />
        <Backstage />
        <LatestWriting />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
