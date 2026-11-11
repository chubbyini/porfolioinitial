import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SojournerToken } from "@sojournerbuilds/mark/tokens";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20 space-y-6">
      <div className="p-3 rounded-full border border-zinc-200 dark:border-amber-500/30 bg-zinc-50 dark:bg-zinc-900 shadow-sm">
        <SojournerToken size={64} spinning={true} speed="slow" variant="waymark" />
      </div>

      <div className="space-y-2 max-w-md">
        <span className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold uppercase tracking-widest">
          404 // Coordinate Not Found
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
          Off the charted course.
        </h1>
        <p className="text-sm text-muted font-sans leading-relaxed">
          The project or article you requested does not exist or has been relocated to another
          coordinate in the repository.
        </p>
      </div>

      <Link
        href="/"
        className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300 font-display font-semibold text-xs tracking-wide flex items-center gap-2 shadow-sm transition-all press-feedback"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
}
