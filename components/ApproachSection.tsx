import { portfolioApproach } from "@/data/portfolio";

export default function ApproachSection() {
  return (
    <section id="approach" className="section">
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 52,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div style={{ fontSize: 10, color: "var(--green)", letterSpacing: ".15em", marginBottom: 12 }}>
              {"// 04 — approach"}
</div>
            <h2 style={{ fontSize: "clamp(32px,4.5vw,60px)", fontWeight: 600, lineHeight: 1.0, letterSpacing: "-0.02em", color: "var(--ink)" }}>
              How a project
              <br />
              <span style={{ color: "var(--accent)" }}>actually</span> goes.
            </h2>
          </div>
          <p style={{ fontSize: 11, color: "var(--dim)", maxWidth: 260, lineHeight: 1.7, textAlign: "right" }}>
            No mystery process.
            <br />
            Three phases, repeated until it ships.
          </p>
        </div>

        <div className="approach-grid">
          {portfolioApproach.map((p, i) => (
            <div
              key={p.n}
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--line)",
                borderRadius: 8,
                padding: 28,
                minHeight: 260,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  right: -12,
                  top: -24,
                  fontSize: 160,
                  fontWeight: 600,
                  color: "var(--ink)",
                  opacity: 0.025,
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {i + 1}
              </div>
              <div>
                <div style={{ fontSize: 10, color: "var(--green)", letterSpacing: ".12em", marginBottom: 16 }}>
                  phase_{p.n}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <span style={{ color: "var(--keyword)" }}>function</span>{" "}
                  <span style={{ color: "var(--purple)" }}>{p.fn}</span>
                  <span style={{ color: "var(--dim)" }}>()</span>{" "}
                  <span style={{ color: "var(--dim)" }}>{"{"}</span>
                </div>
                <div style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8, color: "var(--muted)" }}>
                  <span style={{ color: "var(--dimmer)" }}>{"/* "}</span>
                  {p.body}
                  <span style={{ color: "var(--dimmer)" }}>{" */"}</span>
                </div>
              </div>
              <div style={{ marginTop: 16 }}>
                <div style={{ paddingLeft: 20, fontSize: 13, color: "var(--dim)" }}>
                  <span style={{ color: "var(--keyword)" }}>return</span>{" "}
                  <span style={{ color: "#79c0ff" }}>shipped_product</span>
                  <span style={{ color: "var(--dim)" }}>;</span>
                </div>
                <div style={{ fontSize: 13, color: "var(--dim)", marginTop: 4 }}>{"}"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
