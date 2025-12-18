import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt?: string;
}

export function HeroImage({
  src,
  alt = "Portrait of Yasin Walum, Full Stack Engineer",
}: HeroImageProps) {
  return (
    <div className="mx-auto w-full max-w-100 mt-12 md:mt-16">
      <div className="relative aspect-square overflow-hidden rounded-4xl border-8 bg-background shadow-lg">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 90vw, 400px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
