"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInItem } from "../FadeIn";
import { SectionSlate } from "../SectionSlate";
import { IconCamera, IconMic, IconAntenna, IconMonitor } from "../Icons";
import { EMAIL, LINKEDIN, REEL_ID, enFaq } from "./faq";

/* 英文版首頁的各區塊。對象是美國公司的招募人員與製作人：
   講成果、講怎麼遠端合作，不放台幣報價。事實以中文版首頁為準，改作品時兩邊一起改。 */

const ease = [0.25, 0.1, 0, 1] as const;

export function EnHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute inset-0"
        aria-hidden
      >
        <Image
          src="/images/backstage-control.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
      </motion.div>

      <div className="scan-line" aria-hidden />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute bottom-8 left-6 hidden font-mono text-[9px] leading-[1.9] tracking-[0.12em] text-muted sm:block lg:left-10"
        aria-hidden
      >
        <p>BASE&nbsp;&nbsp;TAIPEI, TAIWAN · UTC+8</p>
        <p>MODE&nbsp;&nbsp;REMOTE · ASYNC-FIRST</p>
        <p>OPEN&nbsp;&nbsp;FULL-TIME / CONTRACT</p>
      </motion.div>

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.05em" }}
          animate={{ opacity: 1, letterSpacing: "0.18em" }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="glow-accent font-mono text-[10px] uppercase text-accent sm:text-[11px]"
        >
          Video Producer · Creative Director · Live Streaming
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease }}
          className="mt-8 text-6xl tracking-tight sm:text-7xl lg:text-8xl"
        >
          Kimi Chang
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease }}
          className="mt-5 font-mono text-[11px] tracking-[0.2em] text-muted"
        >
          張正杰 · CHENG-CHIEH CHANG
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="mt-10 max-w-lg text-[15px] leading-[1.85] text-muted"
        >
          I direct and produce documentaries, brand films, weekly video podcasts and live broadcasts out of Taipei.
          Fifteen years in, I still cut most of it myself, now with AI tools I built to get to a first cut faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35, ease }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="frame-marks border border-accent/30 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-accent transition-colors hover:border-accent/60 hover:bg-accent/5"
          >
            See the work
          </a>
          <a
            href="#remote"
            className="frame-marks border border-border px-7 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:border-accent/40 hover:text-foreground"
          >
            How I work remotely
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="bg-accent px-7 py-3 font-mono text-[10px] uppercase tracking-[0.15em] font-medium text-background transition-opacity hover:opacity-90"
          >
            Email me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function EnAbout() {
  const meta: [string, string[]][] = [
    ["Role", ["Director · Producer · Editor"]],
    ["Studios", ["UltraLight Studio (since 2008)", "GENESIS131 Creative Inc."]],
    ["Education", ["Shih Hsin University", "B.A., Radio, Television & Film"]],
    ["Teaching", ["Christ's College Taipei", "KUA Worship Academy"]],
    ["Languages", ["Mandarin (native)", "English: written professional, conversational on calls"]],
    ["Base", ["Taipei, Taiwan · UTC+8"]],
  ];

  return (
    <section id="about" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="01" en="About" zh="About" note="EST. 15+ YRS" />

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
          <FadeIn delay={0.1}>
            <dl className="space-y-4 border-l border-accent/25 pl-6 font-mono text-[11px] leading-relaxed">
              {meta.map(([label, values]) => (
                <div key={label}>
                  <dt className="text-[9px] uppercase tracking-[0.15em] text-muted">{label}</dt>
                  {values.map((v, i) => (
                    <dd key={v} className={`${i === 0 ? "mt-1" : ""} text-foreground`}>
                      {v}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-5 text-[15px] leading-[1.9] text-muted">
              <p>
                I studied film at Shih Hsin University, directed my graduation project, and somehow never stopped.
                Since then I&apos;ve directed 30+ music videos, worked as executive director on concert tours across China, and shot
                documentaries and brand films for government agencies, luxury brands, property developers, schools
                and non-profits.
              </p>
              <p>
                I run two small studios, so I&apos;m used to owning the whole job: pitch, script, shoot, edit, color,
                delivery, and the client call afterwards. This year that meant a 60-minute documentary, two weekly
                shows and five live broadcasts.
              </p>
              <p>
                Over the past year I rebuilt my post-production around AI. I wrote pipelines that batch-transcribe
                footage, align subtitles automatically and hand me a pre-cut Final Cut Pro timeline, and I use
                generative tools like Higgsfield for previs, B-roll and short-form variations. The goal is a faster
                first cut, so there&apos;s more time left for the parts a machine can&apos;t judge.
              </p>
              <p>
                The other half of my life is church media. I&apos;ve served with the media team at Taipei Bread of
                Life Church for over twenty years and helped a dozen churches build their own video teams.
              </p>
            </div>

            <FadeInStagger className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              {[
                { value: "15+", label: "years in production" },
                { value: "30+", label: "music videos" },
                { value: "02", label: "weekly shows in 2026" },
                { value: "5/5", label: "live broadcasts, zero drops" },
              ].map((stat) => (
                <FadeInItem key={stat.label}>
                  <div className="border-t border-accent/25 pt-4">
                    <p className="font-mono text-3xl font-light text-accent">{stat.value}</p>
                    <p className="mt-2 text-[11px] tracking-wider text-muted">{stat.label}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

const capabilities = [
  {
    number: "UNIT 01",
    icon: IconCamera,
    title: "Video Production",
    description:
      "Documentaries, brand films and event coverage, from the first conversation about audience and budget through shoot, edit, color and sound.",
    items: ["Documentary and long-form", "Brand and recruitment films", "Music videos", "Event and exhibition coverage"],
  },
  {
    number: "UNIT 02",
    icon: IconMic,
    title: "Show & Podcast Production",
    description:
      "Season planning, recording, editing, subtitles and multi-platform publishing for recurring shows. Mission On Air and Afterschool SHOW both ship weekly.",
    items: ["Season and episode planning", "Multi-camera recording", "Chapters, subtitles, social cutdowns", "Show websites and episode pages"],
  },
  {
    number: "UNIT 03",
    icon: IconAntenna,
    title: "Live Streaming",
    description:
      "Three-camera switching, streaming to up to six platforms at once, backup internet, and a signal monitor I wrote that turns bitrate and dropped-frame numbers into plain warnings.",
    items: ["3-camera EFP switching", "YouTube, Facebook and more, simultaneously", "Redundant connectivity", "Recording and post-event reports"],
  },
  {
    number: "UNIT 04",
    icon: IconMonitor,
    title: "AI-assisted Post-Production",
    description:
      "Pipelines that take raw footage to transcripts, aligned subtitles and a pre-cut Final Cut Pro timeline, plus generative tools for previs and variations.",
    items: ["Batch transcription to FCPXML", "Automatic subtitle alignment", "Generative previs and B-roll (Higgsfield)", "Short-form versions from long-form"],
  },
];

export function EnCapabilities() {
  return (
    <section id="capabilities" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="03" en="Capabilities" zh="What I do" note="4 UNITS" />

        <FadeInStagger className="mt-14 grid gap-5 lg:grid-cols-2">
          {capabilities.map((c) => (
            <FadeInItem key={c.number}>
              <div className="frame-marks group relative h-full overflow-hidden border border-border/60 bg-surface p-8 transition-all duration-500 hover:border-accent/30">
                <span className="font-mono text-[10px] tracking-[0.15em] text-accent">{c.number}</span>
                <div className="mt-6 flex items-center gap-4">
                  <c.icon className="h-7 w-7 shrink-0 text-accent/70 transition-colors group-hover:text-accent" />
                  <h3 className="text-2xl tracking-tight">{c.title}</h3>
                </div>
                <c.icon className="pointer-events-none absolute -right-4 -top-2 h-32 w-32 text-accent opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.08]" />
                <p className="mt-4 text-sm leading-relaxed text-muted">{c.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[13px] text-muted">
                      <span className="h-px w-4 bg-accent/25 transition-all group-hover:w-6 group-hover:bg-accent/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

const remote = [
  {
    label: "Async by default",
    desc: "Taiwan is 12 to 16 hours ahead of the US. Notes you leave at the end of your day land at the start of mine, so the edit keeps moving overnight.",
  },
  {
    label: "Writing over meetings",
    desc: "I'm most precise in written English: briefs, scripts, edit notes, shot lists. I'm happy to join a few live calls a week on US time.",
  },
  {
    label: "Final Cut Pro, start to finish",
    desc: "Project files, subtitles and deliverables organized so your team can pick them up without me.",
  },
  {
    label: "Full-time or contract",
    desc: "Full-time through an employer of record, or contract work invoiced through my Taipei company.",
  },
];

export function EnRemote() {
  return (
    <section id="remote" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="04" en="Remote" zh="How I work remotely" note="UTC+8 · ASYNC" />
        <div className="mt-14 grid gap-px border border-border/60 bg-border/60 md:grid-cols-2">
          {remote.map((r, i) => (
            <FadeIn key={r.label} delay={i * 0.05} className="bg-background p-8">
              <p className="font-mono text-[10px] tracking-[0.15em] text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl tracking-tight">{r.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{r.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EnShowreel() {
  return (
    <section id="showreel" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="05" en="Program" zh="Reel" note="PGM · YOUTUBE" />
        <FadeIn delay={0.2}>
          <div className="mt-14 overflow-hidden border border-border/60">
            <div className="flex items-center justify-between border-b border-border/60 bg-surface px-4 py-2.5">
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-live" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/80">PGM · Showreel 2026</span>
              </div>
              <span className="hidden font-mono text-[9px] tracking-[0.15em] text-muted sm:inline">60 SEC · 1080P</span>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${REEL_ID}?rel=0`}
                title="Kimi Chang showreel 2026"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-between border-t border-border/60 bg-surface px-4 py-2">
              <span className="font-mono text-[9px] tracking-[0.15em] text-muted">Showreel 2026 · 10 projects in 60 seconds</span>
              <a
                href="https://www.youtube.com/playlist?list=PLoB4pTdgzrfgxNIOhQlxWOm1zL3lYdWpB"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[9px] uppercase tracking-[0.12em] text-accent/70 transition-colors hover:text-accent"
              >
                Full playlist →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function EnFaq() {
  return (
    <section id="faq" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="07" en="FAQ" zh="Quick answers" note={`${enFaq.length} Q`} />
        <div className="mt-14 divide-y divide-border/40 border-y border-border/40">
          {enFaq.map(([q, a], i) => (
            <FadeIn key={q} delay={i * 0.03}>
              <details className="group py-6 sm:px-3">
                <summary className="flex cursor-pointer list-none items-baseline gap-5 text-lg tracking-tight transition-colors hover:text-accent">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="flex-1">{q}</h3>
                  <span className="font-mono text-xs text-muted transition-transform group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="mt-4 max-w-3xl pl-9 text-[15px] leading-[1.85] text-muted">{a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const contactLinks = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "LinkedIn", value: "ChengChieh (Kimi) Chang", href: LINKEDIN },
  { label: "YouTube", value: "ciaohuamiaumichiao", href: "https://www.youtube.com/channel/UCfxcum7XC4qB-jFbH1qjE-Q" },
  { label: "Instagram", value: "@ciaohuamiaumichiao", href: "https://www.instagram.com/ciaohuamiaumichiao" },
];

export function EnContact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionSlate index="08" en="Contact" zh="Let's talk" note="ROLL CREDITS" />
        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <FadeIn>
            <p className="max-w-md text-[15px] leading-[1.9] text-muted">
              Hiring for a remote video role, or have a project in mind? Email is the best way to reach me. Send the
              brief, the timeline and a reference or two, and I&apos;ll come back with questions and a plan.
            </p>
            <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-muted/60">Taipei, Taiwan · UTC+8</p>
          </FadeIn>
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
                  <p className="text-right text-[15px] transition-colors group-hover:text-accent">{link.value}</p>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function EnFooter() {
  return (
    <footer className="border-t border-border/30 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-[10px] tracking-[0.12em] text-muted">
          FIN · &copy; {new Date().getFullYear()} Kimi Chang
        </p>
        <p className="text-[11px] tracking-wider text-muted/70">Directed, edited and coded by Kimi Chang</p>
        <Link href="/" hrefLang="zh-Hant" lang="zh-Hant" className="text-[11px] text-muted transition-colors hover:text-accent-dim">
          中文版
        </Link>
      </div>
    </footer>
  );
}
