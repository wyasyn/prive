"use client";
import { Service } from "@/types";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const ServiceLinkCard = ({ service }: { service: Service }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/services/${service.slug}`}>
        <div
          className="
            h-full rounded-2xl border border-border/50
            bg-card/70 backdrop-blur
            p-5 shadow-xs
            hover:shadow-md hover:border-primary/40
            transition-all group
          "
        >
          <div className="flex flex-col gap-4">
            <div className="relative h-32 shrink-0">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform"
              />
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-foreground">
                {service.title}
              </h4>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {service.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {service.tools.map((tool: string) => (
                  <span
                    key={tool}
                    className="
                      rounded-md bg-accent/60
                      px-2 py-0.5 text-[11px]
                      text-muted-foreground
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
