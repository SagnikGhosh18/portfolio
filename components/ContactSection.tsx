"use client";

import { useState } from "react";

const EMAIL = "sagnighosh18@gmail.com";

interface FooterItemProps {
  label: string;
  value: string;
  href?: string;
}

function FooterItem({ label, value, href }: FooterItemProps) {
  return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 8 }}>
        {label}
      </div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "var(--mono)",
            fontSize: 13,
            color: "var(--ink)",
            textDecoration: "none",
            borderBottom: "1px solid var(--line-2)",
            paddingBottom: 2,
          }}
        >
          {value}
        </a>
      ) : (
        <div
          style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink)" }}
        >
          {value}
        </div>
      )}
    </div>
  );
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="portfolio-section">
      <div className="portfolio-container">
        {/* Contact card */}
        <div
          style={{
            border: "1px solid var(--line-2)",
            borderRadius: 18,
            padding: "clamp(40px, 6vw, 80px)",
            background: "linear-gradient(180deg, var(--bg-3), var(--bg))",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--ink-3)",
              letterSpacing: ".1em",
            }}
          >
            05 / FIN
          </div>

          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Let&apos;s build something
          </div>

          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(48px, 8vw, 120px)",
              lineHeight: 0.98,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ display: "block" }}>Got a project</span>
            <span style={{ display: "block" }}>that deserves</span>
            <span style={{ display: "block" }}>
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                real care?
              </em>
            </span>
          </h2>

          <div
            style={{
              marginTop: 48,
              display: "flex",
              flexWrap: "wrap",
              gap: 32,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={`mailto:${EMAIL}`} className="btn btn-accent">
                Send an email <span className="arrow">→</span>
              </a>
              <button className="btn" onClick={copy} type="button">
                {copied ? "✓ copied to clipboard" : "Copy email address"}
              </button>
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 13,
                color: "var(--ink-2)",
              }}
            >
              {EMAIL}
            </div>
          </div>

          <hr
            style={{
              height: 1,
              background: "var(--line)",
              border: 0,
              margin: "56px 0 32px",
            }}
          />

          <div className="contact-links-footer">
            <FooterItem label="Email" value={EMAIL} />
            <FooterItem
              label="GitHub"
              value="github.com/SagnikGhosh18"
              href="https://github.com/SagnikGhosh18"
            />
            <FooterItem
              label="LinkedIn"
              value="in/sagnik-ghosh"
              href="https://www.linkedin.com/in/sagnik-ghosh-49b25820b/"
            />
            <FooterItem label="Status" value="Open to projects · Q3 '26" />
          </div>
        </div>

        {/* Footer bar */}
        <footer
          style={{
            marginTop: 32,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "var(--ink-3)",
            letterSpacing: ".05em",
          }}
        >
          <span>© MMXXVI — Sagnik Ghosh</span>
          <span>Designed &amp; built in Bengaluru</span>
          <span>v4.2 — last edit Apr 2026</span>
        </footer>
      </div>
    </section>
  );
}
