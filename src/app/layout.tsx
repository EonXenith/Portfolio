import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { GrainOverlay } from "@/components/primitives/GrainOverlay";
import { SpotlightCursor } from "@/components/primitives/SpotlightCursor";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["500", "700", "800", "900"],
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.meta.url || "http://localhost:3000"),
  title: {
    default: site.meta.title,
    template: `%s — ${site.name}`,
  },
  description: site.meta.description,
  keywords: ["portfolio", "AI", "vibe coding", "student developer", site.name],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.meta.url,
    title: site.meta.title,
    description: site.meta.description,
    siteName: site.name,
    images: [
      {
        url: site.meta.ogImage,
        width: 1200,
        height: 630,
        alt: site.meta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
    images: [site.meta.ogImage],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body className="dark">
        <ThemeProvider>
          <TooltipProvider>
            <SmoothScroll>
              <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-[var(--bg-1)] focus:px-4 focus:py-2 focus:text-[var(--fg-0)]"
              >
                Skip to content
              </a>
              <SpotlightCursor />
              <Nav />
              <main id="main">{children}</main>
              <Footer />
              <GrainOverlay />
            </SmoothScroll>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
