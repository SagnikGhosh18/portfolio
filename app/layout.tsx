import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://portfolio-sagnik.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Sagnik Ghosh — Fullstack Engineer",
    template: "%s | Sagnik Ghosh",
  },
  description:
    "Sagnik Ghosh is a fullstack engineer (React, Node.js, AWS, Python) and VIT Gold Medalist. Currently SDE at ZenTrades.ai — shipping production features across web, mobile, and cloud.",
  keywords: [
    "Sagnik Ghosh",
    "fullstack engineer",
    "Next.js developer",
    "TypeScript",
    "React",
    "portfolio",
    "Pune",
    "ZenTrades",
  ],
  authors: [{ name: "Sagnik Ghosh", url: SITE_URL }],
  creator: "Sagnik Ghosh",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Sagnik Ghosh — Fullstack Engineer",
    description:
      "Building thoughtful interfaces and the systems that power them.",
    siteName: "Sagnik Ghosh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagnik Ghosh — Fullstack Engineer",
    description:
      "Building thoughtful interfaces and the systems that power them.",
    creator: "@sagnik_g",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sagnik Ghosh",
  jobTitle: "Fullstack Engineer",
  url: SITE_URL,
  email: "sagnikghosh18@gmail.com",
  sameAs: [
    "https://github.com/SagnikGhosh18",
    "https://www.linkedin.com/in/sagnik-ghosh-49b25820b/",
  ],
  worksFor: {
    "@type": "Organization",
    name: "ZenTrades Inc.",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "LangChain",
    "MongoDB",
    "MySQL",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={jetbrainsMono.variable}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
