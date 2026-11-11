import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FAF7EE",
          100: "#F5EED8",
          200: "#EADDB1",
          300: "#E0CB8A",
          400: "#E6C766", // Sunlit Filament Gold
          500: "#C9A227", // Primary Signature Amber Gold
          600: "#A88219",
          700: "#876413",
          800: "#664910",
          900: "#3D2A08",
          glow: "rgba(201, 162, 39, 0.2)",
        },
        nautical: {
          black: "#05070D", // Sojourner Veil black
          950: "#080C14",   // Root dark canvas
          900: "#0E1422",   // Card surface
          850: "#131C30",   // Elevated card / Popover
          800: "#1A253E",   // Border subtle
          700: "#27385E",   // Border highlight
          600: "#3E5587",
        },
        sojourner: {
          bone: "#E8E6E1",
          ink: "#17202E",
          dim: "#8A8F98",
          faint: "#5B6068",
          strike: "#38BDF8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        "gold-sm": "0 0 15px -3px rgba(201, 162, 39, 0.15)",
        "gold-md": "0 0 25px -4px rgba(201, 162, 39, 0.25)",
        "gold-lg": "0 0 40px -5px rgba(201, 162, 39, 0.35)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-light": "0 8px 32px 0 rgba(31, 38, 135, 0.08)",
      },
      transitionTimingFunction: {
        "emil-out": "cubic-bezier(0.23, 1, 0.32, 1)",
        "emil-drawer": "cubic-bezier(0.32, 0.72, 0, 1)",
        "emil-in-out": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      animation: {
        "beacon-pulse": "beaconPulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards",
      },
      keyframes: {
        beaconPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
