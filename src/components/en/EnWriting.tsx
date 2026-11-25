import Link from "next/link";
import { FadeIn } from "../FadeIn";
import { SectionSlate } from "../SectionSlate";
import { getAllWritingsEn, formatDateEn } from "@/lib/writing";

/* /en 首頁的寫作區塊：列出已翻譯的英文文章（server component，讀 content/writing/en） */
/* 給招募人員看的四篇（跟製作工作最相關），其餘在 /en/writing */
const FEATURED = ["three-cameras-one-cue", "ai-cant-write-why", "walking-348km-interview", "twenty-years-in-the-control-room"];

export function EnWriting() {
  const all = getAllWritingsEn();
  const posts = FEATURED.map((s) => all.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => !!p);
  if (!posts.length) return null;
  return (
    <section id="writing" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="06" en="Writing" zh="Notes from set" note={`${all.length} ESSAYS`} />
        <div className="mt-14 grid gap-px border border-border/60 bg-border/60 md:grid-cols-2">
          {posts.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.05} className="bg-background">
              <Link href={`/en/writing/${p.slug}`} className="group block h-full p-8 transition-colors hover:bg-surface/50">
                <time className="font-mono text-[10px] tracking-wider text-muted">{formatDateEn(p.date)}</time>
                <h3 className="mt-3 text-xl leading-snug tracking-tight transition-colors group-hover:text-accent">{p.title}</h3>
                {p.excerpt && <p className="mt-3 text-[14px] leading-[1.8] text-muted">{p.excerpt}</p>}
              </Link>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <Link
            href="/en/writing"
            className="mt-8 inline-block font-mono text-[10px] uppercase tracking-[0.15em] text-accent/80 transition-colors hover:text-accent"
          >
            All {all.length} essays →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
