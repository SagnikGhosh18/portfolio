"use client";

import Link from "next/link";
import { useState } from "react";
import { formatDate, TAGS, type Tag } from "@/content/site";
import type { PostMeta } from "@/lib/posts";
import { ArrowRight } from "./icons";

const FILTERS: [Tag | "all", string][] = [["all", "All"], ...(Object.entries(TAGS) as [Tag, string][])];

export default function WritingList({ posts }: { posts: PostMeta[] }) {
  const [tag, setTag] = useState<Tag | "all">("all");
  const shown = tag === "all" ? posts : posts.filter((p) => p.tag === tag);
  const [featured, ...rest] = shown.length ? shown : posts;

  return (
    <>
      <div className="reveal flex flex-wrap items-end justify-between gap-5">
        <div className="flex flex-col gap-4">
          <div className="eyebrow">05 — writing</div>
          <h2 className="h2">Notes from production.</h2>
        </div>
        <div role="group" aria-label="Filter posts by topic" className="flex flex-wrap gap-2">
          {FILTERS.map(([key, label]) => (
            <button
              key={key}
              type="button"
              aria-pressed={key === tag}
              onClick={() => setTag(key)}
              className={`chip min-h-11 cursor-pointer rounded-full border px-4 font-mono text-[13px] ${
                key === tag ? "border-btn-bg bg-btn-bg text-btn-ink" : "border-line3 bg-transparent text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {featured && (
        <Link href={`/writing/${featured.slug}`} className="lift reveal flex flex-wrap overflow-hidden rounded-[20px] border border-line2 bg-surface">
          <div className="flex min-h-[220px] flex-[1_1_320px] flex-col justify-between gap-6 border-r border-line2 bg-surface2 bg-[radial-gradient(var(--dot)_1px,transparent_1px)] bg-[length:18px_18px] p-7">
            <span className="self-start rounded-full bg-btn-bg px-2.5 py-[5px] font-mono text-xs text-btn-ink">featured</span>
            <div className="metric font-mono text-[clamp(14px,1.6vw,16px)] leading-[1.7] whitespace-pre-wrap text-body">{featured.snippet}</div>
          </div>
          <div className="flex min-w-0 flex-[1.3_1_360px] flex-col justify-center gap-3.5 p-[clamp(24px,3vw,36px)]">
            <div className="flex flex-wrap gap-x-3.5 gap-y-1.5 font-mono text-xs text-muted">
              <span className="text-acc">{TAGS[featured.tag]}</span>
              <span>{formatDate(featured.date)}</span>
              <span>{featured.readingTime}</span>
            </div>
            <h3 className="row-title text-[clamp(26px,3vw,36px)] leading-[1.12] font-bold tracking-[-0.02em]">{featured.title}</h3>
            <p className="text-base leading-[1.6] text-body">{featured.excerpt}</p>
            <span className="push inline-flex min-h-11 items-center gap-2 font-mono text-[13px]">
              read post <ArrowRight />
            </span>
          </div>
        </Link>
      )}

      <div className="flex flex-col border-t border-line2">
        {rest.map((b) => (
          <Link
            key={b.slug}
            href={`/writing/${b.slug}`}
            className="row reveal -mx-3 flex flex-wrap items-center gap-x-8 gap-y-2 rounded-xl border-b border-line2 px-3 py-[22px]"
          >
            <div className="flex flex-[0_0_150px] flex-col gap-1 font-mono text-xs text-muted">
              <span className="text-acc">{TAGS[b.tag]}</span>
              <span>{formatDate(b.date)} · {b.readingTime}</span>
            </div>
            <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-1.5">
              <h3 className="row-title text-[clamp(19px,2vw,22px)] leading-tight font-bold tracking-[-0.01em]">{b.title}</h3>
              <p className="text-[15px] leading-[1.55] text-body">{b.excerpt}</p>
            </div>
            <ArrowRight className="row-arrow flex-[0_0_20px]" size={20} />
          </Link>
        ))}
        {rest.length === 0 && (
          <p className="py-[22px] font-mono text-[13px] text-muted">That’s the only post in this topic so far.</p>
        )}
      </div>
    </>
  );
}
