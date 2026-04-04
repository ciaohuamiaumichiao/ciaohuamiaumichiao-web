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
    price: "專案報價 NT$50,000 起",
  },
  {
    number: "02",
    title: "影像與藝術顧問",
    subtitle: "Film & Art Consulting",
    description:
      "從策展規劃到影像團隊的建立與成長陪跑。協助機構與品牌釐清視覺方向，也陪伴新創影像團隊從零開始站穩腳步。",
    items: ["展覽策劃與藝術指導", "影像團隊組建與培訓", "創作方向與風格定位", "團隊成長陪跑顧問", "品牌視覺策略"],
    price: "初次諮詢 NT$5,000 + 執行費（可依階段合作）",
  },
  {
    number: "03",
    title: "創意數位建置",
    subtitle: "Creative Digital Solutions",
    description:
      "為品牌與機構量身打造網站、數位系統與線上平台，同時提供影音硬體規劃與系統整合，從軟體到硬體一站完成。",
    items: ["品牌官網與展覽網站", "管理系統與排班平台", "影音硬體規劃與建置", "直播／錄影系統整合", "數位策略顧問"],
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

                <span className="font-mono text-[10px] tracking-wider text-accent/50">
                  {service.number}
                </span>

                <h3 className="mt-5 text-2xl tracking-tight">{service.title}</h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted/50">
                  {service.subtitle}
                </p>

                <p className="mt-5 text-sm leading-relaxed text-muted/80">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[13px] text-muted/70"
                    >
                      <span className="h-px w-4 bg-accent/25 transition-all group-hover:w-6 group-hover:bg-accent/40" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-border/40 pt-5">
                  <p className="font-mono text-[11px] text-accent/70">
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
