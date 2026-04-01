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
              影像導演、策展人，甚好創意有限公司創辦人。
            </p>
            <p>
              專注於影像敘事與視覺體驗的創造，橫跨紀錄片、企業形象、展覽策劃與數位平台建置。
              相信每個故事都值得被好好說出來，每個空間都能成為對話的起點。
            </p>
            <p>
              近年致力於將創意產業的實務經驗轉化為可複製的數位系統，
              從排班管理到展覽網站，用技術解決創意工作者的真實痛點。
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-4">
              {[
                { value: "10+", label: "年影像經驗" },
                { value: "50+", label: "影像專案" },
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
