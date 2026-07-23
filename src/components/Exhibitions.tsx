"use client";

import { FadeIn } from "./FadeIn";
import { SectionSlate } from "./SectionSlate";

const profile = [
  {
    label: "Education",
    zh: "學歷",
    entries: [
      { title: "世新大學 廣播電視電影學系 電影組", note: "畢業製作《糖芯蕾》— 第 13 屆畢業影展「腦開花」觀眾票選電影" },
      { title: "靈糧生命培訓學院 第 9 屆", note: "" },
    ],
  },
  {
    label: "Teaching",
    zh: "教學",
    entries: [
      { title: "台北基督書院 大傳系 兼任講師", note: "影像媒體實務教學" },
    ],
  },
  {
    label: "Ministry",
    zh: "教會媒體服事",
    entries: [
      { title: "台北靈糧堂 Holywood 影視團隊", note: "團長・服事逾二十年" },
      { title: "約書亞樂團 MV 製作", note: "導演・30+ 支" },
      { title: "國度豐收協會", note: "媒體與特會演出項目製作" },
    ],
  },
];

const churchConsulting = [
  "台北靈糧堂",
  "台北真道教會",
  "夏凱納靈糧堂",
  "高雄靈糧堂",
  "台南活水基督教會",
  "忠勇教會",
  "鳳山活泉靈糧堂",
  "約珥靈糧堂",
  "大坪林福音靈糧堂",
  "台北靈糧堂中山福音中心",
  "the Hope",
  "安平靈糧堂",
];

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
    category: "節目製作",
    items: [
      {
        year: "2026",
        title: "Mission On Air 宣教事",
        role: "製作統籌",
        venue: "靈糧教牧宣教神學院・Video Podcast",
        period: "週更中",
      },
      {
        year: "2026",
        title: "放學後 SHOW",
        role: "節目統籌",
        venue: "自製青少年談話節目",
        period: "週更中",
      },
    ],
  },
  {
    category: "直播轉播",
    items: [
      {
        year: "2026",
        title: "城市禱告會系列轉播",
        role: "轉播統籌",
        venue: "國度復興傳播基金會・桃園／新竹／台中",
        period: "",
      },
    ],
  },
  {
    category: "攝影・出版",
    items: [
      {
        year: "2026",
        title: "遠鄉閃閃 114 攝影合輯《我的攝影不像樣》",
        role: "影像採訪・書籍設計",
        venue: "文曄教育基金會・13 校 208 頁",
        period: "",
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
  "國度復興傳播基金會",
  "文曄教育基金會",
  "靈糧教牧宣教神學院",
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
  "第三屆非常短片兩岸華人新銳導演",
];

export function Exhibitions() {
  return (
    <section id="exhibitions" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="06" en="Credits" zh="經歷與作品" note="FULL CREDITS" />

        {/* Profile — 學歷／教學／教會媒體服事 */}
        <FadeIn delay={0.1}>
          <div className="mt-14 border border-border/60 bg-surface p-8">
            <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-border/70 pb-4">
              <span className="font-mono text-[10px] tracking-[0.15em] text-accent">
                PROFILE
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                Chang Cheng Chieh — Kimi
              </span>
            </div>
            <div className="mt-8 grid gap-10 md:grid-cols-3">
              {profile.map((col) => (
                <div key={col.label}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent-dim">
                      {col.label}
                    </span>
                    <h3 className="text-[12px] tracking-[0.2em] text-accent">{col.zh}</h3>
                  </div>
                  <ul className="mt-5 space-y-5">
                    {col.entries.map((entry) => (
                      <li key={entry.title} className="border-l border-accent/25 pl-4">
                        <p className="text-[13px] leading-relaxed">{entry.title}</p>
                        {entry.note && (
                          <p className="mt-1 text-[11px] leading-relaxed text-muted">{entry.note}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Roles */}
        <FadeIn delay={0.15}>
          <div className="mt-12 flex flex-wrap gap-2">
            {roles.map((role) => (
              <span
                key={role}
                className="border border-border/60 px-4 py-1.5 text-[11px] text-muted"
              >
                {role}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Experience by category */}
        <div className="mt-20 space-y-16">
          {experiences.map((group, gi) => (
            <FadeIn key={group.category}>
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[9px] tracking-[0.15em] text-accent-dim">
                  REEL {String(gi + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[12px] tracking-[0.2em] text-accent">
                  {group.category}
                </h3>
              </div>
              <div className="mt-5 space-y-0">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="group grid gap-2 border-b border-border/30 py-5 transition-colors first:border-t first:border-border/30 hover:bg-surface/50 sm:grid-cols-[72px_1fr_auto] sm:px-3"
                  >
                    <span className="font-mono text-[10px] text-accent-dim">
                      {item.year}
                    </span>
                    <div>
                      <p className="text-[14px] transition-colors group-hover:text-accent">{item.title}</p>
                      {item.venue && (
                        <p className="mt-0.5 text-[11px] text-muted">{item.venue}</p>
                      )}
                    </div>
                    <p className="text-[11px] text-muted sm:text-right">
                      {item.role}
                      {item.period && (
                        <span className="ml-2 font-mono text-[9px] text-accent-dim">{item.period}</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 教會影像媒體顧問 */}
        <FadeIn>
          <div className="mt-24">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[9px] tracking-[0.15em] text-accent-dim">
                CONSULT
              </span>
              <h3 className="text-[12px] tracking-[0.2em] text-accent">教會影像媒體與製作諮詢</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-1 gap-y-1">
              {churchConsulting.map((church, i) => (
                <span key={church} className="text-[12px] text-muted">
                  {church}{i < churchConsulting.length - 1 && <span className="mx-2 text-border">·</span>}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Clients */}
        <FadeIn>
          <div className="mt-24">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[9px] tracking-[0.15em] text-accent-dim">
                WITH
              </span>
              <h3 className="text-[12px] tracking-[0.2em] text-accent">合作客戶</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-1 gap-y-1">
              {clients.map((client, i) => (
                <span key={client} className="text-[12px] text-muted">
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
