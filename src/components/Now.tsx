"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

const nowItems = [
  {
    status: "每週一更新",
    title: "Mission On Air 宣教事",
    detail: "Video Podcast 第一季播出中，第二季籌備中",
    href: "https://missionair.genesis131.com",
  },
  {
    status: "每週四更新",
    title: "放學後 SHOW",
    detail: "青少年談話節目，七月開播",
    href: "https://afterschool.genesis131.com",
  },
  {
    status: "七月底開展",
    title: "遠鄉閃閃《我的攝影不像樣》",
    detail: "208 頁攝影合輯印製中，剝皮寮展出",
    href: null,
  },
  {
    status: "9/9 澎湖",
    title: "城市禱告會系列轉播",
    detail: "今年第四場，多平台直播統籌",
    href: null,
  },
];

export function Now() {
  return (
    <section id="now" className="border-t border-border px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent-dim">
                Now
              </p>
              <h2 className="mt-3 text-4xl tracking-tight lg:text-5xl">進行中</h2>
              <div className="mt-4 h-px w-12 bg-accent/30" />
            </div>
            <p className="font-mono text-[10px] tracking-wider text-muted">
              2026.07
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {nowItems.map((item) => {
            const card = (
              <div className="group h-full rounded-xl border border-border/40 bg-surface/50 p-6 transition-colors hover:border-accent/20">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <p className="font-mono text-[10px] tracking-wider text-accent">
                    {item.status}
                  </p>
                </div>
                <p className="mt-4 text-[14px] leading-snug transition-colors group-hover:text-accent">
                  {item.title}
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>
            );
            return (
              <FadeInItem key={item.title}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
