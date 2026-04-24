export interface Project {
  id: string;
  n: string;
  year: string;
  title: string;
  blurb: string;
  role: string;
  stack: string[];
  metric: { k: string; v: string };
  href: string;
  accent: string;
  bg: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface StackGroup {
  group: string;
  items: string[];
}

export interface ApproachPhase {
  n: string;
  title: string;
  body: string;
}

export const portfolioProjects: Project[] = [
  {
    id: "yc",
    n: "01",
    year: "2025",
    title: "YC Directory",
    blurb:
      "A pitch-and-discover platform for early-stage founders. Submit your startup, browse curated pitches, and get exposure through a clean, minimalist surface.",
    role: "Design + Build",
    stack: ["Next.js 15", "Sanity", "TypeScript", "Tailwind"],
    metric: { k: "Server actions", v: "Full RSC architecture" },
    href: "https://yc-clone-sage.vercel.app/",
    accent: "#ff6b3d",
    bg: "#2a1a0d",
  },
  {
    id: "hilink",
    n: "02",
    year: "2024",
    title: "HiLink — Travel",
    blurb:
      "A landing experience for an outdoor-trip planner. Built to study composition, type rhythm, and high-density imagery in a marketing context.",
    role: "Frontend",
    stack: ["Next.js", "Tailwind", "TypeScript"],
    metric: { k: "Lighthouse", v: "98 / 100 / 100 / 100" },
    href: "https://travel-app-ui-xi.vercel.app/",
    accent: "#7ec8ff",
    bg: "#0d1a26",
  },
  {
    id: "livedocs",
    n: "03",
    year: "2024",
    title: "LiveDocs",
    blurb:
      "A real-time collaborative document editor. Multiplayer cursors, comments, and presence — built to learn the constraints of CRDT-driven UIs.",
    role: "Fullstack",
    stack: ["React", "Liveblocks", "Tailwind", "Clerk"],
    metric: { k: "Realtime", v: "Sub-100ms presence" },
    href: "https://collaborative-editor-lovat.vercel.app/",
    accent: "#b48aff",
    bg: "#1a1226",
  },
];

export const portfolioExperience: Experience[] = [
  {
    company: "ZenTrades Inc.",
    role: "Software Developer — Fullstack",
    period: "2024 — Present",
    location: "Remote",
    bullets: [
      "Shipped a fully functional dashboard end-to-end in 48 hours.",
      "Owned the Report Builder feature: drag-and-drop layout, real-time data injection, and PDF generation via Puppeteer.",
      "Cut scheduler module load times by 50%+ through targeted refactors and code-quality work.",
      "Currently building AI-agent capabilities into the core product.",
    ],
  },
  {
    company: "ZenTrades Inc.",
    role: "Technology Intern — Fullstack",
    period: "2023 — 2024",
    location: "Remote",
    bullets: [
      "Built a filter-saving feature with React, Material UI, and Semantic UI.",
      "Architected a high-performance data schema and integrated REST APIs for storage and retrieval.",
      "Wrote responsive, well-tested code following team conventions.",
    ],
  },
];

export const portfolioStack: StackGroup[] = [
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind"] },
  { group: "Backend", items: ["Node.js", "Go", "Java", "REST"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Sanity"] },
  { group: "Cloud", items: ["AWS", "Vercel", "Docker"] },
  { group: "AI", items: ["LangChain", "OpenAI", "Agents"] },
];

export const portfolioApproach: ApproachPhase[] = [
  {
    n: "Phase 01",
    title: "Map the territory",
    body: "I start by understanding the actual problem — users, constraints, success metrics. Site structure, navigation, and content come out of that, not before it.",
  },
  {
    n: "Phase 02",
    title: "Build in public",
    body: "Cue the lo-fi. I work in tight loops — small, shippable slices — and keep you in the thread the whole way. No surprises at delivery.",
  },
  {
    n: "Phase 03",
    title: "Ship & sharpen",
    body: "From approved design to production code, with measurable checks on performance, accessibility, and the small interactions that make a product feel alive.",
  },
];
