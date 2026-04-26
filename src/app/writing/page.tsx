import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllWritings, formatDate } from "@/lib/writing";

export const metadata: Metadata = {
  title: "寫作 Writing",
  description:
    "張正杰的寫作筆記——關於影像、品牌敘事、創意工作者的觀察與思考。",
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
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-accent/80">
              Writing
            </p>
            <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
              寫作
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
              關於影像、品牌敘事、創意工作者的觀察與思考。寫得不快，但盡量寫得真。
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
                            className="text-[10px] uppercase tracking-[0.15em] text-accent/70"
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
      <Footer />
    </>
  );
}
