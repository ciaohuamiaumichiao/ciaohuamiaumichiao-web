"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

const services = [
  {
    number: "01",
    title: "影像製作",
    subtitle: "Film & Video Production",
    description:
      "企業形象片、紀錄片、展覽紀錄、活動側拍。從前期企劃、現場執導到後期剪輯，提供完整的影像製作服務。",
    items: ["企業形象影片", "紀錄片", "展覽紀錄", "活動側拍", "後期剪輯"],
    steps: [
      { label: "需求訪談", desc: "了解目標、受眾與預算" },
      { label: "企劃提案", desc: "腳本、分鏡與製作規劃" },
      { label: "前期籌備", desc: "場勘、選角、團隊組建" },
      { label: "拍攝執行", desc: "現場執導與影像紀錄" },
      { label: "後期剪輯", desc: "剪接、調色、混音" },
      { label: "交片驗收", desc: "修改確認與檔案交付" },
    ],
    price: "專案報價 NT$50,000 起",
  },
  {
    number: "02",
    title: "影像與藝術顧問",
    subtitle: "Film & Art Consulting",
    description:
      "從策展規劃到影像團隊的建立與成長陪跑。協助品牌與創作者釐清視覺方向、建立短影音策略，也陪伴新創影像團隊從零開始站穩腳步。",
    items: ["展覽策劃與藝術指導", "影像團隊組建與培訓", "短影音內容策略顧問", "社群團隊成長陪跑顧問", "品牌視覺策略"],
    steps: [
      { label: "初次諮詢", desc: "釐清現況、痛點與目標" },
      { label: "診斷報告", desc: "團隊與內容健檢分析" },
      { label: "策略規劃", desc: "視覺方向與內容藍圖" },
      { label: "陪跑執行", desc: "定期指導與實作回饋" },
      { label: "階段檢視", desc: "成效評估與策略調整" },
    ],
    price: "初次諮詢 NT$5,000 + 執行費（可依階段合作）",
  },
  {
    number: "03",
    title: "創意數位建置",
    subtitle: "Creative Digital Solutions",
    description:
      "為品牌與機構量身打造網站、數位系統與線上平台，同時提供影音硬體規劃與系統整合，從軟體到硬體一站完成。",
    items: ["品牌官網與展覽網站", "管理系統與排班平台", "影音硬體規劃與建置", "直播／錄影系統整合", "數位策略顧問"],
    steps: [
      { label: "需求訪談", desc: "功能需求與技術評估" },
      { label: "規劃提案", desc: "架構設計與報價確認" },
      { label: "設計開發", desc: "UI 設計與系統建置" },
      { label: "測試上線", desc: "功能測試與正式部署" },
      { label: "維護支援", desc: "持續優化與技術支援" },
    ],
    price: "網站建置 NT$60,000 起 + 維護方案",
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent-dim">
            Services
          </p>
          <h2 className="mt-3 text-4xl tracking-tight lg:text-5xl">服務項目</h2>
          <div className="mt-4 h-px w-12 bg-accent/30" />
        </FadeIn>

        <FadeInStagger className="mt-20 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <FadeInItem key={service.number}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface p-8 transition-all duration-500 hover:border-accent/30 hover:bg-surface/80">
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/0 blur-[60px] transition-all duration-700 group-hover:bg-accent/[0.06]" />

                <span className="font-mono text-[10px] tracking-wider text-accent-dim">
                  {service.number}
                </span>

                <h3 className="mt-5 text-2xl tracking-tight">{service.title}</h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted">
                  {service.subtitle}
                </p>

                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[13px] text-muted"
                    >
                      <span className="h-px w-4 bg-accent/25 transition-all group-hover:w-6 group-hover:bg-accent/40" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Service Steps */}
                <div className="mt-8 border-t border-border/40 pt-6">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-accent-dim">
                    Process
                  </p>
                  <ol className="relative space-y-0">
                    {service.steps.map((step, i) => (
                      <li key={step.label} className="relative flex gap-3 pb-4 last:pb-0">
                        {/* Vertical line */}
                        {i < service.steps.length - 1 && (
                          <div className="absolute left-[9px] top-5 h-full w-px bg-border/50" />
                        )}
                        {/* Step dot */}
                        <div className="relative z-10 mt-[3px] flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border border-accent/30 bg-surface">
                          <span className="font-mono text-[8px] text-accent">
                            {i + 1}
                          </span>
                        </div>
                        {/* Step content */}
                        <div className="min-w-0">
                          <p className="text-[13px] leading-tight">{step.label}</p>
                          <p className="mt-0.5 text-[11px] leading-snug text-muted">
                            {step.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-6 border-t border-border/40 pt-5">
                  <p className="font-mono text-[11px] text-accent">
                    {service.price}
                  </p>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
