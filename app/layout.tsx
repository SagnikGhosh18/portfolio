import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "./_components/ThemeToggle";
import { EMAIL, GITHUB, LINKEDIN, SITE_URL } from "@/content/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "Sagnik Ghosh — Software Engineer";
const DESCRIPTION =
  "Software engineer building production systems across applied AI, payments and correctness-critical billing. Currently at Allo Health.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Sagnik Ghosh" },
  description: DESCRIPTION,
  authors: [{ name: "Sagnik Ghosh", url: SITE_URL }],
  creator: "Sagnik Ghosh",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: SITE_URL, siteName: "Sagnik Ghosh", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0C0E0D" },
    { media: "(prefers-color-scheme: light)", color: "#F5F4EF" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sagnik Ghosh",
  jobTitle: "Software Engineer",
  url: SITE_URL,
  email: EMAIL,
  sameAs: [GITHUB, LINKEDIN],
  worksFor: { "@type": "Organization", name: "Allo Health" },
  address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
};

// Runs before first paint: stored choice, else system preference, else dark.
const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t}catch(e){}`;

const navLinks = [
  ["work", "/#work"],
  ["stack", "/#stack"],
  ["log", "/#experience"],
  // ["writing", "/#writing"],
  ["contact", "/#contact"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${bricolage.variable} ${jetbrains.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-20 focus:rounded-lg focus:bg-btn-bg focus:px-4 focus:py-3 focus:text-btn-ink">
          Skip to content
        </a>
        <header className="sticky top-0 z-10 border-b border-line bg-[var(--header)] backdrop-blur-md">
          <nav aria-label="Primary" className="wrap flex min-h-16 flex-wrap items-center justify-between gap-x-6 gap-y-1">
            <Link href="/#top" className="flex min-h-11 items-center font-mono text-[15px] font-bold">
              <span className="text-acc">~/</span>sagnik<span className="blink text-acc">_</span>
            </Link>
            <div className="flex flex-wrap items-center gap-x-[clamp(12px,2.5vw,18px)] font-mono text-[13px]">
              {navLinks.map(([label, href]) => (
                <Link key={href} href={href} className="nl py-[13px] text-muted">
                  {label}
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
