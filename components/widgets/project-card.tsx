"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

interface ProjectCardProps {
  title: string;
  category: string;
  slug: string;
  image: string;
}

export default function ProjectCard({
  title,
  category,
  slug,
  image,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-md"
    >
      <Link href={`/projects/${slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-foreground line-clamp-1">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {category}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
