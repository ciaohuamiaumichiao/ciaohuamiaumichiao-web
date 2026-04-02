export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          {/* Label */}
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-accent-dim uppercase">
              About
            </p>
            <h2 className="mt-2 text-3xl font-light tracking-tight">
              張正杰
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-base leading-relaxed text-muted">
            <p>
              導演、策展人。擎光媒體工作室、甚好創意。
            </p>
            <p>
              從導演、企劃、製片規劃到現場統籌與剪輯，作品涵蓋 MV、短片、演唱會及各類展演製作。
              合作對象橫跨政府機關、國際精品、建設集團到社會企業、公益組織。
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-4">
              {[
                { value: "15+", label: "年影像經驗" },
                { value: "30+", label: "音樂 MV" },
                { value: "策展", label: "展覽策劃" },
                { value: "全端", label: "數位建置" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-light text-accent">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
