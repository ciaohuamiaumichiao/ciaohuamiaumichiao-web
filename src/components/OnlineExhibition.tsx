"use client";

import Image from "next/image";
import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";
import { SectionSlate } from "./SectionSlate";

/* 線上展廳：首頁只放入口，完整的展留在自己的網址，開新分頁逛 */

const ONLINE_URL = "https://backstage.genesis131.com/online/";

const floors = [
  {
    floor: "4F",
    title: "我在時間裡",
    en: "Inside Time",
    line: "人生沒有 NG，每一個鏡頭都是正片。",
    href: `${ONLINE_URL}#floor4`,
  },
  {
    floor: "5F",
    title: "the backstage",
    en: "The Hands You Never See",
    line: "每一個台前的精彩，都在一群看不見的手上。",
    href: `${ONLINE_URL}#floor5`,
  },
];

export function OnlineExhibition() {
  return (
    <section id="online" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="07" en="Online Exhibition" zh="線上展廳" note="4F & 5F" />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <FadeIn>
            <a
              href={`${ONLINE_URL}#floor4`}
              target="_blank"
              rel="noopener noreferrer"
              className="frame-marks group block overflow-hidden border border-border/60 bg-black"
            >
              <Image
                src="/images/backstage-online.avif"
                alt="控制台後方的工作人員，遠處是亮著的舞台"
                width={1800}
                height={1200}
                unoptimized
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </a>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h3 className="text-3xl tracking-tight lg:text-4xl">Backstage is a WORLD</h3>
            <p className="mt-3 text-sm tracking-[0.12em] text-accent">幕後，是一整個世界</p>
            <p className="mt-6 text-[15px] leading-[1.9] text-muted">
              今年 3 月在遠企掛了四週的攝影展，現在我把它搬到線上了，
              所以沒來得及到現場的朋友，可以拿起手機，一層樓一層樓慢慢逛，
              不用趕閉館時間，也不用找停車位喔！
            </p>
            <a
              href={`${ONLINE_URL}#floor4`}
              target="_blank"
              rel="noopener noreferrer"
              className="frame-marks mt-8 inline-block border border-accent/30 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-accent transition-colors hover:border-accent/60 hover:bg-accent/5"
            >
              從 4 樓開始看 →
            </a>
          </FadeIn>
        </div>

        <FadeInStagger className="mt-10 grid gap-4 sm:grid-cols-2">
          {floors.map((f) => (
            <FadeInItem key={f.floor}>
              <a
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full border border-border/60 bg-surface p-7 transition-colors hover:border-accent/30"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-3xl font-light text-accent">{f.floor}</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">{f.en}</span>
                </div>
                <h4 className="mt-5 text-lg tracking-tight transition-colors group-hover:text-accent">{f.title}</h4>
                <p className="mt-2 text-[13px] leading-[1.8] text-muted">{f.line}</p>
              </a>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
