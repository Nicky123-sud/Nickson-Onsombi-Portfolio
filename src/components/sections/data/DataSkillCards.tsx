import type { ComponentType } from "react";
import {
  LineChart,
  BarChart3,
  Database,
  ClipboardList,
  FileBarChart,
  BookOpen,
  Workflow,
} from "lucide-react";
import { dataSkillCards } from "@/data/dataSkillCards";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

const icons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  "data-analysis": LineChart,
  "data-visualization": BarChart3,
  "database-sql": Database,
  "research-data": ClipboardList,
  "technical-reporting": FileBarChart,
  documentation: BookOpen,
  automation: Workflow,
};

export function DataSkillCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {dataSkillCards.map((card, index) => {
        const Icon = icons[card.id] ?? LineChart;
        return (
          <Reveal
            key={card.id}
            delay={index * 0.05}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: index % 2 === 0 ? "var(--accent)" : "var(--accent-2)" }}
            />
            <div
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--accent)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-[var(--accent-2)]"
              aria-hidden
            >
              <Icon size={20} />
            </div>
            <div className="relative mt-4 flex items-center justify-between gap-2">
              <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--text)]">
                {card.title}
              </h3>
            </div>
            <p className="relative mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              {card.level}
            </p>
            <p className="relative mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
              {card.description}
            </p>
            <div className="relative mt-4 flex flex-wrap gap-2">
              {card.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
