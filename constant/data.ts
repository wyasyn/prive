import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
export const SERVICES = [
  {
    title: "Frontend Web Development",
    description: "Modern, fast, and responsive web interfaces.",
    tools: ["React", "Next.js", "Tailwind"],
    icon: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/frontend",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile apps with native performance.",
    tools: ["React Native", "Expo", "Flutter"],
    icon: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/mobile",
  },
  {
    title: "Backend and APIs",
    description: "Secure, scalable APIs and backend systems.",
    tools: ["FastAPI", "NestJS", "Express"],
    icon: "https://images.unsplash.com/photo-1597239450996-ea7c2c564412?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/backend",
  },
  {
    title: "Custom Software",
    description: "Desktop and specialized software solutions.",
    tools: ["Electron", "Flutter", "Python"],
    icon: "https://images.unsplash.com/photo-1643513208375-df314b16347a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services/custom",
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
