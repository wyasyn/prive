import Image from "next/image";

interface SingleBlogProps {
  blog: {
    title: string;
    category: string;
    shortDescription: string;
    content: string; // HTML
    coverImage: string | null;
    createdAt?: string;
  };
}

export default function SingleBlog({ blog }: SingleBlogProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      {/* Header */}
      <header className="mb-8">
        <p className="mb-2 text-sm font-medium text-muted-foreground">
          {blog.category}
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {blog.title}
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          {blog.shortDescription}
        </p>
      </header>

      {/* Cover Image */}
      {blog.coverImage && (
        <div className="relative mb-10 aspect-video overflow-hidden rounded-xl">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
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
        "
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
}
