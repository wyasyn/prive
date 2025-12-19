import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SingleProjectProps {
  project: {
    title: string;
    category: string;
    shortDescription: string;
    content: string; // HTML from Tiptap
    coverImage: string | null;
    demoUrl: string | null;
    githubUrl: string | null;
    tags: string[];
  };
}

export default function SingleProject({ project }: SingleProjectProps) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10 md:py-24">
      {/* Header */}
      <header className="mb-8">
        <p className="mb-2 text-sm font-medium text-muted-foreground">
          {project.category}
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          {project.shortDescription}
        </p>

        {/* Links */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Live Demo</Button>
            </Link>
          )}

          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">GitHub</Button>
            </Link>
          )}
        </div>

        {/* Tags */}
        {project.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      {/* Cover Image */}
      {project.coverImage && (
        <div className="relative mb-10 aspect-video overflow-hidden rounded-xl">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Rich Text Content */}
      <div
        className="
          prose 
          prose-neutral 
          max-w-none
          prose-headings:text-foreground
          prose-p:text-muted-foreground
          prose-a:text-primary
          prose-strong:text-foreground
          prose-code:text-foreground
          prose-pre:bg-muted
          prose-img:rounded-xl
        "
        dangerouslySetInnerHTML={{ __html: project.content }}
      />
    </article>
  );
}
