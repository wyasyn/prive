export function ProjectsEmpty() {
  return (
    <div className="flex min-h-75 items-center justify-center px-4">
      <div className="w-full max-w-md rounded-lg border bg-background p-8 text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <svg
              className="h-6 w-6 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
        </div>

        <h3 className="mb-2 text-lg font-semibold tracking-tight">
          No projects found
        </h3>

        <p className="text-sm text-muted-foreground">
          There are no projects to display at the moment.
        </p>
      </div>
    </div>
  );
}
