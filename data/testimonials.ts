import type { Testimonial } from "@/types";

// TODO: Replace or update these testimonials with your real client quotes
export const testimonialsData: readonly Testimonial[] = [
  {
    id: "testimonial-1",
    author: "Tunde Adeyemi",
    role: "Head of Operations",
    company: "Picckr Logistics",
    relation: "Collaborated on Picckr B2B Portal & Dispatch Platform",
    quote:
      "Inioluwa is that rare engineer who looks at complex logistics chaos and turns it into clean, reliable software. The B2B portal he built reduced our order processing overhead almost by half, and his dual-map failover saved our operations from multiple third-party outages.",
  },
  {
    id: "testimonial-2",
    author: "Dr. O. E. Olorunshola",
    role: "Senior Research Supervisor",
    company: "Faculty of Computing, AFIT",
    relation: "Co-author on IJRIAS 2025 NLP Paper",
    quote:
      "Working with Inioluwa on zero-shot NLP pipelines was a masterclass in thorough experimentation and clarity. His ability to evaluate transformer architectures and translate mathematical formulations into working pipelines is exceptional.",
  },
  {
    id: "testimonial-3",
    author: "Kelechi Okafor",
    role: "Product Lead",
    company: "Vissionnaire Tech Solution",
    relation: "Supervised Web Application Architecture",
    quote:
      "Inioluwa doesn't just write code; he builds product value. His attention to micro-interactions, responsive speed, and resilient WebSocket state handling made our client applications rock-solid under high traffic.",
  },
  {
    id: "testimonial-4",
    author: "Amina Bello",
    role: "E-commerce Founder",
    company: "Sojourner Studio Client",
    relation: "Client for Custom Web Platform",
    quote:
      "Sojourner transformed our web presence. The speed, gold-accented aesthetic, and conversational checkout flow drove our mobile conversion rates through the roof. Inioluwa ships on time, every time.",
  },
] as const;
