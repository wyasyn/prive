import { Suspense } from "react";
import SectionTitle from "../widgets/SectionTitle";
import ProjectsGridSkeleton from "../widgets/ProjectsGridSkeleton";
import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsSection() {
  return (
    <section className="space-y-10 container pb-12 md:pb-32 lg:pb-40">
      <SectionTitle
        title="Selected Projects"
        subtitle="A curated selection of recent work spanning web, mobile, and intelligent systems."
        href="/projects"
      />

      <Suspense fallback={<ProjectsGridSkeleton />}>
        <ProjectsGrid page={1} limit={3} minWidth={300} />
      </Suspense>
    </section>
  );
}
