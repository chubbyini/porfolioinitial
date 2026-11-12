import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  FileBadge,
} from "lucide-react";
import { manifestData } from "@/data/manifest";
import { ManifestPrintButton } from "./manifest-print-button";

export const metadata: Metadata = {
  title: "Curriculum Vitae (Service Manifest) — Inioluwa Daniel Osibajo",
  description:
    "Official Curriculum Vitae and technical Service Manifest of Inioluwa Daniel Osibajo, Software Engineer building admin platforms, dashboards, and mobile-first commerce products.",
  openGraph: {
    title: "Inioluwa Daniel Osibajo — Curriculum Vitae",
    description:
      "Software Engineer, Frontend and Full-Stack. React, Next.js, TypeScript, Node.js, and published NLP researcher.",
    type: "profile",
  },
};

export default function ManifestPage() {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto space-y-8">
      {/* Top Navigation & Print Actions (Hidden on Print) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden border-b border-border pb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Return to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <ManifestPrintButton />
          <a
            href={`mailto:${manifestData.header.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 dark:bg-amber-400 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-amber-300 font-mono text-xs font-bold transition-all shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Inioluwa</span>
          </a>
        </div>
      </div>

      {/* Main Printable Document Canvas */}
      <article className="bg-white dark:bg-[#0A0E18] border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-14 shadow-sm print:border-none print:shadow-none print:p-0 print:bg-white print:text-black space-y-8 font-sans">
        {/* Document Header */}
        <header className="space-y-3 pb-6 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground print:text-black tracking-tight">
                {manifestData.header.name}
              </h1>
              <p className="text-base text-zinc-800 dark:text-zinc-200 print:text-zinc-800 font-medium mt-1">
                {manifestData.header.title}
              </p>
            </div>

            <div className="flex items-center gap-1.5 print:hidden font-mono text-[11px] px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/25 shrink-0 self-start">
              <FileBadge className="w-3.5 h-3.5" />
              <span>Service Manifest</span>
            </div>
          </div>

          {/* Contact Row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-600 font-sans">
            <span>{manifestData.header.location}</span>
            <span>·</span>
            <a
              href={`mailto:${manifestData.header.email}`}
              className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
            >
              {manifestData.header.email}
            </a>
            <span>·</span>
            <a
              href="tel:+2349071230347"
              className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
            >
              {manifestData.header.phone}
            </a>
            <span>·</span>
            <a
              href={manifestData.header.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
            >
              github.com/chubbyini
            </a>
            <span>·</span>
            <a
              href={manifestData.header.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
            >
              linkedin.com/in/inioluwa-osibajo-b02231235
            </a>
          </div>

          {/* Summary Statement */}
          <p className="text-sm text-foreground/90 print:text-zinc-800 leading-relaxed pt-2">
            {manifestData.summary}
          </p>
        </header>

        {/* EXPERIENCE SECTION */}
        <section className="space-y-6">
          <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 print:text-zinc-500">
            EXPERIENCE
          </h2>

          <div className="space-y-6">
            {manifestData.experiences.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="font-display font-bold text-base text-foreground print:text-black">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 print:text-zinc-600">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-600 shrink-0">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5 pt-1">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-xs sm:text-sm text-foreground/85 print:text-zinc-800 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-zinc-400 dark:text-zinc-500 font-bold select-none">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {exp.stack && (
                  <p className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 print:text-zinc-600 pt-1">
                    {exp.stack.join(" · ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SELECTED PROJECTS */}
        <section className="space-y-4 pt-2">
          <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 print:text-zinc-500">
            SELECTED PROJECTS
          </h2>

          <div className="space-y-4">
            {manifestData.projects.map((proj) => (
              <div key={proj.title} className="space-y-1">
                <h3 className="font-display font-bold text-sm sm:text-base text-foreground print:text-black">
                  {proj.title}: {proj.subtitle}
                </h3>
                <ul className="space-y-1">
                  <li className="text-xs sm:text-sm text-foreground/85 print:text-zinc-800 leading-relaxed flex items-start gap-2">
                    <span className="text-zinc-400 dark:text-zinc-500 font-bold select-none">•</span>
                    <span>{proj.description}</span>
                  </li>
                </ul>
                <p className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 print:text-zinc-600 pt-0.5">
                  {proj.stack.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL WRITING */}
        <section className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 print:text-zinc-500">
              Technical Writing
            </h2>
            <span className="text-xs text-muted print:text-zinc-500">Medium</span>
          </div>

          <ul className="space-y-1.5">
            {manifestData.writing.map((w) => (
              <li
                key={w.title}
                className="text-xs sm:text-sm text-foreground/85 print:text-zinc-800 flex items-start gap-2"
              >
                <span className="text-zinc-400 dark:text-zinc-500 font-bold select-none">•</span>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-foreground print:text-black"
                >
                  {w.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* EDUCATION & RESEARCH */}
        <section className="space-y-4 pt-2">
          <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 print:text-zinc-500">
            EDUCATION
          </h2>

          <div className="space-y-4">
            {manifestData.education.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-foreground print:text-black">
                      {edu.title}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-600 italic">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400 print:text-zinc-600 shrink-0">
                    {edu.date}
                  </span>
                </div>

                {edu.bullets && (
                  <ul className="space-y-1 pt-1">
                    {edu.bullets.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-xs sm:text-sm text-foreground/85 print:text-zinc-800 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-zinc-400 dark:text-zinc-500 font-bold select-none">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="space-y-3 pt-2">
          <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 print:text-zinc-500">
            SKILLS
          </h2>

          <div className="space-y-2 text-xs sm:text-sm">
            <div>
              <strong className="font-bold text-foreground print:text-black">Languages: </strong>
              <span className="text-foreground/85 print:text-zinc-800">{manifestData.skills.languages}</span>
            </div>
            <div>
              <strong className="font-bold text-foreground print:text-black">Frontend: </strong>
              <span className="text-foreground/85 print:text-zinc-800">{manifestData.skills.frontend}</span>
            </div>
            <div>
              <strong className="font-bold text-foreground print:text-black">Backend and Realtime: </strong>
              <span className="text-foreground/85 print:text-zinc-800">{manifestData.skills.backend}</span>
            </div>
            <div>
              <strong className="font-bold text-foreground print:text-black">Architecture: </strong>
              <span className="text-foreground/85 print:text-zinc-800">{manifestData.skills.architecture}</span>
            </div>
            <div>
              <strong className="font-bold text-foreground print:text-black">Tooling: </strong>
              <span className="text-foreground/85 print:text-zinc-800">{manifestData.skills.tooling}</span>
            </div>
            <div>
              <strong className="font-bold text-foreground print:text-black">NLP: </strong>
              <span className="text-foreground/85 print:text-zinc-800">{manifestData.skills.nlp}</span>
            </div>
          </div>
        </section>

        {/* Document Footer */}
        <footer className="pt-6 border-t border-zinc-200 dark:border-zinc-800 print:border-zinc-300 flex items-center justify-between font-mono text-[11px] text-muted print:text-zinc-500">
          <span>Inioluwa Daniel Osibajo — Curriculum Vitae</span>
          <span>Sojourner Service Manifest</span>
        </footer>
      </article>
    </div>
  );
}
