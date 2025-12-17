"use client";
import { ServicesDropdown } from "../widgets/services-dropdown";
import { SecondaryDropdown } from "../widgets/secondary-nav";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export const MainNavLinks = () => {
  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  const pathname = usePathname();

  return (
    <nav
      className="hidden md:flex items-center space-x-1"
      aria-label="Main navigation"
    >
      {mainLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link key={link.href} href={link.href}>
            <Button
              variant="ghost"
              className={cn(
                "cursor-pointer",
                isActive &&
                  "font-medium text-primary/75 bg-primary/5 hover:bg-primary/10 hover:text-primary"
              )}
            >
              {link.label}
            </Button>
          </Link>
        );
      })}
      <ServicesDropdown />
      <SecondaryDropdown />
    </nav>
  );
};
