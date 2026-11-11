"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  User,
  Sparkles,
  Briefcase,
  History,
  FileText,
  Wrench,
  BookOpen,
  MessageSquareQuote,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { SojournerToken } from "@sojournerbuilds/mark/tokens";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

export const NAV_ITEMS = [
  { id: "hero", label: "Overview", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills & Stack", icon: Sparkles },
  { id: "projects", label: "Featured Work", icon: Briefcase },
  { id: "experience", label: "Experience", icon: History },
  { id: "research", label: "NLP Research", icon: FileText },
  { id: "services", label: "Sojourner Studio", icon: Wrench },
  { id: "blog", label: "Engineering Articles", icon: BookOpen },
  { id: "testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { id: "contact", label: "Initiate Contact", icon: Mail },
] as const;

export function Sidebar() {
  const [activeSection, setActiveSection] = React.useState<string>("hero");

  React.useEffect(() => {
    const sectionElements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible section with highest intersection ratio
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 30;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <aside
      className="hidden lg:flex flex-col justify-between w-[290px] h-screen sticky top-0 border-r border-border bg-[var(--sidebar-bg)] p-6 z-40 select-none overflow-y-auto"
      aria-label="Main Navigation Sidebar"
    >
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center">
        {/* Brand Token and Avatar */}
        <div className="relative group">
          <div className="relative w-24 h-24 rounded-full p-1 border-2 border-gold-500/40 bg-card shadow-gold-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/avatar.png"
              alt={profileData.name}
              width={96}
              height={96}
              className="rounded-full object-cover w-full h-full"
              priority
            />
          </div>

          {/* Embedded Mini Sojourner Waymark badge */}
          <div
            className="absolute -bottom-1 -right-1 p-1 rounded-full bg-nautical-950 border border-gold-500/50 shadow-md"
            title="Sojourner Builds Waymark"
          >
            <SojournerToken size={22} spinning={true} speed="slow" variant="waymark" theme="dark" />
          </div>
        </div>

        {/* Name and Status */}
        <div className="mt-4 space-y-1">
          <h2 className="font-display font-bold text-lg text-foreground tracking-tight">
            {profileData.preferredName} Osibajo
          </h2>
          <p className="font-mono text-xs text-gold-400 font-medium">
            Web Developer & Founder
          </p>

          {/* Operational Status Pill */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[11px] mt-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Shipping in Production</span>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="w-full mt-6 space-y-1 text-left" aria-label="Page Sections">
          {NAV_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={cn(
                  "group relative flex items-center gap-3 px-3.5 py-2 rounded-xl font-medium text-xs transition-all duration-150 press-feedback",
                  isActive
                    ? "bg-gold-500/15 text-gold-400 font-semibold border border-gold-500/30 shadow-sm"
                    : "text-muted hover:text-foreground hover:bg-muted/10"
                )}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <span className="absolute left-1.5 top-2.5 bottom-2.5 w-1 rounded-full bg-gold-400" />
                )}

                <Icon
                  className={cn(
                    "w-4 h-4 transition-transform duration-150 group-hover:scale-110",
                    isActive ? "text-gold-400" : "text-muted group-hover:text-foreground"
                  )}
                />

                <span className="font-mono text-[10px] text-muted opacity-60">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <span className="truncate">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Footer Controls & Socials */}
      <div className="pt-6 border-t border-border mt-4">
        <div className="flex items-center justify-between">
          {/* Social Links */}
          <div className="flex items-center gap-1 text-muted">
            <Link
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-foreground hover:bg-muted/10 transition-colors press-feedback"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-foreground hover:bg-muted/10 transition-colors press-feedback"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              href={profileData.socials.devto}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-foreground hover:bg-muted/10 transition-colors press-feedback font-mono text-xs font-bold"
              aria-label="Dev.to Articles"
              title="Dev.to"
            >
              DEV
            </Link>
            <Link
              href={profileData.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-foreground hover:bg-muted/10 transition-colors press-feedback font-mono text-xs font-bold"
              aria-label="Medium Articles"
              title="Medium"
            >
              M
            </Link>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-muted/70">
          <span>Kaduna, Nigeria</span>
          <span className="text-gold-500/80">Sojourner v1.0</span>
        </div>
      </div>
    </aside>
  );
}
