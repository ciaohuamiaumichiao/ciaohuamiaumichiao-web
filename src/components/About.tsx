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
                我是台南人，世新廣電電影組畢業的，而且是最後一屆聯考喔，我自己去查過榜單，
                那年電影組的最低錄取分數就是我，說是吊車尾擠進去的也不為過吧！
                畢業製作第一次當導演，然後就這樣一路拍到現在，十五年過去了，MV、短片、演唱會、展演都做過，
                客戶從政府機關、國際精品、建設公司，一路到社企和公益團體都有。
              </p>
              <p>
                另一半的時間在教會。剛進台北靈糧堂的時候，看著台上的畫面，心裡想說這也拍得太醜了吧，
                我可是電影系的耶，進去一定可以改變世界，結果一進去，就是一個超級菜的新人⋯⋯
                後來在 Holywood 影視團隊一待就是二十年，也陪著十幾間教會，一間一間把自己的影像團隊組起來。
              </p>
              <p>
                現在外面開了兩間影像公司，接的大多是教會、公益，或者對這個社會有一點點幫助的案子，
                錢少一點真的也沒關係。今年手上有兩檔每週更新的節目、五場多平台直播，
                還編了一本 208 頁的攝影合輯，說忙是真的忙，但每一件都是我們很想做的事。
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
