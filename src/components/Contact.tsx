"use client";

import { FadeIn } from "./FadeIn";

const contactLinks = [
  {
    label: "Email",
    value: "ciaohuamiaumichiao@gmail.com",
    href: "mailto:ciaohuamiaumichiao@gmail.com",
  },
  {
    label: "LINE@",
    value: "@097eutou 小花貓咪叫",
    href: "https://line.me/R/ti/p/@097eutou",
  },
  {
    label: "Instagram",
    value: "@ciaohuamiaumichiao",
    href: "https://www.instagram.com/ciaohuamiaumichiao",
  },
  {
    label: "YouTube",
    value: "小花貓咪叫 ciaohuamiaumichiao",
    href: "https://www.youtube.com/channel/UCfxcum7XC4qB-jFbH1qjE-Q",
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <FadeIn>
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent-dim">
              Contact
            </p>
            <h2 className="mt-3 text-4xl tracking-tight lg:text-5xl">聯絡方式</h2>
            <div className="mt-4 h-px w-12 bg-accent/30" />
            <p className="mt-8 text-[15px] leading-[1.85] text-muted">
              無論是影像製作、藝術顧問或數位建置需求，
              歡迎透過以下方式聯繫。
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="group block border-b border-border/30 pb-6 transition-colors last:border-0"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent-dim transition-colors group-hover:text-accent">
                    {link.label}
                  </p>
                  <p className="mt-2 text-lg transition-colors group-hover:text-accent">
                    {link.value}
                  </p>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
