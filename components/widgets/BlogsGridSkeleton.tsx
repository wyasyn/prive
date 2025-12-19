import BlogCardSkeleton from "./BlogCardSkeleton";

interface BlogsGridSkeletonProps {
  count?: number;
}

export default function BlogsGridSkeleton({
  count = 6,
}: BlogsGridSkeletonProps) {
  return (
    <div
      className="
        grid
        gap-6
        grid-cols-[repeat(auto-fit,minmax(350px,1fr))]
      "
    >
      {Array.from({ length: count }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}
