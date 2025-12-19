import ProjectCardSkeleton from "./ProjectCardSkeleton";

interface ProjectsGridSkeletonProps {
  count?: number;
}

export default function ProjectsGridSkeleton({
  count = 6,
}: ProjectsGridSkeletonProps) {
  return (
    <div
      className="
        grid
        gap-6
       rid-cols-[repeat(auto-fit,minmax(350px,1fr))]
      "
    >
      {Array.from({ length: count }).map((_, index) => (
        <ProjectCardSkeleton key={index} />
      ))}
    </div>
  );
}
