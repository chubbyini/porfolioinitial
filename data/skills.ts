import type { SkillCategory } from "@/types";

export const skillCategories: readonly SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Architecting responsive, high-performance interfaces with obsessive attention to craft, type safety, and micro-motion.",
    skills: [
      { name: "Next.js (App Router & RSC)", level: "Core", icon: "Globe", highlight: true },
      { name: "React 19 / 18", level: "Core", icon: "Code2", highlight: true },
      { name: "TypeScript (Strict Ergonomics)", level: "Core", icon: "FileCode", highlight: true },
      { name: "Tailwind CSS", level: "Core", icon: "Palette", highlight: true },
      { name: "Framer Motion & CSS Spring Motion", level: "Advanced", icon: "Sparkles", highlight: true },
      { name: "Zod & React Hook Form", level: "Core", icon: "CheckCircle2" },
      { name: "Design Systems & Tokens", level: "Advanced", icon: "Layers" },
      { name: "Web Accessibility (WCAG AA)", level: "Advanced", icon: "Eye" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    description: "Building resilient APIs, low-latency WebSocket channels, and mission-critical logistics routing infrastructure.",
    skills: [
      { name: "Node.js & Express", level: "Core", icon: "Server", highlight: true },
      { name: "REST APIs & WebSocket Streams", level: "Core", icon: "Cpu", highlight: true },
      { name: "PostgreSQL", level: "Advanced", icon: "Database", highlight: true },
      { name: "MongoDB (MERN)", level: "Advanced", icon: "Database" },
      { name: "Dual-Provider Map Routing", level: "Advanced", icon: "Navigation", highlight: true },
      { name: "Authentication & Role RBAC", level: "Advanced", icon: "ShieldCheck" },
      { name: "Caching & Offline State Sync", level: "Proficient", icon: "Zap" },
    ],
  },
  {
    id: "ai-nlp",
    title: "AI, NLP & Research",
    description: "Bridging academic NLP research with production applications, zero-shot pipelines, and agentic workflows.",
    skills: [
      { name: "Zero-Shot NLP Pipelines", level: "Advanced", icon: "Brain", highlight: true },
      { name: "Python (PyTorch, Transformers)", level: "Advanced", icon: "Terminal", highlight: true },
      { name: "Text Summarization & QA Generation", level: "Advanced", icon: "FileText", highlight: true },
      { name: "LLM Orchestration & Prompt Craft", level: "Advanced", icon: "Cpu" },
      { name: "Model Evaluation (ROUGE / BLEU)", level: "Proficient", icon: "BarChart3" },
      { name: "Vector Embeddings & Search", level: "Proficient", icon: "Search" },
    ],
  },
  {
    id: "tooling",
    title: "Tooling & DevOps",
    description: "Maintaining production reliability, continuous integration, npm package publishing, and edge deployment.",
    skills: [
      { name: "Git, GitHub & Branch Workflows", level: "Core", icon: "GitBranch", highlight: true },
      { name: "npm Package Publishing (@sojourner)", level: "Advanced", icon: "PackageCheck", highlight: true },
      { name: "Vercel & Cloudflare Deployment", level: "Core", icon: "Cloud" },
      { name: "Lighthouse Performance Tuning (95+)", level: "Advanced", icon: "Gauge", highlight: true },
      { name: "Linux Administration & Bash", level: "Proficient", icon: "Terminal" },
      { name: "Docker Containerization", level: "Proficient", icon: "Container" },
    ],
  },
] as const;
