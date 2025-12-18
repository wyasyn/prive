"use client";

import { useRequireAuth } from "@/lib/hooks/use-require-auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, FolderGit2, Users, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface Stats {
  totalBlogs: number;
  publishedBlogs: number;
  totalProjects: number;
  featuredProjects: number;
}

export default function AdminDashboardPage() {
  const { userData, isLoading } = useRequireAuth("author");
  const [stats, setStats] = useState<Stats>({
    totalBlogs: 0,
    publishedBlogs: 0,
    totalProjects: 0,
    featuredProjects: 0,
  });
  const [isLoadingStats, setIsLoadingStats] = useState(true);

  useEffect(() => {
    if (userData) {
      loadStats();
    }
  }, [userData]);

  const loadStats = async () => {
    const supabase = createClient();
    setIsLoadingStats(true);

    try {
      // Get blog stats
      const { count: totalBlogs } = await supabase
        .from("blogs")
        .select("*", { count: "exact", head: true });

      const { count: publishedBlogs } = await supabase
        .from("blogs")
        .select("*", { count: "exact", head: true })
        .eq("published", true);

      // Get project stats
      const { count: totalProjects } = await supabase
        .from("projects")
        .select("*", { count: "exact", head: true });

      const { count: featuredProjects } = await supabase
        .from("projects")
        .select("*", { count: "exact", head: true })
        .eq("featured", true);

      setStats({
        totalBlogs: totalBlogs || 0,
        publishedBlogs: publishedBlogs || 0,
        totalProjects: totalProjects || 0,
        featuredProjects: featuredProjects || 0,
      });
    } catch (error) {
      console.error("[v0] Error loading stats:", error);
    } finally {
      setIsLoadingStats(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back, {userData?.full_name || userData?.email}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoadingStats ? "..." : stats.totalBlogs}
            </div>
            <p className="text-xs text-muted-foreground">
              {stats.publishedBlogs} published
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Published Blogs
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoadingStats ? "..." : stats.publishedBlogs}
            </div>
            <p className="text-xs text-muted-foreground">Live on site</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Projects
            </CardTitle>
            <FolderGit2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoadingStats ? "..." : stats.totalProjects}
            </div>
            <p className="text-xs text-muted-foreground">
              {stats.featuredProjects} featured
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Featured Projects
            </CardTitle>
            <FolderGit2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoadingStats ? "..." : stats.featuredProjects}
            </div>
            <p className="text-xs text-muted-foreground">Highlighted</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>Manage your blog content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/admin/blogs/new" className="w-full block">
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Create New Blog Post
              </Button>
            </Link>
            <Link href="/admin/blogs" className="w-full block">
              <Button variant="outline" className="w-full bg-transparent">
                View All Blogs
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Showcase your work</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/admin/projects/new" className="w-full block">
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Create New Project
              </Button>
            </Link>
            <Link href="/admin/projects" className="w-full block">
              <Button variant="outline" className="w-full bg-transparent">
                View All Projects
              </Button>
            </Link>
          </CardContent>
        </Card>

        {userData?.role === "admin" && (
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Manage user roles and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/users" className="w-full block">
                <Button variant="outline" className="w-full bg-transparent">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Users
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
