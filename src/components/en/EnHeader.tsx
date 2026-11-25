"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Remote", href: "#remote" },
  { label: "Reel", href: "#showreel" },
  { label: "Contact", href: "#contact" },
];

export function EnHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* 根 layout 的 <html> 是 zh-Hant；英文頁改成 en，離開時還原，讓螢幕閱讀器用對語言 */
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.lang;
    html.lang = "en";
    return () => {
      html.lang = prev;
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "border-b border-border/40 bg-background/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/en"
          className="group flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] text-foreground/90 transition-colors hover:text-accent"
        >
          <span className="block h-[7px] w-[7px] bg-accent transition-colors group-hover:bg-live" />
          KIMI CHANG
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Link
            href="/"
            hrefLang="zh-Hant"
            lang="zh-Hant"
            className="border border-border px-2.5 py-1 text-[11px] text-muted transition-colors hover:border-accent/50 hover:text-foreground"
          >
            中文
          </Link>

          <button className="text-muted md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/30 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-baseline gap-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    <span className="font-mono text-[9px] text-accent-dim">{String(i + 1).padStart(2, "0")}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
