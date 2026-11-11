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
          <div className="font-mono text-xs text-gold-400 tracking-widest uppercase">
            02 // ABOUT ME
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Crafted by practice. <span className="gold-gradient-text">Backed by research.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-2xl font-sans">
            I don&apos;t just assemble templates. I solve real operational friction through strict
            architectural discipline, tactile motion, and resilient distributed systems.
          </p>
        </div>

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Portrait & Snapshot Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl border border-border bg-card p-4 gold-card-glow shadow-md">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-border/80">
                <Image
                  src="/avatar.png"
                  alt={profileData.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {profileData.name}
                  </h3>
                  <span className="font-mono text-xs px-2 py-0.5 rounded-md bg-gold-500/10 text-gold-400 border border-gold-500/20">
                    Lead Builder
                  </span>
                </div>

                <div className="space-y-1 text-xs text-muted font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    <span>Kaduna, Nigeria (Open to Global Remote)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-gold-400" />
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
                className="flex-1 py-2.5 px-3 rounded-xl border border-border bg-card/60 text-xs font-mono text-center hover:border-gold-500/40 hover:text-gold-400 transition-colors press-feedback flex items-center justify-center gap-1.5"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
              <Link
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl border border-border bg-card/60 text-xs font-mono text-center hover:border-gold-500/40 hover:text-gold-400 transition-colors press-feedback flex items-center justify-center gap-1.5"
              >
                <span>GitHub Code</span>
                <ExternalLink className="w-3 h-3" />
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
              <div className="p-4 rounded-xl border border-border bg-card/40 space-y-1.5 press-feedback">
                <div className="flex items-center gap-2 text-gold-400 font-display font-semibold text-sm">
                  <Code2 className="w-4 h-4" />
                  <span>Production Software</span>
                </div>
                <p className="text-xs text-muted leading-normal">
                  High-throughput B2B web applications, real-time dispatch systems, and resilient
                  Next.js App Router architectures.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card/40 space-y-1.5 press-feedback">
                <div className="flex items-center gap-2 text-gold-400 font-display font-semibold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>NLP & Applied AI</span>
                </div>
                <p className="text-xs text-muted leading-normal">
                  Published academic researcher in zero-shot learning frameworks for text
                  summarization and evaluative question generation.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card/40 space-y-1.5 press-feedback">
                <div className="flex items-center gap-2 text-gold-400 font-display font-semibold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Design Engineering</span>
                </div>
                <p className="text-xs text-muted leading-normal">
                  Emil Kowalski interaction craft, custom cubic-bezier curves, hardware-accelerated
                  transforms, and strict Matt Pocock types.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card/40 space-y-1.5 press-feedback">
                <div className="flex items-center gap-2 text-gold-400 font-display font-semibold text-sm">
                  <Package className="w-4 h-4" />
                  <span>Open-Source Creator</span>
                </div>
                <p className="text-xs text-muted leading-normal">
                  Author of @sojournerbuilds/mark on npm — pure SVG + CSS nautical compass tokens
                  and Next.js data veils.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
