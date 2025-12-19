import BlogPageComponent from "@/components/pages/blog-page";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const BlogPage = async (props: { searchParams: SearchParams }) => {
  const searchParams = await props.searchParams;

  const page = Number(searchParams.page ?? 1);

  return <BlogPageComponent page={page} />;
};

export default BlogPage;
