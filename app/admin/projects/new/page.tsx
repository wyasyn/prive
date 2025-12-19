"use client";

import { useRequireAuth } from "@/lib/hooks/use-require-auth";
import { ProjectForm } from "@/components/admin/project-form";

export default function NewProjectPage() {
  const { isLoading } = useRequireAuth("author");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Project</h1>
        <p className="text-muted-foreground mt-2">Showcase a new project</p>
      </div>
      <ProjectForm />
    </div>
  );
}
