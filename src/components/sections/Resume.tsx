import { Download, Eye } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Resume() {
  return (
    <section
      id="resume"
      className="border-b border-[var(--border)] bg-[var(--surface)] py-20 sm:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">
          <SectionHeading
            eyebrow="Resume"
            title="Get the full picture"
            description="A concise, single-page resume covering my experience, education and technical skills — generated from the same verified information on this site."
          />

          <Reveal delay={0.1} className="flex flex-wrap items-center gap-3 lg:justify-end">
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent-contrast)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_var(--accent)]"
            >
              <Download size={16} /> Download CV (PDF)
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Eye size={16} /> Preview in Browser
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
