"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { SectionSlate } from "./SectionSlate";

const works = [
  {
    index: "E01",
    year: "2026",
    category: "節目製作",
    title: "Mission On Air 宣教事",
    role: "製作統籌｜靈糧教牧宣教神學院",
    description:
      "把「宣教」拉回日常的 Video Podcast。從節目企劃、錄影、後製到多平台上架，含官網、章節時間碼與每集社群文案，整套系統一起交付。第一季每週一更新。",
    href: "https://missionair.genesis131.com",
    linkLabel: "missionair.genesis131.com",
    image: "/images/mission-on-air.jpg",
    slate: null,
  },
  {
    index: "E02",
    year: "2026",
    category: "節目製作",
    title: "放學後 SHOW",
    role: "節目統籌｜自製節目",
    description:
      "做給青少年、也做給陪他們長大的大人看的談話節目。品牌定位、集數企劃、錄影剪輯到六個平台上架，七月開播，每週四更新。",
    href: "https://afterschool.genesis131.com",
    linkLabel: "afterschool.genesis131.com",
    image: "/images/afterschool-show.jpg",
    slate: null,
  },
  {
    index: "E03",
    year: "2026",
    category: "直播轉播",
    title: "城市禱告會系列轉播",
    role: "轉播統籌｜國度復興傳播基金會",
    description:
      "三機 EFP、五平台同步直播。為了讓導播不用同時盯六個視窗，自己寫了一套即時監控系統，把碼率和掉幀翻成看得懂的應變建議。桃園、新竹、台中三場零事故，九月到澎湖。",
    href: null,
    linkLabel: null,
    image: null,
    slate: "STANDBY — 09.09 澎湖",
  },
  {
    index: "E04",
    year: "2026",
    category: "攝影・出版",
    title: "遠鄉閃閃《我的攝影不像樣》",
    role: "影像採訪・書籍設計｜文曄教育基金會",
    description:
      "偏鄉攝影教育計畫第五年。走進 13 所學校做影像採訪，把孩子的照片編成 208 頁攝影合輯，七月底於剝皮寮展出。",
    href: null,
    linkLabel: null,
    image: null,
    slate: "IN PRINT — 208P",
  },
  {
    index: "E05",
    year: "2026",
    category: "策展",
    title: "Backstage is a WORLD",
    role: "策展人｜遠企購物中心",
    description:
      "把二十年幕後生涯的攝影第一次搬到台前，展期四週。展覽結束後，長出了「the Backstage 幕後人聚場」社群。",
    href: "https://backstageworld.vercel.app",
    linkLabel: "backstageworld.vercel.app",
    image: "/images/backstage-control.jpg",
    slate: null,
  },
];

/* SMPTE 檢驗條（無訊號畫面用） */
const bars = ["#b9b9b9", "#b9b900", "#00b9b9", "#00b900", "#b900b9", "#b90000", "#0000b9"];

function PreviewMonitor({ work }: { work: (typeof works)[number] }) {
  return (
    <div className="overflow-hidden border border-border/60 bg-black">
      {/* 監視器上緣 */}
      <div className="flex items-center justify-between border-b border-border/60 bg-surface px-3 py-1.5">
        <span className="font-mono text-[8px] tracking-[0.2em] text-muted">
          PVW {work.index}
        </span>
        <span
          className={`h-1.5 w-1.5 rounded-full ${work.image ? "bg-live" : "bg-accent/70"}`}
        />
      </div>
      {/* 畫面 */}
      <div className="relative aspect-video">
        {work.image ? (
          <Image
            src={work.image}
            alt={work.title}
            fill
            sizes="(min-width: 1024px) 240px, 100vw"
            className="object-cover grayscale-[30%] transition-all duration-500 group-hover:grayscale-0"
          />
        ) : (
          <div className="absolute inset-0">
            <div className="flex h-[62%] w-full">
              {bars.map((c) => (
                <span key={c} className="h-full flex-1 opacity-30" style={{ background: c }} />
              ))}
            </div>
            <div className="flex h-[38%] items-center justify-center bg-black">
              <span className="font-mono text-[8px] tracking-[0.18em] text-muted">
                {work.slate}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="03" en="Selected Work" zh="今年做的事" note="5 ENTRIES" />

        <div className="mt-14">
          {works.map((work, i) => (
            <FadeIn key={work.title} delay={i * 0.05}>
              <article className="frame-marks group grid gap-6 border-b border-border/40 py-10 transition-colors hover:bg-surface/40 sm:px-4 lg:grid-cols-[110px_minmax(0,1fr)_240px] lg:gap-10">
                <div>
                  <p className="font-mono text-xl font-light text-accent-dim transition-colors group-hover:text-accent">
                    {work.index}
                  </p>
                  <p className="mt-2 text-[10px] tracking-[0.18em] text-muted">
                    {work.category}
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-muted/70">{work.year}</p>
                </div>
                <div className="max-w-3xl">
                  <h3 className="text-2xl tracking-tight transition-colors group-hover:text-accent lg:text-3xl">
                    {work.title}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] tracking-[0.08em] text-accent-dim">
                    {work.role}
                  </p>
                  <p className="mt-4 text-[14px] leading-[1.85] text-muted">
                    {work.description}
                  </p>
                  {work.href && (
                    <a
                      href={work.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.05em] text-accent/70 transition-colors hover:text-accent"
                    >
                      {work.linkLabel}
                      <span aria-hidden>→</span>
                    </a>
                  )}
                </div>
                <div className="lg:self-center">
                  <PreviewMonitor work={work} />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
