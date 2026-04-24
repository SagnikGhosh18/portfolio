import { portfolioStack } from "@/data/portfolio";

const TRAITS = [
  "collaboration",
  "open communication",
  "ships fast",
  "metric-driven",
];

export default function AboutSection() {
  return (
    <section id="about" className="portfolio-section">
      <div className="portfolio-container">
        <div className="sec-head">
          <div>
            <div className="sec-num">01 — About</div>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Driven by <em>curiosity,</em>
              <br />
              powered by <em>craft.</em>
            </h2>
          </div>
          <p className="sec-meta">
            A short note about how I work and what I care about.
          </p>
        </div>

        <div className="about-content-grid">
          {/* Bio */}
          <div>
            <p className="lede" style={{ margin: 0, marginBottom: 28 }}>
              Fullstack engineer who graduated top of class at VIT Vellore and
              has been shipping production code at{" "}
              <em>ZenTrades.ai</em> ever since.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--ink-2)",
                marginTop: 0,
              }}
            >
              I work across the whole stack — React and React Native on the
              front, Node.js and Python on the back, AWS and Docker holding it
              together. Recent work spans architecting a parallel AWS Lambda
              pipeline that unblocked a market expansion, optimizing
              Puppeteer-based PDF generation to cut memory usage by up to 80%,
              and integrating AI recommendation systems that hit 87% accuracy in
              production.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--ink-2)",
              }}
            >
              I care about measurable outcomes, clear communication, and code
              that the next person can change without a call to me. Available
              across timezones; at my best on small teams moving fast.
            </p>

            <div
              style={{ display: "flex", gap: 8, marginTop: 32, flexWrap: "wrap" }}
            >
              {TRAITS.map((t) => (
                <span key={t} className="tag">
                  <span className="dot" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stack card */}
          <div
            style={{
              border: "1px solid var(--line)",
              borderRadius: 14,
              padding: 28,
              background: "var(--bg-2)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 22,
              }}
            >
              <span className="eyebrow">Stack — 2026</span>
              <span
                className="mono"
                style={{ fontSize: 11, color: "var(--ink-3)" }}
              >
                v.4.2
              </span>
            </div>

            {portfolioStack.map((g) => (
              <div
                key={g.group}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr",
                  gap: 16,
                  padding: "14px 0",
                  borderTop: "1px dashed var(--line)",
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--ink-3)",
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    paddingTop: 4,
                  }}
                >
                  {g.group}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {g.items.map((x) => (
                    <span
                      key={x}
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 12,
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: "var(--bg-3)",
                        border: "1px solid var(--line)",
                        color: "var(--ink)",
                      }}
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
