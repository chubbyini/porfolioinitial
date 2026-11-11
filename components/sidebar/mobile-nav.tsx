"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SojournerToken } from "@sojournerbuilds/mark/tokens";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NAV_ITEMS } from "@/components/sidebar/sidebar";
import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Lock body scroll when mobile drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="lg:hidden sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#080C14]/95 backdrop-blur-md px-4 py-3 flex items-center justify-between select-none">
      {/* Brand & Waymark */}
      <div className="flex items-center gap-3">
        <div className="p-0.5 rounded-full border border-zinc-200 dark:border-amber-500/40 bg-zinc-50 dark:bg-zinc-900">
          <SojournerToken size={28} spinning={true} speed="slow" variant="waymark" />
        </div>
        <div>
          <span className="font-display font-bold text-sm tracking-tight text-foreground block">
            {profileData.preferredName} Osibajo
          </span>
          <span className="font-mono text-[10px] text-amber-700 dark:text-amber-400 font-semibold block -mt-0.5">
            Software Engineer
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <ThemeToggle />

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 press-feedback focus-visible:outline-none"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5 text-amber-600 dark:text-amber-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Drawer Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[57px] bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Sheet Drawer */}
      <div
        className={cn(
          "fixed top-[57px] right-0 bottom-0 w-[82vw] max-w-sm bg-white dark:bg-[#080C14] border-l border-zinc-200 dark:border-zinc-800 p-6 z-50 overflow-y-auto transition-transform duration-300 ease-emil-drawer shadow-2xl flex flex-col justify-between",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="space-y-6">
          {/* Status pill in drawer */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-mono text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Shipping in Production</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors press-feedback"
                >
                  <Icon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer with Contact CTA */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
          <button
            onClick={() => handleNavClick("contact")}
            className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300 font-display font-semibold text-xs tracking-wide flex items-center justify-center gap-2 shadow-sm press-feedback"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
            <Link
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href={profileData.socials.devto}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Dev.to
            </Link>
            <Link
              href={profileData.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Medium
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
