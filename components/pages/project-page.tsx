import { Suspense } from "react";
import PageTitle from "../widgets/PageTitle";
import ProjectsGrid from "../sections/ProjectsGrid";
import ProjectsGridSkeleton from "../widgets/ProjectsGridSkeleton";

export default function ProjectsPageComponent({
  page,

  itemsPerPage = 4,
}: {
  page: number;
  itemsPerPage?: number;
}) {
  return (
    <section className="space-y-10 container pt-14 md:pt-24 pb-32 md:pb-40 ">
      <PageTitle
        title="Projects"
        subtitle="Selected work spanning software engineering, AI, and product development."
        backHref="/"
        backLabel="Home"
      />
      <Suspense fallback={<ProjectsGridSkeleton />}>
        <ProjectsGrid
          page={page}
          limit={itemsPerPage}
          minWidth={350}
          showPagination
        />
      </Suspense>
    </section>
  );
}
