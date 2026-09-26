import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, ExternalLink } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { ProjectVisual } from "@/components/sections/ProjectVisual";
import { Seo } from "@/components/layout/Seo";
import { projectJsonLd } from "@/lib/jsonLd";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <article className="py-16 sm:py-24">
      <Seo
        title={`${project.title} — Nickson Onsombi`}
        description={project.description}
        jsonLd={projectJsonLd(project)}
      />
      <Container>
        <Reveal>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)]"
          >
            <ArrowLeft size={15} /> Back to projects
          </Link>

          <p className="mt-6 font-mono text-xs uppercase tracking-wide text-[var(--accent)]">
            {project.category} · {project.status}
          </p>
          <h1 className="mt-3 font-[var(--font-display)] text-3xl font-semibold text-balance text-[var(--text)] sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
            {project.longDescription}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <GithubIcon size={15} /> View Source
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-[var(--accent-contrast)]"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-10 overflow-hidden rounded-2xl border border-[var(--border)]">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="aspect-[16/9] w-full object-cover"
            />
          ) : (
            <ProjectVisual variant={project.visual} />
          )}
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            <Reveal>
              <h2 className="font-[var(--font-display)] text-xl font-semibold text-[var(--text)]">
                Problem
              </h2>
              <p className="mt-3 leading-relaxed text-[var(--text-muted)]">{project.problem}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-[var(--font-display)] text-xl font-semibold text-[var(--text)]">
                Solution
              </h2>
              <p className="mt-3 leading-relaxed text-[var(--text-muted)]">{project.solution}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-[var(--font-display)] text-xl font-semibold text-[var(--text)]">
                Architecture
              </h2>
              <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <ol className="space-y-3">
                  {project.architecture.map((step, index) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/40 font-mono text-[11px] text-[var(--accent)]">
                        {index + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-[var(--font-display)] text-xl font-semibold text-[var(--text)]">
                Features
              </h2>
              <ul className="mt-4 space-y-2.5">
                {project.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                    {feature.implemented ? (
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                    ) : (
                      <Circle size={16} className="mt-0.5 shrink-0 text-[var(--text-muted)]" />
                    )}
                    <span>
                      {feature.label}
                      {!feature.implemented && (
                        <span className="ml-2 font-mono text-[10px] uppercase tracking-wide text-[var(--color-amber-400)]">
                          planned
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="h-fit space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">
                My Role
              </p>
              <p className="mt-1.5 text-sm text-[var(--text)]">{project.role}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">
                Status
              </p>
              <p className="mt-1.5 text-sm text-[var(--text)]">{project.status}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">
                Technology
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 border-t border-[var(--border)] pt-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]"
          >
            View all projects <ArrowRight size={15} />
          </Link>
        </Reveal>
      </Container>
    </article>
  );
}
