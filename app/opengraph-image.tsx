import { ImageResponse } from "next/og";

export const alt = "Sagnik Ghosh — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0C0E0D",
          backgroundImage: "radial-gradient(#232825 2px, transparent 2px)",
          backgroundSize: "40px 40px",
          color: "#ECEAE4",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, fontFamily: "monospace" }}>
          <span style={{ color: "#C8F169" }}>~/</span>sagnik<span style={{ color: "#C8F169" }}>_</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 140, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.92 }}>
            Sagnik Ghosh<span style={{ color: "#C8F169" }}>.</span>
          </div>
          <div style={{ fontSize: 34, color: "#B9BDB7", maxWidth: 900 }}>
            Applied AI, payments and correctness-critical billing.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
