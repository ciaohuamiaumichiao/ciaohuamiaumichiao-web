"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "dark",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getTimeBasedTheme(): Theme {
  const hour = new Date().getHours();
  // 6:00–17:59 → light, 18:00–5:59 → dark
  return hour >= 6 && hour < 18 ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage for manual override, otherwise use time-based
    const saved = localStorage.getItem("theme-preference");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    } else {
      setTheme(getTimeBasedTheme());
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, mounted]);

  // Auto-switch at 6:00 and 18:00 if no manual preference
  useEffect(() => {
    if (!mounted) return;

    const checkTime = () => {
      const saved = localStorage.getItem("theme-preference");
      if (!saved) {
        setTheme(getTimeBasedTheme());
      }
    };

    const interval = setInterval(checkTime, 60000); // check every minute
    return () => clearInterval(interval);
  }, [mounted]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme-preference", next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
