/* 導播檯細線 icon 系統 — stroke 1.25、方角，配 mono 標籤使用 */

type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function IconCamera({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="7" width="13" height="10.5" />
      <circle cx="9" cy="12.25" r="3" />
      <path d="M15.5 10.5 21.5 8v8.5l-6-2.5" />
      <path d="M5 7V4.5h5V7" />
    </svg>
  );
}

export function IconMic({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0" />
      <path d="M12 18v3.5" />
      <path d="M8.5 21.5h7" />
    </svg>
  );
}

export function IconAntenna({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="2" />
      <path d="M12 10v11.5" />
      <path d="m12 13 4 8.5M12 13l-4 8.5" />
      <path d="M6.8 3.2a7 7 0 0 0 0 9.6M17.2 3.2a7 7 0 0 1 0 9.6" />
      <path d="M9.2 5.5a3.5 3.5 0 0 0 0 5M14.8 5.5a3.5 3.5 0 0 1 0 5" />
    </svg>
  );
}

export function IconMonitor({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="4" width="19" height="13" />
      <path d="m8.5 8-2.5 2.5L8.5 13" />
      <path d="m15.5 8 2.5 2.5-2.5 2.5" />
      <path d="M9 21h6" />
      <path d="M12 17v4" />
    </svg>
  );
}

export function IconCompass({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" />
    </svg>
  );
}

export function IconCap({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m12 4 10 4.2L12 12.4 2 8.2z" />
      <path d="M6.5 10.2v4.6c0 1.6 2.5 2.9 5.5 2.9s5.5-1.3 5.5-2.9v-4.6" />
      <path d="M22 8.2v5.8" />
    </svg>
  );
}

export function IconBoard({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3.5" width="18" height="12" />
      <path d="M7 7.5h7M7 10.5h4" />
      <path d="M12 15.5v2.5" />
      <path d="m8 21.5 4-3.5 4 3.5" />
    </svg>
  );
}

export function IconChurch({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2v4.5" />
      <path d="M9.8 4.2h4.4" />
      <path d="m12 6.5 6.5 5.5v9.5h-13V12z" />
      <path d="M10 21.5v-4h4v4" />
    </svg>
  );
}

export function IconBook({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 6.2C10 4.8 7.2 4.2 4 4.2v14c3.2 0 6 .6 8 2 2-1.4 4.8-2 8-2v-14c-3.2 0-6 .6-8 2z" />
      <path d="M12 6.2v14" />
    </svg>
  );
}

export function IconChat({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 4.5h18v11.5H9.5L4.5 20v-4H3z" />
      <path d="M7.5 10.2h.01M12 10.2h.01M16.5 10.2h.01" strokeWidth={2} />
    </svg>
  );
}
