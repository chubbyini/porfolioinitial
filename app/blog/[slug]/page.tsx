import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { articlesData } from "@/data/articles";
import { profileData } from "@/data/profile";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} — By Inioluwa Daniel Osibajo`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [profileData.name],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleMeta = articlesData.find((a) => a.slug === slug);

  return (
    <article className="min-h-screen px-6 sm:px-12 lg:px-20 py-16 max-w-4xl space-y-12">
      {/* Back Link */}
      <Link
        href="/#blog"
        className="inline-flex items-center gap-2 font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors press-feedback"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to All Articles</span>
      </Link>

      {/* Article Header */}
      <header className="space-y-6 border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground tracking-tight leading-[1.12]">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-muted font-sans leading-relaxed">
          {post.description}
        </p>

        {/* Author Byline */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-amber-500/40 overflow-hidden relative">
              <Image
                src="/avatar.png"
                alt={profileData.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-display font-bold text-sm text-foreground block">
                {profileData.name}
              </span>
              <span className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold block -mt-0.5">
                {profileData.role}
              </span>
            </div>
          </div>

          {articleMeta?.canonicalUrl && (
            <Link
              href={articleMeta.canonicalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 font-mono text-xs text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors press-feedback shadow-sm"
            >
              <span>Read on {articleMeta.platform.toUpperCase()}</span>
              <ExternalLink className="w-3 h-3 text-muted" />
            </Link>
          )}
        </div>
      </header>

      {/* Markdown Body Content */}
      <div className="prose dark:prose-invert max-w-none text-foreground/90 font-sans leading-relaxed space-y-6">
        <div
          dangerouslySetInnerHTML={{
            __html: post.content
              .split("\n\n")
              .map((block) => {
                if (block.startsWith("# ")) {
                  return `<h1 class="text-3xl font-display font-bold text-foreground mt-8 mb-4">${block.slice(2)}</h1>`;
                }
                if (block.startsWith("## ")) {
                  return `<h2 class="text-2xl font-display font-bold text-foreground mt-8 mb-3">${block.slice(3)}</h2>`;
                }
                if (block.startsWith("```")) {
                  const cleaned = block.replace(/```[a-z]*\n?/gi, "").trim();
                  return `<pre class="p-4 rounded-xl border border-zinc-800 bg-zinc-950 font-mono text-xs text-amber-300 overflow-x-auto shadow-sm"><code>${cleaned}</code></pre>`;
                }
                if (block.startsWith("- ")) {
                  const items = block
                    .split("\n")
                    .map((item) => `<li class="ml-4 list-disc text-zinc-700 dark:text-zinc-300">${item.replace(/^- /, "")}</li>`)
                    .join("");
                  return `<ul class="space-y-1 text-sm sm:text-base">${items}</ul>`;
                }
                return `<p class="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">${block.replace(/\n/g, "<br/>")}</p>`;
              })
              .join(""),
          }}
        />
      </div>

      {/* Post Footer */}
      <footer className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
        <Link
          href="/#blog"
          className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors"
        >
          ← Back to Articles
        </Link>
        <Link
          href="/#contact"
          className="font-mono text-xs text-amber-700 dark:text-amber-400 hover:underline font-semibold transition-colors"
        >
          Discuss Architecture with Inioluwa →
        </Link>
      </footer>
    </article>
  );
}
