import { cache } from "react";
import { createClient } from "@/lib/supabase/server";

export interface Blog {
  title: string;
  category: string;
  slug: string;
  cover_image: string;
  createdAt: string;
}

export interface GetBlogsResult {
  blogs: Blog[];
  totalItems: number;
  totalPages: number;
  error: string | null;
}

export const getBlogs = cache(
  async (page: number = 1, limit: number = 10): Promise<GetBlogsResult> => {
    const supabase = await createClient();
    const start = (page - 1) * limit;

    try {
      // total count
      const { count, error: countError } = await supabase
        .from("blogs")
        .select("*", { count: "exact", head: true });

      if (countError) throw countError;

      // paginated blogs
      const { data, error } = await supabase
        .from("blogs")
        .select("title, category, slug, cover_image, created_at")
        .order("created_at", { ascending: false })
        .range(start, start + limit - 1);

      if (error) throw error;

      const blogs: Blog[] =
        data?.map((blog) => ({
          title: blog.title,
          category: blog.category,
          slug: blog.slug,
          cover_image: blog.cover_image,
          createdAt: blog.created_at,
        })) ?? [];

      return {
        blogs,
        totalItems: count ?? 0,
        totalPages: Math.ceil((count ?? 0) / limit),
        error: null,
      };
    } catch (err) {
      console.error("Error fetching blogs:", err);

      return {
        blogs: [],
        totalItems: 0,
        totalPages: 0,
        error: err instanceof Error ? err.message : "Failed to fetch blogs",
      };
    }
  }
);

export interface BlogSingleItem {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  content: string;
  coverImage: string | null;
  published: boolean;
}

export interface GetBlogResult {
  blog: BlogSingleItem | null;
  error: string | null;
}

export const getBlogBySlug = cache(
  async (slug: string): Promise<GetBlogResult> => {
    const supabase = await createClient();

    try {
      const { data, error } = await supabase
        .from("blogs")
        .select(
          `
          title,
          slug,
          category,
          short_description,
          content,
          cover_image,
          published
        `
        )
        .eq("slug", slug)
        .single();

      if (error) throw error;

      return {
        blog: {
          title: data.title,
          slug: data.slug,
          category: data.category,
          shortDescription: data.short_description,
          content: data.content,
          coverImage: data.cover_image,
          published: data.published,
        },
        error: null,
      };
    } catch (err) {
      console.error("Error fetching blog:", err);

      return {
        blog: null,
        error: err instanceof Error ? err.message : "Failed to fetch blog",
      };
    }
  }
);
