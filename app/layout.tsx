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
  title: "Inioluwa Daniel Osibajo — Web Developer & Systems Architect",
  description:
    "Personal portfolio of Inioluwa Daniel Osibajo. Full-Stack Web Developer at Vissionnaire Tech Solution Ltd, Founder of Sojourner Builds, and NLP Researcher.",
  keywords: [
    "Inioluwa Daniel Osibajo",
    "Inioluwa Osibajo",
    "Web Developer",
    "Frontend Engineer",
    "Vissionnaire Tech Solution",
    "Picckr",
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
    title: "Inioluwa Daniel Osibajo — Web Developer & Systems Architect",
    description:
      "I ship real products, architect resilient web systems, and write about how I build them.",
    siteName: "Inioluwa Daniel Osibajo Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 256,
        height: 256,
        alt: "Inioluwa Daniel Osibajo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inioluwa Daniel Osibajo — Web Developer & Systems Architect",
    description:
      "I ship real products, architect resilient web systems, and write about how I build them.",
    images: ["/avatar.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080C14" },
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-gold-500/20 selection:text-gold-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <SojournerPreloader />
          <CustomCursor />

          <div className="flex min-h-screen">
            {/* Desktop Fixed Left Sidebar (iPortfolio style) */}
            <Sidebar />

            {/* Main Canvas */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Mobile Sticky Navigation Header */}
              <MobileNav />

              <main className="flex-1">{children}</main>
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
