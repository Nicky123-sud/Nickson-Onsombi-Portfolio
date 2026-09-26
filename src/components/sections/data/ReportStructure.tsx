import { reportStructureSteps } from "@/data/reportWriting";
import { Reveal } from "@/components/ui/Reveal";

/** Communicates reporting as an organised analytical process, not just "writing documents". */
export function ReportStructure() {
  return (
    <div>
      <ol className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8 lg:gap-0 lg:divide-x lg:divide-[var(--border)]">
        {reportStructureSteps.map((item, index) => (
          <Reveal as="li" key={item.step} delay={index * 0.04} className="lg:px-3 lg:first:pl-0 lg:last:pr-0">
            <p className="font-mono text-2xl font-semibold text-[var(--accent)]/70">{item.step}</p>
            <p className="mt-1 break-words text-xs font-medium leading-snug text-[var(--text)]">{item.title}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
