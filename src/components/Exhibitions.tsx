"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

const experiences = [
  {
    category: "策展",
    items: [
      {
        year: "2026",
        title: "Backstage is a WORLD",
        role: "策展人",
        venue: "遠企購物中心 4F & 5F",
        period: "2026.3.3 – 3.30",
      },
    ],
  },
  {
    category: "演唱會執行",
    items: [
      {
        year: "",
        title: "孟庭葦 北京・成都巡迴演唱會",
        role: "執行導演",
        venue: "",
        period: "",
      },
      {
        year: "",
        title: "香蕉計畫 B.I.G 音樂節",
        role: "執行導演",
        venue: "上海世博",
        period: "",
      },
      {
        year: "",
        title: "周治平・紀敏佳・熊天平・潘越雲・金智娟 演唱會",
        role: "執行導演",
        venue: "中國各地",
        period: "",
      },
    ],
  },
  {
    category: "音樂 MV",
    items: [
      {
        year: "",
        title: "約書亞樂團 MV 30+ 支",
        role: "導演",
        venue: "",
        period: "",
      },
      {
        year: "",
        title: "Gateway Worship × Joshua Band 聯名 MV",
        role: "導演",
        venue: "",
        period: "",
      },
    ],
  },
  {
    category: "廣告・紀錄片・節目",
    items: [
      {
        year: "2025",
        title: "馬偕紀念醫院 145 週年院慶形象影片",
        role: "導演",
        venue: "",
        period: "",
      },
      {
        year: "",
        title: "Bike Spirit × 台灣世界展望會",
        role: "導演",
        venue: "",
        period: "",
      },
      {
        year: "",
        title: "Shining at the far far place with love × 文曄教育基金會",
        role: "導演",
        venue: "",
        period: "",
      },
      {
        year: "",
        title: "廖添丁稀代兇賊の最期《風華再現》實境化影像",
        role: "導演",
        venue: "",
        period: "",
      },
      {
        year: "",
        title: "鉅陞建設 × Ultralight 形象影片",
        role: "導演",
        venue: "",
        period: "",
      },
      {
        year: "",
        title: "SUPERSOCO 品牌影片",
        role: "導演",
        venue: "",
        period: "",
      },
      {
        year: "",
        title: "公益平台文化基金會 節目製作",
        role: "編導",
        venue: "",
        period: "",
      },
      {
        year: "",
        title: "Before 30 節目製作",
        role: "編導",
        venue: "",
        period: "",
      },
      {
        year: "",
        title: "MOMO TV 球場第一排",
        role: "編導",
        venue: "",
        period: "",
      },
    ],
  },
];

const clients = [
  "行政院經濟部",
  "資策會",
  "台灣世界展望會",
  "AUDI",
  "LVMH",
  "Dior",
  "Guerlain",
  "Estée Lauder",
  "Clarins",
  "GNC",
  "OSIM",
  "Asia for JESUS",
  "台北靈糧堂",
  "公益平台文化基金會",
  "鉅陞建設",
  "長虹建設",
  "海悅建設",
  "十三行博物館",
  "大愛劇場",
  "華山基金會",
];

const roles = [
  "MOMO TV 『球場第一排』編導",
  "中華基督教福音協進會 專案執行導演",
  "台灣世界展望會 專案執行導演",
  "台北基督書院 大傳系 講師",
  "第三屆非常短片兩岸華人新銳導演",
];

export function Exhibitions() {
  return (
    <section id="exhibitions" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent-dim">
            Exhibitions & Projects
          </p>
          <h2 className="mt-3 text-4xl tracking-tight lg:text-5xl">經歷與作品</h2>
          <div className="mt-4 h-px w-12 bg-accent/30" />
        </FadeIn>

        {/* Roles */}
        <FadeIn delay={0.15}>
          <div className="mt-14 flex flex-wrap gap-2">
            {roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-border/60 px-4 py-1.5 text-[11px] text-muted/60"
              >
                {role}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Experience by category */}
        <div className="mt-20 space-y-20">
          {experiences.map((group) => (
            <FadeIn key={group.category}>
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-accent/70">
                {group.category}
              </h3>
              <div className="mt-6 space-y-0">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="group grid gap-2 border-b border-border/30 py-5 transition-colors first:border-t first:border-border/30 hover:bg-surface/50 sm:grid-cols-[80px_1fr_auto] sm:px-3"
                  >
                    <span className="font-mono text-[11px] text-accent-dim/60">
                      {item.year}
                    </span>
                    <div>
                      <p className="text-[14px] transition-colors group-hover:text-accent">{item.title}</p>
                      {item.venue && (
                        <p className="mt-0.5 text-[11px] text-muted/50">{item.venue}</p>
                      )}
                    </div>
                    <p className="text-[11px] text-muted/50 sm:text-right">
                      {item.role}
                      {item.period && ` · ${item.period}`}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Clients */}
        <FadeIn>
          <div className="mt-24">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-accent/70">
              合作客戶
            </h3>
            <div className="mt-6 flex flex-wrap gap-x-1 gap-y-1">
              {clients.map((client, i) => (
                <span key={client} className="text-[12px] text-muted/40">
                  {client}{i < clients.length - 1 && <span className="mx-2 text-border">·</span>}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
