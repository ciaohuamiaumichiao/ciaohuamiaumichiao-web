import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EmailSubscribe } from "@/components/EmailSubscribe";
import { getAllSlugs, getWriting, getRelatedWritings, formatDate, toYmd } from "@/lib/writing";
import { BASE_URL, PERSON_ID, WEBSITE_ID } from "@/lib/site";

/* 排程文章到期前不在 build 清單裡，到期後第一次被請求時才生成 */
export const dynamicParams = true;
export const revalidate = 3600;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = getWriting(slug);
  if (!w) return {};
  const url = `${BASE_URL}/writing/${slug}`;
  const title = w.seoTitle ?? w.title;
  const description = w.description ?? w.excerpt;
  return {
    title,
    description,
    keywords: w.keywords ?? w.tags,
    authors: [{ name: "張正杰 Kimi Chang", url: BASE_URL }],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: toYmd(w.date),
      modifiedTime: toYmd(w.updated ?? w.date),
      authors: ["張正杰 Kimi Chang"],
      tags: w.tags,
      locale: "zh_TW",
      siteName: "小花貓咪叫 ciaohuamiaumichiao",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = getWriting(slug);
  if (!w) notFound();

  const url = `${BASE_URL}/writing/${slug}`;
  const related = getRelatedWritings(slug);
  const images = [`${url}/opengraph-image`, ...(w.cover ? [`${BASE_URL}${w.cover}`] : [])];
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
        inLanguage: "zh-Hant-TW",
        keywords: w.keywords ?? w.tags,
        ...(w.tags?.[0] ? { articleSection: w.tags[0] } : {}),
        image: images,
        ...(w.about?.length
          ? {
              about: w.about.map((a) => ({
                "@type": a.type,
                name: a.name,
                ...(a.sameAs ? { sameAs: a.sameAs } : {}),
              })),
            }
          : {}),
        ...(w.originalUrl ? { isBasedOn: w.originalUrl } : {}),
        author: { "@id": PERSON_ID, "@type": "Person", name: "張正杰", url: BASE_URL },
        publisher: { "@id": PERSON_ID },
        isPartOf: { "@id": WEBSITE_ID },
        wordCount: w.content.replace(/\s/g, "").length,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "首頁", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "寫作", item: `${BASE_URL}/writing` },
          { "@type": "ListItem", position: 3, name: w.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="px-6 pb-24 pt-32 sm:pt-40">
        <article className="mx-auto max-w-2xl">
          <header className="mb-12 border-b border-border/40 pb-8">
            <Link
              href="/writing"
              className="mb-8 inline-block font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
            >
              ← 寫作
            </Link>
            <h1 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              {w.title}
            </h1>
            <div className="mt-6 flex items-center gap-4">
              <time className="font-mono text-[10px] tracking-wider text-muted">
                {formatDate(w.date)}
              </time>
              {w.tags && w.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] uppercase tracking-[0.1em] text-accent/70"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div className="prose">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // eslint-disable-next-line @next/next/no-img-element
                img: ({ src, alt }) => (
                  <img src={typeof src === "string" ? src : undefined} alt={alt || w.title} loading="lazy" decoding="async" />
                ),
              }}
            >
              {w.content}
            </ReactMarkdown>
          </div>

          {w.originalUrl && (
            <p className="mt-12 font-mono text-[10px] tracking-wider text-muted">
              這篇最早寫在方格子沙龍〈我陪你閱讀影像〉，
              <a
                href={w.originalUrl}
                target="_blank"
                rel="noopener"
                className="underline underline-offset-4 transition-colors hover:text-accent"
              >
                原文在這裡
              </a>
              。
            </p>
          )}

          {related.length > 0 && (
            <nav aria-label="延伸閱讀" className="mt-16 border-t border-border/40 pt-10">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">延伸閱讀</h2>
              <ul className="mt-6 space-y-5">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/writing/${r.slug}`} className="group block">
                      <p className="text-[15px] leading-snug transition-colors group-hover:text-accent">{r.title}</p>
                      <time className="mt-1 block font-mono text-[10px] tracking-wider text-muted">
                        {formatDate(r.date)}
                      </time>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="mt-16">
            <EmailSubscribe />
          </div>

          <div className="mt-12 border-t border-border/40 pt-8">
            <Link
              href="/writing"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
            >
              ← 回到寫作
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
