export function ProjectsError({
  error,
  reset,
}: {
  error: string;
  reset?: () => void;
}) {
  return (
    <div
      role="alert"
      className="flex min-h-[300px] items-center justify-center px-4"
    >
      <div className="w-full max-w-md rounded-lg border bg-background p-8 text-center shadow-sm">
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
            <svg
              className="h-6 w-6 text-destructive"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        <h3 className="mb-2 text-lg font-semibold tracking-tight">
          Failed to load projects
        </h3>

        <p className="mb-6 text-sm text-muted-foreground">
          {error || "Something went wrong while fetching projects."}
        </p>

        {reset && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Try again
          </button>
        )}
      </div>
    </div>
  );
}
