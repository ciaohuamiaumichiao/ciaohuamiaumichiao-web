"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";
import { SectionSlate } from "./SectionSlate";
import { IconMic, IconChat, IconCamera, IconCompass } from "./Icons";

type Tally = "live" | "standby";

const nowItems: {
  tally: Tally;
  status: string;
  title: string;
  detail: string;
  href: string | null;
  icon: typeof IconMic;
}[] = [
  {
    tally: "live",
    status: "每週一 12:00",
    title: "Mission On Air 宣教事",
    detail: "第二季 10/26 開播，12 集播到明年 1/11。第三季已經在寫了",
    href: "https://missionair.genesis131.com",
    icon: IconMic,
  },
  {
    tally: "live",
    status: "每週四更新",
    title: "放學後 SHOW",
    detail: "青少年談話節目，週週更新。最近跑去西門町街訪",
    href: "https://afterschool.genesis131.com",
    icon: IconChat,
  },
  {
    tally: "standby",
    status: "11/13 首映",
    title: "《只為遇見你》紀錄片",
    detail: "夢想之家 20 週年，走了 348 公里。60 分鐘長片，最後精剪中",
    href: "https://dreams.org.tw/%E5%A4%A2%E6%83%B3%E6%B6%88%E6%81%AF/20%E9%80%B1%E5%B9%B4%E5%8F%AA%E7%82%BA%E9%81%87%E8%A6%8B%E4%BD%A0/",
    icon: IconCamera,
  },
  {
    tally: "standby",
    status: "12 月",
    title: "聖誕節遊樂園 開場遊行",
    detail: "遊行導演。從挪亞方舟出發，走進一座動物童話",
    href: null,
    icon: IconCompass,
  },
];

export function Now() {
  return (
    <section id="now" className="hud-grid border-t border-border px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="02" en="On Air" zh="進行中" note="2026.10" />

        <FadeInStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {nowItems.map((item) => {
            const isLive = item.tally === "live";
            const card = (
              <div className="frame-marks h-full border border-border/50 bg-surface/60 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_32px_-12px_var(--accent)]">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      {isLive && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live/70 opacity-70" />
                      )}
                      <span
                        className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                          isLive ? "bg-live" : "standby-pulse bg-accent"
                        }`}
                      />
                    </span>
                    <span
                      className={`font-mono text-[9px] uppercase tracking-[0.2em] ${
                        isLive ? "text-live" : "text-accent"
                      }`}
                    >
                      {isLive ? "Live" : "Standby"}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.1em] text-muted">
                    {item.status}
                  </span>
                </div>
                <item.icon className="mt-5 h-5 w-5 text-accent/50 transition-colors group-hover:text-accent" />
                <p className="mt-3 text-[14px] leading-snug transition-colors group-hover:text-accent">
                  {item.title}
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>
            );
            return (
              <FadeInItem key={item.title} className="group">
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

        <FadeIn delay={0.3}>
          <p className="mt-6 text-right font-mono text-[9px] uppercase tracking-[0.15em] text-muted/60">
            Tally：<span className="text-live">紅</span> 播出中 ／ <span className="text-accent">藍綠</span> 待命
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
