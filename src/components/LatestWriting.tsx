import Link from "next/link";
import { getAllWritings, formatDate } from "@/lib/writing";
import { SectionSlate } from "./SectionSlate";

export function LatestWriting() {
  const writings = getAllWritings().slice(0, 3);
  if (writings.length === 0) return null;

  return (
    <section id="writing-preview" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="08" en="Writing" zh="最新寫作" note="SCRIPTS & NOTES" />

        <ul className="mt-12 divide-y divide-border/40">
          {writings.map((w) => (
            <li key={w.slug}>
              <Link
                href={`/writing/${w.slug}`}
                className="group grid gap-2 py-7 transition-colors hover:bg-surface/40 sm:grid-cols-[120px_1fr] sm:gap-8 sm:px-3"
              >
                <time className="font-mono text-[10px] leading-6 tracking-wider text-muted">
                  {formatDate(w.date)}
                </time>
                <div>
                  <h3 className="text-lg tracking-tight transition-colors group-hover:text-accent sm:text-xl">
                    {w.title}
                  </h3>
                  {w.excerpt && (
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                      {w.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-right">
          <Link
            href="/writing"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
          >
            全部文章 →
          </Link>
        </div>
      </div>
    </section>
  );
}
