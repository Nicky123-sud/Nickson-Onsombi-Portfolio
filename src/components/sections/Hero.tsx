import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import portrait from "@/assets/images/nickson-profile-square.jpg";

const icons = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail, phone: Mail };

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--border)] bg-grid pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-[var(--accent)]/10 via-transparent to-transparent"
      />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 flex items-center gap-3 lg:hidden">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[var(--accent)]/60 shadow-[0_0_0_4px_var(--surface)]">
              <img
                src={portrait}
                alt="Portrait of Nickson Onsombi Nyaboga"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="font-mono text-xs text-[var(--text-muted)]">
              {profile.location} · {profile.availability}
            </p>
          </div>

          <p className="font-mono text-sm text-[var(--accent)]">
            Hi, I'm {profile.fullName}
          </p>

          <h1 className="mt-4 break-words font-[var(--font-display)] text-3xl font-semibold leading-[1.1] text-balance text-[var(--text)] sm:text-5xl lg:text-6xl">
            {profile.title}
          </h1>

          <p className="mt-4 max-w-xl font-[var(--font-display)] text-xl text-[var(--text-muted)] sm:text-2xl">
            {profile.tagline}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)]">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent-contrast)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_var(--accent)]"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Download size={16} /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              Let's Work Together
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = icons[link.icon];
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </motion.div>

        <div className="hidden lg:block">
          <div className="relative mx-auto w-fit">
            <div className="relative h-64 w-64 overflow-hidden rounded-[2.5rem] border border-[var(--accent)]/40 shadow-[0_0_60px_-15px_var(--accent)]">
              <img
                src={portrait}
                alt="Portrait of Nickson Onsombi Nyaboga"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-[var(--accent)]/30" />
            </div>
          </div>
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
