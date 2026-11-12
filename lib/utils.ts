import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind classes safely with clsx and twMerge.
 * Follows Matt Pocock ergonomic typing for class value parameters.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format date into clean editorial format: "July 2025" or "Sep 21, 2026"
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  } catch {
    return dateString;
  }
}

/**
 * Calculates elapsed years in tech based on a start date (e.g. April 2025).
 * Dynamically computes calendar-accurate years and months elapsed relative to current date.
 * Returns formatted string like "1.6+" or "2+".
 */
export function calculateYearsInTech(
  startDateStr: string = "2025-04-01",
  options: { includePlus?: boolean } = { includePlus: true }
): string {
  try {
    const start = new Date(startDateStr);
    const now = new Date();

    let months =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth());
    if (now.getDate() < start.getDate()) {
      months -= 1;
    }

    if (months <= 0) return options.includePlus ? "0.1+" : "0.1";

    const years = months / 12;
    const rounded = Math.round(years * 10) / 10;
    const formatted =
      rounded >= 1 && rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1);

    return options.includePlus ? `${formatted}+` : formatted;
  } catch {
    return options.includePlus ? "1.6+" : "1.6";
  }
}
