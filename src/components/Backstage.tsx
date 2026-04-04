"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

export function Backstage() {
  return (
    <section id="backstage" className="relative border-t border-border px-6 py-28 lg:py-36">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/[0.02] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          {/* Left */}
          <FadeIn>
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent-dim">
              Community
            </p>
            <h2 className="mt-3 text-4xl tracking-tight lg:text-5xl">
              the Backstage
            </h2>
            <p className="mt-1 text-xl text-muted/50">幕後人聚場</p>
            <div className="mt-4 h-px w-12 bg-accent/30" />

            <blockquote className="mt-8 border-l-2 border-accent/20 pl-5">
              <p className="text-[15px] leading-[1.85] text-muted/70 italic">
                給每一個在某個人的幕後，默默付出的人。
                一個讓人願意持續留下來的地方。
              </p>
            </blockquote>

            <p className="mt-6 text-[13px] leading-relaxed text-muted/60">
              源自「Backstage is a WORLD」攝影展，2026 年成立的社群平台。
              關注志工、教會同工、非營利工作者與展演幕後協作者的
              <span className="text-foreground/80">熱情續航</span>、
              <span className="text-foreground/80">能量管理</span>與
              <span className="text-foreground/80">技能成長</span>。
            </p>
          </FadeIn>

          {/* Right */}
          <div className="space-y-10">
            {/* 核心信念 */}
            <FadeIn delay={0.15}>
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-accent/70">核心信念</h3>
              <ul className="mt-5 space-y-3">
                {[
                  "每一個幕後都是主角",
                  "願意付出的人值得被好好照顧",
                  "服務是一種節奏，可持續才能走得遠",
                  "走在一起，看見彼此，走得更遠",
                ].map((belief) => (
                  <li key={belief} className="flex items-start gap-3 text-[13px] text-muted/70">
                    <span className="mt-2 h-px w-4 shrink-0 bg-accent/30" />
                    {belief}
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* 社群節奏 */}
            <FadeInStagger className="space-y-0">
              <FadeInItem>
                <h3 className="mb-5 text-[11px] uppercase tracking-[0.2em] text-accent/70">社群節奏</h3>
              </FadeInItem>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { freq: "每週", content: "幕後人金句或短文" },
                  { freq: "每月", content: "30 分鐘線上小聚" },
                  { freq: "每兩月", content: "幕後者故事專訪" },
                  { freq: "每半年", content: "旗艦聚會與工作坊" },
                ].map((item) => (
                  <FadeInItem key={item.freq}>
                    <div className="rounded-xl border border-border/40 bg-surface/50 p-5 transition-colors hover:border-accent/20">
                      <p className="text-[10px] uppercase tracking-wider text-accent/50">{item.freq}</p>
                      <p className="mt-2 text-[13px] text-muted/70">{item.content}</p>
                    </div>
                  </FadeInItem>
                ))}
              </div>
            </FadeInStagger>

            {/* CTA */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://backstageworld.vercel.app/community.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-accent/20 px-7 py-2.5 text-center text-xs uppercase tracking-[0.12em] text-accent/70 transition-all hover:border-accent/50 hover:bg-accent/5"
                >
                  了解更多
                </a>
                <a
                  href="https://line.me/R/ti/p/@097eutou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-7 py-2.5 text-xs uppercase tracking-[0.1em] font-medium text-white transition-opacity hover:opacity-90"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  加入社群
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
