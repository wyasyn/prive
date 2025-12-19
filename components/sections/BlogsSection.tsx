import { Suspense } from "react";
import SectionTitle from "../widgets/SectionTitle";
import BlogsGridSkeleton from "../widgets/BlogsGridSkeleton";
import BlogsGrid from "./BlogsGrid";

export default function BlogsSection() {
  return (
    <section className="space-y-10 container pb-12 md:pb-32 lg:pb-40 ">
      <SectionTitle
        title="Latest Writing"
        subtitle="Thoughts on design, engineering, and building meaningful digital products."
        href="/blog"
      />

      <Suspense fallback={<BlogsGridSkeleton />}>
        <BlogsGrid page={1} limit={3} minWidth={300} />
      </Suspense>
    </section>
  );
}
