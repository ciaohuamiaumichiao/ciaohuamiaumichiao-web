import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Now } from "@/components/Now";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";
import { Showreel } from "@/components/Showreel";
import { Exhibitions } from "@/components/Exhibitions";
import { Backstage } from "@/components/Backstage";
import { LatestWriting } from "@/components/LatestWriting";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { homeJsonLd } from "./home-jsonld";

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
        <Backstage />
        <LatestWriting />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
