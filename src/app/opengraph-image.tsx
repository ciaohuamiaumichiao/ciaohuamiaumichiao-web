import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "小花貓咪叫 ciaohuamiaumichiao — 張正杰｜導演・策展人";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #080808 0%, #1a1a1a 50%, #080808 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,169,110,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Top label */}
        <div
          style={{
            fontSize: 16,
            letterSpacing: 8,
            color: "#9e7340",
            textTransform: "uppercase" as const,
            marginBottom: 24,
          }}
        >
          Director · Curator · Digital Creator
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ebebeb",
            letterSpacing: 4,
            marginBottom: 12,
          }}
        >
          張正杰
        </div>

        {/* English name */}
        <div
          style={{
            fontSize: 28,
            color: "#999999",
            letterSpacing: 6,
            marginBottom: 32,
          }}
        >
          Kimi Chang
        </div>

        {/* Brand */}
        <div
          style={{
            fontSize: 20,
            color: "#d4a96e",
            letterSpacing: 3,
          }}
        >
          小花貓咪叫 ciaohuamiaumichiao
        </div>

        {/* Bottom services */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            display: "flex",
            gap: 32,
            fontSize: 14,
            color: "#666666",
            letterSpacing: 2,
          }}
        >
          <span>影像製作</span>
          <span style={{ color: "#9e7340" }}>·</span>
          <span>影像與藝術顧問</span>
          <span style={{ color: "#9e7340" }}>·</span>
          <span>創意數位建置</span>
        </div>

        {/* Top border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, transparent, #d4a96e, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
