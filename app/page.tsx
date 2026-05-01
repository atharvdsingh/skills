import Navbar from "@/components/ui/navbar";
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  Layers,
  ArrowDown,
  ExternalLink,
  Building2,
  Calendar,
  Cpu,
  Database,
  Layout,
  BrainCircuit,
  Server,
  BookOpen,
  Users,
  Eye,
} from "lucide-react";

/* ─── Data ─── */
const personal = {
  name: "Atharv",
  headline: "Full-Stack Software Developer & AI-Integrated Platform Architect",
  location: "Prayagraj, India (Open to Bengaluru)",
  education:
    "Master of Computer Applications (MCA), University of Allahabad (Class of 2026)",
  status:
    "Actively seeking software engineering roles at top tech companies and innovative startups.",
};

const about =
  "I build things that people actually use. From a notes platform that hit 1,800+ users and 200K views to AI-powered productivity tools, I focus on shipping real products that solve real problems. I believe systems beat motivation, and I back that up with code every single day.";

const skills = {
  coreStack: {
    label: "Core Stack",
    icon: Code2,
    items: ["Next.js", "Node.js", "TypeScript", "NestJS"],
  },
  databases: {
    label: "Databases",
    icon: Database,
    items: ["Prisma", "Neon DB"],
  },
  architecture: {
    label: "Architecture",
    icon: Server,
    items: [
      "System Design",
      "Microservices",
      "Turborepo",
      "Docker",
      "Kubernetes",
      "Kafka",
      "RabbitMQ",
    ],
  },
  frontend: {
    label: "Frontend",
    icon: Layout,
    items: ["Tailwind CSS", "Shadcn/UI", "Framer Motion"],
  },
  aiAndTools: {
    label: "AI & Tools",
    icon: BrainCircuit,
    items: ["Google Antigravity", "Claude Code", "Gemini API", "Sanity CMS"],
  },
};

const experience = [
  {
    role: "Machine Learning Research Intern",
    company: "IIIT Allahabad",
    timeline: "May 2025 – July 2025",
    description:
      "Conducting ML research at one of India's premier technical institutes, focusing on applied machine learning methodologies and data-driven model development.",
  },
  {
    role: "Backend Developer (AI Product)",
    company: "Startup, Bengaluru",
    location: "Bengaluru",
    timeline: "2025",
    description:
      "Built backend systems for an AI product. Relocated to Bengaluru, worked on production-grade APIs, and shipped features used by real users.",
  },
  {
    role: "Full-Stack Developer & Designer",
    company: "Tech Agency",
    timeline: "2023 – 2025",
    description:
      "Managed end-to-end development: UI/UX design, frontend, backend, multilingual sites, and Web3 wallet integrations. Applied to 300 companies, rejected by 284, hired at this one. Grew from video editing to full-stack engineering.",
  },
  {
    role: "Technical Infrastructure Manager",
    company: "Sanchetna (NGO)",
    location: "Jari, Allahabad",
    timeline: "2024 – Present",
    description:
      "Managing technical infrastructure, domain verification, and content management via Sanity CMS for an NGO founded by Govind Sharan Singh.",
  },
];

const projects = [
  {
    name: "NoteBuddy",
    description:
      "Notes sharing platform for university students. Grew to 1,800+ users, 100s of paid subscribers, 200K+ views, and 15K daily traffic during exams. Built, marketed, and managed entirely solo.",
    tags: ["Next.js", "Product", "1800+ Users", "200K Views"],
    stats: { users: "1,800+", views: "200K+", dailyTraffic: "15K" },
  },
  {
    name: "Workmind",
    description:
      "A full-stack productivity platform featuring AI-powered article generation and image processing, integrated with the Gemini API and Neon DB.",
    tags: ["Next.js", "Gemini API", "Neon DB", "AI"],
  },
  {
    name: "BookChetna",
    description:
      "A peer-to-peer book sharing and lending marketplace. Built with a robust Prisma schema, WebSocket implementation for real-time chat, and deployed on Vercel.",
    tags: ["Next.js", "Prisma", "WebSocket", "Vercel"],
  },
  {
    name: "Business Architecture Project",
    description:
      "A professional business platform utilizing a multi-frontend monorepo architecture built with Turborepo and managed via Sanity CMS.",
    tags: ["Turborepo", "Sanity CMS", "Monorepo"],
  },
];

/* ─── JSON-LD Schema ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://atharvdev.sanchetna.in/#person",
      name: "Atharv",
      url: "https://atharvdev.sanchetna.in",
      jobTitle:
        "Full-Stack Software Developer & AI-Integrated Platform Architect",
      description:
        "Full-stack software developer specializing in Next.js, TypeScript, Node.js, and AI-integrated platforms. MCA student at University of Allahabad.",
      knowsAbout: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "NestJS",
        "React",
        "Prisma",
        "Neon DB",
        "System Design",
        "Microservices",
        "Docker",
        "Kubernetes",
        "Kafka",
        "RabbitMQ",
        "Turborepo",
        "Tailwind CSS",
        "Shadcn/UI",
        "Framer Motion",
        "Gemini API",
        "AI-Integrated Platforms",
        "Sanity CMS",
        "Full-Stack Development",
        "Web Application Architecture",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Allahabad",
        url: "https://www.allduniv.ac.in/",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Prayagraj",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Machine Learning Research Intern",
          occupationLocation: {
            "@type": "City",
            name: "Allahabad",
          },
          hiringOrganization: {
            "@type": "Organization",
            name: "IIIT Allahabad",
          },
        },
        {
          "@type": "Occupation",
          name: "Technical Infrastructure Manager",
          hiringOrganization: {
            "@type": "Organization",
            name: "Sanchetna",
          },
        },
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://atharvdev.sanchetna.in/#profilepage",
      url: "https://atharvdev.sanchetna.in",
      name: "Atharv — Full-Stack Developer & AI Platform Architect Portfolio",
      description:
        "Portfolio of Atharv, a full-stack software developer from Prayagraj, India. Specializing in Next.js, TypeScript, Node.js, NestJS, and AI-integrated platform architecture.",
      mainEntity: {
        "@id": "https://atharvdev.sanchetna.in/#person",
      },
      dateCreated: "2025-05-01",
      dateModified: "2025-05-01",
      inLanguage: "en",
    },
    {
      "@type": "WebSite",
      "@id": "https://atharvdev.sanchetna.in/#website",
      url: "https://atharvdev.sanchetna.in",
      name: "Atharv — Developer Portfolio",
      description:
        "Personal portfolio of Atharv, a full-stack developer and AI platform architect based in Prayagraj, India.",
      publisher: {
        "@id": "https://atharvdev.sanchetna.in/#person",
      },
      inLanguage: "en",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <ScrollReveal />
      <Navbar />

      <main className="tech-grid">
        {/* ═══════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════ */}
        <section
          id="hero"
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-16"
          aria-label="Introduction"
        >
          {/* Ambient gradient orb */}
          <div className="hero-orb -top-32 -right-32" aria-hidden="true" />
          <div
            className="hero-orb -bottom-48 -left-48 opacity-50"
            aria-hidden="true"
            style={{ animationDelay: "-5s" }}
          />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Status badge */}
            <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="mono-label">Available for Opportunities</span>
            </div>

            {/* Name */}
            <h1 className="animate-fade-up delay-1 font-heading text-[clamp(3rem,10vw,7rem)] font-extrabold leading-[0.9] tracking-tight">
              <span className="heading-shimmer">{personal.name}</span>
            </h1>

            {/* Headline */}
            <p className="animate-fade-up delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {personal.headline}
            </p>

            {/* Location */}
            <div className="animate-fade-up delay-3 mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span>{personal.location}</span>
            </div>

            {/* CTAs */}
            <div className="animate-fade-up delay-4 mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <a href="#projects">
                  <Layers className="mr-2 h-4 w-4" aria-hidden="true" />
                  View Projects
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#experience">
                  <Briefcase className="mr-2 h-4 w-4" aria-hidden="true" />
                  Experience
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="/blog/who-is-atharv">
                  <BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
                  Read My Story
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="animate-fade-in delay-8 absolute bottom-10 left-1/2 -translate-x-1/2"
            aria-hidden="true"
          >
            <ArrowDown className="h-5 w-5 animate-bounce text-muted-foreground" />
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════════════════════════════════════
            ABOUT SECTION
        ═══════════════════════════════════════════ */}
        <section
          id="about"
          className="mx-auto max-w-4xl px-6 py-24 md:py-32"
          aria-label="About Atharv"
        >
          <div className="reveal">
            <span className="mono-label">About</span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Building the future of web
            </h2>
          </div>

          <div className="reveal mt-8 grid gap-8 md:grid-cols-2">
            {/* About text */}
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {about}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Currently pursuing my MCA at the University of Allahabad, I
                combine academic rigor with hands-on production experience.
                Applied to 300 companies, got rejected by 284, and turned that
                into a career building real products used by thousands. I focus
                on systems over motivation.
              </p>
              <a
                href="/blog/who-is-atharv"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Read my full journey
              </a>
            </div>

            {/* Info cards */}
            <div className="space-y-4">
              <div className="glass rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <GraduationCap
                    className="mt-0.5 h-5 w-5 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="mono-label">Education</span>
                    <p className="mt-1 text-sm text-foreground">
                      {personal.education}
                    </p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Briefcase
                    className="mt-0.5 h-5 w-5 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="mono-label">Status</span>
                    <p className="mt-1 text-sm text-foreground">
                      {personal.status}
                    </p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="mono-label">Location</span>
                    <p className="mt-1 text-sm text-foreground">
                      {personal.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════════════════════════════════════
            SKILLS SECTION
        ═══════════════════════════════════════════ */}
        <section
          id="skills"
          className="mx-auto max-w-5xl px-6 py-24 md:py-32"
          aria-label="Technical skills"
        >
          <div className="reveal mb-12">
            <span className="mono-label">Expertise</span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Technical Skills
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Technologies and tools I use to build scalable, production-grade
              software.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([key, category], idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={key}
                  className="reveal glass spring-hover rounded-xl p-6"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary">
                      <Icon
                        className="h-4 w-4 text-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="mono-label">{category.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════════════════════════════════════
            EXPERIENCE SECTION
        ═══════════════════════════════════════════ */}
        <section
          id="experience"
          className="mx-auto max-w-4xl px-6 py-24 md:py-32"
          aria-label="Work experience"
        >
          <div className="reveal mb-12">
            <span className="mono-label">Career</span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Experience
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Professional roles and research positions that have shaped my
              expertise in software development.
            </p>
          </div>

          <div className="relative pl-10">
            {/* Timeline line */}
            <div className="timeline-line" aria-hidden="true" />

            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <article
                  key={idx}
                  className="reveal relative"
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div
                    className="timeline-dot"
                    aria-hidden="true"
                    style={{ animationDelay: `${idx * 0.5}s` }}
                  />

                  <div className="glass spring-hover rounded-xl p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                          <Building2
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                          <span>{exp.company}</span>
                          {exp.location && (
                            <>
                              <span className="text-border">·</span>
                              <span>{exp.location}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1">
                        <Calendar
                          className="h-3 w-3 text-muted-foreground"
                          aria-hidden="true"
                        />
                        <span className="mono-label">{exp.timeline}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════════════════════════════════════
            PROJECTS SECTION
        ═══════════════════════════════════════════ */}
        <section
          id="projects"
          className="mx-auto max-w-5xl px-6 py-24 md:py-32"
          aria-label="Portfolio projects"
        >
          <div className="reveal mb-12">
            <span className="mono-label">Work</span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Selected projects showcasing full-stack development, AI
              integration, and scalable architecture.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <article
                key={project.name}
                className="reveal glass spring-hover group flex flex-col rounded-xl p-6"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Project icon */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary">
                    <Cpu
                      className="h-5 w-5 text-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <ExternalLink
                    className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Stats row for NoteBuddy */}
                {"stats" in project && project.stats && (
                  <div className="mt-4 flex gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" aria-hidden="true" />
                      <span className="font-mono">{project.stats.users}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Eye className="h-3 w-3" aria-hidden="true" />
                      <span className="font-mono">{project.stats.views}</span>
                    </div>
                  </div>
                )}

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag text-[0.65rem]">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════════════════════════════════════
            FOOTER
        ═══════════════════════════════════════════ */}
        <footer className="mx-auto max-w-4xl px-6 py-16 text-center">
          <div className="reveal">
            <span className="mono-label">Let&apos;s Connect</span>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight md:text-3xl">
              Ready to build something great?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              I&apos;m always open to discussing new opportunities, interesting
              projects, and innovative ideas.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <a href="mailto:atharv@example.com">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://github.com/atharvvvvv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-16 text-xs text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Atharv. Built with Next.js,
              TypeScript & Tailwind CSS.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
