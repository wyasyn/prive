import BlogsGrid from "../sections/BlogsGrid";

import { Suspense } from "react";
import BlogsGridSkeleton from "../widgets/BlogsGridSkeleton";
import PageTitle from "../widgets/PageTitle";

export default function BlogPageComponent({
  page,

  itemsPerPage = 4,
}: {
  page: number;
  itemsPerPage?: number;
}) {
  return (
    <section className="space-y-10 container pt-14 md:pt-24 pb-32 md:pb-40 ">
      <PageTitle
        title="Blog"
        subtitle="Insights, tutorials, and thoughts on software engineering, AI, and product development."
        backHref="/"
        backLabel="Home"
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
