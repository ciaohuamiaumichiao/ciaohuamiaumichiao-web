"use client";

import { FadeIn } from "./FadeIn";
import { SectionSlate } from "./SectionSlate";

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
        <SectionSlate index="10" en="Contact" zh="來聊聊" note="ROLL CREDITS" />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <FadeIn>
            <p className="max-w-md text-[15px] leading-[1.9] text-muted">
              影像、節目、直播、網站，或只是還說不清楚的一個想法，
              都歡迎來聊。案子是聊出來的。
            </p>
            <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-muted/60">
              Taipei, Taiwan · UTC+8
            </p>
          </FadeIn>

          {/* 片尾字幕卷 */}
          <FadeIn delay={0.2}>
            <div>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="group flex items-baseline justify-between gap-6 border-b border-border/30 py-5 transition-colors first:border-t first:border-border/30 hover:bg-surface/40 sm:px-3"
                >
                  <p className="shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] text-accent-dim transition-colors group-hover:text-accent">
                    {link.label}
                  </p>
                  <p className="text-right text-[15px] transition-colors group-hover:text-accent">
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
