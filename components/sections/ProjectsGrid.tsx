import { sampleProjects } from "@/constant/projects-data";
import Pagination from "../widgets/Pagination";
import ProjectCard from "../widgets/project-card";

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
  // DATA FETCHING (Suspense-enabled)
  const totalItems = sampleProjects.length;
  const totalPages = Math.ceil(totalItems / limit);

  const start = (page - 1) * limit;
  const end = start + limit;
  const projects = sampleProjects.slice(start, end);

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
            cover_image={project.cover_image!}
            created_at={project.created_at}
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
