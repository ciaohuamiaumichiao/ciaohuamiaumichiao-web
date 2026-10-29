"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";
import { SectionSlate } from "./SectionSlate";
import { IconCamera, IconMic, IconAntenna, IconMonitor, IconCompass } from "./Icons";

const services = [
  {
    number: "UNIT 01",
    icon: IconCamera,
    title: "影像製作",
    subtitle: "Film & Video Production",
    description:
      "形象片、紀錄片、展覽紀錄、活動側拍都接。從一開始聊要拍什麼，到現場、剪接、交片，同一組團隊陪你做完。",
    items: ["企業形象影片", "紀錄片", "展覽紀錄", "活動側拍", "後期剪輯"],
    steps: [
      { label: "先聊", desc: "要拍給誰看、預算抓多少" },
      { label: "寫腳本、找場地、找人", desc: "分鏡和拍攝計畫也在這時候排好" },
      { label: "拍", desc: "導演、攝影、燈光、收音一起到現場" },
      { label: "剪接、調色、混音", desc: "改到你點頭，再把檔案交出去" },
    ],
    price: "NT$50,000 起",
  },
  {
    number: "UNIT 02",
    icon: IconMic,
    title: "節目製作",
    subtitle: "Show & Podcast Production",
    description:
      "想做一檔長期的節目，可以從零開始一起做。要給誰看、一季聊什麼、找誰來，錄影、剪接、上架，官網和每集文案也可以一起包。Mission On Air 和放學後 SHOW 都是這樣做出來的。",
    items: ["節目定位與季度企劃", "錄影與現場執導", "剪輯、字幕與多平台上架", "節目官網與集數頁", "社群文案與金句素材"],
    steps: [
      { label: "定調", desc: "給誰看、多久更新一次" },
      { label: "排一季", desc: "每集主題和來賓" },
      { label: "錄影、剪接、上架", desc: "各平台一起發" },
      { label: "一季結束回頭看", desc: "看數據，調下一季" },
    ],
    price: "以季報價",
  },
  {
    number: "UNIT 03",
    icon: IconAntenna,
    title: "直播與轉播統籌",
    subtitle: "Live Broadcast",
    description:
      "三台機器現場切，同時推到 YouTube、Facebook 好幾個平台，網路有備援，旁邊還有一套我們自己寫的監控系統在看訊號。今年五場城市禱告會都是這樣轉的。",
    items: ["三機 EFP 現場切換", "YouTube／Facebook 等多平台直播", "備援網路與即時訊號監控", "直播錄影與檔案交付", "結案數據與服務紀錄"],
    steps: [
      { label: "先去場地看", desc: "網路、電、動線" },
      { label: "排機位和訊號", desc: "備援也一起想好" },
      { label: "彩排", desc: "整條訊號從頭跑一次" },
      { label: "直播當天", desc: "導播和攝影團隊都在現場，結束後交錄影檔和紀錄" },
    ],
    price: "單場 NT$60,000 起",
  },
  {
    number: "UNIT 04",
    icon: IconMonitor,
    title: "創意數位建置",
    subtitle: "Creative Digital Solutions",
    description:
      "網站、管理系統、排班平台都在寫，你現在看的這個網站也是。影音硬體要怎麼買、怎麼接，也可以一起規劃。",
    items: ["品牌官網與節目網站", "管理系統與排班平台", "影音硬體規劃與建置", "數位工作流程規劃", "數位策略顧問"],
    steps: [
      { label: "先聊", desc: "想解決什麼問題" },
      { label: "規劃和報價", desc: "要做哪些功能、大概多少錢" },
      { label: "設計、開發", desc: "做到可以用" },
      { label: "上線", desc: "之後有問題，隨時找我們" },
    ],
    price: "NT$60,000 起 + 維護方案",
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="04" en="Services" zh="服務項目" note="RATE CARD" />

        <FadeInStagger className="mt-14 grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <FadeInItem key={service.number}>
              <div className="frame-marks group relative h-full overflow-hidden border border-border/60 bg-surface p-8 transition-all duration-500 hover:border-accent/30">
                <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-border/70 pb-4">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-accent">
                    {service.number}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                    {service.subtitle}
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <service.icon className="h-7 w-7 shrink-0 text-accent/70 transition-colors group-hover:text-accent" />
                  <h3 className="text-2xl tracking-tight">{service.title}</h3>
                </div>
                <service.icon className="pointer-events-none absolute -right-4 -top-2 h-32 w-32 text-accent opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.08]" />

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[13px] text-muted"
                    >
                      <span className="h-px w-4 bg-accent/25 transition-all group-hover:w-6 group-hover:bg-accent/40" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Process */}
                <div className="mt-8 border-t border-border/40 pt-6">
                  <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-accent-dim">
                    Process
                  </p>
                  <ol className="relative space-y-0">
                    {service.steps.map((step, i) => (
                      <li key={step.label} className="relative flex gap-3 pb-4 last:pb-0">
                        {i < service.steps.length - 1 && (
                          <div className="absolute left-[9px] top-5 h-full w-px bg-border/50" />
                        )}
                        <div className="relative z-10 mt-[3px] flex h-[19px] w-[19px] shrink-0 items-center justify-center border border-accent/30 bg-surface">
                          <span className="font-mono text-[8px] text-accent">
                            {i + 1}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-[13px] leading-tight">{step.label}</p>
                          <p className="mt-0.5 text-[11px] leading-snug text-muted">
                            {step.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-6 flex items-baseline justify-between border-t border-border/40 pt-5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                    Rate
                  </span>
                  <p className="font-mono text-[11px] text-accent">
                    {service.price}
                  </p>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* 影像與藝術顧問 — 諮詢入口 */}
        <FadeIn delay={0.15}>
          <div className="mt-5 border border-border/60 bg-surface/60 p-8 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <IconCompass className="h-6 w-6 shrink-0 text-accent/70" />
                <span className="font-mono text-[10px] tracking-[0.15em] text-accent">UNIT 05</span>
                <h3 className="text-xl tracking-tight">影像與藝術顧問</h3>
              </div>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                Film & Art Consulting
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                還不知道要從哪裡開始的話，先約一次聊聊。
                策展、組影像團隊、短影音、社群經營，都可以問。
              </p>
              <p className="mt-4 font-mono text-[11px] text-accent">
                初次諮詢 NT$5,000，聊完會整理一份現況和建議給你
              </p>
            </div>
            <div className="mt-6 shrink-0 lg:mt-0">
              <a
                href="https://line.me/R/ti/p/@097eutou"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#06C755] px-7 py-3 font-mono text-[10px] uppercase tracking-[0.15em] font-medium text-white transition-opacity hover:opacity-90"
              >
                LINE 預約諮詢
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
