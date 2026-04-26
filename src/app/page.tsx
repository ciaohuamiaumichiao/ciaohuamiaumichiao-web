import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Showreel } from "@/components/Showreel";
import { Exhibitions } from "@/components/Exhibitions";
import { Backstage } from "@/components/Backstage";
import { LatestWriting } from "@/components/LatestWriting";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
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
