import ServicesPage from "@/components/pages/service-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services ",
  description:
    "I design, build, and scale modern digital products including websites, web apps, and intelligent systems.",
};

export default function ServicesPageHome() {
  return <ServicesPage />;
}
