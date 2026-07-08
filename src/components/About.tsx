"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";
import { SectionSlate } from "./SectionSlate";

export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="01" en="About" zh="張正杰" note="EST. 15+ YRS" />

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
          {/* 左：場記式 meta */}
          <FadeIn delay={0.1}>
            <dl className="space-y-4 border-l border-accent/25 pl-6 font-mono text-[11px] leading-relaxed">
              <div>
                <dt className="text-[9px] uppercase tracking-[0.15em] text-muted">Role</dt>
                <dd className="mt-1 text-foreground">導演・策展人</dd>
              </div>
              <div>
                <dt className="text-[9px] uppercase tracking-[0.15em] text-muted">Unit</dt>
                <dd className="mt-1 text-foreground">擎光媒體工作室</dd>
                <dd className="text-foreground">甚好創意有限公司</dd>
              </div>
              <div>
                <dt className="text-[9px] uppercase tracking-[0.15em] text-muted">Base</dt>
                <dd className="mt-1 text-foreground">台北，台灣</dd>
              </div>
            </dl>
          </FadeIn>

          {/* 右：敘述 */}
          <FadeIn delay={0.2}>
            <div className="space-y-5 text-[15px] leading-[1.9] text-muted">
              <p>
                從導演、企劃、製片規劃到現場統籌與剪輯，作品涵蓋 MV、短片、演唱會及各類展演製作。
                合作對象橫跨政府機關、國際精品、建設集團到社會企業、公益組織。
              </p>
              <p>
                2026 年起我換了一種工作方式：一個導演，加一套自己搭的 AI 協作系統，
                影像、節目、直播、網站四條線同時交付。上半年就是這樣跑完的，
                包括兩檔週更節目和三場多平台直播。
              </p>
            </div>

            <FadeInStagger className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              {[
                { value: "15+", label: "年影像經驗" },
                { value: "30+", label: "音樂 MV" },
                { value: "02", label: "檔週更節目" },
                { value: "03", label: "場多平台直播" },
              ].map((stat) => (
                <FadeInItem key={stat.label}>
                  <div className="border-t border-accent/25 pt-4">
                    <p className="font-mono text-3xl font-light text-accent">{stat.value}</p>
                    <p className="mt-2 text-[11px] tracking-wider text-muted">{stat.label}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
