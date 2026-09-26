import { skillGroups, skillCategoryOrder } from "@/data/skills";
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
          description="No arbitrary percentages — just the areas I actually work in, from software engineering through to data and research."
        />

        <div className="mt-14 space-y-12">
          {skillCategoryOrder.map((category) => {
            const groups = skillGroups.filter((group) => group.category === category);
            if (groups.length === 0) return null;

            return (
              <div key={category}>
                <Reveal className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
                    {category}
                  </span>
                  <span className="h-px flex-1 bg-[var(--border)]" aria-hidden />
                </Reveal>

                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {groups.map((group, index) => (
                    <Reveal
                      key={group.id}
                      delay={index * 0.05}
                      className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 transition-colors hover:border-[var(--accent)]/50"
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: index % 2 === 0 ? "var(--accent)" : "var(--accent-2)" }}
                      />
                      <h3 className="relative font-[var(--font-display)] text-lg font-semibold text-[var(--text)]">
                        {group.title}
                      </h3>
                      <p className="relative mt-1.5 text-sm text-[var(--text-muted)]">
                        {group.description}
                      </p>
                      <div className="relative mt-4 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <Badge key={skill}>{skill}</Badge>
                        ))}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
