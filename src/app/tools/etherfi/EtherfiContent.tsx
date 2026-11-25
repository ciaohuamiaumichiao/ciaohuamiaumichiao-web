import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { SectionSlate } from "@/components/SectionSlate";
import {
  ETHERFI_CHECKED_DATE,
  ETHERFI_HELP,
  ETHERFI_URL,
  etherfiFaqs,
  etherfiMerchants,
  etherfiMonths,
  etherfiStats,
  etherfiTiers,
} from "../data";

const LINE_URL = `https://line.me/R/oaMessage/%40097eutou/?${encodeURIComponent(
  "你好，我看了你的 ether.fi 實測，想問＿＿。"
)}`;

/* 5/24 那次被拒到扣成功的完整經過，時間是 CSV 裡的 UTC 換成台灣時間 */
const DECLINE_LOG = [
  { time: "18:16", what: "AI 工具訂閱 100 美元", status: "被拒絕" },
  { time: "21:22", what: "儲值 110 USDT", status: "入帳" },
  { time: "21:23", what: "AI 工具訂閱 100 美元", status: "扣款成功" },
  { time: "21:31", what: "剪輯軟體訂閱 24 美元", status: "被拒絕 ×2" },
];

function HelpLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-1 underline decoration-muted/40 underline-offset-4 hover:text-accent"
    >
      {children}
    </a>
  );
}

function AffiliateLink({ children, primary = false }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <a
      href={ETHERFI_URL}
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
    <aside aria-label="推薦連結揭露" className="border border-accent/30 bg-surface px-6 py-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">推薦連結揭露</p>
      <p className="mt-3 text-[14px] leading-[1.9] text-foreground/85">
        這頁的 ether.fi 按鈕是我的推薦連結，你用它註冊、開卡、刷滿 100 美元，我會拿到 10 美元，之後你刷卡的 0.1% 也會分給我，細節寫在
        <HelpLink href={ETHERFI_HELP.affiliate}>官方的推薦計畫</HelpLink>
        。你這邊拿到的回饋跟直接去官網註冊一樣，沒有多也沒有少。ether.fi 沒有看過這篇，數字都是我帳戶裡匯出來的，你再自己判斷喔。
      </p>
    </aside>
  );
}

export function EtherfiContent() {
  const maxSpend = Math.max(...etherfiMonths.map((m) => m.spend));

  return (
    <main className="pt-24">
      {/* ── Hero ── */}
      <section className="px-6 pb-20 pt-16 lg:pt-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="font-mono text-[10px] tracking-[0.15em] text-accent">
              FIELD NOTES
              <span className="ml-4 uppercase text-muted">工具實測｜更新於 {ETHERFI_CHECKED_DATE}</span>
            </p>
            <h1 className="mt-8 max-w-4xl text-4xl leading-[1.25] tracking-tight lg:text-6xl lg:leading-[1.2]">
              ether.fi Cash 卡在台灣好用嗎？
              <br />
              我半年刷 1,353 美元的帳單
            </h1>
            <p className="mt-8 max-w-2xl text-[15px] leading-[1.9] text-muted">
              我是張正杰，拍片的導演，每個月要付的訂閱一大堆，AI 工具、直播推流、影音平台，幾乎都是美元計價，這張 ether.fi Cash 卡就是我專門拿來付這些的。我把 5 月到 10 月的交易紀錄整個匯出來看，半年刷了 1,353 美元，拿回 37.6 美元的回饋，然後被拒絕了 47 次，比成功的次數還多，說起來有點丟臉，不過這也是我最想跟你講的事。
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-10 max-w-2xl">
              <Disclosure />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AffiliateLink primary>從我的連結看 ether.fi Cash →</AffiliateLink>
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
          <SectionSlate index="01" en="Receipt" zh="半年刷了什麼、拿回多少" note="2026.05–10" />

          <FadeInStagger className="mt-14 grid grid-cols-2 gap-px border border-border/60 bg-border/60 lg:grid-cols-4">
            {etherfiStats.map((s) => (
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
              <h3 className="text-lg tracking-tight">每個月刷多少、回饋多少</h3>
              <ul className="mt-6 space-y-4">
                {etherfiMonths.map((m) => (
                  <li key={m.month} className="grid grid-cols-[3rem_1fr] items-center gap-3">
                    <span className="text-[13px] text-foreground/85">{m.month}</span>
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="block h-2 rounded-r-[4px] bg-accent"
                        style={{ width: `${(m.spend / maxSpend) * 58}%` }}
                      />
                      <span className="shrink-0 font-mono text-[11px] text-muted">
                        ${m.spend.toFixed(0)}
                        <span className="ml-2 text-accent/80">回饋 ${m.cashback.toFixed(2)}</span>
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-14 text-lg tracking-tight">錢都刷去哪了</h3>
              <div className="mt-6 overflow-x-auto border border-border/60">
                <table className="w-full min-w-[480px] text-left text-[13px]">
                  <thead className="bg-surface font-mono text-[10px] tracking-[0.1em] text-muted">
                    <tr>
                      <th scope="col" className="px-5 py-3.5 font-normal">類別</th>
                      <th scope="col" className="px-5 py-3.5 font-normal">筆數</th>
                      <th scope="col" className="px-5 py-3.5 font-normal">美元</th>
                      <th scope="col" className="px-5 py-3.5 font-normal">備註</th>
                    </tr>
                  </thead>
                  <tbody>
                    {etherfiMerchants.map((m) => (
                      <tr key={m.name} className="border-t border-border/60 align-top">
                        <td className="px-5 py-3.5 leading-relaxed text-foreground/85">{m.name}</td>
                        <td className="px-5 py-3.5 font-mono text-[12px] text-muted">{m.count}</td>
                        <td className="px-5 py-3.5 font-mono text-[12px] text-foreground/85">{m.spend.toFixed(2)}</td>
                        <td className="px-5 py-3.5 leading-relaxed text-muted">{m.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[12px] leading-relaxed text-muted">
                只算扣款成功的，從 ether.fi 匯出的交易紀錄加總，回饋是 App 裡用美元標示的金額。
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-5 text-[15px] leading-[1.9] text-muted">
                <p>
                  一個月平均兩百多美元，回饋六、七美元，大概就是一杯咖啡吧，不會讓你發財，這個要先講清楚。
                </p>
                <p>
                  44 筆裡面有 43 筆都剛好是 3%，連台幣計價的影音訂閱也是，479 元換成 15.39 美元，回饋 0.46 美元，換成美元之後照算。唯一的例外是 5 月一筆 100 美元的 AI 工具訂閱，扣款成功但回饋是 0，原因我還沒去問客服。
                </p>
                <p>
                  你會發現我完全沒有在台灣的實體店刷過，因為我手上只有虛擬卡，拿它刷的也全部都是線上訂閱，所以去夜市、超商能不能刷，這篇沒辦法回答你。
                </p>
                <p className="text-foreground/85">
                  我帳戶裡的累積回饋是 96.37 美元，比這半年的 37.6 多，因為更早之前就在用了。推薦收入，寫這篇的時候是 0。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 被拒絕 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="02" en="Declined" zh="為什麼我被拒絕了 47 次" note="47 DECLINES" />
          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <FadeIn>
              <div className="space-y-5 text-[15px] leading-[1.9] text-muted">
                <p>
                  這張卡要先把錢放進帳戶才刷得過，而我的壞習慣就是等扣款失敗了才去儲值，偏偏訂閱的商家被拒之後，隔一兩天又會再扣一次，所以一個訂閱沒繳成功，紀錄上就會冒出好幾筆被拒絕，47 次就是這樣累積出來的，真的不是卡壞掉啦。
                </p>
                <p>
                  右邊是 5 月 24 號那天的經過，被拒、儲值、一分鐘後就扣成功，半年來很多次都是這個模式。
                  <HelpLink href={ETHERFI_HELP.declined}>官方的說明</HelpLink>
                  也把餘額不足列成最常見的原因。
                </p>
                <p className="text-foreground/85">
                  所以如果你也想拿它付訂閱，月初先放一個月的量進去，就不會像我這樣三不五時扣款失敗了。
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="min-w-0">
              <div className="border border-border/60 bg-surface">
                <p className="border-b border-border/60 px-5 py-3.5 font-mono text-[10px] tracking-[0.12em] text-muted">
                  2026.05.24　台灣時間
                </p>
                <ol>
                  {DECLINE_LOG.map((d) => (
                    <li
                      key={d.time + d.what}
                      className="grid grid-cols-[3.5rem_1fr_auto] items-baseline gap-4 border-b border-border/40 px-5 py-4 last:border-b-0"
                    >
                      <span className="font-mono text-[12px] text-muted">{d.time}</span>
                      <span className="text-[14px] text-foreground/85">{d.what}</span>
                      <span
                        className={`font-mono text-[11px] ${
                          d.status.startsWith("被拒") ? "text-muted" : "text-accent"
                        }`}
                      >
                        {d.status}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
              <p className="mt-4 text-[13px] leading-[1.8] text-muted">
                同一天的剪輯軟體，之後兩天又重扣了兩次，四次都沒過，這也算在 47 次裡面。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 規則 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="03" en="Rate Card" zh="回饋、會員等級和手續費" note={ETHERFI_CHECKED_DATE} />
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <FadeIn className="min-w-0">
              <div className="overflow-x-auto border border-border/60">
                <table className="w-full min-w-[520px] text-left text-[13px]">
                  <thead className="bg-surface font-mono text-[10px] tracking-[0.1em] text-muted">
                    <tr>
                      <th scope="col" className="px-5 py-4 font-normal">等級</th>
                      <th scope="col" className="px-5 py-4 font-normal">費用</th>
                      <th scope="col" className="px-5 py-4 font-normal">3% 回饋的額度</th>
                      <th scope="col" className="px-5 py-4 font-normal">換匯加收</th>
                    </tr>
                  </thead>
                  <tbody>
                    {etherfiTiers.map((t) => (
                      <tr key={t.name} className="border-t border-border/60 align-top">
                        <td className="px-5 py-4 text-foreground">{t.name}</td>
                        <td className="px-5 py-4 leading-relaxed text-foreground/85">
                          {t.price}
                          <span className="block text-[12px] text-muted">{t.unlock}</span>
                        </td>
                        <td className="px-5 py-4 leading-relaxed text-muted">{t.band}</td>
                        <td className="px-5 py-4 font-mono text-[12px] text-muted">{t.fx}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[12px] leading-relaxed text-muted">
                整理自官方說明中心的
                <HelpLink href={ETHERFI_HELP.cashback}>回饋規則</HelpLink>、
                <HelpLink href={ETHERFI_HELP.membership}>會員等級</HelpLink>和
                <HelpLink href={ETHERFI_HELP.fx}>換匯費用</HelpLink>
                。超過 3% 的額度之後，會降到 1%，再往上是 0.5%。另外還有邀請制的 VIP，這裡不列。規則改得很勤，申請前請以 App 裡看到的為準。
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="space-y-5 text-[15px] leading-[1.9] text-muted">
                <p>
                  回饋不是現金，這點最容易誤會。它先用美元算，消費清算之後換成 ETHFI 代幣，鎖 7 天，可領的超過 5 美元才領得出來，ETHFI 的價格會動，所以領的時候值多少，跟刷卡當下算的不一定一樣。
                </p>
                <p>
                  刷台幣這種要換匯的，官方寫 Core 會在匯率上最多再加 0.5%，所以我那些台幣計價的訂閱，扣掉這筆，最差大概剩 2.5%，美元計價的才是完整的 3%。
                </p>
                <p>
                  在台灣儲值也要先想好，官方的法幣入金方式裡沒有台幣，我這半年 15 次儲值全部都是 USDT。實體卡台灣寄得到，不過要付運費，金額以 App 裡寫的為準。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 誰適合 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="04" en="Fit Check" zh="誰適合，誰先不要辦" note="HONEST NOTES" />
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <FadeIn className="h-full">
              <div className="h-full border border-accent/30 bg-surface p-7">
                <h3 className="text-lg tracking-tight">我覺得適合你，如果</h3>
                <div className="mt-4 space-y-4 text-[14px] leading-[1.9] text-muted">
                  <p>你手上本來就有 USDT 之類的穩定幣，想直接拿來付日常開銷，不想每次都先換回台幣。</p>
                  <p>你每個月有一堆美元計價的軟體訂閱，美元的消費拿得到完整的 3%，這是我覺得它最划算的地方。</p>
                  <p>你不介意自己管餘額，或是願意月初先儲值一次。</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="h-full">
              <div className="h-full border border-border/60 bg-surface p-7">
                <h3 className="text-lg tracking-tight">可能要再想一下，如果</h3>
                <div className="mt-4 space-y-4 text-[14px] leading-[1.9] text-muted">
                  <p>你從來沒碰過加密貨幣。光是開交易所帳戶、買 USDT、轉過去，就多了好幾道手續和費用，為了 3% 回饋不一定划算。</p>
                  <p>你想要訂閱綁上去就不用管。我被拒絕 47 次就是最好的例子。</p>
                  <p>你想要台幣現金回饋。這裡拿到的是 ETHFI，價格會漲也會跌。</p>
                  <p>你一個月刷超過 2,000 美元。免費的 Core 超過這個額度就降到 1%，再往上只剩 0.5%。</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 風險 ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="05" en="Fine Print" zh="辦之前要知道的風險" note="READ THIS" />
          <FadeIn>
            <div className="mt-14 max-w-3xl space-y-5 text-[15px] leading-[1.9] text-muted">
              <p>
                ether.fi 在自己的文件上寫得很清楚，它不是受監管的金融機構，產品也不是每個地區都能用。這張卡是發卡機構拿 Visa 的授權發的，跟 ether.fi 的協議是兩回事，各有各的條款。
              </p>
              <p>
                我的卡一直開在 Borrow Mode，意思是拿帳戶裡的資產當擔保先刷、之後再還，它本質上是借款。我儲值的都是 USDT 這種穩定幣，波動比較小，但不代表零風險，如果你拿會大漲大跌的幣當擔保，就更要先把官方的條款看完。
              </p>
              <p className="text-foreground/85">
                這頁只寫我拿它刷卡付訂閱的經驗，不是投資建議，ether.fi 的質押、收益這些我都沒有寫，也不建議你因為這篇去買任何幣。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionSlate index="06" en="FAQ" zh="ether.fi Cash 常見問題" note={`${etherfiFaqs.length} QUESTIONS`} />
          <FadeIn>
            <div className="mt-14 border-t border-border/60">
              {etherfiFaqs.map((f) => (
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
                這是推薦連結，你開卡刷卡我會拿到一點獎勵，也謝謝你願意用它。辦卡的時候卡在哪一步，或是想問我訂閱怎麼設定比較不會被拒，都歡迎傳 LINE 給我，我也是被拒了 47 次才摸熟的喔。
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <AffiliateLink primary>前往 ether.fi Cash →</AffiliateLink>
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
