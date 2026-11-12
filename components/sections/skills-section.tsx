"use client";

import * as React from "react";
import {
  Globe,
  Code2,
  FileCode,
  Palette,
  Sparkles,
  CheckCircle2,
  Layers,
  Eye,
  Server,
  Cpu,
  Database,
  Navigation,
  ShieldCheck,
  Zap,
  Brain,
  Terminal,
  FileText,
  BarChart3,
  Search,
  GitBranch,
  PackageCheck,
  Cloud,
  Gauge,
  Container,
  Layout,
  Sliders,
  Network,
  FileSpreadsheet,
  Radio,
  HelpCircle,
  Flame,
  Laptop,
  Send,
  Figma,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Code2,
  FileCode,
  Palette,
  Sparkles,
  CheckCircle2,
  Layers,
  Eye,
  Server,
  Cpu,
  Database,
  Navigation,
  ShieldCheck,
  Zap,
  Brain,
  Terminal,
  FileText,
  BarChart3,
  Search,
  GitBranch,
  PackageCheck,
  Cloud,
  Gauge,
  Container,
  Layout,
  Sliders,
  Network,
  FileSpreadsheet,
  Radio,
  HelpCircle,
  Flame,
  Laptop,
  Send,
  Figma,
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="px-6 sm:px-12 lg:px-16 py-20 border-b border-border bg-card/10 relative"
    >
      <div className="max-w-7xl 2xl:max-w-[1600px] w-full space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold tracking-widest uppercase">
            03 // SKILLS & TECH STACK
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Tools & Technologies. <span className="gold-gradient-text">Shipped in Production.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-3xl font-sans">
            A clear overview of the technologies I use across frontend engineering, backend development,
            applied NLP research, and workflow tooling.
          </p>
        </div>

        {/* Grouped Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 space-y-4 shadow-sm"
            >
              <div>
                <h3 className="font-display font-bold text-lg text-foreground tracking-tight">
                  {category.title}
                </h3>
                <p className="text-xs text-muted mt-1 font-sans leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Clean Skills Chips (No levels, no bars) */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => {
                  const Icon = (skill.icon && ICON_MAP[skill.icon]) || Code2;
                  return (
                    <div
                      key={skill.name}
                      className={cn(
                        "group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-colors select-none",
                        skill.highlight
                          ? "border-zinc-300 dark:border-amber-500/30 bg-zinc-50 dark:bg-amber-500/10 text-zinc-900 dark:text-zinc-100"
                          : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-3.5 h-3.5 transition-transform group-hover:scale-110",
                          skill.highlight
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-zinc-500 dark:text-zinc-400"
                        )}
                      />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
