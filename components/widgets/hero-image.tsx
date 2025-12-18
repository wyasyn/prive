import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export function HeroImage({
  src,
  alt = "Portrait of Yasin Walum, Full Stack Engineer",
  className,
}: HeroImageProps) {
  return (
    <div className="mx-auto w-full max-w-100 ">
      <div
        className={cn(
          "relative aspect-square overflow-clip rounded-4xl border-8 bg-background shadow-lg",
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 400px) 100vw, 400px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
