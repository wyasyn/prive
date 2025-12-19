import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  href?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  href = "/projects",
}: SectionTitleProps) {
  return (
    <header className="flex items-end justify-between gap-6">
      {/* Title + subtitle */}
      <div>
        <h2 className="text-2xl font-medium tracking-tight text-foreground">
          {title}
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          {subtitle}
        </p>
      </div>

      {/* View all */}
      <Link
        href={href}
        className="
          group
          inline-flex
          items-center
          gap-1
          text-sm
          font-medium
          text-muted-foreground
          transition-colors
          hover:text-foreground
          bg-secondary/50
          p-2
         
          rounded-md
          hover:bg-secondary/70
        "
      >
        <span className=" max-sm:sr-only ">View all</span>

        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </header>
  );
}
