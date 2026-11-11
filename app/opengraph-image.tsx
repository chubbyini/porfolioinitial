import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Inioluwa Daniel Osibajo — Web Developer & Systems Architect";
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
          backgroundColor: "#080C14",
          color: "#F8FAFC",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Ambient Gold Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201, 162, 39, 0.25) 0%, transparent 70%)",
          }}
        />

        {/* Top Header Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              padding: "8px 18px",
              borderRadius: "9999px",
              border: "1px solid rgba(201, 162, 39, 0.4)",
              backgroundColor: "rgba(201, 162, 39, 0.12)",
              color: "#E6C766",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            SOJOURNER BUILDS // PRODUCTION SYSTEMS
          </div>
        </div>

        {/* Headline & Subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              fontSize: "66px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#F8FAFC",
              lineHeight: 1.1,
            }}
          >
            Inioluwa Daniel <span style={{ color: "#E6C766" }}>Osibajo</span>
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#8A8F98",
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Full-Stack Web Developer at Vissionnaire Tech Solution Ltd, Founder of Sojourner Builds, &amp; Published NLP Researcher
          </div>
        </div>

        {/* Footer Metrics & Domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(201, 162, 39, 0.2)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#E6C766" }}>2+ Years</span>
              <span style={{ fontSize: "14px", color: "#8A8F98" }}>Production Software</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#E6C766" }}>10+ Apps</span>
              <span style={{ fontSize: "14px", color: "#8A8F98" }}>Shipped Products</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#E6C766" }}>IJRIAS 2025</span>
              <span style={{ fontSize: "14px", color: "#8A8F98" }}>Published NLP Paper</span>
            </div>
          </div>
          <div style={{ fontSize: "18px", color: "#8A8F98", fontWeight: 600 }}>
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
