/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { createClient } from "@/lib/supabase/client";
import { useAuthStore } from "@/lib/stores/auth-store";
import { useBlogsStore, type Blog } from "@/lib/stores/blogs-store";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { uploadToCloudinary } from "@/app/actions/cloudinary";
import { IconLoader2, IconX } from "@tabler/icons-react";
import { toast } from "sonner";

// Dynamically import Tiptap Editor to avoid SSR issues
const RichTextEditor = dynamic(
  () => import("@/components/ui/rich-text-editor"),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 border rounded-md animate-pulse bg-muted" />
    ),
  }
);

interface BlogFormProps {
  blog?: Blog;
}

export function BlogForm({ blog }: BlogFormProps) {
  const router = useRouter();
  const supabase = createClient();

  const { userData } = useAuthStore();
  const { addBlog, updateBlog } = useBlogsStore();

  const [title, setTitle] = useState(blog?.title ?? "");
  const [slug, setSlug] = useState(blog?.slug ?? "");
  const [category, setCategory] = useState(blog?.category ?? "");
  const [shortDescription, setShortDescription] = useState(
    blog?.short_description ?? ""
  );
  const [content, setContent] = useState(blog?.content ?? "");
  const [coverImage, setCoverImage] = useState(blog?.cover_image ?? "");
  const [published, setPublished] = useState(blog?.published ?? false);

  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const generateSlug = (text: string): string =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  /**
   * Slug is generated ONLY when creating a blog.
   * On edit, slug is preserved and never updated.
   */
  const handleTitleChange = (value: string): void => {
    setTitle(value);
    if (!blog) {
      setSlug(generateSlug(value));
    }
  };

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const result = await uploadToCloudinary(formData);
      setCoverImage(result.secure_url);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to upload image";
      toast.error(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const blogData = {
        title,
        slug,
        category,
        short_description: shortDescription,
        content,
        cover_image: coverImage || null,
        published,
        author_id: userData?.id,
      };

      if (blog) {
        const { error } = await supabase
          .from("blogs")
          .update(blogData)
          .eq("id", blog.id);

        if (error) throw error;

        updateBlog(blog.id, {
          title,
          slug,
          category,
          short_description: shortDescription,
          cover_image: coverImage || null,
          published,
        });
      } else {
        const { data, error } = await supabase
          .from("blogs")
          .insert(blogData)
          .select()
          .single();

        if (error) throw error;

        addBlog({
          id: data.id,
          title: data.title,
          slug: data.slug,
          category: data.category,
          short_description: data.short_description,
          cover_image: data.cover_image,
          published: data.published,
          created_at: data.created_at,
        });
      }

      toast.success(
        blog ? "Blog updated successfully" : "Blog created successfully"
      );
      router.push("/admin/blogs");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to add blog";
      toast.error(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <Input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Tech, AI, Tutorials, Opinion"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Short Description</Label>
            <Textarea
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Content</Label>
            <RichTextEditor
              value={content}
              onChange={setContent}
              placeholder="Write your blog content here..."
            />
          </div>

          <div className="space-y-2">
            <Label>Cover Image</Label>
            {coverImage ? (
              <div className="relative aspect-video overflow-hidden rounded-lg border">
                <img
                  src={coverImage}
                  className="h-full w-full object-cover"
                  alt={title}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => setCoverImage("")}
                >
                  <IconX className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUploading}
                />
                {isUploading && (
                  <IconLoader2 className="h-4 w-4 animate-spin" />
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Switch checked={published} onCheckedChange={setPublished} />
            <Label>Publish immediately</Label>
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={isSaving}>
              {isSaving && (
                <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {blog ? "Update Blog" : "Create Blog"}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/admin/blogs")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
