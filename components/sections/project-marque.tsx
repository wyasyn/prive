import React from "react";
import { Marquee } from "../ui/marquee";
import VideoImageCard from "../widgets/video-image-card";
import { HeroImage } from "../widgets/hero-image";
import { getProjects } from "@/lib/data/projects";

export default async function ProjectMarquee() {
  const { projects } = await getProjects();
  if (!projects) return;
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-clip py-12 md:py-16  mt-12 md:mt-16">
      <Marquee pauseOnHover repeat={7} className="[--duration:120s]">
        {projects.map((project) => (
          <VideoImageCard key={project.slug} src={project.coverImage!} />
        ))}
      </Marquee>
      {/* Stylish gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-background/95 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-background/95 to-transparent"></div>
      <div className="pointer-events-none absolute top-0 left-0 w-full h-12 bg-linear-to-b from-background/90 to-transparent"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-background/90 to-transparent"></div>

      <HeroImage
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-87.5 md:h-100  "
        src="https://res.cloudinary.com/dkdteb9m5/image/upload/v1766089215/my-uploads/qnvvybz8bphei5jrmhiz.webp"
      />
    </div>
  );
}
