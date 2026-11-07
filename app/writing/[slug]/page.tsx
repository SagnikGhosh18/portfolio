import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, TAGS } from "@/content/site";
import { getPost, getPosts } from "@/lib/posts";
import { ArrowRight } from "../../_components/icons";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPosts()).map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { meta } = await getPost((await params).slug);
  return {
    title: meta.title,
    description: meta.excerpt,
    alternates: { canonical: `/writing/${meta.slug}` },
    openGraph: { type: "article", title: meta.title, description: meta.excerpt, publishedTime: meta.date },
  };
}

export default async function PostPage({ params }: Props) {
  const { meta, content } = await getPost((await params).slug);

  return (
    <article className="wrap section-y">
      <div className="mx-auto flex max-w-[720px] flex-col gap-6">
        <Link href="/writing" className="nl inline-flex min-h-11 items-center gap-2 self-start font-mono text-[13px] text-muted">
          <ArrowRight className="rotate-180" /> all posts
        </Link>
        <div className="flex flex-wrap gap-x-3.5 gap-y-1.5 font-mono text-xs text-muted">
          <span className="text-acc">{TAGS[meta.tag]}</span>
          <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          <span>{meta.readingTime}</span>
        </div>
        <h1 className="text-[clamp(34px,5.5vw,60px)] leading-[1.05] font-extrabold tracking-[-0.035em]">{meta.title}</h1>
        <p className="text-[clamp(18px,2vw,21px)] leading-normal text-body">{meta.excerpt}</p>
        <div className="prose mt-4 border-t border-line pt-10">{content}</div>
      </div>
    </article>
  );
}
