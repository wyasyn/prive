export function BlogsEmpty() {
  return (
    <div className="py-16 text-center">
      <h3 className="text-lg font-semibold">No blog posts found</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        There are no published blog posts yet. Please check back later.
      </p>
    </div>
  );
}
