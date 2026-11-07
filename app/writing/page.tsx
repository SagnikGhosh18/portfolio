import type { Metadata } from "next";
import { getPosts } from "@/lib/posts";
import WritingList from "../_components/WritingList";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes from production: applied AI, backend systems and performance.",
  alternates: { canonical: "/writing" },
};

export default async function WritingIndex() {
  return (
    <section className="wrap section-y flex flex-col gap-[clamp(28px,4vw,44px)]">
      <WritingList posts={await getPosts()} />
    </section>
  );
}
