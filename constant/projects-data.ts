import { ProjectListItem } from "@/lib/stores/projects-store";

export const sampleProjects: ProjectListItem[] = [
  {
    id: "proj_ai_skin_analyzer",
    title: "AI Skin Condition Analyzer",
    slug: "ai-skin-condition-analyzer",
    category: "AI Web App",
    short_description:
      "An AI-powered web application that analyzes skin images to detect common skin conditions using deep learning.",
    cover_image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop",
    tags: ["AI", "Computer Vision", "Healthcare", "Deep Learning", "Web App"],
    featured: true,
    created_at: "2024-10-15",
  },
  {
    id: "proj_smart_agriculture",
    title: "Smart Agriculture Monitoring System",
    slug: "smart-agriculture-monitoring-system",
    category: "IoT Platform",
    short_description:
      "A smart farming platform that leverages IoT sensors and data analytics to monitor crop health and optimize yields.",
    cover_image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop",
    tags: ["IoT", "Agriculture", "Data Analytics", "Sensors"],
    featured: true,
    created_at: "2024-09-02",
  },
  {
    id: "proj_face_attendance",
    title: "Face Recognition Attendance System",
    slug: "face-recognition-attendance-system",
    category: "AI Web App",
    short_description:
      "A secure attendance management system using real-time face recognition for educational and corporate environments.",
    cover_image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop",
    tags: ["Face Recognition", "Security", "AI", "Attendance"],
    featured: false,
    created_at: "2024-08-18",
  },
  {
    id: "proj_financial_planner",
    title: "Financial Planning Assistant",
    slug: "financial-planning-assistant",
    category: "Data & AI System",
    short_description:
      "A data-driven assistant that analyzes banking data to generate personalized financial insights and plans.",
    cover_image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop",
    tags: ["FinTech", "AI", "Data Science", "Analytics"],
    featured: true,
    created_at: "2024-11-05",
  },
  {
    id: "proj_plant_disease_app",
    title: "Plant Disease Detection App",
    slug: "plant-disease-detection-app",
    category: "Mobile App",
    short_description:
      "A mobile application that detects plant diseases from leaf images and provides treatment recommendations.",
    cover_image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop",
    tags: ["Mobile", "AI", "Agriculture", "Image Classification"],
    featured: false,
    created_at: "2024-07-10",
  },
  {
    id: "proj_portfolio_cms",
    title: "Modern Portfolio & CMS Platform",
    slug: "modern-portfolio-cms-platform",
    category: "Web Platform / CMS",
    short_description:
      "A modern, high-performance portfolio website with a custom CMS, optimized for SEO and content management.",
    cover_image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop",
    tags: ["Next.js", "CMS", "SEO", "Web Development"],
    featured: false,
    created_at: "2024-06-01",
  },
];
