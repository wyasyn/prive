import Pagination from "../widgets/Pagination";
import ProjectCard from "../widgets/project-card";
import { getProjects } from "@/lib/data/projects";
import { ProjectsError } from "../widgets/ProjectsError";
import { ProjectsEmpty } from "../widgets/ProjectsEmpty";

interface ProjectsGridProps {
  page: number;
  limit: number;
  minWidth?: number;
  showPagination?: boolean;
}

export default async function ProjectsGrid({
  page,
  limit,
  minWidth = 300,
  showPagination = false,
}: ProjectsGridProps) {
  const { projects, totalPages, error } = await getProjects(page, limit);

  if (error) {
    <ProjectsError error={error} />;
  }

  if (projects.length === 0) {
    return <ProjectsEmpty />;
  }

  return (
    <>
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            category={project.category}
            slug={project.slug}
            cover_image={project.coverImage!}
            created_at={project.createdAt}
          />
        ))}
      </div>

      {showPagination && totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          basePath="/projects"
        />
      )}
    </>
  );
}
