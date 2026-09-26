import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Circle, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/sections/ProjectVisual";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/BrandIcons";

/** Large editorial treatment for the flagship project — the visual centerpiece of the section. */
export function FeaturedProject({ project }: { project: Project }) {
  return (
    <Reveal className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg)] transition-colors hover:border-[var(--accent)]/50 lg:grid-cols-2">
      <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover"
            />
          ) : (
            <ProjectVisual variant={project.visual} />
          )}
        </div>
        <span className="absolute left-4 top-4 rounded-full border border-[var(--accent)]/40 bg-[var(--bg)]/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-[var(--accent)] backdrop-blur">
          {project.status}
        </span>
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
          Flagship Project · {project.category}
        </p>
        <h3 className="mt-3 font-[var(--font-display)] text-2xl font-semibold text-[var(--text)] sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
          {project.longDescription}
        </p>

        <ul className="mt-6 space-y-2">
          {project.features.slice(0, 5).map((feature) => (
            <li key={feature.label} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
              {feature.implemented ? (
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--accent-2)]" />
              ) : (
                <Circle size={16} className="mt-0.5 shrink-0 text-[var(--text-muted)]" />
              )}
              <span>
                {feature.label}
                {!feature.implemented && (
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-wide text-[var(--highlight)]">
                    planned
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[var(--border)] pt-6 text-sm">
          <Link
            to={`/projects/${project.slug}`}
            data-cursor="link"
            className="inline-flex items-center gap-1.5 font-medium text-[var(--accent)] transition-transform group-hover:translate-x-0.5"
          >
            Full Case Study <ArrowUpRight size={16} />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              <GithubIcon size={15} /> Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              <ExternalLink size={15} /> Live
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
