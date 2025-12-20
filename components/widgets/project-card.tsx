"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ProjectListItem } from "@/lib/stores/projects-store";
import { formatRelativeTime } from "@/lib/utils/format-date";

type ProjectCardProps = Pick<
  ProjectListItem,
  "title" | "category" | "slug" | "cover_image" | "created_at"
>;

export default function ProjectCard({
  title,
  category,
  slug,
  cover_image: image,
  created_at: publishedAt,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group overflow-hidden "
    >
      <Link href={`/projects/${slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-video rounded-2xl w-full overflow-hidden">
          <Image
            src={image!}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="space-y-4 p-5 bg-secondary/95 dark:bg-secondary/30 rounded-2xl mt-3">
          {/* Meta */}
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              {category}
            </span>
            <span className="text-xs text-muted-foreground">
              {formatRelativeTime(publishedAt)}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-medium leading-snug text-foreground line-clamp-2">
            {title}
          </h3>
        </div>
      </Link>
    </motion.article>
  );
}
