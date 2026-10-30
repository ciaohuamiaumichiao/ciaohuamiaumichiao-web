"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { SectionSlate } from "@/components/SectionSlate";
import { IconBoard, IconChurch, IconChat } from "@/components/Icons";
import { FAQS } from "./data";

/* 排班陪跑：對外服務頁。
   從 HOLYWOOD Rotation（自己團隊的真實系統）長出來的陪伴建置服務。 */

const LINE_URL = `https://line.me/R/oaMessage/%40097eutou/?${encodeURIComponent(
  "你好，我想了解排班陪跑：我們是＿＿教會/團隊，服事團隊大約＿＿人，目前排班的方式是＿＿。"
)}`;

const DEMO_URL = "https://holywoodrotation.vercel.app/landing/pop";
const TOUR_URL = "https://holywoodrotation.vercel.app/present";

const steps = [
  {
    label: "先聊一次（免費）",
    desc: "線上聊半小時，聽你們現在怎麼排班、卡在哪裡。",
  },
  {
    label: "一日工作坊",
    desc: "跟幾個核心同工坐下來，把崗位、流程、規則一條一條攤開，當天就把系統開起來，名字和崗位都用你們自己的。",
  },
  {
    label: "八週陪跑",
    desc: "每週線上碰一次。前四週讓大家習慣回報、登記、換班，後四週換管理員自己來，我在旁邊看。",
  },
  {
    label: "交還給你們",
    desc: "系統放在你們自己的帳號，雲端用量在免費額度內，之後不用再付我月費。",
  },
];

const fits = [
  { icon: IconChurch, title: "教會媒體團隊", desc: "攝影、導播、直播、平面都要排，HOLYWOOD 團隊就是這樣" },
  { icon: IconChat, title: "敬拜團", desc: "主領、和聲、樂手輪著上，崗位照你們平常的叫法" },
  { icon: IconBoard, title: "志工與活動人力", desc: "只要是一群人輪流來的服事，大概都用得上" },
];

const faqs = FAQS;

export function RotationContent() {
  return (
    <main className="pt-24">
      {/* ── Hero ── */}
      <section className="px-6 pb-20 pt-16 lg:pt-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="font-mono text-[10px] tracking-[0.15em] text-accent">
              ROTATION COACHING
              <span className="ml-4 uppercase text-muted">服事排班陪伴建置</span>
            </p>
            <h1 className="mt-8 max-w-3xl text-4xl leading-[1.25] tracking-tight lg:text-6xl lg:leading-[1.2]">
              陪你的教會，
              <br />
              把排班這件事理順。
            </h1>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.9] text-muted">
              每個禮拜在群組裡問「這週誰可以？」，然後翻了半天訊息，找誰到底答應過了沒，
              結果到了當天才發現，兩個人排在同一格⋯⋯這些我真的都經歷過，而且不只一次。
              後來 HOLYWOOD 影視團隊有了一套自己的排班系統，現在大家都自己上去登記、回報、換班了。
              <br />
              這個服務，就是陪你的團隊也走一次。
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent bg-accent/10 px-7 py-3.5 text-sm tracking-wide text-accent transition-colors hover:bg-accent hover:text-background"
              >
                用 LINE 聊聊 →
              </a>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border px-7 py-3.5 text-sm tracking-wide text-muted transition-colors hover:border-accent/40 hover:text-foreground"
              >
                先玩玩互動 DEMO
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 真實案例 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="01" en="Proof" zh="已經在跑的系統" note="LIVE" />

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <FadeIn>
              <p className="text-[15px] leading-[1.9] text-muted">
                HOLYWOOD 影視服事團隊有導播、四台攝影機、直播、平面攝影，二十多位同工每週輪值，
                以前排班全靠群組接龍，現在打開網頁，就看得到哪一場還缺人，按一下「我來」就登記好了，
                排到班的人 LINE 會收到通知，服事前一晚還會再提醒一次。
              </p>
              <p className="mt-5 text-[15px] leading-[1.9] text-muted">
                然後我還偷偷放了一條成就路線，叫做「蒙召的使徒」，從蒙召的漁夫開始，
                一路服事到「那美好的仗我已經打過了」，有沒有很熱血！
              </p>
              <a
                href={TOUR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-mono text-[10px] uppercase tracking-[0.15em] text-accent transition-colors hover:text-foreground"
              >
                看完整系統導覽 →
              </a>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-px border border-border/60 bg-border/60">
                {[
                  { n: "23", label: "團隊成員" },
                  { n: "8+", label: "服事崗位" },
                  { n: "16 週", label: "班表自動生成" },
                  { n: "6 種", label: "LINE 自動通知" },
                ].map((s) => (
                  <div key={s.label} className="bg-surface p-6">
                    <p className="font-mono text-2xl text-accent">{s.n}</p>
                    <p className="mt-1.5 text-[11px] tracking-wide text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 怎麼進行 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="02" en="Process" zh="怎麼進行" note="8-WEEK RUN" />

          <FadeInStagger className="mt-14 grid gap-5 lg:grid-cols-4">
            {steps.map((step, i) => (
              <FadeInItem key={step.label}>
                <div className="h-full border border-border/60 bg-surface p-7">
                  <p className="font-mono text-[10px] tracking-[0.15em] text-accent">
                    STEP {i + 1}
                  </p>
                  <h3 className="mt-4 text-lg tracking-tight">{step.label}</h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-muted">{step.desc}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.2}>
            <p className="mt-8 text-[13px] leading-relaxed text-muted">
              陪跑結束之後，系統就留在你們手上，我呢，就功成身退啦。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── 適合誰 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="03" en="For Whom" zh="適合誰" note="CASTING" />

          <FadeInStagger className="mt-14 grid gap-5 lg:grid-cols-3">
            {fits.map((fit) => (
              <FadeInItem key={fit.title}>
                <div className="group h-full border border-border/60 bg-surface p-7 transition-colors hover:border-accent/30">
                  <fit.icon className="h-7 w-7 text-accent/70 transition-colors group-hover:text-accent" />
                  <h3 className="mt-5 text-lg tracking-tight">{fit.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-muted">{fit.desc}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── 常見問題 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="04" en="FAQ" zh="你大概想問" note="Q&A" />

          <div className="mt-14 grid gap-x-20 gap-y-10 lg:grid-cols-2">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.08}>
                <div className="border-l border-accent/30 pl-6">
                  <h3 className="text-[15px] tracking-tight">{faq.q}</h3>
                  <p className="mt-3 text-[13px] leading-[1.9] text-muted">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="border border-accent/20 bg-surface px-8 py-14 text-center lg:py-20">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-dim">
                First Slot
              </p>
              <h2 className="mx-auto mt-6 max-w-xl text-3xl leading-snug tracking-tight lg:text-4xl">
                正在找第一批共創教會
              </h2>
              <p className="mx-auto mt-6 max-w-md text-[14px] leading-[1.9] text-muted">
                前兩間合作的教會用共創價，唯一的條件，是願意讓這段過程給之後的教會參考。
                點下面的 LINE 會帶出一段開場訊息，把你們的狀況填進去送出就可以了，我會盡快回你。
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-accent bg-accent/10 px-8 py-4 text-sm tracking-wide text-accent transition-colors hover:bg-accent hover:text-background"
                >
                  LINE@ 小花貓咪叫 →
                </a>
                <a
                  href="mailto:ciaohuamiaumichiao@gmail.com?subject=%E6%8E%92%E7%8F%AD%E9%99%AA%E8%B7%91%E8%AB%AE%E8%A9%A2"
                  className="border border-border px-8 py-4 text-sm tracking-wide text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  或寫信給我
                </a>
              </div>
              <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-muted/60">
                Taipei, Taiwan · 線上陪跑全台皆可
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
