import { useEffect, useRef } from "react";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { HeroVisual3D } from "@/components/sections/HeroVisual3D";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { gsap } from "@/lib/gsap";

const icons = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail, phone: Mail };

export function Hero() {
  const reducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = root.querySelectorAll("[data-hero-item]");

    if (reducedMotion) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(targets, { opacity: 0, y: 18 });
    const tl = gsap.timeline({ delay: 0.1 });
    tl.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
    };
  }, [reducedMotion]);

  return (
    <section
      id="home"
      className="bg-glow relative flex min-h-screen items-center overflow-hidden border-b border-[var(--border)] bg-grid pt-24 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-[var(--accent)]/8 via-transparent to-transparent"
      />

      <Container ref={rootRef} className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <p
            data-hero-item
            className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]"
          >
            Full-Stack Software Engineer
          </p>

          <h1
            data-hero-item
            className="mt-5 break-words font-[var(--font-display)] text-4xl font-semibold leading-[1.08] text-balance text-[var(--text)] sm:text-6xl lg:text-7xl"
          >
            Building digital systems that matter.
          </h1>

          <p
            data-hero-item
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
          >
            {profile.summary}
          </p>

          <div data-hero-item className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              data-cursor="link"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[var(--accent-contrast)] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-primary)" }}
            >
              Explore My Work <ArrowRight size={16} />
            </a>
            <a
              href={profile.resumePath}
              download
              data-cursor="link"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          <div data-hero-item className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = icons[link.icon];
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={link.label}
                    data-cursor="link"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
              <MapPin size={14} className="text-[var(--accent-2)]" />
              Kenya
            </span>
          </div>
        </div>

        <div data-hero-item className="hidden lg:block">
          <HeroVisual3D />
        </div>
      </Container>
    </section>
  );
}
