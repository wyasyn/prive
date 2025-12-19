import ProjectsPageComponent from "@/components/pages/project-page";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const ProjectsPage = async (props: { searchParams: SearchParams }) => {
  const searchParams = await props.searchParams;

  const page = Number(searchParams.page ?? 1);

  return <ProjectsPageComponent page={page} />;
};

export default ProjectsPage;
