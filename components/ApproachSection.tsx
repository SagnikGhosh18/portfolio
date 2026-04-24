import { portfolioApproach } from "@/data/portfolio";

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="portfolio-section"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="portfolio-container">
        <div className="sec-head">
          <div>
            <div className="sec-num">04 — Approach</div>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              How a project <em>actually</em> goes.
            </h2>
          </div>
          <p className="sec-meta">
            No mystery process. Three phases, repeated until it ships.
          </p>
        </div>

        <div className="approach-grid">
          {portfolioApproach.map((p, i) => (
            <div
              key={p.n}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 14,
                padding: 32,
                background: "var(--bg)",
                position: "relative",
                overflow: "hidden",
                minHeight: 280,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Decorative large number */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  right: -10,
                  top: -30,
                  fontFamily: "var(--serif)",
                  fontSize: 200,
                  lineHeight: 1,
                  color: "var(--ink)",
                  opacity: 0.04,
                  userSelect: "none",
                }}
              >
                {String(i + 1)}
              </div>

              <div className="eyebrow">{p.n}</div>

              <div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 32,
                    lineHeight: 1.1,
                    margin: "0 0 14px",
                    letterSpacing: "-0.01em",
                    fontWeight: 400,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.65,
                    color: "var(--ink-2)",
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
