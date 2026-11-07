import { Fragment } from "react";
// import Link from "next/link";
import { certs, EMAIL, GITHUB, jobs, LINKEDIN, projects, stack, stats } from "@/content/site";
// import { getPosts } from "@/lib/posts";
import { ArrowRight, ArrowUpRight, Download, GitHubIcon, LinkedInIcon } from "./_components/icons";
// import WritingList from "./_components/WritingList";

const ACC = "#C8F169"; // code card keeps the full-brightness accent in both themes
const s = (v: string) => <span style={{ color: ACC }}>&quot;{v}&quot;</span>;
const list = (vs: string[]) => vs.map((v, i) => <span key={v}>{i > 0 && ", "}{s(v)}</span>);

const codeLines = [
  <span key={0} style={{ color: "#7C8580" }}>{"// who I am, typed"}</span>,
  <Fragment key={1}><span style={{ color: "#F2A97B" }}>export const</span> <span style={{ color: "#ECEAE4" }}>sagnik</span> = {"{"}</Fragment>,
  <Fragment key={2}>  role: {s("Software Engineer")},</Fragment>,
  <Fragment key={3}>  company: {s("Allo Health")},</Fragment>,
  <Fragment key={4}>  previously: {s("ZenTrades.ai")},</Fragment>,
  <Fragment key={5}>  stack: [{list(["TS", "NestJS", "React", "Django"])}],</Fragment>,
  <Fragment key={6}>  focus: [{list(["RAG", "payments", "billing"])}],</Fragment>,
  <Fragment key={7}>  certified: {s("AWS SA-Associate")},</Fragment>,
  <Fragment key={8}>  shipsFast: <span style={{ color: "#8DB8F5" }}>true</span>,</Fragment>,
  <Fragment key={9}>{"};"}<span className="blink" style={{ color: ACC }}>▍</span></Fragment>,
];

const outlineBtn = "btn ghost inline-flex min-h-12 items-center gap-2.5 rounded-[10px] border border-line3 px-5 font-mono text-[13px]";

export default async function Home() {
  // const posts = await getPosts();

  return (
    <>
      {/* HERO */}
      <section id="top" className="border-b border-line bg-[radial-gradient(var(--dot)_1px,transparent_1px)] bg-[length:28px_28px]">
        <div className="wrap flex flex-wrap items-center gap-[clamp(40px,6vw,72px)] pt-[clamp(56px,10vw,128px)] pb-[clamp(56px,8vw,104px)]">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
            <div className="rise inline-flex items-center gap-2.5 self-start rounded-full border border-line2 bg-surface px-3.5 py-2 font-mono text-xs text-body">
              <span className="pulse size-2 rounded-full bg-acc text-acc" />
              open to interesting projects
            </div>
            <h1 className="rise text-[clamp(52px,10vw,128px)] leading-[0.92] font-extrabold tracking-[-0.04em]" style={{ animationDelay: "90ms" }}>
              Sagnik
              <br />
              Ghosh<span className="text-acc">.</span>
            </h1>
            <p className="rise max-w-[560px] text-[clamp(18px,2vw,22px)] leading-normal text-body" style={{ animationDelay: "180ms" }}>
              Software engineer building production systems across{" "}
              <span className="font-bold text-ink">applied AI, payments and correctness-critical billing</span>. Currently at Allo
              Health, rebuilding pharmacy inventory from the ground up.
            </p>
            <div className="rise flex flex-wrap gap-3" style={{ animationDelay: "270ms" }}>
              <a href="#work" className="btn push inline-flex min-h-12 items-center gap-2.5 rounded-[10px] bg-btn-bg px-[22px] text-base font-bold text-btn-ink">
                See selected work <ArrowRight size={16} strokeWidth={2.2} />
              </a>
              <a href={`mailto:${EMAIL}`} className="btn ghost inline-flex min-h-12 items-center rounded-[10px] border border-line3 px-[22px] text-base font-medium">
                Get in touch
              </a>
            </div>
            <div className="rise flex flex-wrap gap-x-5 gap-y-2 font-mono text-[13px] text-muted" style={{ animationDelay: "360ms" }}>
              <span>Bangalore, IN · UTC+5:30</span>
              <span>B.Tech CSE · VIT Vellore, Gold Medal</span>
            </div>
          </div>

          <div
            className="rise max-w-full min-w-0 flex-[1_1_380px] rounded-2xl border border-[#262B28] bg-[#111412] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)]"
            style={{ animationDelay: "240ms" }}
          >
            <div className="flex items-center gap-2 border-b border-[#222724] px-[18px] py-3.5">
              {[0, 1, 2].map((i) => <span key={i} className="size-[11px] rounded-full bg-[#3A403C]" />)}
              <span className="ml-2.5 font-mono text-xs text-[#8E948F]">profile.ts</span>
            </div>
            <pre className="overflow-x-auto px-5 pt-[22px] pb-[26px] font-mono text-[clamp(12px,1.3vw,14px)] leading-[1.85] text-[#C9CCC6]" tabIndex={0} aria-label="profile.ts">
              {codeLines.map((line, i) => (
                <div key={i} className="rise" style={{ animationDelay: `${500 + i * 80}ms` }}>{line}</div>
              ))}
            </pre>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section aria-label="Impact" className="border-b border-line">
        <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,160px),1fr))]">
          {stats.map((st) => (
            <div key={st.value} className="reveal -mt-px flex flex-col gap-2 border-t border-line py-[clamp(24px,4vw,40px)]">
              <div className="text-[clamp(32px,4.5vw,52px)] leading-none font-extrabold tracking-[-0.03em]">{st.value}</div>
              <div className="max-w-[220px] pr-4 font-mono text-xs leading-normal text-muted">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT + STACK */}
      <section id="stack" className="border-b border-line">
        <div className="wrap section-y flex flex-wrap gap-[clamp(40px,6vw,80px)]">
          <div className="reveal flex min-w-0 flex-[1_1_340px] flex-col gap-5">
            <div className="eyebrow">01 — about</div>
            <h2 className="h2">Driven by passion, powered by curiosity.</h2>
            <p className="text-[17px] leading-[1.65] text-body">
              Billing, tax, payments and compliance — the parts of a product where a rounding error or a hallucination is a real
              problem. I work end to end, schema to screen, and back it with tests that catch what unit tests miss.
            </p>
            <p className="text-[17px] leading-[1.65] text-body">
              At ZenTrades.ai I built a self-hosted RAG system for fire-inspection quotes and a recurring-invoicing engine on a
              platform past 1M invoices. At Allo Health I’m replacing a third-party ERP with an in-house, multi-entity pharmacy
              inventory engine.
            </p>
          </div>
          <div className="reveal flex min-w-0 flex-[1.4_1_460px] flex-col gap-5">
            <div className="eyebrow">02 — stack</div>
            <div className="flex flex-col border-t border-line2">
              {stack.map((g) => (
                <div key={g.name} className="flex flex-wrap items-baseline gap-x-6 gap-y-3 border-b border-line2 py-5">
                  <div className="flex-[0_0_120px] font-mono text-[13px] text-muted">{g.name}</div>
                  <div className="flex flex-[1_1_240px] flex-wrap gap-2">
                    {g.items.map((t) => (
                      <span key={t} className="chip rounded-lg border border-line2 bg-surface2 px-3 py-1.5 text-[15px] font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-b border-line">
        <div className="wrap section-y flex flex-col gap-[clamp(32px,5vw,56px)]">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-4">
              <div className="eyebrow">03 — selected work</div>
              <h2 className="h2">Things I’ve shipped.</h2>
            </div>
            <p className="max-w-[360px] text-[15px] leading-[1.6] text-muted">
              Production systems and side builds, each with the number I’m proudest of.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-5">
            {projects.map((p) => (
              <article key={p.index} className="lift reveal flex flex-col overflow-hidden rounded-[18px] border border-line2 bg-surface">
                <div className="flex h-[clamp(180px,22vw,240px)] flex-col justify-between border-b border-line2 bg-surface2 bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] bg-[length:32px_32px] p-6">
                  <div className="flex items-center justify-between gap-3 font-mono text-xs text-muted">
                    <span>{p.index} / {p.role}</span>
                    <span>{p.kicker}</span>
                  </div>
                  <div className="metric flex flex-col gap-1.5">
                    <div className="text-[clamp(40px,6vw,72px)] leading-[0.95] font-extrabold tracking-[-0.04em] text-acc">{p.metric}</div>
                    <div className="font-mono text-xs text-body">{p.metricLabel}</div>
                  </div>
                </div>
                <div className="flex grow flex-col gap-3.5 p-6">
                  <h3 className="text-[26px] font-bold tracking-[-0.02em]">{p.name}</h3>
                  <p className="grow text-base leading-[1.6] text-body">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-line3 px-2.5 py-1 font-mono text-xs text-body">{t}</span>
                    ))}
                  </div>
                  {p.href && (
                    <a
                      href={p.href}
                      {...(p.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                      className="nudge inline-flex min-h-11 items-center gap-2 self-start font-mono text-[13px] text-ink"
                    >
                      {p.cta} <span className="sr-only">— {p.name}</span>
                      <ArrowUpRight />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-b border-line">
        <div className="wrap section-y flex flex-wrap gap-[clamp(32px,6vw,80px)]">
          <div className="reveal flex min-w-0 flex-[1_1_280px] flex-col gap-4">
            <div className="eyebrow">04 — git log --career</div>
            <h2 className="h2">Where I’ve committed.</h2>
            <a href="/resume.pdf" className={`${outlineBtn} mt-2 self-start`}>
              <Download size={16} /> resume.pdf
            </a>
            <div className="mt-6 flex flex-col gap-3">
              <div className="font-mono text-xs text-muted">certifications</div>
              {certs.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lift nudge flex min-h-14 items-center justify-between gap-3 rounded-xl border border-line2 bg-surface px-4 py-3"
                >
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-bold">{c.name}</span>
                    <span className="font-mono text-xs text-muted">{c.sub}</span>
                  </span>
                  <ArrowUpRight />
                </a>
              ))}
            </div>
          </div>
          <ol className="flex min-w-0 flex-[2_1_520px] flex-col">
            {jobs.map((j) => (
              <li key={j.role + j.dates} className="reveal flex gap-5">
                <div className="flex flex-[0_0_14px] flex-col items-center">
                  <span
                    className={`mt-2 size-3 rounded-full border-2 ${j.current ? "pulse border-acc bg-acc text-acc" : "border-line3 bg-bg"}`}
                  />
                  <span className="w-px grow bg-line2" />
                </div>
                <div className="flex min-w-0 flex-auto flex-col gap-2.5 pb-11">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[22px] font-bold tracking-[-0.01em]">
                      {j.role} <span className="font-medium text-muted">@ {j.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted">{j.dates}</span>
                  </div>
                  <ul className="mt-1 flex flex-col gap-2.5">
                    {j.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-base leading-[1.55] text-body">
                        <span className="font-mono text-acc" aria-hidden="true">+</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WRITING — hidden for now
      <section id="writing" className="border-b border-line">
        <div className="wrap section-y flex flex-col gap-[clamp(28px,4vw,44px)]">
          <WritingList posts={posts} />
          <Link href="/writing" className={`${outlineBtn} push self-start`}>
            all posts <ArrowRight />
          </Link>
        </div>
      </section>
      */}

      {/* CONTACT */}
      <section id="contact">
        <div className="wrap flex flex-col gap-8 pt-[clamp(72px,11vw,144px)] pb-12">
          <div className="eyebrow reveal">06 — contact</div>
          <h2 className="reveal max-w-[1000px] text-[clamp(40px,8vw,104px)] leading-[0.95] font-extrabold tracking-[-0.045em]">
            Got something which requires care?
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="reveal max-w-full self-start py-2 text-[clamp(20px,3vw,34px)] font-medium wrap-anywhere text-acc underline decoration-2 underline-offset-8"
          >
            {EMAIL}
          </a>
          <div className="flex flex-wrap gap-3">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={outlineBtn}>
              <GitHubIcon size={18} /> github/SagnikGhosh18
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={outlineBtn}>
              <LinkedInIcon size={18} /> in/sagnik-ghosh
            </a>
          </div>
          <footer className="mt-[clamp(48px,8vw,96px)] flex flex-wrap justify-between gap-3 border-t border-line pt-6 font-mono text-xs text-muted">
            <span>© {new Date().getFullYear()} Sagnik Ghosh</span>
            <span>designed &amp; built in Bangalore</span>
          </footer>
        </div>
      </section>
    </>
  );
}
