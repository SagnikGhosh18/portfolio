"use client";

import { useState } from "react";
import { portfolioProjects, type Project } from "@/data/portfolio";

function ProjectRow({
  project: p,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${p.title} — opens in new tab`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="project-row-grid"
      style={{
        paddingTop: 36,
        paddingBottom: 36,
        paddingLeft: hover ? 12 : 0,
        borderTop: "1px solid var(--line)",
        borderBottom:
          index === total - 1 ? "1px solid var(--line)" : "none",
        position: "relative",
        transition: "padding .35s cubic-bezier(.3,.7,.4,1)",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {/* Number + year */}
      <div
        className="mono"
        style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: ".1em" }}
      >
        ({p.n})
        <br />
        <span style={{ color: "var(--ink-4)" }}>{p.year}</span>
      </div>

      {/* Title + stack */}
      <div>
        <h3
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(28px, 3vw, 40px)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            margin: 0,
            fontWeight: 400,
          }}
        >
          {p.title}
        </h3>
        <div style={{ display: "flex", gap: 6, marginTop: 14, flexWrap: "wrap" }}>
          {p.stack.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10.5,
                padding: "3px 8px",
                borderRadius: 5,
                color: "var(--ink-3)",
                border: "1px solid var(--line)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Description + meta */}
      <div className="project-row-desc">
        <p
          style={{
            fontSize: 14.5,
            lineHeight: 1.65,
            color: "var(--ink-2)",
            margin: 0,
            maxWidth: 460,
          }}
        >
          {p.blurb}
        </p>
        <div style={{ display: "flex", gap: 24, marginTop: 16 }}>
          <div>
            <div className="eyebrow" style={{ fontSize: 9.5, marginBottom: 4 }}>
              Role
            </div>
            <div className="mono" style={{ fontSize: 12 }}>
              {p.role}
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ fontSize: 9.5, marginBottom: 4 }}>
              {p.metric.k}
            </div>
            <div className="mono" style={{ fontSize: 12 }}>
              {p.metric.v}
            </div>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div
        className="project-row-arrow"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div
          aria-hidden
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1px solid var(--line-2)",
            display: "grid",
            placeItems: "center",
            background: hover ? p.accent : "transparent",
            color: hover ? "#0c0a07" : "var(--ink-2)",
            transition: "all .3s cubic-bezier(.3,.7,.4,1)",
            transform: hover ? "rotate(-45deg) scale(1.05)" : "rotate(0)",
          }}
        >
          →
        </div>
      </div>

      {/* Floating hover preview */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: hover ? "12%" : "8%",
          top: "50%",
          transform: `translateY(-50%) rotate(${hover ? -3 : -8}deg) scale(${hover ? 1 : 0.85})`,
          width: 220,
          height: 140,
          borderRadius: 10,
          background: `linear-gradient(135deg, ${p.bg}, color-mix(in srgb, ${p.accent} 30%, ${p.bg}))`,
          border: `1px solid ${p.accent}`,
          opacity: hover ? 0.55 : 0,
          pointerEvents: "none",
          transition: "all .45s cubic-bezier(.3,.7,.4,1)",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <div
          style={{
            padding: 16,
            fontFamily: "var(--mono)",
            fontSize: 10,
            color: p.accent,
          }}
        >
          {p.title.toLowerCase().replace(/\s+/g, "-")}.preview
        </div>
        <div
          style={{
            position: "absolute",
            left: 16,
            right: 16,
            bottom: 16,
            height: 60,
            background: "rgba(255,255,255,.04)",
            borderRadius: 6,
            border: "1px dashed rgba(255,255,255,.1)",
          }}
        />
      </div>
    </a>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="portfolio-section"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="portfolio-container">
        <div className="sec-head">
          <div>
            <div className="sec-num">02 — Selected work</div>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Three recent <em>builds.</em>
            </h2>
          </div>
          <p className="sec-meta">
            A short shelf, not a complete archive. Pick one to peek inside.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {portfolioProjects.map((p, i) => (
            <ProjectRow
              key={p.id}
              project={p}
              index={i}
              total={portfolioProjects.length}
            />
          ))}
        </div>

        <div style={{ marginTop: 56, display: "flex", justifyContent: "center" }}>
          <a
            className="btn"
            href="https://github.com/SagnikGhosh18"
            target="_blank"
            rel="noreferrer"
          >
            All projects on GitHub <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
