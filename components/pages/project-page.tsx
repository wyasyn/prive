import { Suspense } from "react";
import ProjectsGrid from "../sections/ProjectsGrid";
import ProjectsGridSkeleton from "../widgets/ProjectsGridSkeleton";
import { PageHeader } from "../widgets/page-header";

export default function ProjectsPageComponent({
  page,

  itemsPerPage = 4,
}: {
  page: number;
  itemsPerPage?: number;
}) {
  return (
    <section className="space-y-10 container pt-14 md:pt-24 pb-32 md:pb-40 ">
      <PageHeader
        eyebrow="Projects"
        title="Selected Work"
        description="A curated selection of projects showcasing my experience in web development, system design, and problem-solving."
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
