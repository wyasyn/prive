"use client";
import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface PageTitleProps {
  title: string;
  subtitle?: string;

  backLabel?: string;
}

export default function PageTitle({
  title,
  subtitle,

  backLabel = "Back",
}: PageTitleProps) {
  const router = useRouter();
  return (
    <header className="space-y-4">
      <Button variant={"ghost"} onClick={() => router.back()}>
        <ChevronLeft className="h-4 w-4" />
        {backLabel}
      </Button>

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
