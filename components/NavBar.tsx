import Link from "next/link";

const NAV_LINKS = [
  { href: "#work", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#approach", label: "approach" },
  { href: "#contact", label: "contact" },
];

export default function NavBar() {
  return (
    <nav className="portfolio-nav" aria-label="Main navigation">
      <div className="portfolio-nav-inner">
        <Link href="#top" className="portfolio-logo" aria-label="Sagnik Ghosh — home">
          <span className="portfolio-logo-mark" aria-hidden="true">S</span>
          <span>
            sagnik.ghosh
            <span style={{ color: "var(--ink-3)" }}>/portfolio</span>
          </span>
        </Link>

        <ul className="portfolio-nav-links" role="list" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="portfolio-nav-link">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="portfolio-nav-cta" aria-label="Availability status">
          <span className="portfolio-ping" aria-hidden="true" />
          <span className="ping-label">open to new projects</span>
        </div>
      </div>
    </nav>
  );
}
