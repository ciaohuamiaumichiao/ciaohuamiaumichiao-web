import Link from "next/link";
import { getAllWritings, formatDate } from "@/lib/writing";

export function LatestWriting() {
  const writings = getAllWritings().slice(0, 3);
  if (writings.length === 0) return null;

  return (
    <section id="writing-preview" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col items-baseline justify-between gap-4 sm:flex-row">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-accent/80">
              Writing
            </p>
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
              最新寫作
            </h2>
          </div>
          <Link
            href="/writing"
            className="text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
          >
            全部文章 →
          </Link>
        </div>

        <ul className="divide-y divide-border/40">
          {writings.map((w) => (
            <li key={w.slug} className="py-6 first:pt-0">
              <Link
                href={`/writing/${w.slug}`}
                className="group block transition-opacity hover:opacity-80"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="text-lg font-light tracking-tight sm:text-xl">
                    {w.title}
                  </h3>
                  <time className="shrink-0 font-mono text-[11px] tracking-wider text-muted">
                    {formatDate(w.date)}
                  </time>
                </div>
                {w.excerpt && (
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                    {w.excerpt}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
