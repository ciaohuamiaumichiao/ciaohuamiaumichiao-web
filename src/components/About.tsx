"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";
import { SectionSlate } from "./SectionSlate";

export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="01" en="About" zh="張正杰" note="EST. 15+ YRS" />

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
          {/* 左：場記式 meta */}
          <FadeIn delay={0.1}>
            <dl className="space-y-4 border-l border-accent/25 pl-6 font-mono text-[11px] leading-relaxed">
              <div>
                <dt className="text-[9px] uppercase tracking-[0.15em] text-muted">Role</dt>
                <dd className="mt-1 text-foreground">導演・策展人</dd>
              </div>
              <div>
                <dt className="text-[9px] uppercase tracking-[0.15em] text-muted">Unit</dt>
                <dd className="mt-1 text-foreground">擎光媒體工作室</dd>
                <dd className="text-foreground">甚好創意有限公司</dd>
              </div>
              <div>
                <dt className="text-[9px] uppercase tracking-[0.15em] text-muted">Education</dt>
                <dd className="mt-1 text-foreground">世新大學 廣播電視電影學系 電影組</dd>
                <dd className="text-foreground">靈糧生命培訓學院 第 9 屆</dd>
              </div>
              <div>
                <dt className="text-[9px] uppercase tracking-[0.15em] text-muted">Teaching</dt>
                <dd className="mt-1 text-foreground">台北基督書院 大傳系 兼任講師</dd>
              </div>
              <div>
                <dt className="text-[9px] uppercase tracking-[0.15em] text-muted">Base</dt>
                <dd className="mt-1 text-foreground">台北，台灣</dd>
              </div>
            </dl>
          </FadeIn>

          {/* 右：敘述 */}
          <FadeIn delay={0.2}>
            <div className="space-y-5 text-[15px] leading-[1.9] text-muted">
              <p>
                第一次當導演，是世新廣電的畢業製作。
                之後拍了 15 年，MV、短片、演唱會、展演都做過。
                客戶有政府機關、國際精品、建設公司，也有社企和公益團體。
              </p>
              <p>
                另一半的時間在教會。
                台北靈糧堂 Holywood 影視團隊，一待就是二十年。
                也陪十多間教會把影像團隊從零組起來。
                在業界學到的帶回教會，在教會長出來的再帶出去。
              </p>
              <p>
                2026 年，兩檔節目每週更新，五場多平台直播全程沒斷，
                還編了一本 208 頁的攝影合輯。
              </p>
            </div>

            <FadeInStagger className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              {[
                { value: "15+", label: "年影像經驗" },
                { value: "30+", label: "音樂 MV" },
                { value: "02", label: "檔週更節目" },
                { value: "05", label: "場多平台直播" },
              ].map((stat) => (
                <FadeInItem key={stat.label}>
                  <div className="border-t border-accent/25 pt-4">
                    <p className="font-mono text-3xl font-light text-accent">{stat.value}</p>
                    <p className="mt-2 text-[11px] tracking-wider text-muted">{stat.label}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
