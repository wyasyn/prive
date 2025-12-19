import { sampleProjects } from "@/constant/projects-data";
import ProjectCard from "../widgets/project-card";

export default async function ProjectsGrid() {
  // Later replace with:
  // const projects = await fetchProjects();

  const projects = sampleProjects.slice(0, 3);

  return (
    <div
      className="
        grid
        gap-6
        grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
      "
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.title}
          category={project.short_description}
          slug={project.slug}
          image={project.cover_image}
        />
      ))}
    </div>
  );
}
