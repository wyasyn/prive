import SingleBlog from "@/components/widgets/SingleBlog";
import { getBlogBySlug } from "@/lib/data/blogs";
import { supabaseStatic } from "@/lib/supabase/static";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;

  const slug = params.slug;

  const { blog } = await getBlogBySlug(slug);

  if (!blog) notFound();

  return {
    title: blog?.title,
    description: blog?.shortDescription,
    openGraph: {
      images: blog.coverImage!,
    },
  };
}

export async function generateStaticParams() {
  const { data: blogs } = await supabaseStatic.from("blogs").select("slug");

  return (
    blogs?.map((blog) => ({
      slug: blog.slug,
    })) ?? []
  );
}

export default async function Page(props: { params: Params }) {
  const params = await props.params;

  const slug = params.slug;

  const { blog } = await getBlogBySlug(slug);

  if (!blog) notFound();

  return (
    <>
      <SingleBlog blog={blog} />
    </>
  );
}
