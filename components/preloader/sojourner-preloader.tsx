"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SojournerToken } from "@sojournerbuilds/mark/tokens";

export function SojournerPreloader() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [statusIndex, setStatusIndex] = React.useState(0);

  const statuses = React.useMemo(
    () => [
      "Seeking knowledge...",
      "Synthesizing architecture...",
      "Ready to ship.",
    ],
    []
  );

  React.useEffect(() => {
    // Check if previously loaded in this session
    const hasLoaded = sessionStorage.getItem("sojourner_intro_viewed");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    // Status message cadence
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev < statuses.length - 1 ? prev + 1 : prev));
    }, 500);

    // Complete preload
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("sojourner_intro_viewed", "true");
    }, 1600);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [statuses.length]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="sojourner-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: {
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05070D] text-sojourner-bone select-none overflow-hidden"
          aria-live="polite"
          aria-label="Loading Sojourner Builds Portfolio"
        >
          {/* Beaming Ambient Corona */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-gold-500/15 via-gold-400/10 to-transparent blur-3xl pointer-events-none animate-beacon-pulse" />

          {/* Dial and Ship Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex flex-col items-center"
          >
            <div className="relative p-3 rounded-full border border-gold-500/20 bg-nautical-950/80 shadow-gold-lg">
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
              <div className="font-mono text-xs tracking-[0.28em] font-semibold uppercase text-sojourner-bone">
                <span>SOJOURNER </span>
                <span className="text-rose-500 font-bold">BUILDS</span>
              </div>
              <p className="font-mono text-xs text-gold-400/90 tracking-widest transition-all duration-200 h-5">
                {statuses[statusIndex]}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
