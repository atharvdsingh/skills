import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass-elevated"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="font-heading text-lg font-bold tracking-tight text-foreground"
          aria-label="Go to top of page"
        >
          Atharv<span className="text-muted-foreground">.</span>
        </a>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button asChild size="sm" variant="outline" className="hidden md:inline-flex">
          <a href="mailto:atharv@example.com">Contact</a>
        </Button>

        {/* Mobile: simplified — show name + contact only */}
        <Button asChild size="sm" variant="outline" className="md:hidden">
          <a href="mailto:atharv@example.com">Contact</a>
        </Button>
      </div>
    </nav>
  );
}
