"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Cpu,
  GraduationCap,
  MapPin,
  Package,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { profileData } from "@/data/profile";

export function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 sm:px-12 lg:px-16 py-20 border-b border-border bg-card/20 relative"
    >
      <div className="max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold tracking-widest uppercase">
            02 // ABOUT ME
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Crafted by practice. <span className="gold-gradient-text">Backed by research.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-2xl font-sans">
            I build responsive web software with focus on clean architecture, tactile micro-interactions,
            and reliable API integrations.
          </p>
        </div>

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Portrait & Snapshot Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-4 shadow-sm dark:shadow-md">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80">
                <Image
                  src="/avatar.png"
                  alt={profileData.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                />
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {profileData.name}
                  </h3>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-amber-500/10 text-zinc-800 dark:text-amber-300 border border-zinc-200 dark:border-amber-500/20 font-medium">
                    Software Engineer
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-muted font-mono pt-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Lagos / Nigeria (Open to Global Remote)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Air Force Institute of Technology (AFIT)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Link to LinkedIn & GitHub */}
            <div className="flex items-center gap-3">
              <Link
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-xs font-mono text-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors press-feedback flex items-center justify-center gap-1.5"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-muted" />
              </Link>
              <Link
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-xs font-mono text-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors press-feedback flex items-center justify-center gap-1.5"
              >
                <span>GitHub Code</span>
                <ExternalLink className="w-3 h-3 text-muted" />
              </Link>
            </div>
          </div>

          {/* Right Column: Bio Prose & Focus Pillars */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-muted leading-relaxed">
            {profileData.bio.map((paragraph, idx) => (
              <p key={idx} className="font-sans">
                {paragraph}
              </p>
            ))}

            {/* Core Competency Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 shadow-sm space-y-1.5 press-feedback">
                <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-display font-semibold text-sm">
                  <Code2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Frontend Engineering</span>
                </div>
                <p className="text-xs text-muted leading-normal">
                  Responsive React & Next.js applications, merchant portals, interactive dashboards, and strict type contracts.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 shadow-sm space-y-1.5 press-feedback">
                <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-display font-semibold text-sm">
                  <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>NLP & Applied AI</span>
                </div>
                <p className="text-xs text-muted leading-normal">
                  Published academic researcher in zero-shot learning frameworks for text summarization and evaluative question generation.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 shadow-sm space-y-1.5 press-feedback">
                <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-display font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Design Engineering</span>
                </div>
                <p className="text-xs text-muted leading-normal">
                  Emil Kowalski interaction craft, tactile spring feedback, accessible contrast, and zero layout shift.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 shadow-sm space-y-1.5 press-feedback">
                <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-display font-semibold text-sm">
                  <Package className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Open-Source Creator</span>
                </div>
                <p className="text-xs text-muted leading-normal">
                  Author of @sojournerbuilds/mark on npm — pure SVG + CSS nautical compass tokens and Next.js data veils.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
