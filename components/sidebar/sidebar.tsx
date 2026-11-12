"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  ArrowUpRight,
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
  { id: "services", label: "Capabilities", icon: Wrench },
  { id: "blog", label: "Articles", icon: BookOpen },
  { id: "testimonials", label: "Reviews", icon: MessageSquareQuote },
  { id: "contact", label: "Contact", icon: Mail },
] as const;

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = React.useState<string>("hero");

  // Handle intersection observer when on the home page
  React.useEffect(() => {
    if (pathname !== "/") return;

    const sectionElements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
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
  }, [pathname]);

  // Handle smooth scroll when navigating from another page to home with hash
  React.useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const el = document.getElementById(hashId);
      if (el) {
        setTimeout(() => {
          const topOffset = el.getBoundingClientRect().top + window.scrollY - 30;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
          setActiveSection(hashId);
        }, 150);
      }
    }
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const topOffset = element.getBoundingClientRect().top + window.scrollY - 30;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
        setActiveSection(id);
        window.history.pushState(null, "", id === "hero" ? "/" : `/#${id}`);
      }
    } else {
      // On sub-pages like /projects/[slug] or /blog/[slug], route back to home anchor
      router.push(id === "hero" ? "/" : `/#${id}`);
    }
  };

  return (
    <aside
      className="hidden lg:flex flex-col justify-between w-[290px] h-screen sticky top-0 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#080C14] p-6 z-40 select-none overflow-y-auto"
      aria-label="Main Navigation Sidebar"
    >
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center">
        {/* Brand Token and Avatar */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("hero");
            }
          }}
          className="relative group block cursor-pointer"
          aria-label="Return to Overview"
        >
          <div className="relative w-24 h-24 rounded-full p-1 border-2 border-zinc-200 dark:border-amber-500/40 bg-zinc-50 dark:bg-zinc-900 shadow-sm transition-transform duration-300 group-hover:scale-105">
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
            className="absolute -bottom-1 -right-1 p-1 rounded-full bg-zinc-900 border border-zinc-700 shadow-md"
            title="Sojourner Builds Waymark"
          >
            <SojournerToken size={22} spinning={true} speed="slow" variant="waymark" theme="dark" />
          </div>
        </Link>

        {/* Name and Status */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("hero");
            }
          }}
          className="mt-4 space-y-1 block cursor-pointer group"
          aria-label="Return to Overview"
        >
          <h2 className="font-display font-bold text-lg text-foreground tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
            {profileData.preferredName} Osibajo
          </h2>
          <p className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold">
            Software Engineer & Web Developer
          </p>
        </Link>

        {/* Navigation List */}
        <nav className="w-full mt-6 space-y-1 text-left" aria-label="Page Sections">
          {NAV_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            const isActive = pathname === "/" && activeSection === item.id;

            return (
              <a
                key={item.id}
                href={pathname === "/" ? `#${item.id}` : `/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={cn(
                  "group relative flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs transition-colors duration-150 press-feedback",
                  isActive
                    ? "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-950 dark:text-zinc-100 font-semibold border-l-2 border-l-amber-600 dark:border-l-amber-400 shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
                )}
              >
                <Icon
                  className={cn(
                    "w-4 h-4 transition-transform duration-150 group-hover:scale-110",
                    isActive
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-zinc-400 dark:text-zinc-500 group-hover:text-foreground"
                  )}
                />

                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <span className="truncate">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Footer Controls & Socials */}
      <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 mt-4">
        <div className="flex items-center justify-between">
          {/* Social Links */}
          <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
            <Link
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors press-feedback"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors press-feedback"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              href={profileData.socials.devto}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors press-feedback font-mono text-xs font-bold"
              aria-label="Dev.to Articles"
              title="Dev.to"
            >
              DEV
            </Link>
            <Link
              href={profileData.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors press-feedback font-mono text-xs font-bold"
              aria-label="Medium Articles"
              title="Medium"
            >
              M
            </Link>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
          <span>Nigeria</span>
          <span className="text-amber-700 dark:text-amber-400 font-medium">Sojourner v1.0</span>
        </div>
      </div>
    </aside>
  );
}
