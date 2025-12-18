export interface Service {
  id: string;

  /** Core display */
  title: string;
  description: string; // short, marketing-friendly summary
  detailedDescription?: string; // long-form explanation for service page

  /** Value clarity */
  deliverables?: string[]; // What the client gets
  useCases?: string[]; // Who this service is for / scenarios

  /** Technical credibility */
  tools: string[];
  relatedSkills?: string[]; // Cross-links to skills section

  /** Visual + navigation */
  icon: string;
  href: string;

  /** Business logic */
  featured?: boolean;
  startingPrice?: string; // Optional, e.g. "From $500"
  turnaroundTime?: string; // e.g. "2–4 weeks"

  /** Proof & conversion */
  relatedProjects?: string[]; // Project IDs or slugs
}

export interface Profile {
  fullName: string;
  headline: string; // e.g. "Full-Stack Engineer | AI & Mobile Solutions"
  shortBio: string;
  longBio?: string;
  location?: string;
  availabilityStatus:
    | "available"
    | "freelance"
    | "open-to-work"
    | "not-available";
  yearsOfExperience?: number;
  profileImage: string;
  resumeUrl?: string;
  coreRoles: string[]; // ["Full-Stack Developer", "AI Engineer"]
}

export interface Skill {
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Mobile"
    | "AI & Data"
    | "DevOps"
    | "Databases"
    | "Security"
    | "Tools";
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  years?: number;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription?: string;

  problemStatement?: string;
  solution?: string;
  impact?: string; // metrics, outcomes, value delivered

  technologies: string[];
  category: ("Web" | "Mobile" | "AI" | "Backend" | "IoT")[];

  images: string[];
  videoDemoUrl?: string;

  liveUrl?: string;
  githubUrl?: string;

  role?: string; // e.g. "Tech Lead", "Full-Stack Developer"
  teamSize?: number;
  duration?: string; // e.g. "3 months"

  featured?: boolean;
  status: "completed" | "ongoing";
  year: number;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  organizationType?: "Company" | "Startup" | "Government" | "NGO";
  location?: string;

  startDate: string;
  endDate?: string; // null = present

  responsibilities: string[];
  achievements?: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear?: number;
  achievements?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;

  tags: string[];
  category: "Engineering" | "AI" | "Tutorial" | "Opinion";

  coverImage?: string;
  published: boolean;
  publishedAt?: string;
  readingTime?: number;

  relatedPosts?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  feedback: string;
  avatar?: string;
  projectId?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: number;
  credentialUrl?: string;
}

export interface Contact {
  email: string;
  phone?: string;
  location?: string;

  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    website?: string;
  };
}

export interface PricingTier {
  name: string;
  description: string;
  idealFor?: string[];
  includes: string[];
  timeline: string;
  priceLabel: string; // Display only, not numeric logic
  highlighted?: boolean;
}
