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
  hash: string;
  current: boolean;
  bullets: string[];
}

export interface StackGroup {
  /** lowercase, snake_case key rendered inside the stack.json code block */
  key: string;
  group: string;
  items: string[];
}

export interface ApproachPhase {
  n: string;
  /** snake_case function name rendered in the approach code block */
  fn: string;
  title: string;
  body: string;
}

export const portfolioProjects: Project[] = [
  {
    id: "recurring",
    n: "01",
    year: "2024",
    title: "Recurring Invoicing",
    blurb:
      "Enterprise billing engine at ZenTrades — handles retroactive starts, mid-cycle proration, and a decision-based UI for split-save logic. Ensured data integrity across thousands of generated invoices.",
    role: "Fullstack",
    stack: ["React", "Node.js", "MongoDB", "MySQL", "AWS"],
    metric: { k: "Coverage", v: "Thousands of invoices" },
    href: "N/A",
    accent: "#d4a373",
    bg: "#1a1510",
  },
  {
    id: "yc",
    n: "02",
    year: "2025",
    title: "YC Directory",
    blurb:
      "Startup pitch platform with GitHub OAuth. Integrated a live Sanity content API with 1-minute cache revalidation. Achieved a 91% Lighthouse Performance score through asset optimization and ShadCN best practices.",
    role: "Design + Build",
    stack: ["Next.js 15", "Sanity", "TypeScript", "Tailwind"],
    metric: { k: "Lighthouse", v: "91 / 100 perf" },
    href: "https://yc-clone-sage.vercel.app/",
    accent: "#ff6b3d",
    bg: "#2a1a0d",
  },
  {
    id: "hilink",
    n: "03",
    year: "2024",
    title: "HiLink — Travel",
    blurb:
      "A landing experience for an outdoor-trip planner. Built to study composition, type rhythm, and high-density imagery in a marketing context.",
    role: "Frontend",
    stack: ["Next.js", "Tailwind", "TypeScript"],
    metric: { k: "Lighthouse", v: "98 / 100" },
    href: "https://travel-app-ui-xi.vercel.app/",
    accent: "#7ec8ff",
    bg: "#0d1a26",
  },
  {
    id: "ekmelon",
    n: "04",
    year: "2025",
    title: "Ek Melon",
    blurb:
      "iOS app built from scratch and shipped to the App Store. Supabase powers auth, real-time notifications via cron jobs, and transactional email through Resend. Full user journey visibility with PostHog.",
    role: "Mobile",
    stack: ["React Native", "Supabase", "PostHog", "Resend", "TypeScript"],
    metric: { k: "Platform", v: "Live on App Store" },
    href: "https://apps.apple.com/in/app/ek-melon/id6761439309",
    accent: "#6dbf67",
    bg: "#0f1f0e",
  },
];

export const portfolioExperience: Experience[] = [
  {
    company: "ZenTrades.ai",
    role: "Software Development Engineer",
    period: "Jul '24 — Now",
    location: "Pune, IN",
    hash: "a3f8912e",
    current: true,
    bullets: [
      "Architected parallel execution via AWS Lambda and Google Apps Script, cutting document generation to under 5 minutes and unblocking the Canadian market launch.",
      "Refactored Puppeteer-based PDF generation to a single browser instance, reducing memory usage by 50–80% and CPU load by 30–60%.",
      "Shipped a React Native app from scratch, streamlining inspection-to-invoice workflows and cutting post-job processing time to under 7 days.",
      "Integrated AI-driven recommendation systems into estimate generation, achieving 87% accuracy in automated citation validation.",
      "Refactored the scheduler module to eliminate redundant logic, cutting page load times by over 50%.",
    ],
  },
  {
    company: "ZenTrades.ai",
    role: "Associate Developer",
    period: "Feb – Jul '24",
    location: "Pune, IN",
    hash: "b1c2d34f",
    current: false,
    bullets: [
      "Built saved filter preferences with React and Material UI, reducing user interaction steps by over 75%.",
      "Designed a scalable data schema and RESTful APIs for efficient storage, retrieval, and seamless frontend-backend integration.",
    ],
  },
];

export const portfolioStack: StackGroup[] = [
  { key: "frontend", group: "Frontend", items: ["Next.js", "React", "React Native", "TypeScript", "Tailwind"] },
  { key: "backend", group: "Backend", items: ["Node.js", "Express.js", "Django", "Python"] },
  { key: "database", group: "Database", items: ["MySQL", "MongoDB", "Redis"] },
  { key: "cloud", group: "Cloud", items: ["AWS", "Docker", "Nginx", "ElasticSearch"] },
  { key: "ai_tools", group: "AI / Tools", items: ["LangChain", "Git", "Linux"] },
];

export const portfolioApproach: ApproachPhase[] = [
  {
    n: "01",
    fn: "map_the_territory",
    title: "Map the territory",
    body: "Start by understanding the actual problem — users, constraints, success metrics. Site structure, navigation, and content come out of that, not before it.",
  },
  {
    n: "02",
    fn: "build_in_public",
    title: "Build in public",
    body: "Work in tight loops — small, shippable slices — and keep you in the thread the whole way. No surprises at delivery. Cue the lo-fi.",
  },
  {
    n: "03",
    fn: "ship_and_sharpen",
    title: "Ship & sharpen",
    body: "From approved design to production code, with measurable checks on performance, accessibility, and the small interactions that make a product feel alive.",
  },
];
