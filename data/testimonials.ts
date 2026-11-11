import type { Testimonial } from "@/types";

export const testimonialsData: readonly Testimonial[] = [
  {
    id: "testimonial-wonderful",
    author: "Wonderful Onwuchekwa",
    role: "Product Manager | Turning Complex Problems into Scalable Products",
    company: "Logistics, Fintech & AI (0-to-1 & Scale)",
    relation: "Worked directly with Inioluwa on the same engineering team",
    date: "June 21, 2026",
    verifiedLinkedIn: true,
    quote:
      "Inioluwa is an outstanding Software Engineer who consistently delivers exceptional results. Having worked closely with him, I was continually impressed by his strong attention to detail, technical expertise, and commitment to excellence. He has a remarkable ability to meet deadlines without compromising on quality, even when working under tight timelines.\n\nBeyond his technical skills, Inioluwa stands out for his proactive mindset and dedication to continuous learning. He is always seeking opportunities to expand his knowledge, embrace new technologies, and apply innovative solutions to complex problems. His collaborative approach, clear communication, and positive attitude make him a true pleasure to work with.\n\nAny team would be fortunate to have Inioluwa. He has my highest recommendation, and I am confident he will continue to achieve great things in his career.",
  },
  {
    id: "testimonial-research",
    author: "Dr. O. E. Olorunshola",
    role: "Research Supervisor & Co-Author",
    company: "Air Force Institute of Technology (AFIT)",
    relation: "Co-author on IJRIAS 2025 NLP Publication",
    date: "July 2025",
    quote:
      "Working with Inioluwa on zero-shot NLP pipelines was a masterclass in thorough experimentation and clarity. His ability to evaluate transformer architectures and translate mathematical formulations into working pipelines is exceptional.",
  },
  {
    id: "testimonial-vissionnaire",
    author: "Engineering Lead",
    role: "Lead Software Architect",
    company: "Vissionnaire Tech Solution Ltd",
    relation: "Supervised Web Application Architecture & Dispatch Tooling",
    date: "2025",
    quote:
      "Inioluwa brings remarkable discipline to frontend architecture. His attention to micro-interactions, responsive speed, and resilient state handling made our client applications rock-solid under high traffic.",
  },
] as const;
