"use client";

import { useState } from "react";
import { portfolioProjects, type Project } from "@/data/portfolio";

function ProjectRow({ project: p }: { project: Project }) {
  const [hover, setHover] = useState(false);
  const isExt = p.href !== "N/A";

  const content = (
    <>
      <div style={{ fontSize: 11, color: "var(--dim)", paddingTop: 2 }}>
        {p.n}
        <br />
        <span style={{ color: "var(--dimmer)", fontSize: 10 }}>{p.year}</span>
      </div>
      <div>
        <div
          className="proj-title"
          style={{
            fontSize: 17,
            fontWeight: 500,
            color: isExt ? (hover ? "var(--accent)" : "var(--ink)") : "var(--ink)",
            marginBottom: 6,
            transition: "color .2s",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {isExt && (
            <span style={{ fontSize: 11, color: hover ? "var(--accent)" : "var(--dimmer)", transition: "color .2s" }}>
              →
            </span>
          )}
          {p.title}
        </div>
        <div style={{ fontSize: 11, color: "var(--dim)" }}>
          role: <span style={{ color: "var(--muted)" }}>{p.role}</span>
        </div>
      </div>
      <div className="proj-desc-col" style={{ fontSize: 12, lineHeight: 1.75, color: "var(--dim)", maxWidth: 480 }}>
        {p.blurb}
      </div>
      <div className="proj-stack-col" style={{ display: "flex", flexWrap: "wrap", gap: 4, paddingTop: 2 }}>
        {p.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
      <div className="proj-metric-col" style={{ textAlign: "right" }}>
        <div style={{ fontSize: 10, color: "var(--dim)", marginBottom: 4, letterSpacing: ".08em" }}>
          {p.metric.k}
        </div>
        <div style={{ fontSize: 12, color: "var(--green)", fontWeight: 500 }}>{p.metric.v}</div>
      </div>
    </>
  );

  const rowStyle: React.CSSProperties = {
    borderLeft: hover && isExt ? "2px solid var(--accent)" : "2px solid transparent",
    paddingLeft: hover && isExt ? 10 : 0,
    transition: "all .2s",
  };

  if (isExt) {
    return (
      <a
        href={p.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${p.title} — opens in new tab`}
        className="proj-row is-ext"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={rowStyle}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className="proj-row"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={rowStyle}
    >
      {content}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="work" className="section">
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
              {"// 02 — selected work"}
</div>
            <h2 style={{ fontSize: "clamp(32px,4.5vw,60px)", fontWeight: 600, lineHeight: 1.0, letterSpacing: "-0.02em" }}>
              <span style={{ color: "var(--dim)", fontWeight: 400 }}>drwxr-xr-x&nbsp;</span>
              <span style={{ color: "var(--ink)" }}>./projects</span>
            </h2>
          </div>
          <div style={{ fontSize: 11, color: "var(--dim)", textAlign: "right", lineHeight: 1.6 }}>
            {portfolioProjects.length} entries
            <br />
            sorted by impact
          </div>
        </div>

        <div
          className="proj-hd"
          style={{
            padding: "8px 0",
            borderBottom: "1px solid var(--line-2)",
            fontSize: 10,
            color: "var(--dimmer)",
            letterSpacing: ".1em",
          }}
        >
          <span>idx</span>
          <span>name</span>
          <span>description</span>
          <span>stack</span>
          <span style={{ textAlign: "right" }}>metric</span>
        </div>

        {portfolioProjects.map((p) => (
          <ProjectRow key={p.id} project={p} />
        ))}

        <div style={{ marginTop: 44, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href="https://github.com/SagnikGhosh18"
            target="_blank"
            rel="noreferrer"
            className="btn btn-accent"
          >
            github.com/SagnikGhosh18 &nbsp;→
          </a>
          <a href="#contact" className="btn">
            start a project
          </a>
        </div>
      </div>
    </section>
  );
}
