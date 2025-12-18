"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ServiceCard } from "./servicecard";
import { SERVICES } from "@/constant/data";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRightBigIcon } from "@hugeicons/core-free-icons";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const ServicesDropdown = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname.startsWith("/services");

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href="/services" aria-haspopup="true" aria-expanded={open}>
        <Button
          variant="ghost"
          className={cn(
            "cursor-pointer",
            isActive &&
              "font-medium text-primary/75 bg-primary/5 hover:bg-primary/10 hover:text-primary"
          )}
        >
          Services
        </Button>
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
        absolute left-0 top-full mt-3 w-190
        rounded-2xl border border-border/50
        bg-secondary/95 backdrop-blur-md
        shadow-xl p-6 z-50
      "
          >
            <div className="grid grid-cols-2 gap-5">
              {SERVICES.slice(0, -2).map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
            <div className="mt-6 border-t border-border/50 pt-4">
              <Link
                href="/services"
                className="
      group flex items-center justify-between
      rounded-xl px-4 py-3
      text-sm font-medium
      text-muted-foreground
      hover:bg-accent/60 hover:text-primary
      transition-colors
    "
              >
                <span>View all services</span>

                <span
                  className="
        inline-flex items-center gap-1
        transition-transform
        group-hover:translate-x-1
      "
                >
                  <HugeiconsIcon icon={ArrowRightBigIcon} />
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
