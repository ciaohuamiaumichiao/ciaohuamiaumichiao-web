"use client";

import Link from "next/link";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { SectionSlate } from "@/components/SectionSlate";
import { IconCamera, IconChurch, IconCap, IconBook, IconChat } from "@/components/Icons";

/* 影像陪伴計畫：把這幾年陪伴性質的工作收在一起，
   未來往公益協會走，現在先用來找一起做的人。 */

const LINE_URL = `https://line.me/R/oaMessage/%40097eutou/?${encodeURIComponent(
  "你好，我想聊聊影像陪伴：我們是＿＿，想一起做的事是＿＿。"
)}`;

const works: {
  icon: typeof IconCamera;
  who: string;
  title: string;
  desc: string;
  href?: string;
}[] = [
  {
    icon: IconBook,
    who: "偏鄉學校",
    title: "遠鄉閃閃《我的攝影不像樣》",
    desc: "偏鄉攝影教育計畫走到第五年，我們跑了 13 所學校做採訪，把孩子們自己拍的照片編成一本 208 頁的書，7 月底還在剝皮寮展出了。",
  },
  {
    icon: IconChurch,
    who: "教會團隊",
    title: "陪十多間教會把影像團隊組起來",
    desc: "在台北靈糧堂 Holywood 影視團隊服事了二十年，也一間一間陪著台北真道、高雄靈糧堂、the Hope 這些教會，把自己的影像團隊建起來，連排班這種很瑣碎的事，後來也變成一個陪跑服務了。",
    href: "/rotation",
  },
  {
    icon: IconCap,
    who: "學生",
    title: "KUA 跨越敬拜學院、台北基督書院",
    desc: "在 KUA 跨越敬拜學院藝術部上感官課，也在台北基督書院大傳系當兼任講師，課堂上整理出來的東西，很多都寫成文章放在寫作頁了。",
    href: "/writing",
  },
  {
    icon: IconCamera,
    who: "公益團體",
    title: "《只為遇見你》",
    desc: "夢想之家二十週年，我們跟著從台北西門走到台東，16 天、348 公里，九台機器拍回 31.5 小時，剪成 60 分鐘，講的就是他們這二十年，怎麼一路陪著孩子長大。",
  },
  {
    icon: IconChat,
    who: "幕後的人",
    title: "the Backstage 幕後人聚場",
    desc: "從 Backstage is a WORLD 攝影展長出來的社群，志工、教會同工、非營利工作者、在現場拉線搬東西的人都在，大家最常聊的，是怎麼不要把自己燒完。",
    href: "/#backstage",
  },
];

export function CompanionContent() {
  return (
    <main className="pt-24">
      {/* ── Hero ── */}
      <section className="px-6 pb-20 pt-16 lg:pt-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="font-mono text-[10px] tracking-[0.15em] text-accent">
              COMPANION FILM PROJECT
              <span className="ml-4 uppercase text-muted">影像陪伴計畫</span>
            </p>
            <h1 className="mt-8 max-w-3xl text-4xl leading-[1.25] tracking-tight lg:text-6xl lg:leading-[1.2]">
              陪你，
              <br />
              把自己的故事拍出來。
            </h1>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.9] text-muted">
              拍了十五年，我發現自己越來越常做的事，其實不太像是「幫客戶拍一支片」，
              比較像是坐在旁邊，陪著教會、偏鄉學校、公益團體，還有那些一直站在別人後面的人，
              一起把他們自己的故事找出來、拍出來，然後有一天，他們自己也拍得出來了。
              <br />
              這一頁，就是把這幾年在做的這些事，好好收在一起。
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
                href="#now"
                className="border border-border px-7 py-3.5 text-sm tracking-wide text-muted transition-colors hover:border-accent/40 hover:text-foreground"
              >
                看看陪過誰
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 陪過的人 ── */}
      <section id="now" className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="01" en="Alongside" zh="這幾年在陪的人" note="5 CREWS" />

          <FadeInStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((w) => {
              const card = (
                <div className="group h-full border border-border/60 bg-surface p-7 transition-colors hover:border-accent/30">
                  <div className="flex items-center justify-between">
                    <w.icon className="h-7 w-7 text-accent/70 transition-colors group-hover:text-accent" />
                    <span className="font-mono text-[9px] tracking-[0.15em] text-muted">{w.who}</span>
                  </div>
                  <h3 className="mt-5 text-lg tracking-tight">{w.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-muted">{w.desc}</p>
                </div>
              );
              return (
                <FadeInItem key={w.title}>
                  {w.href ? (
                    <Link href={w.href} className="block h-full">
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* ── 相信的事 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="02" en="Why" zh="為什麼是陪伴" note="DIRECTOR'S NOTE" />

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <FadeIn>
              <blockquote className="border-l-2 border-accent/30 pl-5">
                <p
                  className="font-serif text-[19px] leading-[1.9] text-foreground/90 italic"
                  style={{ fontFamily: '"Noto Serif TC", serif' }}
                >
                  片子拍完會下檔，可是一起拍片的那段日子，會一直留在人身上。
                </p>
              </blockquote>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="space-y-5 text-[15px] leading-[1.9] text-muted">
                <p>
                  我自己就是被陪出來的，國小的時候同學帶我去教會，國一那年站在音控台後面亂推推桿，
                  然後就這樣在幕後待了三十年，回頭看，這一路上真的一直都有人陪著我。
                </p>
                <p>
                  所以現在輪到我了吧，我很想把這件事做得更長久一點，不只是接一個案子、拍完就走，
                  而是慢慢走成一個公益協會，讓更多的教會、學校、公益團體，都有人陪著他們，
                  把自己的故事好好說出來。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="border border-accent/20 bg-surface px-8 py-14 text-center lg:py-20">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-dim">
                Casting Call
              </p>
              <h2 className="mx-auto mt-6 max-w-xl text-3xl leading-snug tracking-tight lg:text-4xl">
                正在找一起做的人
              </h2>
              <p className="mx-auto mt-6 max-w-md text-[14px] leading-[1.9] text-muted">
                如果你是教會、學校、公益團體，想有人陪你們把故事拍出來，
                或者你也是做影像的人，想一起把這件事做下去，都很歡迎來聊聊，
                點下面的 LINE 會帶出一段開場訊息，填一下你們的狀況就可以了喔。
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
                  href="mailto:ciaohuamiaumichiao@gmail.com?subject=%E5%BD%B1%E5%83%8F%E9%99%AA%E4%BC%B4"
                  className="border border-border px-8 py-4 text-sm tracking-wide text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  或寫信給我
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
