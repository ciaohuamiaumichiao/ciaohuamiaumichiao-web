import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { EnHeader } from "@/components/en/EnHeader";
import { EnFooter } from "@/components/en/EnSections";
import { getAllWritingsEn, getWritingEn, formatDateEn, toYmd } from "@/lib/writing";
import { BASE_URL, PERSON_ID, WEBSITE_ID } from "@/lib/site";

/* 英文翻譯文章：slug 跟中文原文一樣，hreflang 互指；原文網址記在 isBasedOn / translationOfWork */

export const revalidate = 3600;

export function generateStaticParams() {
  return getAllWritingsEn().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const w = getWritingEn(slug);
  if (!w) return {};
  const url = `${BASE_URL}/en/writing/${slug}`;
  const title = w.seoTitle ?? w.title;
  const description = w.description ?? w.excerpt;
  return {
    title: { absolute: `${title} | Kimi Chang` },
    description,
    keywords: w.keywords ?? w.tags,
    authors: [{ name: "Kimi Chang", url: `${BASE_URL}/en` }],
    alternates: {
      canonical: url,
      languages: { "zh-Hant": `/writing/${slug}`, en: `/en/writing/${slug}`, "x-default": `/writing/${slug}` },
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: toYmd(w.date),
      modifiedTime: toYmd(w.updated ?? w.date),
      authors: ["Kimi Chang"],
      tags: w.tags,
      locale: "en_US",
      alternateLocale: ["zh_TW"],
      siteName: "Kimi Chang",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function EnglishPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = getWritingEn(slug);
  if (!w) notFound();

  const url = `${BASE_URL}/en/writing/${slug}`;
  const zhUrl = `${BASE_URL}/writing/${slug}`;
  const others = getAllWritingsEn().filter((p) => p.slug !== slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: w.title,
        ...(w.seoTitle ? { alternativeHeadline: w.seoTitle } : {}),
        description: w.description ?? w.excerpt,
        url,
        mainEntityOfPage: url,
        datePublished: toYmd(w.date),
        dateModified: toYmd(w.updated ?? w.date),
        inLanguage: "en",
        keywords: w.keywords ?? w.tags,
        image: [`${url}/opengraph-image/card`],
        isBasedOn: zhUrl,
        translationOfWork: { "@type": "BlogPosting", "@id": `${zhUrl}#article`, url: zhUrl, inLanguage: "zh-Hant-TW" },
        ...(w.about?.length
          ? { about: w.about.map((a) => ({ "@type": a.type, name: a.name, ...(a.sameAs ? { sameAs: a.sameAs } : {}) })) }
          : {}),
        author: { "@id": PERSON_ID, "@type": "Person", name: "Kimi Chang", url: `${BASE_URL}/en` },
        publisher: { "@id": PERSON_ID },
        isPartOf: { "@id": WEBSITE_ID },
        wordCount: w.content.split(/\s+/).filter(Boolean).length,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Writing", item: `${BASE_URL}/en/writing` },
          { "@type": "ListItem", position: 3, name: w.title, item: url },
        ],
      },
    ],
  };

  return (
    <div lang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EnHeader zhHref={`/writing/${slug}`} />
      <main className="px-6 pb-24 pt-32 sm:pt-40">
        <article className="mx-auto max-w-2xl">
          <header className="mb-12 border-b border-border/40 pb-8">
            <Link
              href="/en/writing"
              className="mb-8 inline-block font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
            >
              ← Writing
            </Link>
            <h1 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl">{w.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <time className="font-mono text-[10px] tracking-wider text-muted">{formatDateEn(w.date)}</time>
              {w.tags?.map((t) => (
                <span key={t} className="font-mono text-[9px] uppercase tracking-[0.1em] text-accent/70">
                  #{t}
                </span>
              ))}
              <Link
                href={`/writing/${slug}`}
                hrefLang="zh-Hant"
                lang="zh-Hant"
                className="ml-auto text-[11px] text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                中文原文
              </Link>
            </div>
          </header>

          <div className="prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{w.content}</ReactMarkdown>
          </div>

          {others.length > 0 && (
            <nav aria-label="More writing" className="mt-16 border-t border-border/40 pt-10">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">More writing</h2>
              <ul className="mt-6 space-y-5">
                {others.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/en/writing/${r.slug}`} className="group block">
                      <p className="text-[15px] leading-snug transition-colors group-hover:text-accent">{r.title}</p>
                      <time className="mt-1 block font-mono text-[10px] tracking-wider text-muted">{formatDateEn(r.date)}</time>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-8">
            <Link
              href="/en/writing"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
            >
              ← All writing
            </Link>
            <Link
              href="/en#contact"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent transition-colors hover:text-accent-bright"
            >
              Work with me →
            </Link>
          </div>
        </article>
      </main>
      <EnFooter />
    </div>
  );
}
