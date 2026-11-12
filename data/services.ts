import type { StudioService } from "@/types";

export const servicesData: readonly StudioService[] = [
  {
    id: "frontend-web-apps",
    title: "Frontend Web Applications",
    tagline: "Responsive, high-craft React & Next.js applications",
    description:
      "Crafting production-ready web apps with Next.js App Router, TypeScript, and Tailwind CSS. Obsessed with snappy load times, clean code organization, and seamless mobile responsiveness.",
    deliverables: [
      "Modern React / Next.js architecture with App Router",
      "Strict TypeScript typings with zero unchecked index errors",
      "Tailwind CSS styling with polished light and dark themes",
      "Core Web Vitals and Lighthouse 95+ performance optimization",
    ],
    idealFor: "Modern web products, client portals, and dynamic SaaS frontends.",
    icon: "Layout",
  },
  {
    id: "ui-design-systems",
    title: "UI Engineering & Micro-Interactions",
    tagline: "Tactile components, spring motion, and design tokens",
    description:
      "Bringing interfaces to life with subtle, purposeful motion using Framer Motion and modern CSS. Creating reusable component systems, design tokens, and accessible interactive widgets.",
    deliverables: [
      "Custom UI token suites and icon components",
      "Accessible interactive components with full keyboard support",
      "Smooth micro-interactions (press feedback, drawer sheets, toast feeds)",
      "Reduced-motion accessibility compliance across devices",
    ],
    idealFor: "Products needing a distinct, polished aesthetic that feels premium to touch.",
    icon: "Sparkles",
  },
  {
    id: "api-backend-integration",
    title: "API & Backend Integration",
    tagline: "Connecting client interfaces with reliable server APIs",
    description:
      "Building practical backend routes, database models, and integrating third-party APIs. Handling form validations, asynchronous requests, and real-time state with clarity.",
    deliverables: [
      "RESTful API route handlers with input validation (Zod)",
      "MongoDB schema modeling and document persistence",
      "Authentication handling and state persistence",
      "Clean error boundaries and optimistic UI updates",
    ],
    idealFor: "Full-stack prototypes, database-backed tools, and API-driven interfaces.",
    icon: "Server",
  },
  {
    id: "applied-ai-nlp",
    title: "Applied NLP & AI Prototypes",
    tagline: "Zero-shot text summarization and automated question generation",
    description:
      "Leveraging published academic research in zero-shot NLP to build working text pipelines, intelligent document processors, and automated query generation prototypes.",
    deliverables: [
      "Zero-shot automated text summarization workflows",
      "Educational question-and-answer generation pipelines",
      "Transformer model evaluation using ROUGE and BLEU metrics",
      "Python and API wrapper integrations for web applications",
    ],
    idealFor: "EdTech, document intelligence, and content processing tools.",
    icon: "Cpu",
  },
] as const;
