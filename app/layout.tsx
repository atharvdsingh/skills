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
    // Name & brand
    "Atharv",
    "Atharv developer",
    "Atharv portfolio",
    "Atharv software engineer",
    "Atharv full-stack developer",
    "Atharv web developer",
    "Atharv coder",
    "Atharv programmer",
    "who is Atharv",
    "Atharv blog",
    "Atharv NoteBuddy",
    "Atharv Prayagraj",
    "Atharv India developer",
    "Atharv MCA",
    "Atharv University of Allahabad",
    "Atharv GitHub",
    "Atharv projects",
    // Role & profession
    "full-stack developer India",
    "full-stack developer Prayagraj",
    "full-stack developer Allahabad",
    "full-stack developer Bengaluru",
    "full-stack developer portfolio",
    "full-stack software developer",
    "software engineer India",
    "software engineer Prayagraj",
    "software developer portfolio India",
    "web developer India",
    "web developer Prayagraj",
    "frontend developer India",
    "backend developer India",
    "AI platform architect",
    "AI developer India",
    "hire full-stack developer India",
    "hire React developer India",
    "hire Next.js developer",
    "hire TypeScript developer India",
    "hire Node.js developer India",
    "freelance developer India",
    // Tech stack
    "Next.js developer",
    "React developer India",
    "TypeScript developer",
    "Node.js developer",
    "NestJS developer",
    "Prisma developer",
    "Tailwind CSS developer",
    "Shadcn UI developer",
    "Docker Kubernetes developer",
    "Turborepo monorepo developer",
    "Sanity CMS developer",
    "Gemini API developer",
    "WebSocket developer",
    "Neon DB developer",
    "microservices developer India",
    "system design developer",
    // Education & location
    "MCA University of Allahabad",
    "MCA student developer",
    "University of Allahabad developer",
    "Prayagraj tech",
    "Allahabad developer",
    "developer from Prayagraj",
    "Indian developer portfolio",
    // Product & project
    "NoteBuddy",
    "NoteBuddy notes platform",
    "Workmind AI",
    "BookChetna",
    "scalable web applications",
    "AI-integrated platforms",
    "production-grade web apps",
    // Intent
    "developer portfolio website",
    "best developer portfolio India",
    "self-taught developer India",
    "developer journey blog",
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
        jetbrainsMono.variable,
        
        
      )}
    >
      <body suppressHydrationWarning className="grain min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
