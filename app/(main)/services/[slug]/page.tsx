import { ServiceDetails } from "@/components/services/service-details";
import { SERVICES } from "@/constant/data";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      images: service.icon,
    },
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage(props: { params: Params }) {
  const params = await props.params;
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return <ServiceDetails service={service} />;
}
