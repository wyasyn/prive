"use client";

import { useAuthStore } from "@/lib/stores/auth-store";
import { createClient } from "@/lib/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IconLogout } from "@tabler/icons-react";
import Image from "next/image";

export function AdminHeader() {
  const { userData, clear } = useAuthStore();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    clear();
    router.push("/auth/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="flex items-center gap-2">
            <Image
              src={"/favicon-32x32.png"}
              alt="Yasin Walum Logo"
              width={32}
              height={32}
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/admin/blogs"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Blogs
            </Link>
            <Link
              href="/admin/projects"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projects
            </Link>
            {userData?.role === "admin" && (
              <Link
                href="/admin/users"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Users
              </Link>
            )}
          </nav>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <Avatar>
              <AvatarImage
                src={userData?.avatar_url || undefined}
                alt={userData?.full_name || "User"}
              />
              <AvatarFallback>
                {userData?.full_name?.charAt(0).toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <div className="px-2 py-1.5">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium leading-none">
                  {userData?.full_name}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {userData?.email}
                </p>
                <p className="text-xs leading-none text-muted-foreground mt-1 capitalize">
                  {userData?.role}
                </p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <IconLogout className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
