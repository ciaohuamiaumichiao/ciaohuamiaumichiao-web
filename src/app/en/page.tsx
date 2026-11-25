import type { Metadata } from "next";
import { EnHeader } from "@/components/en/EnHeader";
import {
  EnHero,
  EnAbout,
  EnCapabilities,
  EnRemote,
  EnShowreel,
  EnFaq,
  EnContact,
  EnFooter,
} from "@/components/en/EnSections";
import { SelectedWork, type Work } from "@/components/SelectedWork";
import { EnWriting } from "@/components/en/EnWriting";
import { BASE_URL, PERSON_ID, SAME_AS } from "@/lib/site";
import { EMAIL, LINKEDIN, REEL_ID, enFaq } from "@/components/en/faq";

/* 英文版首頁：給美國公司的招募人員看。
   根 layout 是 zh-Hant，這頁用外層 lang="en" ＋ hreflang 互指標示語言（不另開 root layout，避免動 next.config）。 */

const title = "Kimi Chang: Remote Video Producer & Creative Director";
const description =
  "Taipei-based video producer and creative director: documentaries, brand films, video podcasts and live streaming, with AI-assisted post. Open to remote roles.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "Kimi Chang",
    "video producer",
    "creative director",
    "remote video editor",
    "documentary director Taiwan",
    "live streaming producer",
    "AI-assisted post-production",
    "Final Cut Pro editor",
    "Taipei filmmaker",
  ],
  authors: [{ name: "Kimi Chang", url: `${BASE_URL}/en` }],
  alternates: {
    canonical: "/en",
    languages: { "zh-Hant": "/", en: "/en", "x-default": "/" },
    types: { "application/rss+xml": `${BASE_URL}/en/rss.xml` },
  },
  openGraph: {
    title,
    description,
    url: `${BASE_URL}/en`,
    locale: "en_US",
    alternateLocale: ["zh_TW"],
    type: "profile",
  },
};

export const revalidate = 3600;

const works: Work[] = [
  {
    index: "E01",
    year: "2026",
    category: "Documentary",
    title: "只為遇見你 · House of Dream at 20",
    role: "Director · House of Dream",
    description:
      "To mark the foundation's 20th year, its pastor and team walked from Taipei to Taitung: 16 days, 348 km, stopping at every site they run. We walked the whole route with them. Nine cameras brought back 31.5 hours and 2,000+ clips, cut into a 60-minute film about how they have raised kids for two decades. Premiered November 13, 2026.",
    href: "https://dreams.org.tw/%E5%A4%A2%E6%83%B3%E6%B6%88%E6%81%AF/20%E9%80%B1%E5%B9%B4%E5%8F%AA%E7%82%BA%E9%81%87%E8%A6%8B%E4%BD%A0/",
    linkLabel: "Premiere info (Mandarin)",
    image: null,
    slate: "PREMIERE · 11.13",
  },
  {
    index: "E02",
    year: "2026",
    category: "Show production",
    title: "Mission On Air",
    role: "Series producer · weekly video podcast for a Taipei seminary",
    description:
      "A video podcast that takes missions, a topic that usually feels far away, and talks about it like everyday life. We handle planning, recording, editing and publishing, plus the show website, chapter timestamps and social copy for every episode. Season 2 is 12 episodes, releasing weekly since October 26, 2026.",
    href: "https://missionair.genesis131.com",
    linkLabel: "missionair.genesis131.com",
    image: "/images/mission-on-air.jpg",
    slate: null,
  },
  {
    index: "E03",
    year: "2026",
    category: "Show production",
    title: "Afterschool SHOW",
    role: "Show producer · original series",
    description:
      "A talk show for teenagers and the adults raising them. Weekly since July 2026 without a missed episode, covering appearance anxiety, phones, AI and the questions teens care about but rarely say out loud. Published on six platforms at once.",
    href: "https://afterschool.genesis131.com",
    linkLabel: "afterschool.genesis131.com",
    image: "/images/afterschool-show.jpg",
    slate: null,
  },
  {
    index: "E04",
    year: "2026",
    category: "Live streaming",
    title: "City Prayer Gatherings, five-city live series",
    role: "Broadcast producer · for a Christian broadcasting foundation",
    description:
      "Taoyuan, Hsinchu, Taichung, Tainan and Penghu: five broadcasts, zero dropped streams. Watching six platforms at once is more than one director can eyeball, so we wrote a monitoring tool that turns bitrate and dropped-frame numbers into plain warnings. In Penghu the router rebooted five times before air; we traced it to a power problem, swapped the supply and stayed stable to the end, with 628 concurrent viewers at peak.",
    href: null,
    linkLabel: null,
    image: null,
    slate: "WRAPPED · 5 / 5 ZERO DROP",
  },
  {
    index: "E05",
    year: "2026",
    category: "Post-production",
    title: "AI-assisted editing workflow",
    role: "Editor · pipelines and documented methods",
    description:
      "This year I cut the House of Dream documentary, a city prayer film, an awards-show opening and a wedding music video, and subtitled a fundraising film in Chinese and English. Along the way I built a pipeline that goes from raw footage to transcripts, aligned subtitles and a pre-cut Final Cut Pro timeline, and wrote up ten repeatable workflows (W01 to W10).",
    href: null,
    linkLabel: null,
    image: null,
    slate: "W01 – W10",
  },
  {
    index: "E06",
    year: "2026",
    category: "Branded series",
    title: "Running route series",
    role: "Planning, camera, edit · for a running-training channel",
    description:
      "One episode per route: Minquan Bridge, Tamkang Bridge, the Dalu Forest Road. Each film opens with the answer, turns the numbers into data cards, ships with Chinese, English and Japanese subtitles, and gets cut down into Reels with titles written the way people actually search.",
    href: "https://youtu.be/mR7K3rPcLaM",
    linkLabel: "EP02 · Minquan Bridge",
    image: null,
    slate: "ON AIR · EP02–04",
  },
  {
    index: "E07",
    year: "2025",
    category: "Brand film",
    title: "Mackay Memorial Hospital at 145",
    role: "Director",
    description:
      "Anniversary brand film for Mackay Memorial Hospital, one of Taiwan's oldest hospitals, founded in 1880.",
    href: null,
    linkLabel: null,
    image: null,
    slate: "145TH ANNIVERSARY",
  },
  {
    index: "E08",
    year: "2026",
    category: "Exhibition",
    title: "Backstage is a WORLD",
    role: "Curator · four weeks in Taipei, now online",
    description:
      "Twenty years of behind-the-scenes photos, on a wall for the first time. The show ran for four weeks in a Taipei mall, left behind a community of crew people who still meet, and now lives online so you can browse it from your phone.",
    href: "https://backstage.genesis131.com/online/",
    linkLabel: "Online exhibition",
    image: "/images/backstage-control.jpg",
    slate: null,
  },
];

/* 結構化資料（英文）：個人檔案頁、人物、作品清單、FAQ。內容與頁面上看得到的文字一致 */
const person = {
  "@id": PERSON_ID,
  "@type": "Person",
  name: "Kimi Chang",
  alternateName: ["張正杰", "Cheng-Chieh Chang", "ChengChieh Chang"],
  jobTitle: "Video Producer and Creative Director",
  description,
  url: `${BASE_URL}/en`,
  email: `mailto:${EMAIL}`,
  homeLocation: { "@type": "Place", name: "Taipei, Taiwan" },
  knowsLanguage: [
    { "@type": "Language", name: "Mandarin Chinese", alternateName: "zh" },
    { "@type": "Language", name: "English", alternateName: "en" },
  ],
  knowsAbout: [
    "Documentary directing",
    "Brand film production",
    "Music video directing",
    "Video podcast production",
    "Multi-platform live streaming",
    "Multi-camera EFP switching",
    "Final Cut Pro editing",
    "AI-assisted post-production",
    "Automatic subtitle alignment",
    "Generative video tools",
  ],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Shih Hsin University", department: "Radio, Television and Film" },
  worksFor: [
    { "@type": "Organization", name: "UltraLight Studio" },
    { "@type": "Organization", name: "GENESIS131 Creative Inc." },
  ],
  sameAs: [LINKEDIN, ...SAME_AS.filter((u) => u !== LINKEDIN)],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${BASE_URL}/en#profile`,
      url: `${BASE_URL}/en`,
      name: title,
      inLanguage: "en",
      mainEntity: { "@id": PERSON_ID },
      dateModified: "2026-11-25",
    },
    person,
    {
      "@type": "VideoObject",
      "@id": `${BASE_URL}/en#showreel`,
      name: "Kimi Chang | Showreel 2026 | Video Producer & Creative Director",
      description:
        "Selected work 2016 to 2026 in 60 seconds: documentaries, brand films, music videos, live music and concerts, directed by Kimi Chang.",
      thumbnailUrl: `https://i.ytimg.com/vi/${REEL_ID}/maxresdefault.jpg`,
      uploadDate: "2026-11-25",
      duration: "PT1M",
      contentUrl: `https://www.youtube.com/watch?v=${REEL_ID}`,
      embedUrl: `https://www.youtube.com/embed/${REEL_ID}`,
      inLanguage: "en",
      creator: { "@id": PERSON_ID },
    },
    {
      "@type": "ItemList",
      "@id": `${BASE_URL}/en#work`,
      name: "Kimi Chang: selected work",
      itemListElement: works.map((w, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: w.title,
          genre: w.category,
          dateCreated: w.year,
          description: w.description,
          creator: { "@id": PERSON_ID },
          inLanguage: "zh-Hant",
          ...(w.href ? { url: w.href } : {}),
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/en#faq`,
      inLanguage: "en",
      mainEntity: enFaq.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function EnglishHome() {
  return (
    <div lang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EnHeader />
      <main>
        <EnHero />
        <EnAbout />
        <SelectedWork items={works} index="02" heading="Selected work" />
        <EnCapabilities />
        <EnRemote />
        <EnShowreel />
        <EnWriting />
        <EnFaq />
        <EnContact />
      </main>
      <EnFooter />
    </div>
  );
}
