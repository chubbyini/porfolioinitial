import type { ProfileData } from "@/types";

export const profileData: ProfileData = {
  name: "Inioluwa Daniel Osibajo",
  preferredName: "Inioluwa",
  role: "Full-Stack Web Developer & Systems Architect",
  company: "Vissionnaire Tech Solution Ltd",
  companyUrl: "https://picckr.com",
  studio: "Sojourner Builds",
  studioNpmPackage: "@sojournerbuilds/mark",
  headline: "I ship real products, architect resilient web systems, and write about how I build them.",
  location: "Kaduna, Nigeria",
  availability: "Available for Q1/Q2 Projects",
  bio: [
    "I am a full-stack developer and studio founder who builds real, revenue-driving software. At Vissionnaire Tech Solution Ltd and Picckr, I engineer core B2B platforms, enterprise logistics dispatch workflows, and responsive web products used by logistics operators and businesses daily.",
    "My technical focus spans robust React and Next.js architectures, high-throughput backend APIs, and applied NLP pipelines. I hold a published research paper on hybrid zero-shot NLP in applied computing, and I regularly document architecture patterns on Dev.to and Medium.",
    "Through Sojourner, my independent web development studio, I build tailor-made digital tools and publish production-grade UI tokens such as @sojournerbuilds/mark.",
  ],
  stats: [
    {
      value: "2+",
      label: "Years in Production",
      helper: "Engineering high-traffic logistics & enterprise web applications",
    },
    {
      value: "10+",
      label: "Shipped Products",
      helper: "B2B portals, dispatch suites, real-time engines, and consumer apps",
    },
    {
      value: "1",
      label: "Published NLP Paper",
      helper: "Peer-reviewed in IJRIAS: Zero-Shot Summarization & QA",
    },
    {
      value: "100%",
      label: "Practitioner Driven",
      helper: "Battle-tested code with rigorous type safety and responsive motion",
    },
  ],
  socials: {
    github: "https://github.com/chubbyini",
    linkedin: "https://www.linkedin.com/in/inioluwa-osibajo-b23531238/",
    devto: "https://dev.to/osibajo_inioluwa_74301be0",
    medium: "https://medium.com/@inioluwaosibajo",
    email: "inioluwaosibajo@gmail.com",
  },
} as const;
