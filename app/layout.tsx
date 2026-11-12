import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { SojournerPreloader } from "@/components/preloader/sojourner-preloader";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Sidebar } from "@/components/sidebar/sidebar";
import { MobileNav } from "@/components/sidebar/mobile-nav";
import "@sojournerbuilds/mark/token.css";
import "@sojournerbuilds/mark/veil.css";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inioluwa.dev"),
  title: "Inioluwa Daniel Osibajo — Software Engineer & Web Developer",
  description:
    "Personal portfolio of Inioluwa Daniel Osibajo. Software Engineer at PicckR and Vissionnaire Tech Solution Ltd, Creator of Sojourner Builds, and Published NLP Researcher.",
  keywords: [
    "Inioluwa Daniel Osibajo",
    "Inioluwa Osibajo",
    "Software Engineer",
    "Web Developer",
    "Frontend Engineer",
    "PicckR",
    "Vissionnaire Tech Solution",
    "Sojourner Builds",
    "Next.js",
    "TypeScript",
    "React",
    "NLP Researcher",
    "Zero-Shot NLP",
  ],
  authors: [{ name: "Inioluwa Daniel Osibajo", url: "https://github.com/chubbyini" }],
  creator: "Inioluwa Daniel Osibajo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inioluwa.dev",
    title: "Inioluwa Daniel Osibajo — Software Engineer & Web Developer",
    description:
      "I build responsive web applications, design clean interfaces, and ship real products.",
    siteName: "Inioluwa Daniel Osibajo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inioluwa Daniel Osibajo — Software Engineer & Web Developer",
    description:
      "I build responsive web applications, design clean interfaces, and ship real products.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090D16" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Inioluwa Daniel Osibajo",
  alternateName: "Inioluwa Osibajo",
  url: "https://inioluwa.dev",
  image: "https://inioluwa.dev/avatar.png",
  jobTitle: "Software Engineer & Web Developer",
  worksFor: [
    {
      "@type": "Organization",
      name: "PicckR",
    },
    {
      "@type": "Organization",
      name: "Vissionnaire Tech Solution Ltd",
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Air Force Institute of Technology (AFIT)",
  },
  sameAs: [
    "https://github.com/chubbyini",
    "https://www.linkedin.com/in/inioluwa-osibajo-b23531238/",
    "https://dev.to/osibajo_inioluwa_74301be0",
    "https://medium.com/@inioluwaosibajo",
    "https://ideas.repec.org/a/bjf/journl/v10y2025i7p342-354.html",
    "https://www.npmjs.com/package/@sojournerbuilds/mark",
  ],
  knowsAbout: [
    "Software Engineering",
    "Frontend Development",
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Natural Language Processing",
    "Logistics Dispatch Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen w-full max-w-full overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] selection:bg-gold-500/20 selection:text-gold-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Accessibility: Skip to Content */}
          <a
            href="#hero"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-nautical-950 focus:rounded-lg focus:font-bold focus:shadow-lg focus:outline-none"
          >
            Skip to content
          </a>

          <SojournerPreloader />
          <CustomCursor />

          <div className="flex min-h-screen w-full max-w-full overflow-x-hidden">
            {/* Desktop Fixed Left Sidebar (iPortfolio style) */}
            <Sidebar />

            {/* Main Canvas */}
            <div className="flex-1 flex flex-col min-w-0 w-full max-w-full overflow-x-hidden">
              {/* Mobile Sticky Navigation Header */}
              <MobileNav />

              <main id="main-content" className="flex-1 w-full max-w-full">
                {children}
              </main>
            </div>
          </div>

          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--card)",
                color: "var(--foreground)",
                borderColor: "var(--border)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
