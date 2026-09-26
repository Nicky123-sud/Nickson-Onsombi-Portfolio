import { Reveal } from "@/components/ui/Reveal";

// Neutral, round-number placeholder values — purely for demonstrating the
// visual design system. Never labeled as a real project result or metric.
const sampleBars = [32, 58, 41, 76, 54, 68, 90];
const sampleLine = [20, 35, 28, 52, 46, 64, 58, 80];
const sampleKpis = [
  { label: "Records processed", value: "1,240" },
  { label: "Fields validated", value: "18" },
  { label: "Report sections", value: "8" },
];

/** Decorative, illustrative-only chart composition — sample data, not a real project result. */
export function SampleDataViz() {
  const maxBar = Math.max(...sampleBars);
  const maxLine = Math.max(...sampleLine);
  const linePoints = sampleLine
    .map((value, index) => {
      const x = (index / (sampleLine.length - 1)) * 100;
      const y = 100 - (value / maxLine) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <Reveal className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
          Design system demo
        </p>
        <p className="font-mono text-[11px] text-[var(--text-muted)]">
          Sample data — illustrative only
        </p>
      </div>
      <h3 className="mt-3 font-[var(--font-display)] text-xl font-semibold text-[var(--text)]">
        What a dashboard built here looks like
      </h3>

      <div aria-hidden className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex h-32 items-end gap-2">
          {sampleBars.map((value, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${(value / maxBar) * 100}%`,
                background: index % 2 === 0 ? "var(--accent)" : "var(--accent-2)",
                opacity: 0.85,
              }}
            />
          ))}
        </div>

        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-32 w-full">
          <polyline
            points={linePoints}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {sampleKpis.map((kpi) => (
          <div
            key={kpi.label}
            aria-hidden
            className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4"
          >
            <p className="font-[var(--font-display)] text-2xl font-semibold text-[var(--text)]">
              {kpi.value}
            </p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">{kpi.label}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-[var(--text-muted)]">
        A composition using placeholder numbers to show how a real dataset would be
        presented — not a claim about a specific project's results.
      </p>
    </Reveal>
  );
}
