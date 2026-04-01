const exhibitions = [
  {
    year: "2026",
    title: "Backstage is a WORLD",
    role: "策展人",
    venue: "遠企購物中心 4F & 5F",
    period: "2026.3.3 – 3.30",
    description: "攝影展，探索舞台幕後的真實世界。",
  },
  {
    year: "2025",
    title: "馬偕紀念醫院 145 週年",
    role: "影像導演",
    venue: "馬偕紀念醫院",
    period: "2025",
    description: "院慶形象影片製作，紀錄百年醫療傳承。",
  },
];

export function Exhibitions() {
  return (
    <section id="exhibitions" className="border-t border-border px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-[0.2em] text-accent-dim uppercase">
          Exhibitions & Projects
        </p>
        <h2 className="mt-2 text-3xl font-light tracking-tight">展覽與專案經歷</h2>

        <div className="mt-16 space-y-0">
          {exhibitions.map((item, i) => (
            <div
              key={i}
              className="group grid gap-4 border-b border-border py-8 first:border-t lg:grid-cols-[100px_1fr_2fr]"
            >
              <span className="font-mono text-sm text-accent-dim">
                {item.year}
              </span>

              <div>
                <h3 className="text-lg font-light">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {item.role} &middot; {item.venue}
                </p>
                <p className="font-mono text-xs text-muted">{item.period}</p>
              </div>

              <p className="text-sm leading-relaxed text-muted lg:text-right">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          更多經歷持續更新中⋯
        </p>
      </div>
    </section>
  );
}
