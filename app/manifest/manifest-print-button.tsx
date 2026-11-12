"use client";

import * as React from "react";
import { Printer } from "lucide-react";

export function ManifestPrintButton() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 font-mono text-xs font-medium transition-colors shadow-xs active:scale-95"
      aria-label="Print or Save CV as PDF"
    >
      <Printer className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
      <span>Print / PDF</span>
    </button>
  );
}
