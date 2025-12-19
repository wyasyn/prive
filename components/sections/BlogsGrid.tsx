import { sampleBlogs } from "@/constant/blog-data";
import BlogCard from "../widgets/BlogCard";
import Pagination from "../widgets/Pagination";

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
  // DATA FETCHING (Suspense-enabled)
  // Later: replace with Payload CMS query
  const totalItems = sampleBlogs.length;
  const totalPages = Math.ceil(totalItems / limit);

  const start = (page - 1) * limit;
  const end = start + limit;
  const blogs = sampleBlogs.slice(start, end);

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
            image={blog.cover_image!}
            publishedAt={blog.created_at}
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
