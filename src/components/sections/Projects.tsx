import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { FeaturedProject } from "@/components/sections/FeaturedProject";

const [flagship, ...rest] = projects;

export function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-[var(--border)] bg-[var(--surface)] py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="Real projects — completed, in progress, or exploratory. Each one is labeled by its actual status."
        />

        <div className="mt-12">
          <FeaturedProject project={flagship} />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <ProjectCard key={project.slug} project={project} delay={index * 0.08} />
          ))}
        </div>
      </Container>
    </section>
  );
}
