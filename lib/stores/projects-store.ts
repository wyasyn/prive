import { create } from "zustand";

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  short_description: string;
  content: string;
  cover_image: string | null;
  demo_url: string | null;
  github_url: string | null;
  tags: string[];
  featured: boolean;
  author_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProjectListItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  short_description: string;
  cover_image: string | null;
  tags: string[];
  featured: boolean;
  created_at: string;
}

interface ProjectsState {
  projects: ProjectListItem[];
  currentProject: Project | null;
  isLoading: boolean;
  setProjects: (projects: ProjectListItem[]) => void;
  setCurrentProject: (project: Project | null) => void;
  setLoading: (loading: boolean) => void;
  addProject: (project: ProjectListItem) => void;
  updateProject: (id: string, project: Partial<ProjectListItem>) => void;
  removeProject: (id: string) => void;
}

export const useProjectsStore = create<ProjectsState>((set) => ({
  projects: [],
  currentProject: null,
  isLoading: false,
  setProjects: (projects) => set({ projects }),
  setCurrentProject: (currentProject) => set({ currentProject }),
  setLoading: (isLoading) => set({ isLoading }),
  addProject: (project) =>
    set((state) => ({ projects: [project, ...state.projects] })),
  updateProject: (id, updatedProject) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === id ? { ...p, ...updatedProject } : p
      ),
    })),
  removeProject: (id) =>
    set((state) => ({ projects: state.projects.filter((p) => p.id !== id) })),
}));
