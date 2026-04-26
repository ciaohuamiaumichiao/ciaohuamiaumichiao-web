import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllSlugs, getWriting, formatDate } from "@/lib/writing";

export const dynamicParams = false;

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
  return {
    title: w.title,
    description: w.excerpt,
    alternates: { canonical: `/writing/${slug}` },
    openGraph: {
      title: w.title,
      description: w.excerpt,
      type: "article",
      publishedTime: w.date,
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

  return (
    <>
      <Header />
      <main className="px-6 pb-24 pt-32 sm:pt-40">
        <article className="mx-auto max-w-2xl">
          <header className="mb-12 border-b border-border/40 pb-8">
            <Link
              href="/writing"
              className="mb-6 inline-block text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
            >
              ← 寫作
            </Link>
            <h1 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              {w.title}
            </h1>
            <div className="mt-6 flex items-center gap-4">
              <time className="font-mono text-[11px] tracking-wider text-muted">
                {formatDate(w.date)}
              </time>
              {w.tags && w.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-[0.15em] text-accent/70"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div className="prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {w.content}
            </ReactMarkdown>
          </div>

          <div className="mt-16 border-t border-border/40 pt-8">
            <Link
              href="/writing"
              className="text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
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
