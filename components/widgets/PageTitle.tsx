import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
}

export default function PageTitle({
  title,
  subtitle,
  backHref,
  backLabel = "Back",
}: PageTitleProps) {
  return (
    <header className="space-y-4">
      {backHref && (
        <Link
          href={backHref}
          className="
            inline-flex
            items-center
            gap-1
            text-sm
            font-medium
            text-muted-foreground
            transition-colors
            hover:text-foreground
          "
        >
          <ChevronLeft className="h-4 w-4" />
          {backLabel}
        </Link>
      )}

      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
