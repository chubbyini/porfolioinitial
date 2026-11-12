"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SojournerToken } from "@sojournerbuilds/mark/tokens";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NAV_ITEMS } from "@/components/sidebar/sidebar";
import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("menu") === "open" || window.location.hash === "#menu") {
        setIsOpen(true);
      }
    }
  }, []);

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

  // Close drawer on ESC key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const topOffset = element.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
        window.history.pushState(null, "", id === "hero" ? "/" : `/#${id}`);
      }
    } else {
      router.push(id === "hero" ? "/" : `/#${id}`);
    }
  };

  return (
    <>
      <header className="lg:hidden sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#080C14]/95 backdrop-blur-md px-4 py-3 flex items-center justify-between select-none">
        {/* Brand & Waymark */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-3 cursor-pointer"
          aria-label="Return to Overview"
        >
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
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 press-feedback focus-visible:outline-none"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </header>

      {/* Render Drawer via React Portal directly into document.body to avoid any stacking context or backdrop-filter clipping in iOS Safari */}
      {mounted &&
        createPortal(
          <>
            {/* Backdrop Overlay */}
            <div
              className={cn(
                "fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] transition-opacity duration-300 lg:hidden",
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              )}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-out Sheet Drawer */}
            <div
              className={cn(
                "fixed top-0 right-0 bottom-0 w-[85vw] max-w-[340px] h-full bg-white dark:bg-[#080C14] border-l border-zinc-200 dark:border-zinc-800 p-6 z-[10000] overflow-y-auto shadow-2xl flex flex-col justify-between lg:hidden transition-transform duration-200 ease-out",
                isOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible pointer-events-none"
              )}
              style={{
                transform: isOpen ? "translateX(0)" : "translateX(100%)",
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Drawer"
            >
              <div className="space-y-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <Link
                    href="/"
                    onClick={(e) => {
                      setIsOpen(false);
                      if (pathname === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="flex items-center gap-2.5 cursor-pointer"
                    aria-label="Return to Overview"
                  >
                    <div className="p-0.5 rounded-full border border-zinc-200 dark:border-amber-500/40 bg-zinc-50 dark:bg-zinc-900">
                      <SojournerToken size={26} spinning={true} speed="slow" variant="waymark" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-sm tracking-tight text-foreground block">
                        {profileData.preferredName} Osibajo
                      </span>
                      <span className="font-mono text-[10px] text-amber-700 dark:text-amber-400 font-semibold block -mt-0.5">
                        Software Engineer
                      </span>
                    </div>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-foreground hover:bg-zinc-200 dark:hover:bg-zinc-800 press-feedback focus-visible:outline-none"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-1" aria-label="Mobile Navigation">
                  {NAV_ITEMS.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleNavClick(item.id)}
                        className="w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors press-feedback min-h-[44px]"
                      >
                        <Icon className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 shrink-0">
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
                  type="button"
                  onClick={() => handleNavClick("contact")}
                  className="w-full py-3 px-4 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300 font-display font-semibold text-sm tracking-wide flex items-center justify-center gap-2 shadow-sm press-feedback min-h-[44px]"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono pt-1">
                  <Link
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors p-1"
                  >
                    GitHub
                  </Link>
                  <Link
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors p-1"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href={profileData.socials.devto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors p-1"
                  >
                    Dev.to
                  </Link>
                  <Link
                    href={profileData.socials.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors p-1"
                  >
                    Medium
                  </Link>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
