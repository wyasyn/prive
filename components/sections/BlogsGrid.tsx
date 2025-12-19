import { sampleBlogs } from "@/constant/blog-data";
import BlogCard from "../widgets/BlogCard";

export default async function BlogsGrid() {
  // Replace later with:
  // const blogs = await fetchBlogs();

  const blogs = sampleBlogs;

  return (
    <div
      className="
        grid
        gap-6
        grid-cols-[repeat(auto-fit,minmax(350px,1fr))]
      "
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
  );
}
