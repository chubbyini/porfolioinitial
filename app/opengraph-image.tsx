import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Inioluwa Daniel Osibajo — Software Engineer & Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#090D16",
          color: "#F8FAFC",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Ambient Amber Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)",
          }}
        />

        {/* Top Header Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              padding: "8px 18px",
              borderRadius: "9999px",
              border: "1px solid rgba(245, 158, 11, 0.4)",
              backgroundColor: "rgba(245, 158, 11, 0.12)",
              color: "#FBBF24",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            SOFTWARE ENGINEER // PICCKR & VISSIONNAIRE
          </div>
        </div>

        {/* Headline & Subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
            }}
          >
            Inioluwa Daniel Osibajo
          </div>

          <div
            style={{
              fontSize: "26px",
              color: "#F59E0B",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Software Engineer & Web Developer
          </div>

          <div
            style={{
              fontSize: "20px",
              color: "#94A3B8",
              maxWidth: "850px",
              lineHeight: 1.45,
            }}
          >
            Building responsive web applications, merchant portals, design systems, and published NLP research.
          </div>
        </div>

        {/* Footer Metrics */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(148, 163, 184, 0.15)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "40px" }}>
            <div>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#FBBF24", display: "block" }}>
                2+ Yrs
              </span>
              <span style={{ fontSize: "13px", color: "#64748B", textTransform: "uppercase" }}>
                Production Exp
              </span>
            </div>
            <div>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#FBBF24", display: "block" }}>
                10+
              </span>
              <span style={{ fontSize: "13px", color: "#64748B", textTransform: "uppercase" }}>
                Shipped Projects
              </span>
            </div>
            <div>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#FBBF24", display: "block" }}>
                IJRIAS
              </span>
              <span style={{ fontSize: "13px", color: "#64748B", textTransform: "uppercase" }}>
                Published Paper
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: "14px",
              color: "#94A3B8",
              fontFamily: "monospace",
            }}
          >
            inioluwa.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
