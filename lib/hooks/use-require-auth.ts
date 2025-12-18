"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/lib/stores/auth-store"

export function useRequireAuth(requiredRole: "admin" | "author" | "any" = "any") {
  const router = useRouter()
  const { user, userData, isLoading } = useAuthStore()

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push("/auth/login")
        return
      }

      if (requiredRole !== "any") {
        if (requiredRole === "admin" && userData?.role !== "admin") {
          router.push("/auth/unauthorized")
          return
        }

        if (requiredRole === "author" && userData?.role !== "admin" && userData?.role !== "author") {
          router.push("/auth/unauthorized")
          return
        }
      }
    }
  }, [user, userData, isLoading, router, requiredRole])

  return { user, userData, isLoading }
}
