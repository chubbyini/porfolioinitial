import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  ExternalLink,
  Github,
} from "lucide-react";
import { projectsData } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Case Study by Inioluwa Daniel Osibajo`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <div className="min-h-screen px-6 sm:px-12 lg:px-20 py-16 max-w-5xl space-y-12">
      {/* Back Link */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors press-feedback"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to All Projects</span>
      </Link>

      {/* Case Study Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-mono text-xs px-2.5 py-1 rounded-md border border-zinc-200 dark:border-amber-500/30 bg-zinc-100 dark:bg-amber-500/10 text-zinc-800 dark:text-amber-300 font-semibold uppercase">
            {project.category}
          </span>
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{project.year}</span>
          {project.client && (
            <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400">
              Client: <strong className="text-foreground">{project.client}</strong>
            </span>
          )}
        </div>

        <h1 className="font-display font-bold text-3xl sm:text-5xl text-foreground tracking-tight">
          {project.title}
        </h1>
        <p className="font-mono text-sm sm:text-base text-amber-700 dark:text-amber-300 font-medium">{project.tagline}</p>
        <p className="text-sm sm:text-base text-muted leading-relaxed max-w-3xl font-sans">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300 font-display font-semibold text-xs tracking-wide flex items-center gap-2 shadow-sm transition-all press-feedback"
            >
              <span>Visit Live Product</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          )}

          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 font-display font-semibold text-xs tracking-wide flex items-center gap-2 transition-all press-feedback"
            >
              <span>View Source Code</span>
              <Github className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>

      {/* Embedded Showcase Frame */}
      <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm">
        <div className="p-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
            {project.title.toLowerCase().replace(/\s+/g, "-")}.production
          </span>
          <div className="w-12" />
        </div>

        {project.videoDemoUrl ? (
          <div className="aspect-video w-full bg-black">
            <video
              src={project.videoDemoUrl}
              controls
              className="w-full h-full object-cover"
              poster="/avatar.png"
            />
          </div>
        ) : (
          <div className="aspect-[16/9] w-full flex flex-col items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-950/40 text-center space-y-4">
            <div className="p-4 rounded-full border border-zinc-200 dark:border-amber-500/30 bg-white dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 shadow-sm">
              <Cpu className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-bold text-lg text-foreground">
                Architecture & Production Showcase
              </h3>
              <p className="font-mono text-xs text-muted max-w-md">
                Production-verified telemetry, optimistic UI state buffers, and resilient routing.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Case Study Deep Dive Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left: Metadata & Tech Specs */}
        <div className="md:col-span-4 space-y-6">
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm space-y-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block">
                My Role
              </span>
              <span className="font-display font-bold text-sm text-foreground block mt-0.5">
                {project.role}
              </span>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block">
                Year / Timeline
              </span>
              <span className="font-mono text-xs text-foreground block mt-0.5">
                {project.year}
              </span>
            </div>

            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block mb-2">
                Technologies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {project.metrics && project.metrics.length > 0 && (
              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block">
                  Measured Impact
                </span>
                {project.metrics.map((m) => (
                  <div key={m.label} className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800">
                    <span className="font-display font-bold text-sm text-amber-700 dark:text-amber-300 block">
                      {m.value}
                    </span>
                    <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400 block">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Narrative (Problem, Architecture, Results) */}
        <div className="md:col-span-8 space-y-8 font-sans">
          {/* 1. The Challenge */}
          <div className="space-y-3">
            <h2 className="font-display font-bold text-2xl text-foreground tracking-tight flex items-center gap-2">
              <span className="font-mono text-sm text-amber-700 dark:text-amber-400 font-semibold">01 //</span>
              <span>The Problem & Friction</span>
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* 2. Architecture & Implementation */}
          <div className="space-y-3">
            <h2 className="font-display font-bold text-2xl text-foreground tracking-tight flex items-center gap-2">
              <span className="font-mono text-sm text-amber-700 dark:text-amber-400 font-semibold">02 //</span>
              <span>Architecture & Engineering Strategy</span>
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* 3. Results & Shipped Impact */}
          <div className="space-y-3">
            <h2 className="font-display font-bold text-2xl text-foreground tracking-tight flex items-center gap-2">
              <span className="font-mono text-sm text-amber-700 dark:text-amber-400 font-semibold">03 //</span>
              <span>Shipped Outcome</span>
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {project.results}
            </p>
          </div>
        </div>
      </div>

      {/* Next Project Footer */}
      {nextProject && (
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <Link
            href="/#projects"
            className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors"
          >
            ← View All Work
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center gap-2 text-right"
          >
            <div>
              <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 block uppercase font-medium">Next Case Study</span>
              <span className="font-display font-bold text-sm text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-600 dark:text-amber-400 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
}
