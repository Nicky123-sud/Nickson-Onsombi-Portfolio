import { toolsMatrix } from "@/data/toolsMatrix";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

/** Capability categories — no proficiency percentages, no "expert" labels. */
export function ToolsMatrix() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {toolsMatrix.map((category, index) => (
        <Reveal
          key={category.id}
          delay={index * 0.04}
          className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
            {category.title}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {category.tools.map((tool) => (
              <Badge key={tool}>{tool}</Badge>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
