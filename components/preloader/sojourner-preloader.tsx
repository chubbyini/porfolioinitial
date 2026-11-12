"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SojournerToken } from "@sojournerbuilds/mark/tokens";
import { Sparkles, Compass } from "lucide-react";

const PRELOAD_DURATION_MS = 2000;

export function SojournerPreloader() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [statusIndex, setStatusIndex] = React.useState(0);
  const [tapCount, setTapCount] = React.useState(0);
  const [isSpeedBoosted, setIsSpeedBoosted] = React.useState(false);

  const statuses = React.useMemo(
    () => [
      "Seeking knowledge...",
      "Synthesizing architecture...",
      "Ready to ship.",
    ],
    []
  );

  React.useEffect(() => {
    // Check if explicitly bypassed via URL query
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("nopreload") === "true") {
        setLoading(false);
        return;
      }
    }

    // Status updates across the 2-second lifetime
    const stepInterval = setInterval(() => {
      setStatusIndex((prev) => (prev < statuses.length - 1 ? prev + 1 : prev));
    }, 650);

    // Complete preload exactly at 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, PRELOAD_DURATION_MS);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(timer);
    };
  }, [statuses.length]);

  // Mobile micro-interaction when user taps the bottom-right mark
  const handleMarkTap = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setTapCount((prev) => prev + 1);
    setIsSpeedBoosted(true);
    setTimeout(() => setIsSpeedBoosted(false), 900);
  };

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="sojourner-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.015,
            transition: {
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1],
            },
          }}
          className="fixed inset-0 w-full h-screen z-[9999] bg-[#05070D] text-sojourner-bone select-none overflow-hidden"
          aria-live="polite"
          aria-label="Loading Sojourner Builds Portfolio"
        >
          {/* Subtle Nautical Coordinate Grid Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

          {/* ========================================================= */}
          {/* DESKTOP / LARGE SCREENS (Previous cool centered iteration) */}
          {/* ========================================================= */}
          <div className="hidden md:flex relative w-full h-full min-h-screen flex-col items-center justify-center">
            {/* Beaming Ambient Corona */}
            <div className="absolute w-[440px] h-[440px] rounded-full bg-gradient-to-tr from-gold-500/15 via-gold-400/10 to-transparent blur-3xl pointer-events-none animate-beacon-pulse" />

            {/* Dial and Mark Container (Centered) */}
            <div className="relative flex flex-col items-center z-10 animate-in fade-in zoom-in-95 duration-300">
              <div className="relative p-3.5 rounded-full border border-gold-500/25 bg-nautical-950/85 shadow-gold-lg backdrop-blur-sm">
                <SojournerToken
                  size={120}
                  spinning={true}
                  speed="normal"
                  variant="waymark"
                  theme="dark"
                  title="Sojourner Builds Waymark"
                />
              </div>

              {/* Brand Typography */}
              <div className="mt-8 text-center space-y-2">
                <div className="font-mono text-xs tracking-[0.28em] font-semibold uppercase text-sojourner-bone flex items-center justify-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-gold-400 animate-spin-slow" />
                  <span>SOJOURNER </span>
                  <span className="text-rose-500 font-bold">BUILDS</span>
                </div>
                <p className="font-mono text-xs text-gold-400/90 tracking-widest transition-all duration-200 h-5">
                  {statuses[statusIndex]}
                </p>
              </div>
            </div>

            {/* Subtle 2-second Progress Bar at Bottom of Desktop Veil */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-zinc-800/80 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 to-gold-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: PRELOAD_DURATION_MS / 1000, ease: "linear" }}
              />
            </div>
          </div>

          {/* ========================================================= */}
          {/* MOBILE VIEWPORT (Logo placed at bottom-right with interactions) */}
          {/* ========================================================= */}
          <div className="flex md:hidden relative w-full h-full min-h-screen flex-col justify-between p-6 sm:p-8">
            {/* Mobile Top Header: Subtle identity and live status */}
            <div className="flex items-center justify-between z-10 pt-2">
              <div className="space-y-0.5">
                <div className="font-mono text-[11px] font-bold tracking-widest uppercase text-gold-400 flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                  <span>01 // INITIALIZING</span>
                </div>
                <p className="font-display text-sm font-semibold text-zinc-300 tracking-tight">
                  Inioluwa Daniel Osibajo
                </p>
              </div>

              {/* Polite early skip option */}
              <button
                type="button"
                onClick={() => setLoading(false)}
                className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 active:scale-95 transition-all"
                aria-label="Skip introduction"
              >
                Skip ↗
              </button>
            </div>

            {/* Mobile Center Editorial Body */}
            <div className="my-auto space-y-4 max-w-xs z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 font-mono text-[11px]">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Crafted by Practice</span>
              </div>
              <h1 className="font-display text-2xl font-bold tracking-tight text-white leading-snug">
                Engineering reactive interfaces & scalable software.
              </h1>
              <div className="flex items-center gap-2 pt-1 font-mono text-xs text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-amber-400/90 tracking-wide font-medium">
                  {statuses[statusIndex]}
                </span>
              </div>
            </div>

            {/* Mobile Bottom Area: Brand details on left + Interactive Waymark on BOTTOM-RIGHT EDGE */}
            <div className="relative flex items-end justify-between z-10 pb-2">
              {/* Left footer detail */}
              <div className="space-y-1 max-w-[180px]">
                <div className="font-mono text-[10px] tracking-[0.2em] font-semibold uppercase text-zinc-400">
                  <span>SOJOURNER </span>
                  <span className="text-rose-500 font-bold">BUILDS</span>
                </div>
                <p className="font-mono text-[10px] text-zinc-500 leading-tight">
                  Waymark System v1.0 • Kaduna, NG
                </p>
              </div>

              {/* BOTTOM-RIGHT EDGE: Interactive Logo Token with Touch Ripples & Sonar Rings */}
              <div className="relative flex items-center justify-center">
                {/* Sonar / Radar Rings Radiating from bottom-right */}
                <div className="absolute -inset-2 rounded-full border border-gold-500/20 animate-ping pointer-events-none" />
                <div className="absolute -inset-6 rounded-full border border-gold-400/10 pointer-events-none animate-pulse" />

                {/* Ambient Golden Glow Dock */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gold-500/15 blur-xl pointer-events-none" />

                {/* Floating Interactive Badge upon tap */}
                <AnimatePresence>
                  {isSpeedBoosted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -45, scale: 1 }}
                      exit={{ opacity: 0, y: -55, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="absolute right-0 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded-md bg-gold-500 text-nautical-950 font-mono text-[9px] font-bold shadow-gold-md"
                    >
                      ⚡ Waymark Boosted!
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Interactive Logo Dock Button */}
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.88, rotate: -25 }}
                  onClick={handleMarkTap}
                  className="relative p-2 rounded-full border border-gold-500/30 bg-nautical-950/90 shadow-gold-lg backdrop-blur-md cursor-pointer transition-transform group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  aria-label="Tap to interact with Sojourner Waymark logo"
                >
                  <SojournerToken
                    size={72}
                    spinning={true}
                    speed={isSpeedBoosted ? "fast" : "normal"}
                    variant="waymark"
                    theme="dark"
                    title="Sojourner Builds Waymark"
                  />
                  {/* Subtle interactive tap indicator ring */}
                  <span className="absolute inset-0 rounded-full border border-gold-400/0 group-hover:border-gold-400/40 group-active:border-gold-400/70 transition-colors" />
                </motion.button>
              </div>
            </div>

            {/* Subtle Mobile Progress Indicator along bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-900 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-300"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: PRELOAD_DURATION_MS / 1000, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
