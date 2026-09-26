import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const flow = [
  "Backend systems",
  "Structured data",
  "Data processing",
  "Analytics",
  "Visualization",
  "Decision-ready reporting",
];

/**
 * Deliberately ties data work back to software engineering — this is not a
 * separate "data analyst" track bolted onto the portfolio.
 */
export function EngineeringDataConnection() {
  return (
    <Reveal className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
        Engineering → Data → Decisions
      </p>
      <h3 className="mt-3 font-[var(--font-display)] text-xl font-semibold text-[var(--text)] sm:text-2xl">
        Data work grows out of the same backend systems I build.
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
        The APIs and databases I engineer are also where structured data lives —
        so analysis, visualization and reporting connect directly back to the systems
        that produce the data, not a separate toolchain.
      </p>

      <ol className="mt-8 flex flex-col items-center">
        {flow.map((step, index) => (
          <li key={step} className="flex flex-col items-center">
            <div
              className="rounded-full border px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wide sm:text-sm"
              style={{
                borderColor: index % 2 === 0 ? "var(--accent)" : "var(--accent-2)",
                color: index % 2 === 0 ? "var(--accent)" : "var(--accent-2)",
                background: "var(--bg)",
              }}
            >
              {step}
            </div>
            {index < flow.length - 1 && (
              <ArrowDown aria-hidden size={16} className="my-2 text-[var(--text-muted)]" />
            )}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
