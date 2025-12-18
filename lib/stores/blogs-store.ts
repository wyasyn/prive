import { create } from "zustand"

export interface Blog {
  id: string
  title: string
  slug: string
  short_description: string
  content: string
  cover_image: string | null
  author_id: string | null
  published: boolean
  created_at: string
  updated_at: string
}

export interface BlogListItem {
  id: string
  title: string
  slug: string
  short_description: string
  cover_image: string | null
  published: boolean
  created_at: string
}

interface BlogsState {
  blogs: BlogListItem[]
  currentBlog: Blog | null
  isLoading: boolean
  setBlogs: (blogs: BlogListItem[]) => void
  setCurrentBlog: (blog: Blog | null) => void
  setLoading: (loading: boolean) => void
  addBlog: (blog: BlogListItem) => void
  updateBlog: (id: string, blog: Partial<BlogListItem>) => void
  removeBlog: (id: string) => void
}

export const useBlogsStore = create<BlogsState>((set) => ({
  blogs: [],
  currentBlog: null,
  isLoading: false,
  setBlogs: (blogs) => set({ blogs }),
  setCurrentBlog: (currentBlog) => set({ currentBlog }),
  setLoading: (isLoading) => set({ isLoading }),
  addBlog: (blog) => set((state) => ({ blogs: [blog, ...state.blogs] })),
  updateBlog: (id, updatedBlog) =>
    set((state) => ({
      blogs: state.blogs.map((b) => (b.id === id ? { ...b, ...updatedBlog } : b)),
    })),
  removeBlog: (id) => set((state) => ({ blogs: state.blogs.filter((b) => b.id !== id) })),
}))
