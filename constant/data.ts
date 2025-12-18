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
    title: "Frontend Web Development",
    description: "Modern, fast, and responsive web interfaces.",
    detailedDescription:
      "I design and build high-performance web interfaces focused on usability, accessibility, and scalability.",
    tools: ["React", "Next.js", "Tailwind CSS"],
    relatedSkills: [
      "UI Engineering",
      "Accessibility",
      "Performance Optimization",
    ],
    deliverables: [
      "Responsive UI",
      "Reusable components",
      "SEO-friendly pages",
    ],
    useCases: ["Startup MVPs", "Company websites", "Dashboards"],
    icon: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop",
    href: "/services/frontend",
    featured: true,
    turnaroundTime: "2–3 weeks",
  },

  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Cross-platform mobile apps with native performance.",
    detailedDescription:
      "I build reliable Android and iOS applications using modern cross-platform frameworks.",
    tools: ["React Native", "Expo", "Flutter"],
    deliverables: ["Android & iOS apps", "Offline support", "API integration"],
    useCases: ["Business apps", "Health apps", "IoT dashboards"],
    icon: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1470&auto=format&fit=crop",
    href: "/services/mobile",
  },

  {
    id: "backend",
    title: "Backend and APIs",
    description: "Secure, scalable APIs and backend systems.",
    detailedDescription:
      "I design and implement backend architectures that are secure, performant, and easy to scale.",
    tools: ["FastAPI", "NestJS", "Express"],
    deliverables: [
      "REST / GraphQL APIs",
      "Authentication & authorization",
      "Database design",
    ],
    useCases: ["SaaS platforms", "Mobile backends", "Microservices"],
    icon: "https://images.unsplash.com/photo-1597239450996-ea7c2c564412?q=80&w=687&auto=format&fit=crop",
    href: "/services/backend",
  },

  {
    id: "custom",
    title: "Custom Software Solutions",
    description: "Desktop and specialized software solutions.",
    detailedDescription:
      "Tailored software solutions designed to solve domain-specific problems.",
    tools: ["Electron", "Flutter", "Python"],
    deliverables: [
      "Custom workflows",
      "Desktop applications",
      "Automation tools",
    ],
    useCases: ["Internal tools", "Data processing", "Automation"],
    icon: "https://images.unsplash.com/photo-1643513208375-df314b16347a?q=80&w=687&auto=format&fit=crop",
    href: "/services/custom",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning Solutions",
    description: "Practical AI systems that solve real-world problems.",
    detailedDescription:
      "I design, build, and deploy machine learning solutions tailored to real business and research problems. My focus is on applied AI — image classification, data-driven decision systems, and AI-powered platforms — with clear problem definition, measurable impact, and production-ready deployment.",
    tools: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "FastAPI",
      "Docker",
    ],
    relatedSkills: [
      "Machine Learning",
      "Computer Vision",
      "Model Deployment",
      "Data Analysis",
      "MLOps Basics",
    ],
    deliverables: [
      "Problem analysis & feasibility assessment",
      "Trained ML models",
      "Inference APIs",
      "Model evaluation reports",
      "Deployment-ready services",
    ],
    useCases: [
      "Image classification systems",
      "Medical and skin condition analysis",
      "Plant disease detection",
      "Smart agriculture solutions",
      "AI-powered dashboards and tools",
    ],
    icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1470&auto=format&fit=crop",
    href: "/services/ai-ml",
    featured: true,
    turnaroundTime: "3–6 weeks",
  },
  {
    id: "ai-consulting",
    title: "AI & Technical Consulting",
    description: "Expert guidance on AI adoption and system design.",
    detailedDescription:
      "I help teams and individuals evaluate, design, and implement AI-driven systems responsibly and efficiently, from idea validation to production deployment.",
    tools: ["Python", "ML Frameworks", "Cloud Platforms"],
    deliverables: [
      "Technical roadmap",
      "Architecture recommendations",
      "Risk & feasibility analysis",
    ],
    useCases: [
      "AI adoption planning",
      "Startup MVP validation",
      "Academic or research projects",
    ],
    icon: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1470&auto=format&fit=crop",
    href: "/services/ai-consulting",
  },
];

export const socials = [
  { icon: IconBrandGithub, href: "https://github.com", label: "GitHub" },
  {
    icon: IconBrandLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  { icon: IconBrandX, href: "https://twitter.com", label: "Twitter" },
  {
    icon: IconBrandInstagram,
    href: "https://dribbble.com",
    label: "Dribbble",
  },
];
