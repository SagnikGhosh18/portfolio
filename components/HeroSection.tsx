const FACTS = [
  { k: "# currently", v: "SDE @ ZenTrades.ai", s: "AWS Lambda · React Native · AI" },
  { k: "# stack", v: "React · Node.js · AWS", s: "Fullstack — web, mobile, cloud" },
  { k: "# education", v: "VIT Vellore · Gold Medal", s: "B.Tech CSE · top of stream" },
];

export default function HeroSection() {
  const headStyle: React.CSSProperties = {
    fontSize: "clamp(52px,7.5vw,96px)",
    lineHeight: 1.0,
    letterSpacing: "-0.025em",
  };

  return (
    <section
      id="top"
      style={{
        padding: "88px 0 80px",
        minHeight: "calc(100vh - 52px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container" style={{ width: "100%" }}>
        {/* Meta strip */}
        <div
          style={{
            fontSize: 11,
            color: "var(--dim)",
            marginBottom: 40,
            display: "flex",
            gap: 16,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span style={{ color: "var(--green)" }}>✓</span>
          <span>last commit: 2h ago</span>
          <span style={{ color: "var(--line-2)" }}>│</span>
          <span style={{ color: "var(--yellow)" }}>◆</span>
          <span>v4.2.0</span>
          <span style={{ color: "var(--line-2)" }}>│</span>
          <span>Pune, IN · UTC+5:30</span>
        </div>

        {/* Headline */}
        <h1 style={{ ...headStyle, fontWeight: 600, marginBottom: 4 }}>
          <span style={{ color: "var(--dim)", fontWeight: 400 }}>&gt;&nbsp;</span>
          <span style={{ color: "var(--accent)" }}>fullstack</span>
          <span style={{ color: "var(--dimmer)", fontWeight: 400 }}>_engineer</span>
        </h1>
        <h1
          style={{
            ...headStyle,
            fontWeight: 400,
            color: "var(--dimmer)",
            paddingLeft: "clamp(28px,3.2vw,44px)",
            marginBottom: 4,
          }}
        >
          who ships fast
        </h1>
        <h1
          style={{
            ...headStyle,
            fontWeight: 400,
            color: "var(--dimmer)",
            paddingLeft: "clamp(28px,3.2vw,44px)",
            marginBottom: 56,
          }}
        >
          {"& builds clean."}
        </h1>

        {/* Lede + CTAs */}
        <div className="hero-lede-grid" style={{ marginBottom: 60 }}>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: "var(--muted)", margin: 0, maxWidth: 580 }}>
            <span style={{ color: "var(--dimmer)" }}>{"/* "}</span>
            Sagnik Ghosh — fullstack engineer working at the seam between{" "}
            <span style={{ color: "var(--ink)" }}>thoughtful interfaces</span> and the systems
            that power them. Currently SDE at ZenTrades.ai.
            <span style={{ color: "var(--dimmer)" }}>{" */"}</span>
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", flexWrap: "wrap" }}>
            <a href="#work" className="btn btn-accent">
              ./view-work.sh &nbsp;→
            </a>
            <a href="#contact" className="btn">
              contact --me
            </a>
          </div>
        </div>

        {/* Fact strip */}
        <div
          className="hero-facts-grid"
          style={{ borderTop: "1px solid var(--line)", paddingTop: 32 }}
        >
          {FACTS.map((f) => (
            <div key={f.k}>
              <div style={{ fontSize: 10, color: "var(--green)", letterSpacing: ".12em", marginBottom: 10 }}>
                {f.k}
              </div>
              <div style={{ fontSize: 14, color: "var(--ink)", fontWeight: 500, marginBottom: 4 }}>
                {f.v}
              </div>
              <div style={{ fontSize: 11, color: "var(--dim)" }}>{f.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
