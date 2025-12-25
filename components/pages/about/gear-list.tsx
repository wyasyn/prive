"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layout, Server, Package } from "lucide-react";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandDocker,
  IconBrandReactNative,
  IconDatabase,
  IconDeviceMobile,
  IconBrandFlutter,
  IconGitBranch,
  IconBrandGithub,
  IconBrandPython,
  IconBrandNodejs,
} from "@tabler/icons-react";

const categories = [
  { key: "Frontend", icon: Layout },
  { key: "Backend", icon: Server },
  { key: "Mobile", icon: IconDeviceMobile },
  { key: "DevOps", icon: Package },
] as const;

const tools = {
  Frontend: [
    {
      name: "Next.js",
      description:
        "Production-ready React framework for performant, SEO-friendly web applications.",
      icon: IconBrandNextjs,
      current: true,
    },
    {
      name: "React",
      description:
        "Component-based UI development for scalable and maintainable interfaces.",
      icon: IconBrandReact,
      current: true,
    },
  ],

  Backend: [
    {
      name: "FastAPI",
      description:
        "High-performance Python framework for building modern, type-safe APIs.",
      icon: IconBrandPython,
      current: true,
    },
    {
      name: "Express.js",
      description:
        "Minimal Node.js framework for building REST APIs and backend services.",
      icon: IconBrandNodejs,
      current: true,
    },
    {
      name: "Django",
      description:
        "Full-featured Python framework for secure, scalable backend systems.",
      icon: IconBrandPython,
      current: false,
    },
    {
      name: "Flask",
      description:
        "Lightweight Python framework for simple services and micro-APIs.",
      icon: IconBrandPython,
      current: false,
    },
    {
      name: "Databases",
      description:
        "Working with relational and document databases for reliable data storage.",
      icon: IconDatabase,
      current: true,
    },
  ],

  Mobile: [
    {
      name: "React Native",
      description:
        "Cross-platform mobile development using a shared JavaScript codebase.",
      icon: IconBrandReactNative,
      current: true,
    },
    {
      name: "Flutter",
      description:
        "Cross-platform mobile apps with high-performance UI using Dart.",
      icon: IconBrandFlutter,
      current: true,
    },
  ],

  DevOps: [
    {
      name: "Docker",
      description:
        "Containerization for consistent environments and deployment workflows.",
      icon: IconBrandDocker,
      current: true,
    },
    {
      name: "Git",
      description:
        "Version control for tracking changes and collaborating on codebases.",
      icon: IconGitBranch,
      current: true,
    },
    {
      name: "GitHub Actions",
      description:
        "CI/CD pipelines for testing, building, and deploying applications.",
      icon: IconBrandGithub,
      current: true,
    },
  ],
};

type CategoryKey = keyof typeof tools;

export default function ToolStack() {
  const [active, setActive] = useState<CategoryKey>("Frontend");

  return (
    <section className="container py-24 max-w-6xl">
      <div className="grid gap-8 lg:gap-24 lg:grid-cols-3 lg:items-start">
        {/* Left Column – Context */}
        <div className="lg:sticky lg:top-32">
          <h2 className="text-4xl font-bold tracking-tight">
            Tools & Technologies
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Technologies I actively use to design, build, and ship reliable
            software across web and mobile platforms.
          </p>
        </div>

        {/* Right Column – Interactive Content */}
        <div className=" lg:col-span-2 ">
          {/* Category Tabs */}
          <div className="flex gap-3 mb-10 flex-wrap  ">
            {categories.map(({ key, icon: Icon }) => (
              <button
                type="button"
                key={key}
                onClick={() => setActive(key)}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition
                  ${
                    active === key
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {active === key && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-primary/10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <Icon className="relative z-10 h-4 w-4" />
                <span className="relative z-10">{key}</span>
              </button>
            ))}
          </div>

          {/* Tool Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {[...tools[active]]
                .sort(
                  (a, b) =>
                    Number(b.current) - Number(a.current) ||
                    a.name.localeCompare(b.name)
                )
                .map((tool, index) => {
                  const Icon = tool.icon;

                  return (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      {/* Accent */}
                      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-primary/0 group-hover:bg-primary transition-colors" />

                      {/* Icon */}
                      <Icon className="mb-4 h-8 w-8 text-muted-foreground grayscale transition-all group-hover:grayscale-0 group-hover:text-primary" />

                      {/* Title + Badge */}
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="text-lg font-semibold">{tool.name}</h3>

                        {tool.current ? (
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                            Currently using
                          </span>
                        ) : (
                          <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                            Previously used
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {tool.description}
                      </p>
                    </motion.div>
                  );
                })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
