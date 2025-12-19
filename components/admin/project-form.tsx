/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { createClient } from "@/lib/supabase/client";
import { useAuthStore } from "@/lib/stores/auth-store";
import { useProjectsStore, type Project } from "@/lib/stores/projects-store";
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

interface ProjectFormProps {
  project?: Project;
}

export function ProjectForm({ project }: ProjectFormProps) {
  const router = useRouter();
  const supabase = createClient();

  const { userData } = useAuthStore();
  const { addProject, updateProject } = useProjectsStore();

  const [title, setTitle] = useState(project?.title ?? "");
  const [slug, setSlug] = useState(project?.slug ?? "");
  const [category, setCategory] = useState(project?.category ?? "");
  const [shortDescription, setShortDescription] = useState(
    project?.short_description ?? ""
  );
  const [content, setContent] = useState(project?.content ?? "");
  const [coverImage, setCoverImage] = useState(project?.cover_image ?? "");
  const [demoUrl, setDemoUrl] = useState(project?.demo_url ?? "");
  const [githubUrl, setGithubUrl] = useState(project?.github_url ?? "");
  const [tags, setTags] = useState(project?.tags?.join(", ") ?? "");
  const [featured, setFeatured] = useState(project?.featured ?? false);

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
   * Slug is generated ONLY when creating a project.
   * When editing, slug is preserved and never updated.
   */
  const handleTitleChange = (value: string): void => {
    setTitle(value);
    if (!project) {
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
      const tagsArray = tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const projectData = {
        title,
        slug,
        category,
        short_description: shortDescription,
        content,
        cover_image: coverImage || null,
        demo_url: demoUrl || null,
        github_url: githubUrl || null,
        tags: tagsArray,
        featured,
        author_id: userData?.id,
      };

      if (project) {
        const { error } = await supabase
          .from("projects")
          .update(projectData)
          .eq("id", project.id);

        if (error) throw error;

        updateProject(project.id, {
          title,
          slug,
          category,
          short_description: shortDescription,
          cover_image: coverImage || null,
          tags: tagsArray,
          featured,
        });
      } else {
        const { data, error } = await supabase
          .from("projects")
          .insert(projectData)
          .select()
          .single();

        if (error) throw error;

        addProject({
          id: data.id,
          title: data.title,
          slug: data.slug,
          category: data.category,
          short_description: data.short_description,
          cover_image: data.cover_image,
          tags: data.tags,
          featured: data.featured,
          created_at: data.created_at,
        });
      }

      toast.success(
        project
          ? "Project updated successfully"
          : "Project created successfully"
      );
      router.push("/admin/projects");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to add project";
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
              placeholder="Web, Mobile, AI, Backend"
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
              placeholder="Write your project content here..."
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
                  <IconLoader2 className="animate-spin h-4 w-4" />
                )}
              </div>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Demo URL</Label>
              <Input
                type="url"
                value={demoUrl}
                onChange={(e) => setDemoUrl(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>GitHub URL</Label>
              <Input
                type="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Tags</Label>
            <Input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="React, Next.js, Supabase"
            />
          </div>

          <div className="flex items-center gap-2">
            <Switch checked={featured} onCheckedChange={setFeatured} />
            <Label>Feature this project</Label>
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={isSaving}>
              {isSaving && (
                <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {project ? "Update Project" : "Create Project"}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/admin/projects")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
