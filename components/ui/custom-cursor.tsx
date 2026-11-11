"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isPointer, setIsPointer] = React.useState(false);
  const [hasFinePointer, setHasFinePointer] = React.useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Emil Kowalski spring physics for fluid momentum
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    // Check if device has a fine pointer (mouse, trackpad) and not reduced motion
    const finePointerQuery = window.matchMedia("(pointer: fine) and (hover: hover)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointerQuery.matches || reducedMotionQuery.matches) {
      return;
    }

    setHasFinePointer(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if target is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("a, button, [role='button'], input, textarea, select, label, .press-feedback")
        );
        setIsPointer(isInteractive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!hasFinePointer || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Central gold core point */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-2 h-2 -ml-1 -mt-1 rounded-full bg-gold-400"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

      {/* Lagging fluid aura ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] -ml-4 -mt-4 rounded-full border border-gold-400/50 bg-gold-400/10 backdrop-blur-[1px]"
        style={{
          x: cursorX,
          y: cursorY,
          width: isPointer ? 44 : 32,
          height: isPointer ? 44 : 32,
          marginLeft: isPointer ? -22 : -16,
          marginTop: isPointer ? -22 : -16,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    </>
  );
}
