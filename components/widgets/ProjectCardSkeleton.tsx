export default function ProjectCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      {/* Image skeleton */}
      <div className="h-56 w-full animate-pulse bg-muted" />

      {/* Content skeleton */}
      <div className="space-y-3 p-5">
        <div className="h-4 w-3/4 animate-pulse rounded-md bg-muted" />
        <div className="h-3 w-1/3 animate-pulse rounded-md bg-muted" />
      </div>
    </div>
  );
}
