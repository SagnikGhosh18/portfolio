interface HeroFactProps {
  label: string;
  value: string;
  sub: string;
}

function HeroFact({ label, value, sub }: HeroFactProps) {
  return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 10 }}>{label}</div>
      <div className="serif" style={{ fontSize: 22, lineHeight: 1.2, marginBottom: 6 }}>{value}</div>
      <div style={{ fontSize: 12.5, color: "var(--ink-3)", lineHeight: 1.5 }}>{sub}</div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="top"
      className="portfolio-section"
      style={{
        paddingTop: "var(--hero-pad)",
        paddingBottom: "calc(var(--hero-pad) * 0.8)",
      }}
    >
      <div className="portfolio-container">
        {/* Meta strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "var(--hero-meta-mb)",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span className="eyebrow">— Portfolio · Vol. IV · MMXXVI</span>
          <span className="eyebrow">Pune, IN · UTC+5:30</span>
        </div>

        {/* Display heading */}
        <h1 className="display">
          <span style={{ display: "block" }}>
            I build <em>quietly&nbsp;fast</em>
          </span>
          <span style={{ display: "block" }}>
            web products that{" "}
            <span style={{ fontStyle: "italic", opacity: 0.55 }}>feel</span>
          </span>
          <span style={{ display: "block" }}>
            like they were <em>made&nbsp;by&nbsp;hand.</em>
          </span>
        </h1>

        {/* Lede + CTAs */}
        <div className="hero-content-grid">
          <p className="lede" style={{ margin: 0, maxWidth: 560 }}>
            Sagnik Ghosh — fullstack engineer working at the seam between{" "}
            <span style={{ color: "var(--accent)" }}>thoughtful interfaces</span>{" "}
            and the systems that power them.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "flex-end",
              flexWrap: "wrap",
            }}
          >
            <a href="#work" className="btn btn-accent">
              See selected work <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn">
              Start a project
            </a>
          </div>
        </div>

        {/* Fact strip */}
        <div className="hero-facts-grid">
          <HeroFact
            label="Currently"
            value="SDE @ ZenTrades.ai"
            sub="AWS Lambda, React Native, AI recommendation systems"
          />
          <HeroFact
            label="Stack"
            value="React · Node.js · AWS"
            sub="Fullstack across web, mobile, and cloud infra"
          />
          <HeroFact
            label="Education"
            value="VIT Vellore · Gold Medal"
            sub="B.Tech CSE, highest scoring student in stream"
          />
        </div>
      </div>
    </section>
  );
}
