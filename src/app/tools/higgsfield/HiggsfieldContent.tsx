import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { SectionSlate } from "@/components/SectionSlate";
import {
  CHECKED_DATE,
  HIGGSFIELD_AFFILIATE_URL,
  HIGGSFIELD_PRICING_URL,
  HIGGSFIELD_URL,
  cases,
  faqs,
  models,
  plans,
  spend,
  stats,
} from "../data";

const LINE_URL = `https://line.me/R/oaMessage/%40097eutou/?${encodeURIComponent(
  "你好，我看了你的 Higgsfield 實測，想問＿＿。"
)}`;

const FILM_PROMPT = `a frame from a 2014 Japanese film,
shot on 35mm Fujifilm Eterna 500T motion-picture stock,
50mm lens from a pedestrian-bridge height, not a drone,
slightly underexposed, much of the frame falling into soft shadow,
gently imperfect framing, only some windows are lit,
not HDR, not oversharpened, no glossy CGI look`;

function AffiliateLink({ children, primary = false }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <a
      href={HIGGSFIELD_URL}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={
        primary
          ? "inline-block border border-accent bg-accent/10 px-7 py-3.5 text-sm tracking-wide text-accent transition-colors hover:bg-accent hover:text-background"
          : "text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-bright"
      }
    >
      {children}
    </a>
  );
}

function Disclosure() {
  return (
    <aside aria-label="聯盟行銷揭露" className="border border-accent/30 bg-surface px-6 py-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">聯盟行銷揭露</p>
      <p className="mt-3 text-[14px] leading-[1.9] text-foreground/85">
        這頁的 Higgsfield 按鈕是我的聯盟連結，你從這裡訂閱，我會拿到分潤，官方寫的是
        <a
          href={HIGGSFIELD_AFFILIATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1 underline decoration-foreground/30 underline-offset-4 hover:text-accent"
        >
          最高 25%、最長 12 個月
        </a>
        。Higgsfield 沒有看過這篇，下面的數字都是我自己帳戶裡的紀錄，不好用的地方我也照寫，你再自己判斷喔。
      </p>
    </aside>
  );
}

export function HiggsfieldContent() {
  const max = Math.max(...spend.map((s) => s.credits));

  return (
    <main className="pt-24">
      {/* ── Hero ── */}
      <section className="px-6 pb-20 pt-16 lg:pt-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="font-mono text-[10px] tracking-[0.15em] text-accent">
              FIELD NOTES
              <span className="ml-4 uppercase text-muted">工具實測｜更新於 {CHECKED_DATE}</span>
            </p>
            <h1 className="mt-8 max-w-4xl text-4xl leading-[1.25] tracking-tight lg:text-6xl lg:leading-[1.2]">
              Higgsfield 值得訂嗎？
              <br />
              我 13 天花掉 1,100 點的實測
            </h1>
            <p className="mt-8 max-w-2xl text-[15px] leading-[1.9] text-muted">
              我是張正杰，拍片拍了十五年的導演，10 月中開了 Higgsfield 的帳號，10 月 20 號開始認真用，用到 11 月 1 號半夜，帳戶裡只剩 0.5 點，大概只夠再生兩張最低規格的圖，說來也是滿好笑的。所以這篇就照帳單來講，錢花在哪裡，哪些鏡頭真的拿得出去，哪些點數根本是在繳學費，都寫給你看。
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-10 max-w-2xl">
              <Disclosure />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AffiliateLink primary>從我的連結看 Higgsfield →</AffiliateLink>
              <a
                href="#receipt"
                className="border border-border px-7 py-3.5 text-sm tracking-wide text-muted transition-colors hover:border-accent/40 hover:text-foreground"
              >
                先看我的帳單
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 帳單 ── */}
      <section id="receipt" className="scroll-mt-24 border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="01" en="Receipt" zh="我的點數花去哪了" note="MY ACCOUNT" />

          <FadeInStagger className="mt-14 grid grid-cols-2 gap-px border border-border/60 bg-border/60 lg:grid-cols-4">
            {stats.map((s) => (
              <FadeInItem key={s.label} className="h-full">
                <div className="h-full bg-surface p-6 lg:p-8">
                  <p className="text-4xl tracking-tight lg:text-5xl">
                    {s.value}
                    <span className="ml-1.5 text-sm text-muted">{s.unit}</span>
                  </p>
                  <p className="mt-3 text-[12px] leading-relaxed text-muted">{s.label}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
            <FadeIn className="min-w-0">
              <h3 className="text-lg tracking-tight">各模型用掉的點數</h3>
              <ul className="mt-6 space-y-4">
                {spend.map((s) => (
                  <li key={s.name} className="grid grid-cols-[7.5rem_1fr] items-center gap-3 sm:grid-cols-[9.5rem_1fr]">
                    <span className="text-[13px] leading-snug text-foreground/85">{s.name}</span>
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="block h-2 rounded-r-[4px] bg-accent"
                        style={{ width: `${Math.max((s.credits / max) * 62, 1.5)}%` }}
                      />
                      <span className="shrink-0 font-mono text-[11px] text-muted">
                        {s.credits} 點<span className="ml-2 text-muted/70">{s.note}</span>
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[12px] leading-relaxed text-muted">
                數字四捨五入，從帳戶的扣點紀錄加總，加起來和總額會差幾點。失敗退回的點數沒有算進去。
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-5 text-[15px] leading-[1.9] text-muted">
                <p>
                  一天平均 85 點，這個速度真的不太正常吧。主要是因為我透過 Claude Code 接 MCP 在用，常常一次丟八張圖出去，等它跑完再丟八張，很爽，然後點數就沒了。
                </p>
                <p>
                  同樣是 GPT Image 2.5，便宜的一張 0.25 點，規格開滿一張 4.25 點，差了 17 倍，所以同一個模型開什麼規格，帳單就會差很多。
                </p>
                <p className="text-foreground/85">
                  如果你只記一件事，就是先用最低規格把方向試出來，定案了再開高規格。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 案例 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="02" en="On Set" zh="我實際拿它做了什麼" note="4 JOBS" />
          <FadeInStagger className="mt-14 grid gap-5 sm:grid-cols-2">
            {cases.map((c) => (
              <FadeInItem key={c.title} className="h-full">
                <article className="h-full border border-border/60 bg-surface p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-accent">{c.tag}</span>
                    <span className="font-mono text-[10px] text-muted">{c.cost}</span>
                  </div>
                  <h3 className="mt-5 text-lg tracking-tight">{c.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.9] text-muted">{c.desc}</p>
                </article>
              </FadeInItem>
            ))}
          </FadeInStagger>
          <FadeIn>
            <p className="mt-6 text-[12px] leading-relaxed text-muted">
              這幾個都是還在進行或客戶的案子，所以先不放畫面，也不寫案名，之後能公開的我再補上來。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── 模型 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="03" en="Lens Kit" zh="Higgsfield 裡的模型怎麼選" note="BILLED CREDITS" />
          <FadeIn>
            <p className="mt-10 max-w-2xl text-[15px] leading-[1.9] text-muted">
              點數是我帳單上實際扣的，跟官網的估算表不一定一樣，因為它會隨規格和設定變動，你就當作一個導演的選鏡頭筆記來看吧。
            </p>
            <div className="mt-10 overflow-x-auto border border-border/60">
              <table className="w-full min-w-[640px] text-left text-[13px]">
                <thead className="bg-surface font-mono text-[10px] tracking-[0.1em] text-muted">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-normal">想做的事</th>
                    <th scope="col" className="px-5 py-4 font-normal">我用</th>
                    <th scope="col" className="px-5 py-4 font-normal">實際扣點</th>
                    <th scope="col" className="px-5 py-4 font-normal">心得</th>
                  </tr>
                </thead>
                <tbody>
                  {models.map((m) => (
                    <tr key={m.model} className="border-t border-border/60 align-top">
                      <td className="px-5 py-4 leading-relaxed text-foreground/85">{m.job}</td>
                      <td className="px-5 py-4 leading-relaxed text-foreground">{m.model}</td>
                      <td className="px-5 py-4 font-mono text-[12px] leading-relaxed text-muted">{m.cost}</td>
                      <td className="px-5 py-4 leading-relaxed text-muted">{m.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 導演筆記 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="04" en="Director's Notes" zh="繳完學費才知道的三件事" note="PROMPT NOTES" />
          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <FadeIn>
              <div className="space-y-10">
                <div>
                  <h3 className="text-lg tracking-tight">首尾幀差太多，Kling 會偷偷溶接</h3>
                  <p className="mt-3 text-[15px] leading-[1.9] text-muted">
                    從全島地圖切到街區，或從 A 棟切到 B 棟，它中間就會幫你淡過去，整個穿幫。後來我從一支參考片學到，在 prompt 裡寫一個前景遮擋物，樹幹掃過鏡頭、衝進雲層、穿過門框都可以，遮住畫面的那一瞬間就是換場點，看起來就像 FPV 穿越機的一鏡到底了。
                  </p>
                </div>
                <div>
                  <h3 className="text-lg tracking-tight">真實的東西不要交給 AI 畫</h3>
                  <p className="mt-3 text-[15px] leading-[1.9] text-muted">
                    地圖的邊界我用真實的 GeoJSON 自己畫好，再請 GPT Image 2.5 照著轉成衛星質感，形狀和位置就都會保留。中文字也一樣，標題最後一律用真的字型排上去。我還試過把平面的書頁貼到 AI 生成的書上，弧度和光線怎麼樣都對不上，最後只讓 AI 生空桌子，書用 3D 模型算出來才過關。
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="min-w-0">
              <h3 className="text-lg tracking-tight">想去掉 AI 感，描述那部片，別描述好看</h3>
              <p className="mt-3 text-[15px] leading-[1.9] text-muted">
                我第一版的飛行動畫，光靠調色怎麼救都還是很 AI，因為問題在畫面本身，每個角落都打亮，構圖太工整，樹和人都太完美。重生關鍵幀的時候，我改寫年代、底片、鏡頭高度和不完美的地方，還有一個重點，不要寫 cinematic，它會把畫面推回商業渲染圖。
              </p>
              <pre className="mt-6 whitespace-pre-wrap break-words border border-border/60 bg-surface p-5 font-mono text-[12px] leading-[1.9] text-foreground/85">
                <code>{FILM_PROMPT}</code>
              </pre>
              <p className="mt-4 text-[13px] leading-[1.8] text-muted">
                再放幾個生活雜物進去，電鍋、書包、拖鞋、便利商店的塑膠袋，那個是枝裕和的味道，很多就是藏在這些東西裡面的吧。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 誰適合 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="05" en="Fit Check" zh="誰適合，誰先不要訂" note="HONEST NOTES" />
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <FadeIn className="h-full">
              <div className="h-full border border-accent/30 bg-surface p-7">
                <h3 className="text-lg tracking-tight">我覺得適合你，如果</h3>
                <div className="mt-4 space-y-4 text-[14px] leading-[1.9] text-muted">
                  <p>你常要在開拍前把腦袋裡的畫面做給客戶看，以前要畫分鏡、找參考，現在一天之內就可以有一支會動的 sample 了，這是我覺得最值回票價的地方。</p>
                  <p>你想比較不同模型，又不想一家一家訂閱。</p>
                  <p>你已經懂鏡頭語言，知道自己要什麼。它很吃這個，你講得越像導演，它給得越好。</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="h-full">
              <div className="h-full border border-border/60 bg-surface p-7">
                <h3 className="text-lg tracking-tight">可能要再想一下，如果</h3>
                <div className="mt-4 space-y-4 text-[14px] leading-[1.9] text-muted">
                  <p>你主要想用 MCP 或 CLI 自動化。官網有寫，方案的 Unlimited 和免費額度只有網頁能用，走 MCP 和 CLI 都是扣點，我就是這樣噴掉的。</p>
                  <p>你要角色講話，或動作要精準對拍點。我試的時候嘴型對不上，快慢也沒辦法指定，還是要靠後期。</p>
                  <p>你要交 4K 成品。我還沒有實際驗證過 4K 動態的品質和總花費，這部分我不敢跟你掛保證。</p>
                  <p>你的案子牽涉真實人物或權利讓與。我試老照片動態的那次，人的臉就被改了，生成內容的權利也要先問法務。</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 價格 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="06" en="Rate Card" zh="Higgsfield 價格與方案" note={CHECKED_DATE} />
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <FadeIn className="min-w-0">
              <div className="overflow-x-auto border border-border/60">
                <table className="w-full min-w-[460px] text-left text-[13px]">
                  <thead className="bg-surface font-mono text-[10px] tracking-[0.1em] text-muted">
                    <tr>
                      <th scope="col" className="px-5 py-4 font-normal">方案</th>
                      <th scope="col" className="px-5 py-4 font-normal">年繳換算每月</th>
                      <th scope="col" className="px-5 py-4 font-normal">每月點數</th>
                      <th scope="col" className="px-5 py-4 font-normal">首尾幀</th>
                      <th scope="col" className="px-5 py-4 font-normal">商用</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plans.map((p) => (
                      <tr key={p.name} className="border-t border-border/60">
                        <td className="px-5 py-4 text-foreground">{p.name}</td>
                        <td className="px-5 py-4 font-mono text-[12px] text-foreground/85">{p.price}</td>
                        <td className="px-5 py-4 font-mono text-[12px] text-muted">{p.credits}</td>
                        <td className="px-5 py-4 text-muted">{p.frames}</td>
                        <td className="px-5 py-4 text-muted">{p.commercial}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[12px] leading-relaxed text-muted">
                摘自
                <a
                  href={HIGGSFIELD_PRICING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 underline decoration-muted/40 underline-offset-4 hover:text-accent"
                >
                  官網定價頁
                </a>
                ，稅另計。它的促銷變很快，請以你看到的結帳畫面為準。
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="space-y-5 text-[15px] leading-[1.9] text-muted">
                <p>
                  我是 Plus，當時入帳 1,000 點，現在官網寫的是 1,200 點，所以數字真的會變。要做我上面那種首尾幀的話，要 Plus 以上，Starter 沒有這個功能。
                </p>
                <p>
                  也因為方案越貴我的分潤可能越多，這句話請你打個折聽。我自己的建議是，先月繳一個月，拿一個真的案子跑跑看，覺得值得再考慮年繳，訂閱的點數月底不會累積，也會自動續約，這兩件事訂之前要知道喔。
                </p>
                <p>
                  從聯盟連結登入的人，官方寫的是有最高 50% 折扣，三小時內有效，實際幾折我沒辦法保證，你看結帳畫面就知道了。
                </p>
              </div>
              <div className="mt-8">
                <AffiliateLink primary>去看 Higgsfield 方案 →</AffiliateLink>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="07" en="FAQ" zh="Higgsfield 常見問題" note={`${faqs.length} QUESTIONS`} />
          <FadeIn>
            <div className="mt-14 border-t border-border/60">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-border/60">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[15px] text-foreground/90 transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                    <span>{f.q}</span>
                    <span aria-hidden="true" className="font-mono text-accent transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pb-6 text-[14px] leading-[1.9] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 結尾 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="border border-accent/20 bg-surface px-8 py-14 text-center lg:py-20">
              <h2 className="mx-auto max-w-xl text-3xl leading-snug tracking-tight lg:text-4xl">
                想試的話，就從這裡進去吧
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-[14px] leading-[1.9] text-muted">
                這是聯盟連結，你訂閱我會拿到分潤，也謝謝你願意用它。如果你也是做影像的，試出什麼好玩的做法，或是想問我哪個鏡頭怎麼做的，都很歡迎傳 LINE 給我，我也還在一邊繳學費一邊學喔。
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <AffiliateLink primary>前往 Higgsfield →</AffiliateLink>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border px-7 py-3.5 text-sm tracking-wide text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  用 LINE 問我
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
