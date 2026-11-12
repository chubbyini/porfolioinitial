import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Printer,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Briefcase,
  Cpu,
  Sparkles,
  BookOpen,
  GraduationCap,
  Layers,
  CheckCircle2,
  FileBadge,
} from "lucide-react";
import { manifestData } from "@/data/manifest";
import { ManifestPrintButton } from "./manifest-print-button";

export const metadata: Metadata = {
  title: "Curriculum Vitae (Service Manifest) — Inioluwa Daniel Osibajo",
  description:
    "Official Curriculum Vitae and technical Service Manifest of Inioluwa Daniel Osibajo, Software Engineer & Systems Architect at PicckR.",
  openGraph: {
    title: "Inioluwa Daniel Osibajo — Curriculum Vitae",
    description:
      "Software Engineer & Systems Architect at PicckR, published NLP researcher, and creator of Sojourner Builds.",
    type: "profile",
  },
};

export default function ManifestPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
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
            href="mailto:inioluwaosibajo@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 dark:bg-amber-400 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-amber-300 font-mono text-xs font-bold transition-all shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Inioluwa</span>
          </a>
        </div>
      </div>

      {/* Main Printable Document Canvas */}
      <article className="bg-white dark:bg-[#0A0E18] border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-sm print:border-none print:shadow-none print:p-0 print:bg-white print:text-black space-y-10">
        {/* Document Header */}
        <header className="space-y-3 pb-8 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground print:text-black tracking-tight">
                {manifestData.header.name}
              </h1>
              <p className="font-mono text-sm sm:text-base text-amber-700 dark:text-amber-400 print:text-zinc-700 font-semibold mt-1">
                {manifestData.header.title} | {manifestData.header.degrees}
              </p>
            </div>

            <div className="flex items-center gap-2 print:hidden font-mono text-[11px] px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/25 shrink-0 self-start">
              <FileBadge className="w-3.5 h-3.5" />
              <span>Sojourner Manifest v2.6</span>
            </div>
          </div>

          {/* Contact Row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted print:text-zinc-600 pt-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 print:text-zinc-800" />
              {manifestData.header.location}
            </span>
            <span>•</span>
            <a
              href={`mailto:${manifestData.header.email}`}
              className="flex items-center gap-1.5 hover:text-amber-600 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 print:text-zinc-800" />
              {manifestData.header.email}
            </a>
            <span>•</span>
            <a
              href="tel:+2349071230347"
              className="flex items-center gap-1.5 hover:text-amber-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 print:text-zinc-800" />
              {manifestData.header.phone}
            </a>
            {manifestData.header.links.map((link) => (
              <span key={link.label} className="flex items-center gap-1.5">
                <span>•</span>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 transition-colors"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </header>

        {/* Executive Summary */}
        <section className="space-y-3">
          <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-amber-700 dark:text-amber-400 print:text-zinc-900 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 pb-1">
            Executive Summary
          </h2>
          <p className="font-sans text-sm sm:text-base text-foreground/90 print:text-zinc-800 leading-relaxed">
            {manifestData.executiveSummary}
          </p>
        </section>

        {/* Technical Skills & Expertise */}
        <section className="space-y-3">
          <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-amber-700 dark:text-amber-400 print:text-zinc-900 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 pb-1">
            Technical Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-xs sm:text-sm">
            {manifestData.technicalSkills.map((item) => (
              <div key={item.category} className="space-y-0.5">
                <span className="font-mono font-bold text-foreground print:text-black">
                  {item.category}:{" "}
                </span>
                <span className="text-muted print:text-zinc-700">{item.skills}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="space-y-6">
          <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-amber-700 dark:text-amber-400 print:text-zinc-900 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 pb-1">
            Professional Experience
          </h2>

          <div className="space-y-6">
            {manifestData.experiences.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="font-display font-bold text-base text-foreground print:text-black">
                      {exp.role} — <span className="text-amber-700 dark:text-amber-400 print:text-zinc-900">{exp.company}</span>
                    </h3>
                    <p className="font-mono text-xs text-muted print:text-zinc-600">
                      {exp.location} • {exp.type}
                    </p>
                  </div>
                  <span className="font-mono text-xs font-semibold text-foreground/80 print:text-zinc-800 shrink-0">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5 pt-1">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="font-sans text-xs sm:text-sm text-foreground/85 print:text-zinc-800 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-amber-600 dark:text-amber-400 print:text-zinc-700 font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Peer-Reviewed Research & Publications */}
        <section className="space-y-4">
          <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-amber-700 dark:text-amber-400 print:text-zinc-900 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 pb-1">
            Peer-Reviewed Research & Publications
          </h2>

          <div className="space-y-2 border border-zinc-200 dark:border-zinc-800 print:border-zinc-300 p-5 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/30 print:bg-transparent">
            <h3 className="font-display font-bold text-sm sm:text-base text-foreground print:text-black">
              {manifestData.research.title}
            </h3>
            <p className="font-mono text-xs text-amber-700 dark:text-amber-400 print:text-zinc-700 font-medium">
              {manifestData.research.journal} • {manifestData.research.date}
            </p>
            <p className="font-sans text-xs sm:text-sm text-foreground/85 print:text-zinc-800 leading-relaxed pt-1">
              {manifestData.research.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap items-center gap-2 pt-2 font-mono text-xs">
              {manifestData.research.metrics.map((m) => (
                <span
                  key={m.label}
                  className="px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 print:bg-zinc-100 text-foreground print:text-black"
                >
                  {m.label}: <strong>{m.value}</strong>
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-emerald-700 dark:text-emerald-400 print:text-zinc-800">
              {manifestData.research.highlights.map((h) => (
                <span key={h.label} className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{h.label}: <strong>{h.value}</strong></span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Engineered Products & Systems Architecture */}
        <section className="space-y-4">
          <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-amber-700 dark:text-amber-400 print:text-zinc-900 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 pb-1">
            Engineered Products & Systems Architecture
          </h2>

          <div className="space-y-3">
            {manifestData.products.map((p) => (
              <div key={p.title} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-display font-bold text-sm text-foreground print:text-black">
                    {p.title} — {p.subtitle}
                  </span>
                  <span className="font-mono text-[11px] text-muted print:text-zinc-600 sm:ml-auto">
                    {p.tags.join(" • ")}
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-foreground/80 print:text-zinc-700 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Writing & Publications */}
        <section className="space-y-3">
          <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-amber-700 dark:text-amber-400 print:text-zinc-900 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 pb-1">
            Technical Writing & Publications
          </h2>

          <ul className="space-y-2">
            {manifestData.writing.map((w) => (
              <li key={w.title} className="font-sans text-xs sm:text-sm text-foreground/85 print:text-zinc-800">
                • <strong>&quot;{w.title}&quot;</strong> — {w.platform} (
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 dark:text-amber-400 print:text-black underline"
                >
                  Read Article
                </a>
                )
              </li>
            ))}
          </ul>
        </section>

        {/* Education & Service */}
        <section className="space-y-3">
          <h2 className="font-mono text-xs font-bold tracking-widest uppercase text-amber-700 dark:text-amber-400 print:text-zinc-900 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 pb-1">
            Education & Service
          </h2>

          <div className="space-y-3">
            {manifestData.educationAndService.map((e, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                <div>
                  <h3 className="font-display font-bold text-foreground print:text-black">
                    {e.institution}
                  </h3>
                  <p className="text-muted print:text-zinc-700">
                    {e.degree} {e.honors && <span>• <strong>{e.honors}</strong></span>}
                  </p>
                </div>
                <span className="font-mono text-xs text-foreground/80 print:text-zinc-800 shrink-0">
                  {e.date}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Document Footer stamp */}
        <footer className="pt-8 border-t border-zinc-200 dark:border-zinc-800 print:border-zinc-300 flex items-center justify-between font-mono text-[11px] text-muted print:text-zinc-500">
          <span>Inioluwa Daniel Osibajo — Curriculum Vitae</span>
          <span>Verified Sojourner Service Manifest</span>
        </footer>
      </article>
    </div>
  );
}
