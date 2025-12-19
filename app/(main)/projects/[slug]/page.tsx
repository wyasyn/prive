import SingleProject from "@/components/widgets/SingleProject";
import { getProjectBySlug, getProjects } from "@/lib/data/projects";
import { supabaseStatic } from "@/lib/supabase/static";
import { Metadata } from "next";

import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;

  const slug = params.slug;

  const { project } = await getProjectBySlug(slug);

  if (!project) notFound();

  return {
    title: project?.title,
    description: project?.shortDescription,
    openGraph: {
      images: project.coverImage!,
    },
  };
}

export async function generateStaticParams() {
  const { data: projects } = await supabaseStatic
    .from("projects")
    .select("slug");

  return (
    projects?.map((project) => ({
      slug: project.slug,
    })) ?? []
  );
}

export default async function Page(props: { params: Params }) {
  const params = await props.params;

  const slug = params.slug;

  const { project } = await getProjectBySlug(slug);

  if (!project) notFound();
  return (
    <>
      <SingleProject project={project} />
    </>
  );
}
