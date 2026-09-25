import { GraduationCap, Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="border-b border-[var(--border)] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience & Education"
          title="Where I've worked and studied"
        />

        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-2 text-[var(--text)]">
              <Briefcase size={18} className="text-[var(--accent)]" />
              <h3 className="font-[var(--font-display)] text-lg font-semibold">
                Professional Experience
              </h3>
            </div>
            <ol className="relative space-y-8 border-l border-[var(--border)] pl-6">
              {experience.map((entry, index) => (
                <Reveal as="li" key={entry.id} delay={index * 0.06} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />
                  <p className="font-mono text-xs text-[var(--accent)]">{entry.period}</p>
                  <h4 className="mt-1 font-[var(--font-display)] text-base font-semibold text-[var(--text)]">
                    {entry.role}
                  </h4>
                  <p className="text-sm text-[var(--text-muted)]">
                    {entry.organization} · {entry.location}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-[var(--text-muted)]/80">
                    {entry.type}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                    {entry.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {entry.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-2 text-[var(--text)]">
              <GraduationCap size={18} className="text-[var(--accent)]" />
              <h3 className="font-[var(--font-display)] text-lg font-semibold">
                Education & Training
              </h3>
            </div>
            <ol className="relative space-y-8 border-l border-[var(--border)] pl-6">
              {education.map((entry, index) => (
                <Reveal as="li" key={entry.id} delay={index * 0.06} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />
                  <p className="font-mono text-xs text-[var(--accent)]">{entry.period}</p>
                  <h4 className="mt-1 font-[var(--font-display)] text-base font-semibold text-[var(--text)]">
                    {entry.title}
                  </h4>
                  <p className="text-sm text-[var(--text-muted)]">{entry.institution}</p>
                  <span className="mt-1 inline-flex items-center rounded-full border border-[var(--border)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
                    {entry.status}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {entry.description}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
