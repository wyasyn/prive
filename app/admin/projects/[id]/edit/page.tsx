"use client"

import { useRequireAuth } from "@/lib/hooks/use-require-auth"
import { ProjectForm } from "@/components/admin/project-form"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useProjectsStore } from "@/lib/stores/projects-store"
import { useParams } from "next/navigation"

export default function EditProjectPage() {
  const params = useParams()
  const id = params.id as string
  const { isLoading } = useRequireAuth("author")
  const { currentProject, setCurrentProject } = useProjectsStore()
  const [isLoadingProject, setIsLoadingProject] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    if (id) {
      loadProject()
    }
  }, [id])

  const loadProject = async () => {
    setIsLoadingProject(true)
    try {
      // Fetch full project data including content for editing
      const { data, error } = await supabase.from("projects").select("*").eq("id", id).single()

      if (error) throw error
      setCurrentProject(data)
    } catch (error) {
      console.error("[v0] Error loading project:", error)
    } finally {
      setIsLoadingProject(false)
    }
  }

  if (isLoading || isLoadingProject) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (!currentProject) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Project</h1>
        <p className="text-muted-foreground mt-2">Update your project</p>
      </div>
      <ProjectForm project={currentProject} />
    </div>
  )
}
