"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
          {/* Label */}
          <FadeIn>
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent-dim">
              About
            </p>
            <h2 className="mt-3 text-4xl tracking-tight lg:text-5xl">
              張正杰
            </h2>
            <div className="mt-4 h-px w-12 bg-accent/30" />
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.2}>
            <div className="space-y-5 text-[15px] leading-[1.85] text-muted">
              <p>
                導演、策展人。擎光媒體工作室、甚好創意。
              </p>
              <p>
                從導演、企劃、製片規劃到現場統籌與剪輯，作品涵蓋 MV、短片、演唱會及各類展演製作。
                合作對象橫跨政府機關、國際精品、建設集團到社會企業、公益組織。
              </p>
            </div>

            <FadeInStagger className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { value: "15+", label: "年影像經驗" },
                { value: "30+", label: "音樂 MV" },
                { value: "策展", label: "展覽策劃" },
                { value: "全端", label: "數位建置" },
              ].map((stat) => (
                <FadeInItem key={stat.label}>
                  <div className="border-l border-accent/20 pl-4">
                    <p className="text-3xl font-light text-accent">{stat.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">{stat.label}</p>
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
