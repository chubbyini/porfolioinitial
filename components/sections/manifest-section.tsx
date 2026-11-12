"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileBadge,
  Printer,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  BookOpen,
  Award,
  Layers,
  Sparkles,
  GraduationCap,
  Briefcase,
  Cpu,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { manifestData } from "@/data/manifest";

type TabKey = "all" | "experience" | "skills" | "research" | "education";

export function ManifestSection() {
  const [activeTab, setActiveTab] = React.useState<TabKey>("all");

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section
      id="manifest"
      className="px-6 sm:px-12 lg:px-16 py-20 border-b border-border bg-card/20 relative"
      aria-label="Service Manifest and Curriculum Vitae"
    >
      <div className="max-w-6xl 2xl:max-w-7xl w-full space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold tracking-widest uppercase flex items-center gap-2">
              <FileBadge className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>06 // SERVICE MANIFEST (CURRICULUM VITAE)</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Curriculum Vitae. <span className="gold-gradient-text">The Verified Record.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
              Official expedition log, technical competencies, verified roles at PicckR, peer-reviewed NLP research, and academic credentials.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 font-mono text-xs font-medium transition-colors active:scale-95 shadow-xs"
              aria-label="Print or Export CV to PDF"
            >
              <Printer className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Print / PDF</span>
            </button>
            <Link
              href="/manifest"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 font-mono text-xs font-medium transition-colors active:scale-95 shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Dedicated View</span>
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 dark:bg-amber-400 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-amber-300 font-mono text-xs font-bold transition-all active:scale-95 shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Inioluwa</span>
            </a>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar border-b border-border/60">
          {[
            { id: "all", label: "Full Manifest", icon: Layers },
            { id: "experience", label: "Experience (6 Roles)", icon: Briefcase },
            { id: "skills", label: "Skills & Architecture", icon: Cpu },
            { id: "research", label: "NLP Research & Writing", icon: Sparkles },
            { id: "education", label: "Education & NYSC", icon: GraduationCap },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as TabKey)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs transition-all whitespace-nowrap active:scale-95 ${
                  isActive
                    ? "bg-amber-500/15 text-amber-800 dark:text-amber-300 font-bold border border-amber-500/30 shadow-xs"
                    : "text-muted hover:text-foreground hover:bg-card/40 border border-transparent"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-600 dark:text-amber-400" : ""}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* EXECUTIVE SUMMARY & CONTACT BAR */}
        {/* ========================================================= */}
        {(activeTab === "all" || activeTab === "experience") && (
          <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-card/60 backdrop-blur-sm space-y-6 shadow-sm">
            {/* Header metadata row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                  {manifestData.header.name}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-amber-700 dark:text-amber-400 font-semibold mt-0.5">
                  {manifestData.header.title} • {manifestData.header.degrees}
                </p>
              </div>

              {/* Fast Contact Chips */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  <MapPin className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                  {manifestData.header.location}
                </span>
                <a
                  href={`mailto:${manifestData.header.email}`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-amber-600 transition-colors"
                >
                  <Mail className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                  {manifestData.header.email}
                </a>
                <a
                  href="tel:+2349071230347"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-amber-600 transition-colors"
                >
                  <Phone className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                  {manifestData.header.phone}
                </a>
                {manifestData.header.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 text-muted hover:text-foreground hover:border-amber-500/40 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Executive Summary Paragraph */}
            <div className="space-y-2">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Executive Summary
              </div>
              <p className="font-sans text-sm sm:text-base text-foreground/90 leading-relaxed">
                {manifestData.executiveSummary}
              </p>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TECHNICAL SKILLS & EXPERTISE MATRIX */}
        {/* ========================================================= */}
        {(activeTab === "all" || activeTab === "skills") && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <h3 className="font-display font-bold text-lg text-foreground">
                Technical Skills & Expertise
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {manifestData.technicalSkills.map((item) => (
                <div
                  key={item.category}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-card/40 hover:border-amber-500/30 transition-colors space-y-1.5"
                >
                  <div className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                    {item.category}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    {item.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PROFESSIONAL EXPERIENCE TIMELINE */}
        {/* ========================================================= */}
        {(activeTab === "all" || activeTab === "experience") && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <h3 className="font-display font-bold text-lg text-foreground">
                  Professional Experience
                </h3>
              </div>
              <span className="font-mono text-xs text-muted">
                {manifestData.experiences.length} Tracked Roles
              </span>
            </div>

            <div className="space-y-4">
              {manifestData.experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-card/50 hover:border-amber-500/40 transition-all space-y-3 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border/50">
                    <div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-foreground flex items-center gap-2">
                        <span>{exp.role}</span>
                        <span className="text-amber-700 dark:text-amber-400">—</span>
                        <span className="text-amber-700 dark:text-amber-400">{exp.company}</span>
                      </h4>
                      <p className="font-mono text-xs text-muted mt-0.5">
                        {exp.location} • <span className="font-semibold text-foreground/80">{exp.type}</span>
                      </p>
                    </div>

                    <div className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20 self-start sm:self-auto">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2 pt-1">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="font-sans text-xs sm:text-sm text-foreground/85 leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PEER-REVIEWED RESEARCH & PUBLICATIONS */}
        {/* ========================================================= */}
        {(activeTab === "all" || activeTab === "research") && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <h3 className="font-display font-bold text-lg text-foreground">
                Peer-Reviewed Research & Publications
              </h3>
            </div>

            <div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-card/50 to-card/70 space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="font-display font-bold text-base sm:text-lg text-foreground">
                  {manifestData.research.title}
                </h4>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 shrink-0 font-medium">
                  {manifestData.research.date}
                </span>
              </div>

              <p className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold">
                {manifestData.research.journal}
              </p>

              <p className="font-sans text-xs sm:text-sm text-foreground/90 leading-relaxed">
                {manifestData.research.description}
              </p>

              {/* Research Metrics Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {manifestData.research.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-card/60 font-mono text-xs"
                  >
                    <span className="text-muted">{metric.label}: </span>
                    <span className="font-bold text-foreground">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Research Highlights */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {manifestData.research.highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>
                      {highlight.label}: <strong>{highlight.value}</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* ENGINEERED PRODUCTS & SYSTEMS ARCHITECTURE */}
        {/* ========================================================= */}
        {(activeTab === "all" || activeTab === "research" || activeTab === "skills") && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <h3 className="font-display font-bold text-lg text-foreground">
                Engineered Products & Systems Architecture
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {manifestData.products.map((prod) => (
                <div
                  key={prod.title}
                  className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-card/40 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <h4 className="font-display font-bold text-base text-foreground">
                      {prod.title}
                    </h4>
                    <p className="font-mono text-xs text-amber-700 dark:text-amber-400 font-medium">
                      {prod.subtitle}
                    </p>
                    <p className="font-sans text-xs text-muted leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                    {prod.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TECHNICAL WRITING & PUBLICATIONS */}
        {/* ========================================================= */}
        {(activeTab === "all" || activeTab === "research") && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <h3 className="font-display font-bold text-lg text-foreground">
                Technical Writing & Publications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {manifestData.writing.map((article) => (
                <a
                  key={article.title}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-card/40 hover:border-amber-500/40 hover:bg-card/70 transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <h4 className="font-display font-semibold text-sm text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {article.title}
                    </h4>
                    <span className="font-mono text-xs text-muted">
                      {article.platform} • Read Article
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors shrink-0 mt-0.5" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* EDUCATION & NATIONAL SERVICE */}
        {/* ========================================================= */}
        {(activeTab === "all" || activeTab === "education") && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <h3 className="font-display font-bold text-lg text-foreground">
                Education & National Service
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {manifestData.educationAndService.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-card/40 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-display font-bold text-base text-foreground">
                      {edu.institution}
                    </h4>
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-muted font-medium">
                      {edu.date}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-foreground/90">
                    {edu.degree}
                    {edu.honors && (
                      <span className="font-semibold text-amber-700 dark:text-amber-400">
                        {" "}
                        • {edu.honors}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
