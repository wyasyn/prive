import BlogCard from "../widgets/BlogCard";
import { BlogsEmpty } from "../widgets/BlogsEmpty";
import { BlogsError } from "../widgets/BlogsError";
import Pagination from "../widgets/Pagination";
import { getBlogs } from "@/lib/data/blogs";

interface BlogsGridProps {
  page: number;
  limit: number;
  minWidth?: number;
  showPagination?: boolean;
}

export default async function BlogsGrid({
  page,
  limit,
  minWidth = 300,
  showPagination = false,
}: BlogsGridProps) {
  const { blogs, totalPages, error } = await getBlogs(page, limit);

  if (error) {
    return <BlogsError error={error} />;
  }

  if (blogs.length === 0) {
    return <BlogsEmpty />;
    return <BlogsEmpty />;
  }

  return (
    <>
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
        }}
      >
        {blogs.map((blog) => (
          <BlogCard
            key={blog.slug}
            title={blog.title}
            category={blog.category}
            slug={blog.slug}
            image={blog.cover_image}
            publishedAt={blog.createdAt}
          />
        ))}
      </div>

      {showPagination && totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          basePath="/blog"
        />
      )}
    </>
  );
}
