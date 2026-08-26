"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "關於", href: "#about" },
  { label: "案例", href: "#work" },
  { label: "服務", href: "#services" },
  { label: "作品", href: "#showreel" },
  { label: "經歷", href: "#exhibitions" },
  { label: "幕後人聚場", href: "#backstage" },
  { label: "排班陪跑", href: "/rotation" },
  { label: "寫作", href: "/writing" },
  { label: "聯絡", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const resolveHref = (href: string) =>
    href.startsWith("#") && !isHome ? `/${href}` : href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border/40 bg-background/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-xs tracking-[0.2em] text-foreground/90 transition-colors hover:text-accent"
        >
          <span className="block h-[7px] w-[7px] bg-accent transition-colors group-hover:bg-live" />
          小花貓咪叫
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop nav */}
          <ul className="hidden gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={resolveHref(link.href)}
                  className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="text-muted md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
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
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={resolveHref(link.href)}
                    className="flex items-baseline gap-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    <span className="font-mono text-[9px] text-accent-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
