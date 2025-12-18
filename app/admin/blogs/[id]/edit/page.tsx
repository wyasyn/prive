"use client"

import { useRequireAuth } from "@/lib/hooks/use-require-auth"
import { BlogForm } from "@/components/admin/blog-form"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useBlogsStore } from "@/lib/stores/blogs-store"
import { useParams } from "next/navigation"

export default function EditBlogPage() {
  const params = useParams()
  const id = params.id as string
  const { isLoading } = useRequireAuth("author")
  const { currentBlog, setCurrentBlog } = useBlogsStore()
  const [isLoadingBlog, setIsLoadingBlog] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    if (id) {
      loadBlog()
    }
  }, [id])

  const loadBlog = async () => {
    setIsLoadingBlog(true)
    try {
      // Fetch full blog data including content for editing
      const { data, error } = await supabase.from("blogs").select("*").eq("id", id).single()

      if (error) throw error
      setCurrentBlog(data)
    } catch (error) {
      console.error("[v0] Error loading blog:", error)
    } finally {
      setIsLoadingBlog(false)
    }
  }

  if (isLoading || isLoadingBlog) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (!currentBlog) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
        <p className="text-muted-foreground">Blog not found</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Blog Post</h1>
        <p className="text-muted-foreground mt-2">Update your blog post</p>
      </div>
      <BlogForm blog={currentBlog} />
    </div>
  )
}
