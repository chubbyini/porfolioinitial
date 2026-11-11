/**
 * Strict TypeScript definitions for Inioluwa Daniel Osibajo's portfolio.
 * Adheres to Matt Pocock TypeScript ergonomics: Discriminated unions, immutable consts, zero `any`.
 */

export type ProjectCategory = "all" | "client" | "product" | "open-source";

export interface ProjectMetric {
  readonly label: string;
  readonly value: string;
}

export interface Project {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly tagline: string;
  readonly description: string;
  readonly category: Exclude<ProjectCategory, "all">;
  readonly client?: string;
  readonly role: string;
  readonly year: string;
  readonly featured: boolean;
  readonly stack: readonly string[];
  readonly metrics?: readonly ProjectMetric[];
  readonly liveUrl?: string;
  readonly githubUrl?: string;
  readonly videoDemoUrl?: string;
  readonly problem: string;
  readonly architecture: string;
  readonly results: string;
}

export interface ExperienceItem {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly companyUrl?: string;
  readonly location: string;
  readonly period: string;
  readonly current?: boolean;
  readonly type: "Full-time" | "Studio / Agency" | "Internship" | "Research";
  readonly summary: string;
  readonly achievements: readonly string[];
  readonly stack: readonly string[];
}

export interface SkillItem {
  readonly name: string;
  readonly icon?: string;
  readonly highlight?: boolean;
}

export interface SkillCategory {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly skills: readonly SkillItem[];
}

export interface ResearchPaper {
  readonly id: string;
  readonly title: string;
  readonly authors: readonly string[];
  readonly affiliation: string;
  readonly journal: string;
  readonly publicationDetails: string;
  readonly date: string;
  readonly abstract: string;
  readonly keyHighlights: readonly string[];
  readonly paperUrl: string;
  readonly category: "Natural Language Processing" | "Machine Learning";
}

export interface StudioService {
  readonly id: string;
  readonly title: string;
  readonly tagline: string;
  readonly description: string;
  readonly deliverables: readonly string[];
  readonly idealFor: string;
  readonly icon: string;
}

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly date: string;
  readonly readTime: string;
  readonly tags: readonly string[];
  readonly platform: "devto" | "medium" | "native";
  readonly canonicalUrl: string;
  readonly featured?: boolean;
}

export interface Testimonial {
  readonly id: string;
  readonly quote: string;
  readonly author: string;
  readonly role: string;
  readonly company: string;
  readonly relation: string;
  readonly date?: string;
  readonly verifiedLinkedIn?: boolean;
}

export interface ProfileData {
  readonly name: string;
  readonly preferredName: string;
  readonly role: string;
  readonly company: string;
  readonly companyUrl: string;
  readonly studio: string;
  readonly studioNpmPackage: string;
  readonly headline: string;
  readonly location: string;
  readonly bio: readonly string[];
  readonly availability: "Available for Q1/Q2 Projects" | "Selectively Available" | "Booked";
  readonly stats: readonly {
    readonly value: string;
    readonly label: string;
    readonly helper: string;
  }[];
  readonly socials: {
    readonly github: string;
    readonly linkedin: string;
    readonly devto: string;
    readonly medium: string;
    readonly twitter?: string;
    readonly email: string;
  };
}

export interface ApiResponse<T> {
  readonly success: boolean;
  readonly data?: T;
  readonly error?: string;
}
