export function Backstage() {
  return (
    <section id="backstage" className="border-t border-border px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Left */}
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-accent-dim uppercase">
              Community
            </p>
            <h2 className="mt-2 text-3xl font-light tracking-tight">
              the Backstage<br />
              <span className="text-muted">幕後人聚場</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              給每一個在某個人的幕後，默默付出的人。
              <br />
              一個讓人願意持續留下來的地方。
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              源自「Backstage is a WORLD」攝影展，2026 年成立的社群平台。
              關注志工、教會同工、非營利工作者與展演幕後協作者的
              <span className="text-foreground">熱情續航</span>、
              <span className="text-foreground">能量管理</span>與
              <span className="text-foreground">技能成長</span>。
            </p>
          </div>

          {/* Right */}
          <div className="space-y-8">
            {/* 核心信念 */}
            <div>
              <h3 className="text-sm font-medium tracking-wide text-accent">核心信念</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "每一個幕後都是主角",
                  "願意付出的人值得被好好照顧",
                  "服務是一種節奏，可持續才能走得遠",
                  "走在一起，看見彼此，走得更遠",
                ].map((belief) => (
                  <li key={belief} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-px w-3 shrink-0 bg-accent/40" />
                    {belief}
                  </li>
                ))}
              </ul>
            </div>

            {/* 社群節奏 */}
            <div>
              <h3 className="text-sm font-medium tracking-wide text-accent">社群節奏</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {[
                  { freq: "每週", content: "幕後人金句或短文" },
                  { freq: "每月", content: "30 分鐘線上小聚" },
                  { freq: "每兩月", content: "幕後者故事專訪" },
                  { freq: "每半年", content: "旗艦聚會與工作坊" },
                ].map((item) => (
                  <div key={item.freq} className="rounded-lg border border-border/50 bg-surface p-4">
                    <p className="font-mono text-xs text-accent-dim">{item.freq}</p>
                    <p className="mt-1 text-sm text-muted">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://backstageworld.vercel.app/community.html"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-accent/30 px-6 py-2.5 text-center text-sm text-accent transition-all hover:border-accent hover:bg-accent/10"
              >
                了解更多
              </a>
              <a
                href="https://lin.ee/097eutou"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                加入社群
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
