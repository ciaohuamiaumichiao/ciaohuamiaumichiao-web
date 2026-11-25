import type { Metadata } from "next";
import Link from "next/link";
import { EnHeader } from "@/components/en/EnHeader";
import { EnFooter } from "@/components/en/EnSections";
import { getAllWritingsEn, formatDateEn } from "@/lib/writing";
import { BASE_URL, PERSON_ID } from "@/lib/site";

/* 英文文章列表：只列已翻譯的篇章，中文全部文章另外連到 /writing */

const title = "Writing | Kimi Chang";
const description =
  "Essays by Kimi Chang, a Taipei-based director and producer, translated from Mandarin: live production, documentary work, AI in creative work, and 20 years on a church media team.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/en/writing",
    languages: { "zh-Hant": "/writing", en: "/en/writing", "x-default": "/writing" },
  },
  openGraph: { title, description, url: `${BASE_URL}/en/writing`, locale: "en_US", type: "website" },
};

export const revalidate = 3600;

export default function EnglishWriting() {
  const posts = getAllWritingsEn();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE_URL}/en/writing#blog`,
    url: `${BASE_URL}/en/writing`,
    name: title,
    description,
    inLanguage: "en",
    author: { "@id": PERSON_ID },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${BASE_URL}/en/writing/${p.slug}`,
      datePublished: p.date,
    })),
  };

  return (
    <div lang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EnHeader zhHref="/writing" />
      <main className="px-6 pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">Writing</p>
          <h1 className="mt-6 text-4xl font-light tracking-tight">Notes from set, the edit and the control room</h1>
          <p className="mt-6 text-[15px] leading-[1.85] text-muted">
            I write mostly in Mandarin. These are the pieces I&apos;ve translated so far, the ones closest to how I work.
            The full archive is on the <Link href="/writing" hrefLang="zh-Hant" className="text-accent underline-offset-4 hover:underline">Mandarin side</Link>.
          </p>
          <ul className="mt-14 divide-y divide-border/40 border-y border-border/40">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/en/writing/${p.slug}`} className="group block py-8">
                  <time className="font-mono text-[10px] tracking-wider text-muted">{formatDateEn(p.date)}</time>
                  <h2 className="mt-2 text-xl leading-snug tracking-tight transition-colors group-hover:text-accent">{p.title}</h2>
                  {p.excerpt && <p className="mt-3 text-[14px] leading-[1.8] text-muted">{p.excerpt}</p>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <EnFooter />
    </div>
  );
}
