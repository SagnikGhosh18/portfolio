export const SITE_URL = "https://portfolio-sagnik.vercel.app";
export const EMAIL = "sagnikghosh18@gmail.com";
export const GITHUB = "https://github.com/SagnikGhosh18";
export const LINKEDIN = "https://www.linkedin.com/in/sagnik-ghosh-49b25820b/";

export const TAGS = { ai: "AI", backend: "Backend", performance: "Performance" } as const;
export type Tag = keyof typeof TAGS;

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

export const stats = [
  { value: "1M+", label: "invoices processed on the platform my billing engine runs on" },
  { value: "87%", label: "accuracy on RAG-generated deficiencies, scored by field technicians" },
  { value: "~8 wks", label: "to ship an in-house inventory system replacing Zoho" },
  { value: "50–80%", label: "less memory after refactoring Puppeteer PDF generation" },
];

export const stack = [
  { name: "languages", items: ["TypeScript", "JavaScript", "Python", "Java"] },
  { name: "ai / ml", items: ["RAG pipelines", "LangChain", "ChromaDB", "Vector search", "LLM integration"] },
  { name: "frontend", items: ["React", "Next.js", "React Native", "Tailwind", "Sass"] },
  { name: "backend", items: ["NestJS", "Node.js", "Express", "Django", "TypeORM"] },
  { name: "data", items: ["MySQL", "MongoDB", "Redis", "Elasticsearch"] },
  { name: "infra + test", items: ["AWS", "Docker", "Nginx", "Linux", "Jest", "RTL"] },
];

export const projects = [
  {
    index: "01", role: "allo health", kicker: "inventory · billing",
    metric: "~8 wks", metricLabel: "from zero to replacing Zoho Inventory",
    name: "Pharmacy Inventory Engine",
    desc: "Multi-entity stock model that separates ownership from location, so one batch can be valued differently from wholesaler to franchise to patient. Pricing, GST and MRP caps live server-side.",
    tech: ["NestJS", "TypeScript", "MySQL", "E2E tests"],
    cta: "case study", href: "/writing/ownership-is-not-location",
  },
  {
    index: "02", role: "zentrades.ai", kicker: "applied ai",
    metric: "87%", metricLabel: "accuracy vs real technician feedback",
    name: "RAG Deficiency Quotes",
    desc: "Self-hosted RAG system that drafts fire-inspection deficiency quotes and line items grounded in NFPA codes — retrieval tuned to cut hallucination in a compliance domain.",
    tech: ["Django", "ChromaDB", "LangChain", "LLMs"],
    cta: "case study", href: "/writing/grounding-rag-in-fire-codes",
  },
  {
    index: "03", role: "zentrades.ai", kicker: "billing · payments",
    metric: "1M+", metricLabel: "invoices on the platform",
    name: "Recurring Invoicing",
    desc: "Designed and shipped solo: a parent-to-child template hierarchy supporting edits, pausing, date-skipping and cancellation, plus bulk future-schedule edits in React.",
    tech: ["React", "Node.js", "MySQL", "Stripe"],
    cta: "case study", href: "/writing/recurring-invoices-are-a-tree",
  },
  {
    index: "04", role: "internal tool", kicker: "applied ai",
    metric: "$0", metricLabel: "licensing cost after replacing RovoDev",
    name: "AI PR Review Agent",
    desc: "Automated code review agent that analyzes pull request diffs and delivers structured, context-aware feedback. The engineering team uses it on every PR.",
    tech: ["Qwen 2.5 Coder 14B", "GCP Serverless Compute"],
  },
  {
    index: "05", role: "solo · ios", kicker: "ai vision",
    metric: "5.0", metricLabel: "rating on the App Store",
    name: "Ek Melon",
    desc: "Snap a watermelon, get a ripeness verdict. Gemini Vision scores four visual dimensions with a confidence and plain-language breakdown, in 4+ Indian languages.",
    tech: ["React Native", "Supabase", "Gemini Vision"],
    cta: "app store", href: "https://apps.apple.com/in/app/ek-melon/id6761439309",
  },
  {
    index: "06", role: "design + build", kicker: "web",
    metric: "91", metricLabel: "lighthouse performance",
    name: "YC Directory",
    desc: "Startup pitch platform with GitHub OAuth and live content from Sanity CMS.",
    tech: ["Next.js 15", "Sanity", "TypeScript", "Tailwind"],
    cta: "live site", href: "https://yc-clone-sage.vercel.app/",
  },
];

export const jobs = [
  {
    role: "Software Engineer", company: "Allo Health", dates: "Jun 2026 – present", current: true,
    points: [
      "Shipped the core of an in-house pharmacy inventory and billing system in ~8 weeks (NestJS, TypeScript, MySQL), replacing a rate-limited Zoho Inventory dependency and bringing batch data under company control",
      "Tracked stock ownership separately from location, so one batch can be owned and valued differently from wholesaler to franchise pharmacy to patient",
      "Moved pricing and tax server-side (discount rules, GST by product and date, hard cap at printed MRP); B2B and B2C end-to-end tests caught 5 defects unit tests had missed",
    ],
  },
  {
    role: "Software Engineer", company: "ZenTrades.ai", dates: "Jul 2024 – May 2026",
    points: [
      "Owned end-to-end a self-hosted RAG system (Django + ChromaDB) for NFPA-grounded fire-inspection quotes — 87% accuracy against real technician feedback",
      "Designed and shipped, solo, the recurring-invoicing engine on a platform past 1M invoices",
      "Country-specific Stripe surcharges, capping Canada at the government-mandated 2.4% ahead of market entry",
      "Parallel document generation on AWS Lambda + Google Apps Script: under 5 minutes, no more API timeouts",
      "Shared-browser Puppeteer refactor: 50–80% less memory, 30–60% less CPU",
      "Took production crashes from 100+ a day to 1–2 a week with trace IDs, Slack crash alerts and a fix for the ORM connection-timeout root cause",
    ],
  },
  {
    role: "Associate Developer", company: "ZenTrades.ai", dates: "Feb – Jul 2024",
    points: ["Saved filter preferences that cut user interaction steps by over 75%"],
  },
  {
    role: "B.Tech, Computer Science", company: "VIT Vellore", dates: "2020 – 2024",
    points: ["Gold Medalist — highest-scoring student in the stream, CGPA 9.40"],
  },
];

export const certs = [
  { name: "AWS Solutions Architect", sub: "Associate · verify", href: "https://www.credly.com/badges/ac4cb1b2-0ad5-4c98-bcb5-40556ca7124a/public_url" },
  { name: "Microsoft Technology Associate", sub: "Programming in Java · verify", href: "https://www.credly.com/badges/c28ed8c1-374d-46e7-ae9a-e72fc8665317/public_url" },
];
