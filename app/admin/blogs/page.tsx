/* eslint-disable @next/next/no-img-element */
"use client";

import { useRequireAuth } from "@/lib/hooks/use-require-auth";
import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useBlogsStore } from "@/lib/stores/blogs-store";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { formatRelativeTime } from "@/lib/utils/format-date";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function BlogsPage() {
  const { userData, isLoading } = useRequireAuth("author");
  const {
    blogs,
    setBlogs,
    removeBlog,
    isLoading: isBlogsLoading,
    setLoading,
  } = useBlogsStore();
  const supabase = createClient();

  useEffect(() => {
    if (userData) {
      loadBlogs();
    }
  }, [userData]);

  const loadBlogs = async () => {
    setLoading(true);
    try {
      // Only fetch minimal data for list view
      const { data, error } = await supabase
        .from("blogs")
        .select(
          "id, title, slug, category, short_description, cover_image, published, created_at"
        )
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error("[v0] Error loading blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("blogs").delete().eq("id", id);

      if (error) throw error;
      removeBlog(id);
      toast.success("Blog deleted successfully");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog", {
        description:
          error instanceof Error ? error.message : "Please try again.",
      });
    }
  };

  if (isLoading || isBlogsLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
          <p className="text-muted-foreground mt-2">Manage your blog content</p>
        </div>
        <Link href="/admin/blogs/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Blog Post
          </Button>
        </Link>
      </div>

      {blogs.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground mb-4">
              No blog posts yet. Create your first one!
            </p>
            <Link href="/admin/blogs/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Blog Post
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Card key={blog.id} className="flex flex-col">
              {blog.cover_image && (
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src={blog.cover_image || "/placeholder.svg"}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <CardHeader className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="line-clamp-2 text-balance">
                    {blog.title}
                  </CardTitle>
                  <Badge variant={blog.published ? "default" : "secondary"}>
                    {blog.published ? "Published" : "Draft"}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-2">
                  {blog.short_description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-muted-foreground">
                  {formatRelativeTime(blog.created_at)}
                </p>
                <div className="flex gap-2">
                  <Link
                    href={`/admin/blogs/${blog.id}/edit`}
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size={"lg"}
                      className="w-full bg-transparent"
                    >
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </Link>
                  <AlertDialog>
                    <AlertDialogTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground shadow hover:bg-destructive/90 h-9 w-9">
                      <Trash2 className="h-4 w-4" />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the blog post.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(blog.id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
