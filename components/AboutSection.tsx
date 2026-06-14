import { portfolioStack } from "@/data/portfolio";

const TRAITS = ["collaboration", "open communication", "ships fast", "metric-driven"];

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 10, color: "var(--green)", letterSpacing: ".15em", marginBottom: 12 }}>
            {"// 01 — about"}
</div>
          <h2
            style={{
              fontSize: "clamp(36px,5vw,68px)",
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
            }}
          >
            Driven by <span style={{ color: "var(--accent)" }}>curiosity</span>,<br />
            powered by <span style={{ color: "var(--accent)" }}>craft</span>.
          </h2>
        </div>

        <div className="about-grid">
          {/* Bio */}
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--muted)", marginBottom: 24 }}>
              Fullstack engineer who graduated top of class at VIT Vellore and has been shipping
              production code at <span style={{ color: "var(--ink)" }}>ZenTrades.ai</span> ever since.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.85, color: "var(--muted)", marginBottom: 24 }}>
              I work across the whole stack — React and React Native on the front, Node.js and
              Python on the back, AWS and Docker holding it together. Recent work spans architecting
              a parallel AWS Lambda pipeline that unblocked a market expansion, optimizing
              Puppeteer-based PDF generation to cut memory usage by up to 80%, and integrating AI
              recommendation systems that hit 87% accuracy in production.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.85, color: "var(--muted)", marginBottom: 36 }}>
              I care about measurable outcomes, clear communication, and code that the next person
              can change without a call to me. Available across timezones; at my best on small teams
              moving fast.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {TRAITS.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stack as code block */}
          <div
            style={{
              background: "var(--bg)",
              border: "1px solid var(--line-2)",
              borderRadius: 10,
              padding: "28px 32px",
              fontSize: 13,
              lineHeight: 1.9,
              overflowX: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 20,
                paddingBottom: 14,
                borderBottom: "1px solid var(--line)",
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--red)", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--yellow)", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--green)", display: "inline-block" }} />
              <span style={{ marginLeft: 8, fontSize: 10, color: "var(--dim)", letterSpacing: ".08em" }}>
                stack.json — v4.2
              </span>
            </div>
            <div>
              <span style={{ color: "var(--keyword)" }}>const</span>{" "}
              <span style={{ color: "var(--ink)" }}>stack</span>{" "}
              <span style={{ color: "var(--dim)" }}>=</span>{" "}
              <span style={{ color: "var(--dim)" }}>{"{"}</span>
            </div>
            {portfolioStack.map((g, i) => (
              <div key={g.key} style={{ paddingLeft: 22 }}>
                <span style={{ color: "var(--accent)" }}>{g.key}</span>
                <span style={{ color: "var(--dim)" }}>: [</span>
                {g.items.map((item, j) => (
                  <span key={item}>
                    <span style={{ color: "var(--string)" }}>&quot;{item}&quot;</span>
                    {j < g.items.length - 1 && <span style={{ color: "var(--dim)" }}>, </span>}
                  </span>
                ))}
                <span style={{ color: "var(--dim)" }}>]{i < portfolioStack.length - 1 ? "," : ""}</span>
              </div>
            ))}
            <div>
              <span style={{ color: "var(--dim)" }}>{"}"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
