import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-[var(--border)] bg-[var(--surface)] py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Engineering capability, grouped by domain"
          description="No arbitrary percentages — just the areas I actually work in, grouped by what they're for."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.id}
              delay={index * 0.05}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 transition-colors hover:border-[var(--accent)]/50"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-[var(--font-display)] text-lg font-semibold text-[var(--text)]">
                {group.title}
              </h3>
              <p className="mt-1.5 text-sm text-[var(--text-muted)]">
                {group.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
