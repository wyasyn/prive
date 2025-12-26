import BlogsGrid from "../sections/BlogsGrid";

import { Suspense } from "react";
import BlogsGridSkeleton from "../widgets/BlogsGridSkeleton";

import { PageHeader } from "../widgets/page-header";

export default function BlogPageComponent({
  page,

  itemsPerPage = 4,
}: {
  page: number;
  itemsPerPage?: number;
}) {
  return (
    <section className="space-y-10 container pt-14 md:pt-24 pb-32 md:pb-40 ">
      <PageHeader
        eyebrow="Blog"
        title="Insights, Tutorials And Case Studies"
        description="Thoughts, tutorials, and practical insights on software development, design, and building modern digital products."
      />

      <Suspense fallback={<BlogsGridSkeleton />}>
        <BlogsGrid
          page={page}
          limit={itemsPerPage}
          showPagination
          minWidth={350}
        />
      </Suspense>
    </section>
  );
}
