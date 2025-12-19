interface BlogsErrorProps {
  error: string;
}

export function BlogsError({ error }: BlogsErrorProps) {
  return (
    <div className="py-16 text-center">
      <h3 className="text-lg font-semibold text-red-600">
        Unable to load blog posts
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{error}</p>
    </div>
  );
}
