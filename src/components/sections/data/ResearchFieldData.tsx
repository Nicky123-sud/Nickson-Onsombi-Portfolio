import { ClipboardList } from "lucide-react";
import { researchFieldDataItems } from "@/data/researchFieldData";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export function ResearchFieldData() {
  return (
    <Reveal className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      <div className="flex items-center gap-2 text-[var(--accent-2)]">
        <ClipboardList size={18} aria-hidden />
        <p className="font-mono text-xs uppercase tracking-[0.2em]">Research & Field Data</p>
      </div>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
        Experience supporting research and field-data workflows through structured data
        collection, cleaning, organisation, analysis and reporting — including
        data-driven technical reporting for a research and development consultancy
        working on government and development-sector engagements.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {researchFieldDataItems.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </Reveal>
  );
}
