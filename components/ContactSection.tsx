"use client";

import { useState } from "react";

const EMAIL = "sagnikghosh18@gmail.com";

const FOOTER_LINKS: { label: string; value: string; href: string | null }[] = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "GitHub", value: "github.com/SagnikGhosh18", href: "https://github.com/SagnikGhosh18" },
  { label: "LinkedIn", value: "in/sagnik-ghosh", href: "https://www.linkedin.com/in/sagnik-ghosh-49b25820b/" },
  { label: "Status", value: "Open to projects · Q3 '26", href: null },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div
          style={{
            border: "1px solid var(--line-2)",
            borderRadius: 12,
            padding: "clamp(40px,6vw,80px)",
            background: "linear-gradient(160deg,#0d1117 60%,#161b22)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 24, right: 28, fontSize: 10, color: "var(--dimmer)", letterSpacing: ".1em" }}>
            05 / FIN
          </div>

          <div style={{ fontSize: 10, color: "var(--green)", letterSpacing: ".15em", marginBottom: 20 }}>
            {"// 05 — contact"}
</div>

          <h2
            style={{
              fontSize: "clamp(44px,8vw,110px)",
              fontWeight: 600,
              lineHeight: 0.97,
              letterSpacing: "-0.025em",
              marginBottom: 48,
            }}
          >
            <span style={{ display: "block", color: "var(--ink)" }}>Got a project</span>
            <span style={{ display: "block", color: "var(--ink)" }}>that deserves</span>
            <span style={{ display: "block", color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>
              real care?
            </span>
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 56,
            }}
          >
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href={`mailto:${EMAIL}`} className="btn btn-accent">
                $ mail sagnik &nbsp;→
              </a>
              <button className="btn" onClick={copy} type="button">
                {copied ? "✓ copied" : "$ pbcopy email"}
              </button>
            </div>
            <div style={{ fontSize: 12, color: "var(--dim)", fontStyle: "italic" }}>{EMAIL}</div>
          </div>

          <div style={{ height: 1, background: "var(--line)", margin: "0 0 40px" }} />

          <div className="contact-foot-grid">
            {FOOTER_LINKS.map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontSize: 10,
                    color: "var(--dim)",
                    letterSpacing: ".1em",
                    marginBottom: 10,
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    style={{
                      fontSize: 12,
                      color: "var(--ink)",
                      borderBottom: "1px solid var(--line-3)",
                      paddingBottom: 2,
                      transition: "color .2s",
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <div style={{ fontSize: 12, color: "var(--ink)", display: "flex", alignItems: "center", gap: 7 }}>
                    <span className="ping-wrap" />
                    {item.value}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <footer
          style={{
            marginTop: 32,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 10,
            color: "var(--dimmer)",
            letterSpacing: ".06em",
          }}
        >
          <span>© MMXXVI — Sagnik Ghosh</span>
          <span>Designed &amp; built in Pune</span>
          <span>v4.2 · last edit Jun 2026</span>
        </footer>
      </div>
    </section>
  );
}
