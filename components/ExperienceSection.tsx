import { portfolioExperience } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 10, color: "var(--green)", letterSpacing: ".15em", marginBottom: 12 }}>
            {"// 03 — experience"}
</div>
          <h2 style={{ fontSize: "clamp(32px,4.5vw,60px)", fontWeight: 600, lineHeight: 1.0, letterSpacing: "-0.02em" }}>
            <span style={{ color: "var(--dim)", fontWeight: 400 }}>git log&nbsp;</span>
            <span style={{ color: "var(--ink)" }}>--format=oneline</span>
          </h2>
        </div>

        {portfolioExperience.map((e, i) => (
          <article
            key={i}
            style={{
              marginBottom: 16,
              padding: 32,
              background: "var(--bg)",
              border: `1px solid ${i === 0 ? "rgba(88,166,255,0.28)" : "var(--line)"}`,
              borderLeft: `3px solid ${i === 0 ? "var(--accent)" : "var(--dimmer)"}`,
              borderRadius: 8,
              position: "relative",
            }}
          >
            {e.current && (
              <span
                style={{
                  position: "absolute",
                  top: 18,
                  right: 18,
                  fontSize: 10,
                  color: "var(--green)",
                  border: "1px solid rgba(57,211,83,0.3)",
                  padding: "3px 10px",
                  borderRadius: 3,
                  letterSpacing: ".06em",
                }}
              >
                HEAD → main
              </span>
            )}
            <div style={{ display: "flex", gap: 14, alignItems: "baseline", marginBottom: 10, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, color: "var(--yellow)" }}>commit {e.hash}</span>
              <span style={{ fontSize: 11, color: "var(--dim)" }}>({e.period})</span>
              <span style={{ fontSize: 11, color: "var(--dim)" }}>· {e.location}</span>
            </div>
            <h3 style={{ fontSize: "clamp(18px,2.5vw,26px)", fontWeight: 500, lineHeight: 1.1, color: "var(--ink)", marginBottom: 6 }}>
              {e.role}
            </h3>
            <div style={{ fontSize: 12, color: "var(--dim)", marginBottom: 24 }}>
              Author: <span style={{ color: "var(--muted)" }}>{e.company}</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {e.bullets.map((b, j) => (
                <li key={j} style={{ display: "flex", gap: 12, fontSize: 13, lineHeight: 1.75, color: "var(--muted)" }}>
                  <span style={{ color: "var(--green)", flexShrink: 0, marginTop: 3, fontSize: 12 }} aria-hidden>
                    +
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
