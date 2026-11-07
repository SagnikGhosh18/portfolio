import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import type { Tag } from "@/content/site";

type Frontmatter = { title: string; date: string | Date; tag: Tag; excerpt: string; snippet?: string };
export type PostMeta = Omit<Frontmatter, "date"> & { slug: string; date: string; readingTime: string };

const DIR = path.join(process.cwd(), "content/posts");

export const getPost = cache(async (slug: string) => {
  const source = await fs.readFile(path.join(DIR, `${slug}.mdx`), "utf8");
  const { content, frontmatter } = await compileMDX<Frontmatter>({ source, options: { parseFrontmatter: true } });
  const words = source.split(/\s+/).length;
  const meta: PostMeta = {
    ...frontmatter,
    slug,
    // YAML turns unquoted dates into Date objects
    date: new Date(frontmatter.date).toISOString().slice(0, 10),
    readingTime: `${Math.max(1, Math.round(words / 220))} min read`,
  };
  return { meta, content };
});

export async function getPosts(): Promise<PostMeta[]> {
  const files = (await fs.readdir(DIR)).filter((f) => f.endsWith(".mdx"));
  const posts = await Promise.all(files.map((f) => getPost(f.replace(/\.mdx$/, "")).then((p) => p.meta)));
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
