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
      "企業形象片、紀錄片、展覽紀錄、活動側拍。從前期企劃、現場執導到後期剪輯，提供完整的影像製作服務。",
    items: ["企業形象影片", "紀錄片", "展覽紀錄", "活動側拍", "後期剪輯"],
    steps: [
      { label: "需求訪談", desc: "了解目標、受眾與預算" },
      { label: "企劃提案", desc: "腳本、分鏡與製作規劃" },
      { label: "前期籌備", desc: "場勘、選角、團隊組建" },
      { label: "拍攝執行", desc: "現場執導與影像紀錄" },
      { label: "後期剪輯", desc: "剪接、調色、混音" },
      { label: "交片驗收", desc: "修改確認與檔案交付" },
    ],
    price: "NT$50,000 起",
  },
  {
    number: "UNIT 02",
    icon: IconMic,
    title: "節目製作",
    subtitle: "Show & Podcast Production",
    description:
      "把一檔節目從零做起來。節目定位、季度企劃、錄影、後製、上架，連官網、章節時間碼、各平台文案都在同一套流程裡。適合想長期經營內容的品牌與機構。",
    items: ["節目定位與季度企劃", "錄影與現場執導", "剪輯、字幕與多平台上架", "節目官網與集數頁", "社群文案與金句素材"],
    steps: [
      { label: "節目定位", desc: "受眾、調性與更新節奏" },
      { label: "季度企劃", desc: "集數主題與來賓規劃" },
      { label: "錄影製作", desc: "現場執導與收音" },
      { label: "後製上架", desc: "剪輯、字幕、各平台發佈" },
      { label: "檢視迭代", desc: "數據回顧與下一季調整" },
    ],
    price: "以季報價",
  },
  {
    number: "UNIT 03",
    icon: IconAntenna,
    title: "直播與轉播統籌",
    subtitle: "Live Broadcast",
    description:
      "三機 EFP、多平台同步直播，加上備援網路與自建的即時訊號監控系統。2026 年三場城市禱告會轉播零事故。",
    items: ["三機 EFP 現場切換", "YouTube／Facebook 等多平台直播", "備援網路與即時訊號監控", "直播錄影與檔案交付", "結案數據與服務紀錄"],
    steps: [
      { label: "場勘評估", desc: "場地訊號、網路與動線" },
      { label: "系統規劃", desc: "機位、訊號鏈與備援設計" },
      { label: "彩排測試", desc: "全鏈路壓力測試" },
      { label: "直播執行", desc: "現場導播與即時監控" },
      { label: "結案交付", desc: "錄影檔與服務紀錄報告" },
    ],
    price: "單場 NT$60,000 起",
  },
  {
    number: "UNIT 04",
    icon: IconMonitor,
    title: "創意數位建置",
    subtitle: "Creative Digital Solutions",
    description:
      "為品牌與機構量身打造網站、數位系統與線上平台，同時提供影音硬體規劃與系統整合，從軟體到硬體一站完成。",
    items: ["品牌官網與節目網站", "管理系統與排班平台", "影音硬體規劃與建置", "數位工作流程規劃", "數位策略顧問"],
    steps: [
      { label: "需求訪談", desc: "功能需求與技術評估" },
      { label: "規劃提案", desc: "架構設計與報價確認" },
      { label: "設計開發", desc: "UI 設計與系統建置" },
      { label: "測試上線", desc: "功能測試與正式部署" },
      { label: "維護支援", desc: "持續優化與技術支援" },
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
                不確定該從哪一項開始？很多合作是從一次諮詢談出來的。
                策展方向、影像團隊建立、短影音策略、社群成長陪跑，都可以先聊。
              </p>
              <p className="mt-4 font-mono text-[11px] text-accent">
                初次諮詢 NT$5,000，聊完給你一份現況診斷與建議
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
