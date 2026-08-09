"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { SectionSlate } from "@/components/SectionSlate";
import { IconBoard, IconChurch, IconChat } from "@/components/Icons";

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
    desc: "半小時線上聊，聽你們現在怎麼排班、卡在哪。不合適我會直說。",
  },
  {
    label: "一日工作坊",
    desc: "帶核心同工把崗位、流程、規則盤點清楚，當天就把系統開起來——用你們教會自己的名字和崗位。",
  },
  {
    label: "八週陪跑",
    desc: "每週一次線上跟進。前四週養習慣（回報、登記、換班），後四週把管理員教到會。",
  },
  {
    label: "交還給你們",
    desc: "結案時系統在你們自己的帳號上、雲端費用在免費額度內。之後不用付我月費。",
  },
];

const fits = [
  { icon: IconChurch, title: "教會媒體團隊", desc: "攝影機、導播、直播、平面——就是我自己團隊的原型" },
  { icon: IconChat, title: "敬拜團", desc: "主領、和聲、樂手輪值，崗位全部照你們的叫法設定" },
  { icon: IconBoard, title: "志工與活動人力", desc: "只要是「一群人輪著來」的服事，這套邏輯都能用" },
];

const faqs = [
  {
    q: "之後要付月費嗎？",
    a: "不用。系統跑在你們教會自己的雲端帳號上，小型團隊的用量在免費額度內。我收的是陪跑過程的費用，不是軟體租金。",
  },
  {
    q: "我們沒有工程師怎麼辦？",
    a: "不需要。日常使用是點按鈕，管理員的操作我會在八週內教到會。真的遇到搬不動的，年度健檢時我會看。",
  },
  {
    q: "跟找廠商做系統差在哪？",
    a: "廠商交付軟體就走了，團隊會不會用是你們的事。我陪的是「人開始用起來」這段——工具其實是載體，理順的是協作方式。",
  },
  {
    q: "費用怎麼算？",
    a: "一日工作坊＋八週陪跑，依團隊規模 NT$30,000 起。先聊過、確認合適才報價。",
  },
];

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
              每週在群組裡問「這週誰可以？」、翻訊息找誰答應過、
              當天才發現有人排重——這些我都經歷過。
              後來我為自己帶的影視服事團隊做了一套排班系統，
              現在整個團隊在上面自己登記、自己回報、自己換班。
              <br />
              這個服務，是陪你的團隊走一次同樣的路。
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
          <SectionSlate index="01" en="Proof" zh="這不是提案，是正在跑的系統" note="LIVE" />

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <FadeIn>
              <p className="text-[15px] leading-[1.9] text-muted">
                HOLYWOOD 影視服事團隊——導播、四台攝影機、直播、平面攝影，
                二十多位同工每週輪值。以前排班靠群組接龍，
                現在打開網頁就知道哪一場缺誰，空位按一顆「我來」就登記完成；
                排到班 LINE 自動通知，服事前一晚自動提醒。
              </p>
              <p className="mt-5 text-[15px] leading-[1.9] text-muted">
                連服事的忠心都看得見：系統裡有一條「蒙召的使徒」成就路線，
                從蒙召的漁夫，一路服事到「那美好的仗我已經打過了」。
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
              重點只有一個：<span className="text-foreground">系統最後是你們的，不是我的。</span>
              我陪跑，然後退場。
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
                前兩個合作的教會用共創價——一起把這套陪跑走順，
                交換的是你們願意讓過程成為別人的參考。
                點 LINE 會帶好開場訊息，填上你們的狀況送出就行。
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
