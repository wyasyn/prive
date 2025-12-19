"use client";

import { useRequireAuth } from "@/lib/hooks/use-require-auth";
import { BlogForm } from "@/components/admin/blog-form";

export default function NewBlogPage() {
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
        <h1 className="text-3xl font-bold tracking-tight">Create Blog Post</h1>
        <p className="text-muted-foreground mt-2">
          Write and publish a new blog post
        </p>
      </div>
      <BlogForm />
    </div>
  );
}
