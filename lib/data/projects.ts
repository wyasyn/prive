import { cache } from "react";
import { createClient } from "@/lib/supabase/server";

export interface GetProjectsResult {
  projects: Project[];
  totalItems: number;
  totalPages: number;
  error: string | null;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  cover_image: string | null;
  created_at: string;
}

export const getProjects = cache(
  async (page: number = 1, limit: number = 10): Promise<GetProjectsResult> => {
    const supabase = await createClient();
    const start = (page - 1) * limit;

    try {
      // Get total count
      const { count, error: countError } = await supabase
        .from("projects")
        .select("*", { count: "exact", head: true });

      if (countError) {
        throw countError;
      }

      // Get paginated projects
      const { data: projects, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })
        .range(start, start + limit - 1);

      if (error) {
        throw error;
      }

      return {
        projects: (projects ?? []) as Project[],
        totalItems: count ?? 0,
        totalPages: Math.ceil((count ?? 0) / limit),
        error: null,
      };
    } catch (err) {
      console.error("Error fetching projects:", err);

      return {
        projects: [],
        totalItems: 0,
        totalPages: 0,
        error: err instanceof Error ? err.message : "Failed to fetch projects",
      };
    }
  }
);

export interface ProjectSingleItem {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  content: string;
  coverImage: string | null;
  demoUrl: string | null;
  githubUrl: string | null;
  tags: string[];
  featured: boolean;
}

export interface GetProjectResult {
  project: ProjectSingleItem | null;
  error: string | null;
}

export const getProjectBySlug = cache(
  async (slug: string): Promise<GetProjectResult> => {
    const supabase = await createClient();

    try {
      const { data, error } = await supabase
        .from("projects")
        .select(
          `
          title,
          slug,
          category,
          short_description,
          content,
          cover_image,
          demo_url,
          github_url,
          tags,
          featured
        `
        )
        .eq("slug", slug)
        .single();

      if (error) throw error;

      return {
        project: {
          title: data.title,
          slug: data.slug,
          category: data.category,
          shortDescription: data.short_description,
          content: data.content,
          coverImage: data.cover_image,
          demoUrl: data.demo_url,
          githubUrl: data.github_url,
          tags: data.tags,
          featured: data.featured,
        },
        error: null,
      };
    } catch (err) {
      console.error("Error fetching project:", err);

      return {
        project: null,
        error: err instanceof Error ? err.message : "Failed to fetch project",
      };
    }
  }
);
