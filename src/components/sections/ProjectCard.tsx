import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/sections/ProjectVisual";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/BrandIcons";

const statusStyles: Record<Project["status"], string> = {
  Live: "text-[var(--accent)] border-[var(--accent)]/40",
  Completed: "text-[var(--text)] border-[var(--border)]",
  "In Development": "text-[var(--color-amber-400)] border-[var(--color-amber-400)]/40",
  Prototype: "text-[var(--color-amber-400)] border-[var(--color-amber-400)]/40",
};

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--accent)]/50">
      <div className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="transition-transform duration-500 ease-out group-hover:scale-105">
          <ProjectVisual variant={project.visual} />
        </div>
        <span
          className={`absolute right-3 top-3 rounded-full border bg-[var(--bg)]/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide backdrop-blur ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">
          {project.category}
        </p>
        <h3 className="mt-2 font-[var(--font-display)] text-lg font-semibold text-[var(--text)]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[var(--border)] pt-4 text-sm">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 font-medium text-[var(--accent)] transition-transform group-hover:translate-x-0.5"
          >
            Case Study <ArrowUpRight size={15} />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              <GithubIcon size={15} /> Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              <ExternalLink size={15} /> Live
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
