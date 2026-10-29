"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { SectionSlate } from "./SectionSlate";

const works = [
  {
    index: "E01",
    year: "2026",
    category: "紀錄片",
    title: "只為遇見你",
    role: "導演｜夢想之家教育基金會 20 週年",
    description:
      "夢想之家二十週年，文華牧師帶著夥伴從台北西門走到台東，16 天、348 公里，一路經過每個據點。我們跟著走完全程，九台機器拍回 31.5 小時、兩千多支素材，現在剪成 60 分鐘，講這二十年他們怎麼陪孩子長大。走到一半，別的案子的客戶打來問片子剪好了沒，我說我在走路。11/13 首映。",
    href: "https://dreams.org.tw/%E5%A4%A2%E6%83%B3%E6%B6%88%E6%81%AF/20%E9%80%B1%E5%B9%B4%E5%8F%AA%E7%82%BA%E9%81%87%E8%A6%8B%E4%BD%A0/",
    linkLabel: "首映分享場資訊",
    image: null,
    slate: "PREMIERE — 11.13",
  },
  {
    index: "E02",
    year: "2026",
    category: "節目製作",
    title: "Mission On Air 宣教事",
    role: "製作統籌｜靈糧教牧宣教神學院",
    description:
      "靈糧教牧宣教神學院的 Video Podcast，把宣教當成日常的事來聊。企劃、錄影、剪接、上架都是我們在做，官網、章節時間碼和每集的社群文案也順便包了。第二季 12 集已經錄完，10/26 開播，每週一上一集，播到明年 1/11。",
    href: "https://missionair.genesis131.com",
    linkLabel: "missionair.genesis131.com",
    image: "/images/mission-on-air.jpg",
    slate: null,
  },
  {
    index: "E03",
    year: "2026",
    category: "節目製作",
    title: "放學後 SHOW",
    role: "節目統籌｜自製節目",
    description:
      "做給青少年看的談話節目，陪他們長大的大人也可以看。7 月開播到現在，每週四沒斷過，聊過容貌焦慮、手機、AI，也聊過「他到底喜不喜歡我」這種大家都很在意的事。六個平台同步上。",
    href: "https://afterschool.genesis131.com",
    linkLabel: "afterschool.genesis131.com",
    image: "/images/afterschool-show.jpg",
    slate: null,
  },
  {
    index: "E04",
    year: "2026",
    category: "直播轉播",
    title: "城市禱告會系列轉播",
    role: "轉播統籌｜國度復興傳播基金會",
    description:
      "桃園、新竹、台中、台南、澎湖，五場都沒斷線。導播要同時顧六個平台，我乾脆自己寫了一套監控系統，把碼率、掉幀這些數字翻成看得懂的建議。澎湖那場開播前路由器重開了五次，最後查出是供電問題，換掉之後一路穩到收播，尖峰 628 人同時在看。",
    href: null,
    linkLabel: null,
    image: null,
    slate: "WRAPPED — 5 / 5 ZERO DROP",
  },
  {
    index: "E05",
    year: "2026",
    category: "影像製作",
    title: "跑者肌地 跑步路線系列",
    role: "企劃・攝影・剪輯｜跑者肌地",
    description:
      "跟跑步訓練頻道合作的路線片，民權大橋、淡江大橋、大鹿林道，一集介紹一條路。片子一開頭就先給結論，數據做成字卡，長片配中英日字幕，再另外拆成 Reels。標題照大家平常搜尋的講法來寫。",
    href: "https://youtu.be/mR7K3rPcLaM",
    linkLabel: "EP02 民權大橋 天際之眼",
    image: null,
    slate: "ON AIR — EP02–04",
  },
  {
    index: "E06",
    year: "2026",
    category: "後期剪輯",
    title: "剪輯工作流",
    role: "剪輯指導｜接案與方法整理",
    description:
      "今年剪了《只為遇見你》、林口城市禱告影片、銳能獎開場，幫歸主協會的募款片上了中英字幕，還替朋友的婚禮祝福歌剪了一支 MV。每剪完一支我就把流程記下來，目前記了十條，哪天也許可以整理成能教的東西。",
    href: null,
    linkLabel: null,
    image: null,
    slate: "W01 – W10",
  },
  {
    index: "E07",
    year: "2026",
    category: "攝影・出版",
    title: "遠鄉閃閃《我的攝影不像樣》",
    role: "影像採訪・書籍設計｜文曄教育基金會",
    description:
      "偏鄉攝影教育計畫的第五年。我們跑了 13 所學校做採訪，把孩子們拍的照片編成一本 208 頁的書，7/23 到 8/2 在剝皮寮展出。",
    href: "https://youtu.be/V8r-EYUR4iQ",
    linkLabel: "展覽紀錄影片",
    image: null,
    slate: "WRAPPED — 208P",
  },
  {
    index: "E08",
    year: "2026",
    category: "策展",
    title: "Backstage is a WORLD",
    role: "策展人｜遠企購物中心",
    description:
      "在幕後拍了二十年的照片，第一次掛到牆上給人看，在遠企展了四週。展完之後留下了一群人，後來變成 the Backstage 幕後人聚場。",
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
        <SectionSlate index="03" en="Selected Work" zh="今年做的事" note="8 ENTRIES" />

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
