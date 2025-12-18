import { PricingTier } from "@/types";

export const AI_ML_PRICING: PricingTier[] = [
  {
    name: "Discovery & Feasibility",
    description: "Assess AI suitability and define a technical roadmap.",
    timeline: "1–2 weeks",
    priceLabel: "By consultation",
    includes: [
      "Problem analysis",
      "Data readiness review",
      "Architecture recommendations",
    ],
  },
  {
    name: "AI Solution Development",
    description: "Design, train, and deploy a production-ready AI system.",
    timeline: "3–6 weeks",
    priceLabel: "Project-based",
    highlighted: true,
    includes: ["Model training", "Inference APIs", "Evaluation reports"],
  },
  {
    name: "Optimization & Scaling",
    description: "Improve model performance and deployment efficiency.",
    timeline: "2–4 weeks",
    priceLabel: "Custom quote",
    includes: ["Model tuning", "Performance optimization", "Scaling guidance"],
  },
];

export const FRONTEND_PRICING: PricingTier[] = [
  {
    name: "UI Audit & Planning",
    description:
      "Review existing designs or requirements and define a clean UI roadmap.",
    timeline: "1 week",
    priceLabel: "By consultation",
    includes: [
      "UI/UX review",
      "Component structure plan",
      "Performance & accessibility notes",
    ],
  },
  {
    name: "Frontend Implementation",
    description:
      "Build a modern, responsive, and performant frontend application.",
    timeline: "2–4 weeks",
    priceLabel: "Project-based",
    highlighted: true,
    includes: [
      "Responsive UI",
      "Reusable components",
      "SEO-ready pages",
      "API integration",
    ],
  },
  {
    name: "Optimization & Maintenance",
    description:
      "Improve performance, accessibility, and long-term maintainability.",
    timeline: "1–3 weeks",
    priceLabel: "Custom quote",
    includes: [
      "Performance optimization",
      "Accessibility improvements",
      "Refactoring",
    ],
  },
];

export const MOBILE_PRICING: PricingTier[] = [
  {
    name: "App Planning & Architecture",
    description: "Define app scope, architecture, and technical feasibility.",
    timeline: "1–2 weeks",
    priceLabel: "By consultation",
    includes: [
      "Feature breakdown",
      "Architecture decisions",
      "Tech stack selection",
    ],
  },
  {
    name: "Cross-Platform App Development",
    description: "Develop Android and iOS apps with a shared codebase.",
    timeline: "3–6 weeks",
    priceLabel: "Project-based",
    highlighted: true,
    includes: ["Android & iOS builds", "Offline support", "API integration"],
  },
  {
    name: "Enhancements & Publishing",
    description: "Improve features and prepare apps for store deployment.",
    timeline: "1–2 weeks",
    priceLabel: "Custom quote",
    includes: [
      "Performance improvements",
      "Bug fixes",
      "Store deployment guidance",
    ],
  },
];

export const BACKEND_PRICING: PricingTier[] = [
  {
    name: "System Design & API Planning",
    description: "Design scalable backend architecture and API contracts.",
    timeline: "1 week",
    priceLabel: "By consultation",
    includes: ["API design", "Database schema", "Security considerations"],
  },
  {
    name: "Backend Development",
    description: "Build secure, scalable backend systems and APIs.",
    timeline: "2–5 weeks",
    priceLabel: "Project-based",
    highlighted: true,
    includes: [
      "REST or GraphQL APIs",
      "Authentication",
      "Database integration",
    ],
  },
  {
    name: "Scaling & Optimization",
    description: "Improve performance, reliability, and scalability.",
    timeline: "1–3 weeks",
    priceLabel: "Custom quote",
    includes: ["Query optimization", "Caching strategies", "Monitoring setup"],
  },
];

export const CUSTOM_SOFTWARE_PRICING: PricingTier[] = [
  {
    name: "Requirements & Feasibility",
    description:
      "Analyze requirements and determine the best solution approach.",
    timeline: "1–2 weeks",
    priceLabel: "By consultation",
    includes: [
      "Requirements analysis",
      "Technical feasibility",
      "Solution proposal",
    ],
  },
  {
    name: "Custom Software Development",
    description: "Build tailored desktop or specialized software solutions.",
    timeline: "3–6 weeks",
    priceLabel: "Project-based",
    highlighted: true,
    includes: [
      "Custom workflows",
      "Desktop or automation tools",
      "Documentation",
    ],
  },
  {
    name: "Enhancements & Support",
    description: "Extend functionality and provide ongoing improvements.",
    timeline: "Ongoing",
    priceLabel: "Custom quote",
    includes: ["Feature additions", "Maintenance", "Bug fixes"],
  },
];
