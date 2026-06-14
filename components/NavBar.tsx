"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "about", label: "./about" },
  { href: "work", label: "./work" },
  { href: "experience", label: "./xp" },
  { href: "approach", label: "./approach" },
  { href: "contact", label: "./contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(13,17,23,0.82)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(240,246,252,0.08)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 52,
        }}
      >
        <a
          href="#top"
          aria-label="Sagnik Ghosh — home"
          style={{ display: "flex", alignItems: "center", gap: 6, color: "inherit" }}
        >
          <span style={{ color: "var(--orange)", fontSize: 11 }} aria-hidden>
            ●
          </span>
          <span style={{ fontSize: 12, color: "var(--ink-2)", letterSpacing: ".01em" }}>
            ~/sagnik-ghosh
          </span>
          <span style={{ fontSize: 12, color: "var(--dim)", margin: "0 2px" }}>$</span>
          <span className="cursor" aria-hidden />
        </a>

        <ul
          className="nav-links-wrap"
          role="list"
          style={{ display: "flex", gap: 24, listStyle: "none", margin: 0, padding: 0 }}
        >
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={`#${l.href}`}
                className={`nav-link${active === l.href ? " active" : ""}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          aria-label="Availability status"
          style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "var(--green)" }}
        >
          <span className="ping-wrap" aria-hidden />
          <span className="nav-status-label" style={{ letterSpacing: ".01em" }}>
            open_to_work=true
          </span>
        </div>
      </div>
    </nav>
  );
}
