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
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="px-6 sm:px-12 lg:px-16 py-20 border-b border-border bg-card/10 relative"
    >
      <div className="max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-gold-400 tracking-widest uppercase">
            03 // SKILLS & TECH STACK
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Engineered for precision. <span className="gold-gradient-text">Built for scale.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-2xl font-sans">
            A comprehensive matrix of technologies I deploy to build high-availability web products,
            real-time dispatch pipelines, and zero-shot NLP models.
          </p>
        </div>

        {/* Grouped Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm space-y-4 gold-card-glow shadow-sm"
            >
              <div>
                <h3 className="font-display font-bold text-lg text-foreground tracking-tight">
                  {category.title}
                </h3>
                <p className="text-xs text-muted mt-1 font-sans">{category.description}</p>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {category.skills.map((skill) => {
                  const Icon = ICON_MAP[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className={cn(
                        "group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all duration-150 press-feedback cursor-default select-none",
                        skill.highlight
                          ? "border-gold-500/30 bg-gold-500/10 text-foreground hover:border-gold-500/60 hover:shadow-gold-sm"
                          : "border-border bg-card/80 text-muted hover:text-foreground hover:border-muted"
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-150 group-hover:scale-110",
                          skill.highlight ? "text-gold-400" : "text-muted group-hover:text-foreground"
                        )}
                      />
                      <span>{skill.name}</span>
                      <span
                        className={cn(
                          "font-mono text-[9px] px-1 py-0.2 rounded border",
                          skill.level === "Core"
                            ? "border-gold-500/40 text-gold-400 bg-gold-500/10 font-bold"
                            : skill.level === "Advanced"
                            ? "border-slate-500/30 text-muted"
                            : "border-border text-muted/80"
                        )}
                      >
                        {skill.level}
                      </span>
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
