import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

/* ─── Comprehensive SEO Metadata ─── */
export const metadata: Metadata = {
  metadataBase: new URL("https://atharv.dev"),
  title:
    "Atharv | Full-Stack Developer & AI Platform Architect — Prayagraj, India",
  description:
    "Atharv is a full-stack software developer specializing in Next.js, TypeScript, Node.js, and AI-integrated platforms. MCA student at University of Allahabad building scalable web applications. Open to opportunities in Bengaluru.",
  keywords: [
    "Atharv",
    "Atharv developer",
    "Atharv portfolio",
    "full-stack developer India",
    "full-stack developer Prayagraj",
    "Next.js developer",
    "TypeScript developer",
    "Node.js developer",
    "NestJS developer",
    "AI platform architect",
    "software engineer India",
    "MCA University of Allahabad",
    "web developer Prayagraj",
    "React developer India",
    "Atharv software engineer",
    "full-stack developer portfolio",
    "scalable web applications",
    "AI-integrated platforms",
  ],
  authors: [{ name: "Atharv", url: "https://atharv.dev" }],
  creator: "Atharv",
  publisher: "Atharv",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://atharv.dev",
  },
  openGraph: {
    type: "profile",
    title:
      "Atharv | Full-Stack Developer & AI Platform Architect",
    description:
      "Full-stack software developer specializing in Next.js, TypeScript, and AI-integrated platforms. Building scalable web applications in Prayagraj, India.",
    url: "https://atharv.dev",
    siteName: "Atharv — Developer Portfolio",
    locale: "en_IN",
    firstName: "Atharv",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharv | Full-Stack Developer & AI Platform Architect",
    description:
      "Full-stack developer specializing in Next.js, TypeScript, and AI-integrated platforms. MCA @ University of Allahabad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full antialiased",
        inter.variable,
        manrope.variable,
        jetbrainsMono.variable
      )}
    >
      <body className="grain min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
