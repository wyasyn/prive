"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SlideTextButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  hoverText?: string;
  href?: string;
  className?: string;
  variant?: "default" | "ghost";
}

export default function SlideTextButton({
  text = "Browse Components",
  hoverText,
  href = "/docs/components/liquid-glass-card",
  className,
  variant = "default",
  ...props
}: SlideTextButtonProps) {
  const slideText = hoverText ?? text;
  const variantStyles =
    variant === "ghost" ? " text-foreground" : "text-foreground ";

  return (
    <motion.div
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
      className="relative"
      initial={{ x: 200, opacity: 0 }}
    >
      <Link
        className={cn(
          "group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-lg px-8 font-medium text-md tracking-tighter transition-all duration-300 md:min-w-56",
          variantStyles,
          className
        )}
        href={href}
        {...props}
      >
        <span className="group-hover:-translate-y-full relative inline-block transition-transform duration-300 ease-in-out">
          <span className="flex items-center gap-2 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
            <span className="font-medium">{text}</span>
          </span>
          <span className="absolute top-full left-0 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="font-medium">{slideText}</span>
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
