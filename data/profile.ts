import type { ProfileData } from "@/types";

export const profileData: ProfileData = {
  name: "Inioluwa Daniel Osibajo",
  preferredName: "Inioluwa",
  role: "Software Engineer & Web Developer",
  company: "PicckR (Subsidiary of Vissionnaire Tech Solution Ltd)",
  companyUrl: "https://picckr.com",
  studio: "Sojourner Builds",
  studioNpmPackage: "@sojournerbuilds/mark",
  headline: "I build responsive web applications, design clean interfaces, and ship real products.",
  location: "Nigeria",
  availability: "Available for Q1/Q2 Projects",
  bio: [
    "I am a software engineer and web developer at PicckR, building responsive web applications, merchant portals, and logistics dispatch interfaces.",
    "My engineering focus is centered on React, Next.js, and TypeScript, combining clean design engineering, tactile micro-interactions, and reliable API integrations. I also conduct applied NLP research, with a peer-reviewed published paper on zero-shot summarization and question generation.",
    "Under Sojourner Builds, my personal development initiative, I create open-source developer tooling and UI tokens, including the published @sojournerbuilds/mark package on npm.",
  ],
  stats: [
    {
      value: "2+",
      label: "Years in Engineering",
      helper: "Building web applications, merchant portals, and dispatch tools",
    },
    {
      value: "12+",
      label: "Shipped Projects",
      helper: "B2B web apps, logistics platforms, stores, and tools",
    },
    {
      value: "1",
      label: "Published NLP Paper",
      helper: "Peer-reviewed in IJRIAS Vol. 10(7): Zero-Shot Summarization & QA",
    },
    {
      value: "100%",
      label: "Practitioner Focused",
      helper: "Working software, clean type safety, and responsive design",
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
