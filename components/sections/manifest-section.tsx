"use client";

import * as React from "react";
import Link from "next/link";
import {
  FileBadge,
  Printer,
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { manifestData } from "@/data/manifest";

export function ManifestSection() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section
      id="manifest"
      className="px-6 sm:px-12 lg:px-16 py-16 border-b border-border bg-card/20 relative"
      aria-label="Service Manifest Executive Brief"
    >
      <div className="max-w-6xl 2xl:max-w-7xl w-full space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold tracking-widest uppercase flex items-center gap-2">
              <FileBadge className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>06 // SERVICE MANIFEST (CURRICULUM VITAE)</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
              Executive Brief. <span className="gold-gradient-text">Service Record.</span>
            </h2>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 font-mono text-xs font-medium transition-colors active:scale-95 shadow-xs"
              aria-label="Print or Export CV to PDF"
            >
              <Printer className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Print / PDF</span>
            </button>
            <Link
              href="/manifest"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-zinc-950 dark:bg-amber-400 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-amber-300 font-mono text-xs font-bold transition-all active:scale-95 shadow-xs"
            >
              <span>View Full CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Compact Executive Brief Card (Non-repetitive) */}
        <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-card/60 backdrop-blur-sm space-y-6 shadow-sm">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border/70">
            <div>
              <h3 className="font-display font-bold text-xl text-foreground">
                {manifestData.header.name}
              </h3>
              <p className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold mt-0.5">
                {manifestData.header.title}
              </p>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                <MapPin className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                {manifestData.header.location}
              </span>
              <a
                href={`mailto:${manifestData.header.email}`}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-amber-600 transition-colors"
              >
                <Mail className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                {manifestData.header.email}
              </a>
              <a
                href="tel:+2349071230347"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-amber-600 transition-colors"
              >
                <Phone className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                {manifestData.header.phone}
              </a>
            </div>
          </div>

          {/* Concise Summary Paragraph */}
          <p className="font-sans text-sm text-foreground/90 leading-relaxed">
            {manifestData.summary}
          </p>

          {/* 3 Key Verified Milestones (At-A-Glance) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-card/40 space-y-1">
              <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Primary Ops</span>
              </div>
              <p className="font-display font-bold text-sm text-foreground">
                PicckR Logistics
              </p>
              <p className="font-sans text-xs text-muted">
                Admin portals, RBAC matrix, WebSockets live rider tracking
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-card/40 space-y-1">
              <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Published Research</span>
              </div>
              <p className="font-display font-bold text-sm text-foreground">
                IJRIAS NLP Paper
              </p>
              <p className="font-sans text-xs text-muted">
                0.87 BERTScore F1, zero-shot summarization pipeline
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-card/40 space-y-1">
              <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic & Service</span>
              </div>
              <p className="font-display font-bold text-sm text-foreground">
                B.Sc. AFIT & NYSC
              </p>
              <p className="font-sans text-xs text-muted">
                Computer Science (Second Class Upper) + 2026 Corps Member
              </p>
            </div>
          </div>

          {/* Footer Navigation Link to Full Document */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-border/60">
            <span className="font-mono text-xs text-muted">
              5 professional roles, engineered platforms, and full skill matrix detailed on the dedicated page.
            </span>
            <Link
              href="/manifest"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors group"
            >
              <span>Read Full 2-Page Curriculum Vitae</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
