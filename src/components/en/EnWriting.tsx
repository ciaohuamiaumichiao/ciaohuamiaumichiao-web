import Link from "next/link";
import { FadeIn } from "../FadeIn";
import { SectionSlate } from "../SectionSlate";
import { getAllWritingsEn, formatDateEn } from "@/lib/writing";

/* /en 首頁的寫作區塊：列出已翻譯的英文文章（server component，讀 content/writing/en） */
export function EnWriting() {
  const posts = getAllWritingsEn().slice(0, 4);
  if (!posts.length) return null;
  return (
    <section id="writing" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="06" en="Writing" zh="Notes from set" note={`${posts.length} ESSAYS`} />
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
            All writing →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
