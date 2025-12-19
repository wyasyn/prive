export default function BlogCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <div className="h-56 w-full animate-pulse bg-muted" />

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <div className="h-6 w-24 animate-pulse rounded-full bg-muted" />
          <div className="h-4 w-16 animate-pulse rounded-md bg-muted" />
        </div>

        <div className="h-5 w-3/4 animate-pulse rounded-md bg-muted" />
        <div className="h-5 w-1/2 animate-pulse rounded-md bg-muted" />
      </div>
    </div>
  );
}
