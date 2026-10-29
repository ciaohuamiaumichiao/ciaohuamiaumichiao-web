import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EmailSubscribe } from "@/components/EmailSubscribe";
import { getAllWritings, formatDate } from "@/lib/writing";

export const metadata: Metadata = {
  title: "寫作 Writing",
  description:
    "張正杰的寫作筆記。拍片、做品牌、在幕後工作的一些想法。",
  alternates: { canonical: "/writing" },
};

export default function WritingIndex() {
  const writings = getAllWritings();

  return (
    <>
      <Header />
      <main className="px-6 pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-3xl">
          <header className="mb-16">
            <div className="flex items-baseline justify-between gap-6 border-b border-border pb-4">
              <p className="font-mono text-[10px] tracking-[0.15em] text-accent">
                WRITING<span className="ml-4 hidden uppercase text-muted sm:inline">Scripts & Notes</span>
              </p>
              <p className="shrink-0 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                RSS AVAILABLE
              </p>
            </div>
            <h1 className="mt-8 text-4xl tracking-tight sm:text-5xl">
              寫作
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
              拍片、做品牌、在幕後工作的一些筆記。寫得慢，想到才寫。
            </p>
          </header>

          {writings.length === 0 ? (
            <p className="text-sm text-muted">尚未發表任何文章。</p>
          ) : (
            <ul className="divide-y divide-border/40">
              {writings.map((w) => (
                <li key={w.slug} className="py-8 first:pt-0">
                  <Link
                    href={`/writing/${w.slug}`}
                    className="group block transition-opacity hover:opacity-80"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                      <h2 className="text-xl font-light tracking-tight text-foreground sm:text-2xl">
                        {w.title}
                      </h2>
                      <time className="shrink-0 font-mono text-[11px] tracking-wider text-muted">
                        {formatDate(w.date)}
                      </time>
                    </div>
                    {w.excerpt && (
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {w.excerpt}
                      </p>
                    )}
                    {w.tags && w.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
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
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <EmailSubscribe variant="section" />
      <Footer />
    </>
  );
}
