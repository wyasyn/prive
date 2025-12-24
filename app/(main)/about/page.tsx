import BioSection from "@/components/pages/about/bio-section";
import GearList from "@/components/pages/about/gear-list";
import HeroSection from "@/components/pages/about/hero-section";
import SkillsSection from "@/components/pages/about/skill-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about August Renner, a photographer specializing in fashion, portrait, and commercial work.",
};

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <BioSection />
      <GearList />
      <SkillsSection />
    </>
  );
};

export default AboutPage;
