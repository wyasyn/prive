import { Service } from "@/types";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export const SERVICES: Service[] = [
  {
    id: "frontend",
    slug: "frontend",
    title: "Frontend Web Development",
    shortDescription: "Modern, fast, and responsive web interfaces.",
    detailedDescription:
      "I design and build scalable frontend applications with a strong focus on usability, accessibility, performance, and long-term maintainability. Every interface is built with modern best practices and optimized for real users.",

    category: "Development",
    featured: true,

    tools: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
    deliverables: [
      "Responsive UI",
      "Reusable component system",
      "SEO-friendly pages",
      "Performance optimization",
    ],
    useCases: ["Startup MVPs", "Company websites", "Admin dashboards"],
    idealFor: ["Startups", "SMEs", "Agencies"],

    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Understand goals, users, and requirements.",
      },
      {
        step: 2,
        title: "Design",
        description: "Wireframes and UI structure planning.",
      },
      {
        step: 3,
        title: "Development",
        description: "Component-based frontend development.",
      },
      {
        step: 4,
        title: "Testing",
        description: "Cross-browser and performance testing.",
      },
      {
        step: 5,
        title: "Deployment",
        description: "Production deployment and handover.",
      },
    ],

    pricing: {
      model: "Fixed",
      startingFrom: "1,500,000",
      currency: "UGX",
      notes: "Pricing depends on pages and complexity.",
    },

    timeline: { min: "2 weeks", max: "4 weeks" },
    icon: "https://images.unsplash.com/photo-1547658719-da2b51169166",
  },

  {
    id: "mobile",
    slug: "mobile",
    title: "Mobile App Development",
    shortDescription: "Cross-platform mobile apps with native performance.",
    detailedDescription:
      "I build reliable Android and iOS applications using modern cross-platform frameworks, focusing on performance, offline support, and clean user experience.",

    category: "Development",

    tools: ["React Native", "Expo", "Flutter"],
    deliverables: ["Android & iOS apps", "Offline support", "API integration"],
    useCases: ["Business apps", "Health apps", "IoT dashboards"],
    idealFor: ["Businesses", "Startups"],

    process: [
      {
        step: 1,
        title: "Requirements",
        description: "Define features and target users.",
      },
      {
        step: 2,
        title: "UI/UX Design",
        description: "Mobile-first design approach.",
      },
      {
        step: 3,
        title: "Development",
        description: "Cross-platform app development.",
      },
      {
        step: 4,
        title: "Testing",
        description: "Device testing and optimization.",
      },
      {
        step: 5,
        title: "Store Deployment",
        description: "Play Store and App Store preparation.",
      },
    ],

    pricing: {
      model: "Fixed",
      startingFrom: "3,000,000",
      currency: "UGX",
      notes: "Depends on features and integrations.",
    },

    timeline: { min: "3 weeks", max: "8 weeks" },
    icon: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356",
  },

  {
    id: "backend",
    slug: "backend",
    title: "Backend & API Development",
    shortDescription: "Secure, scalable backend systems and APIs.",
    detailedDescription:
      "I design and implement backend architectures that are secure, scalable, and optimized for performance, including authentication, databases, and integrations.",

    category: "Development",

    tools: ["FastAPI", "NestJS", "Express", "PostgreSQL"],
    deliverables: ["REST / GraphQL APIs", "Auth systems", "Database design"],
    useCases: ["SaaS platforms", "Mobile backends"],
    idealFor: ["Startups", "Growing products"],

    process: [
      {
        step: 1,
        title: "System Design",
        description: "Architecture and data modeling.",
      },
      {
        step: 2,
        title: "API Development",
        description: "Core API implementation.",
      },
      {
        step: 3,
        title: "Security",
        description: "Authentication and authorization.",
      },
      {
        step: 4,
        title: "Testing",
        description: "Load and integration testing.",
      },
      {
        step: 5,
        title: "Deployment",
        description: "Cloud deployment and monitoring.",
      },
    ],

    pricing: {
      model: "Fixed",
      startingFrom: "2,000,000",
      currency: "UGX",
    },

    timeline: { min: "3 weeks", max: "6 weeks" },
    icon: "https://images.unsplash.com/photo-1597239450996-ea7c2c564412",
  },

  {
    id: "ai-ml",
    slug: "ai-ml",
    title: "AI & Machine Learning Solutions",
    shortDescription: "Practical AI systems for real-world problems.",
    detailedDescription:
      "I build applied AI solutions such as image classification, predictive analytics, and intelligent dashboards, focusing on measurable impact and production deployment.",

    category: "AI",
    featured: true,

    tools: ["Python", "TensorFlow", "PyTorch", "OpenCV", "FastAPI", "Docker"],
    deliverables: [
      "Trained ML models",
      "Inference APIs",
      "Evaluation reports",
      "Deployment-ready systems",
    ],
    useCases: [
      "Medical analysis",
      "Plant disease detection",
      "Smart agriculture",
    ],
    idealFor: ["Research", "AI startups", "Organizations"],

    process: [
      {
        step: 1,
        title: "Problem Definition",
        description: "Define objectives and constraints.",
      },
      {
        step: 2,
        title: "Data Preparation",
        description: "Collect and clean datasets.",
      },
      {
        step: 3,
        title: "Model Training",
        description: "Train and evaluate models.",
      },
      {
        step: 4,
        title: "Deployment",
        description: "API and system integration.",
      },
      { step: 5, title: "Iteration", description: "Continuous optimization." },
    ],

    pricing: {
      model: "Custom",
      startingFrom: "3,000,000",
      currency: "UGX",
      notes: "Pricing depends on data and model complexity.",
    },

    timeline: { min: "3 weeks", max: "10 weeks" },
    icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },

  {
    id: "consulting",
    slug: "ai-consulting",
    title: "AI & Technical Consulting",
    shortDescription: "Expert guidance on system design and AI adoption.",
    detailedDescription:
      "I provide technical consulting to help teams plan, validate, and implement robust software and AI systems responsibly and efficiently.",

    category: "Consulting",

    tools: ["Python", "ML Frameworks", "Cloud Platforms"],
    deliverables: [
      "Technical roadmap",
      "Architecture review",
      "Feasibility analysis",
    ],
    useCases: ["Startup validation", "Academic projects"],
    idealFor: ["Teams", "Founders"],

    process: [
      {
        step: 1,
        title: "Assessment",
        description: "Understand current challenges.",
      },
      {
        step: 2,
        title: "Analysis",
        description: "Evaluate technical feasibility.",
      },
      {
        step: 3,
        title: "Recommendations",
        description: "Clear technical roadmap.",
      },
    ],

    pricing: {
      model: "Hourly",
      startingFrom: "150,000",
      currency: "UGX",
      notes: "Per hour consulting.",
    },

    timeline: { min: "1 day", max: "2 weeks" },
    icon: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
];

export const socials = [
  { icon: IconBrandGithub, href: "https://github.com/wyasyn", label: "GitHub" },
  {
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/yasin-walum",
    label: "LinkedIn",
  },
  { icon: IconBrandX, href: "hhttps://x.com/wyasyn", label: "Twitter" },
  {
    icon: IconBrandInstagram,
    href: "https://www.instagram.com/yasin_walum",
    label: "Dribbble",
  },
];
