import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SojournerToken } from "@sojournerbuilds/mark/tokens";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20 space-y-6">
      <div className="p-3 rounded-full border border-gold-500/30 bg-card shadow-gold-sm">
        <SojournerToken size={64} spinning={true} speed="slow" variant="waymark" />
      </div>

      <div className="space-y-2 max-w-md">
        <span className="font-mono text-xs text-gold-400 uppercase tracking-widest">
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
        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-nautical-950 font-display font-semibold text-xs tracking-wide flex items-center gap-2 shadow-gold-sm hover:shadow-gold-md transition-all press-feedback"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
}
