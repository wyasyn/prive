import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@supabase/supabase-js";

interface UserData {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  role: "admin" | "author" | "viewer";
}

interface AuthState {
  user: User | null;
  userData: UserData | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setUserData: (userData: UserData | null) => void;
  setLoading: (loading: boolean) => void;
  isAdmin: () => boolean;
  isAuthor: () => boolean;
  canEdit: () => boolean;
  clear: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      userData: null,
      isLoading: true,
      setUser: (user) => set({ user }),
      setUserData: (userData) => set({ userData }),
      setLoading: (isLoading) => set({ isLoading }),
      isAdmin: () => get().userData?.role === "admin",
      isAuthor: () => get().userData?.role === "author",
      canEdit: () => {
        const role = get().userData?.role;
        return role === "admin" || role === "author";
      },
      clear: () => set({ user: null, userData: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        userData: state.userData,
      }),
    }
  )
);
