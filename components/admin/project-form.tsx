/* eslint-disable @next/next/no-img-element */
"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

interface ProjectFormProps {
  project?: Project;
}

export function ProjectForm({ project }: ProjectFormProps) {
  const router = useRouter();
  const { userData } = useAuthStore();
  const { addProject, updateProject } = useProjectsStore();
  const supabase = createClient();

  const [title, setTitle] = useState(project?.title || "");
  const [slug, setSlug] = useState(project?.slug || "");
  const [shortDescription, setShortDescription] = useState(
    project?.short_description || ""
  );
  const [content, setContent] = useState(project?.content || "");
  const [coverImage, setCoverImage] = useState(project?.cover_image || "");
  const [demoUrl, setDemoUrl] = useState(project?.demo_url || "");
  const [githubUrl, setGithubUrl] = useState(project?.github_url || "");
  const [tags, setTags] = useState(project?.tags?.join(", ") || "");
  const [featured, setFeatured] = useState(project?.featured || false);
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!project) {
      setSlug(generateSlug(value));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const result = await uploadToCloudinary(formData);
      setCoverImage(result.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image", {
        description: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const tagsArray = tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      const projectData = {
        title,
        slug,
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
        // Update existing project
        const { error } = await supabase
          .from("projects")
          .update(projectData)
          .eq("id", project.id);

        if (error) throw error;

        updateProject(project.id, {
          title,
          slug,
          short_description: shortDescription,
          cover_image: coverImage || null,
          tags: tagsArray,
          featured,
        });
      } else {
        // Create new project
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
          short_description: data.short_description,
          cover_image: data.cover_image,
          tags: data.tags,
          featured: data.featured,
          created_at: data.created_at,
        });
      }

      toast.success(project ? "Project updated successfully" : "Project created successfully");
      router.push("/admin/projects");
    } catch (error) {
      console.error("Error saving project:", error);
      toast.error("Failed to save project", {
        description: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Enter project title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(generateSlug(e.target.value))}
              placeholder="project-slug"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="short-description">Short Description</Label>
            <Textarea
              id="short-description"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Brief description for preview"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Detailed project description..."
              rows={12}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover-image">Cover Image</Label>
            {coverImage ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                <img
                  src={coverImage || "/placeholder.jpg"}
                  alt="Cover"
                  className="h-full w-full object-cover"
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
                  id="cover-image"
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

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="demo-url">Demo URL</Label>
              <Input
                id="demo-url"
                type="url"
                value={demoUrl}
                onChange={(e) => setDemoUrl(e.target.value)}
                placeholder="https://demo.example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="github-url">GitHub URL</Label>
              <Input
                id="github-url"
                type="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/username/repo"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="React, Next.js, TypeScript (comma separated)"
            />
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="featured"
              checked={featured}
              onCheckedChange={setFeatured}
            />
            <Label htmlFor="featured">Feature this project</Label>
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
