import { portfolioExperience } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section">
      <div className="portfolio-container">
        <div className="sec-head">
          <div>
            <div className="sec-num">03 — Experience</div>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Where I&apos;ve <em>shipped.</em>
            </h2>
          </div>
          <p className="sec-meta">
            Two roles, one company. Different chapters of the same story.
          </p>
        </div>

        <div className="experience-timeline">
          <div className="experience-rail" aria-hidden />

          {portfolioExperience.map((e, i) => (
            <article key={i} className="experience-row">
              {/* Date */}
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: "var(--ink-3)",
                  letterSpacing: ".05em",
                  paddingTop: 18,
                  textAlign: "right",
                  paddingRight: 20,
                }}
              >
                <time>{e.period}</time>
              </div>

              {/* Timeline node */}
              <div style={{ position: "relative", height: "100%" }}>
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: 14,
                    top: 18,
                    width: 13,
                    height: 13,
                    borderRadius: "50%",
                    background: "var(--bg)",
                    border: `2px solid ${i === 0 ? "var(--accent)" : "var(--line-2)"}`,
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ paddingLeft: 24, paddingTop: 6 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 14,
                    marginBottom: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 32,
                      lineHeight: 1.1,
                      margin: 0,
                      letterSpacing: "-0.01em",
                      fontWeight: 400,
                    }}
                  >
                    {e.role}
                  </h3>
                  {i === 0 && (
                    <span className="tag">
                      <span className="dot" />
                      current
                    </span>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: "var(--ink-3)",
                    marginBottom: 24,
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ color: "var(--ink-2)" }}>{e.company}</span>
                  <span aria-hidden>·</span>
                  <span>{e.location}</span>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {e.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: 14,
                        fontSize: 14.5,
                        lineHeight: 1.6,
                        color: "var(--ink-2)",
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          color: "var(--accent)",
                          fontFamily: "var(--mono)",
                          fontSize: 11,
                          marginTop: 5,
                          flexShrink: 0,
                        }}
                      >
                        —
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
