import { ImageResponse } from "next/og";

/* 全站分享圖模板：暗房 HUD（取景框角標、REC、時間碼），
   首頁、文章、服務頁共用，只換文字。 */

export const OG_SIZE = { width: 1200, height: 630 };

const C = {
  bg: "#08090b",
  ink: "#e9e7e2",
  muted: "#8e939b",
  dim: "#565b63",
  accent: "#0d97bb",
  peacock: "#326872",
  rec: "#e5483f",
};

const corner = (pos: React.CSSProperties): React.CSSProperties => ({
  position: "absolute",
  width: 22,
  height: 22,
  display: "flex",
  ...pos,
});

export function renderOg({
  slate,
  kicker,
  title,
  subtitle,
  footer,
  timecode = "TC 00:00:00:00",
}: {
  slate: string;
  kicker: string;
  title: string;
  subtitle: string;
  footer: string[];
  timecode?: string;
}) {
  /* 標題越長字越小，最多三行 */
  const len = [...title].length;
  const titleSize = len <= 4 ? 104 : len <= 14 ? 76 : len <= 22 ? 62 : 52;

  return new ImageResponse(
    (
      <div
        style={{
          background: C.bg,
          backgroundImage: `radial-gradient(700px 420px at 50% -10%, #10141a 0%, ${C.bg} 60%)`,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          padding: "0 96px",
        }}
      >
        <div style={{ ...corner({ top: 36, left: 36 }), borderTop: `2px solid ${C.accent}`, borderLeft: `2px solid ${C.accent}` }} />
        <div style={{ ...corner({ top: 36, right: 36 }), borderTop: `2px solid ${C.accent}`, borderRight: `2px solid ${C.accent}` }} />
        <div style={{ ...corner({ bottom: 36, left: 36 }), borderBottom: `2px solid ${C.accent}`, borderLeft: `2px solid ${C.accent}` }} />
        <div style={{ ...corner({ bottom: 36, right: 36 }), borderBottom: `2px solid ${C.accent}`, borderRight: `2px solid ${C.accent}` }} />

        {/* 左上 slate */}
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 96,
            display: "flex",
            flexDirection: "column",
            fontSize: 15,
            letterSpacing: 3,
            color: C.muted,
            lineHeight: 1.9,
          }}
        >
          <span>PROD — CIAOHUAMIAUMICHIAO</span>
          <span>{slate}</span>
        </div>

        {/* 右上 REC */}
        <div style={{ position: "absolute", top: 66, right: 96, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: C.rec, display: "flex" }} />
          <span style={{ fontSize: 15, letterSpacing: 4, color: C.muted }}>REC</span>
        </div>

        <div style={{ fontSize: 17, letterSpacing: 7, color: C.accent, marginBottom: 26, display: "flex" }}>
          {kicker}
        </div>

        <div
          style={{
            fontSize: titleSize,
            color: C.ink,
            letterSpacing: len <= 4 ? 6 : 1,
            lineHeight: 1.25,
            display: "flex",
            flexWrap: "wrap",
            maxWidth: 1000,
            marginBottom: 22,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 48, height: 1, background: C.peacock, display: "flex" }} />
          <span style={{ fontSize: 22, letterSpacing: 3, color: C.accent }}>{subtitle}</span>
        </div>

        {/* 底部 */}
        <div
          style={{
            position: "absolute",
            bottom: 62,
            left: 96,
            display: "flex",
            gap: 22,
            fontSize: 17,
            color: C.muted,
            letterSpacing: 2,
          }}
        >
          {footer.flatMap((f, i) =>
            i === 0
              ? [<span key={f}>{f}</span>]
              : [
                  <span key={`d${i}`} style={{ color: C.peacock }}>·</span>,
                  <span key={f}>{f}</span>,
                ]
          )}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 62,
            right: 96,
            fontSize: 15,
            letterSpacing: 3,
            color: C.dim,
            display: "flex",
          }}
        >
          {timecode}
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
