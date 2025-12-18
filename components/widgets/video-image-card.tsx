import Image from "next/image";

interface VideoImageCardProps {
  src: string;
  alt?: string;
  priority?: boolean;
}

export default function VideoImageCard({
  src,
  alt = "Video thumbnail",
  priority = false,
}: VideoImageCardProps) {
  return (
    <div className="relative h-65.5 w-full overflow-clip rounded-xl aspect-video mr-2">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="320px"
      />
    </div>
  );
}
