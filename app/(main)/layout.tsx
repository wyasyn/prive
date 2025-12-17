import { Footer } from "@/components/sections/footer";
import { NavigationBar } from "@/components/sections/main-nav";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar />
      <main className=" flex-1 ">{children}</main>
      <Footer />
    </div>
  );
}
