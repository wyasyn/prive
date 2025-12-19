/* eslint-disable @next/next/no-img-element */
"use client";

import { useRequireAuth } from "@/lib/hooks/use-require-auth";
import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useProjectsStore } from "@/lib/stores/projects-store";
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
import { Plus, Pencil, Trash2, Star } from "lucide-react";
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

export default function ProjectsPage() {
  const { userData, isLoading } = useRequireAuth("author");
  const {
    projects,
    setProjects,
    removeProject,
    isLoading: isProjectsLoading,
    setLoading,
  } = useProjectsStore();
  const supabase = createClient();

  useEffect(() => {
    if (userData) {
      loadProjects();
    }
  }, [userData]);

  const loadProjects = async () => {
    setLoading(true);
    try {
      // Only fetch minimal data for list view
      const { data, error } = await supabase
        .from("projects")
        .select(
          "id, title, slug, category, short_description, cover_image, tags, featured, created_at"
        )
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error("[v0] Error loading projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("projects").delete().eq("id", id);

      if (error) throw error;
      removeProject(id);
      toast.success("Project deleted successfully");
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project", {
        description:
          error instanceof Error ? error.message : "Please try again.",
      });
    }
  };

  if (isLoading || isProjectsLoading) {
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
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground mt-2">Showcase your work</p>
        </div>
        <Link href="/admin/projects/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </Link>
      </div>

      {projects.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground mb-4">
              No projects yet. Create your first one!
            </p>
            <Link href="/admin/projects/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Project
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              {project.cover_image && (
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src={project.cover_image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <CardHeader className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="line-clamp-2 text-balance">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge>
                      <Star className="mr-1 h-3 w-3 fill-current" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="line-clamp-2">
                  {project.short_description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                )}
                <p className="text-xs text-muted-foreground">
                  {formatRelativeTime(project.created_at)}
                </p>
                <div className="flex gap-2">
                  <Link
                    href={`/admin/projects/${project.id}/edit`}
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="lg"
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
                          delete the project.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(project.id)}
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
