import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "小花貓咪叫 ciaohuamiaumichiao — 張正杰｜導演・策展人";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const corner = (pos: React.CSSProperties): React.CSSProperties => ({
  position: "absolute",
  width: 22,
  height: 22,
  ...pos,
});

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#08090b",
          backgroundImage:
            "radial-gradient(700px 420px at 50% -10%, #10141a 0%, #08090b 60%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          padding: "0 96px",
        }}
      >
        {/* 取景框角標 */}
        <div style={{ ...corner({ top: 36, left: 36 }), borderTop: "2px solid #d8a45c", borderLeft: "2px solid #d8a45c", display: "flex" }} />
        <div style={{ ...corner({ top: 36, right: 36 }), borderTop: "2px solid #d8a45c", borderRight: "2px solid #d8a45c", display: "flex" }} />
        <div style={{ ...corner({ bottom: 36, left: 36 }), borderBottom: "2px solid #d8a45c", borderLeft: "2px solid #d8a45c", display: "flex" }} />
        <div style={{ ...corner({ bottom: 36, right: 36 }), borderBottom: "2px solid #d8a45c", borderRight: "2px solid #d8a45c", display: "flex" }} />

        {/* 左上 production meta */}
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 96,
            display: "flex",
            flexDirection: "column",
            fontSize: 15,
            letterSpacing: 3,
            color: "#8e939b",
            lineHeight: 1.9,
          }}
        >
          <span>PROD — CIAOHUAMIAUMICHIAO</span>
          <span>DATE — 2026</span>
        </div>

        {/* 右上 REC */}
        <div
          style={{
            position: "absolute",
            top: 66,
            right: 96,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#e5483f",
              display: "flex",
            }}
          />
          <span style={{ fontSize: 15, letterSpacing: 4, color: "#8e939b" }}>REC</span>
        </div>

        {/* 主標 */}
        <div
          style={{
            fontSize: 17,
            letterSpacing: 7,
            color: "#d8a45c",
            textTransform: "uppercase" as const,
            marginBottom: 28,
            display: "flex",
          }}
        >
          Director · Curator · Digital Creator
        </div>

        <div
          style={{
            fontSize: 104,
            fontWeight: 700,
            color: "#e9e7e2",
            letterSpacing: 6,
            display: "flex",
            marginBottom: 18,
          }}
        >
          張正杰
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <span style={{ fontSize: 24, letterSpacing: 6, color: "#8e939b" }}>KIMI CHANG</span>
          <div style={{ width: 48, height: 1, background: "#a87b3e", display: "flex" }} />
          <span style={{ fontSize: 22, letterSpacing: 3, color: "#d8a45c" }}>
            小花貓咪叫 ciaohuamiaumichiao
          </span>
        </div>

        {/* 底部四條服務線 */}
        <div
          style={{
            position: "absolute",
            bottom: 62,
            left: 96,
            display: "flex",
            gap: 28,
            fontSize: 17,
            color: "#8e939b",
            letterSpacing: 2,
          }}
        >
          <span>影像製作</span>
          <span style={{ color: "#a87b3e" }}>·</span>
          <span>節目製作</span>
          <span style={{ color: "#a87b3e" }}>·</span>
          <span>直播轉播</span>
          <span style={{ color: "#a87b3e" }}>·</span>
          <span>創意數位建置</span>
        </div>

        {/* 右下 TC */}
        <div
          style={{
            position: "absolute",
            bottom: 62,
            right: 96,
            fontSize: 15,
            letterSpacing: 3,
            color: "#565b63",
            display: "flex",
          }}
        >
          TC 00:00:00:00
        </div>
      </div>
    ),
    { ...size }
  );
}
