import { reportDocumentSections } from "@/data/reportWriting";
import { Reveal } from "@/components/ui/Reveal";

/**
 * A stylized, abstract report mockup — evidence, structure and professional
 * documentation, not a literal word-processor screenshot.
 */
export function ReportDocumentVisual() {
  return (
    <Reveal className="relative mx-auto w-full max-w-sm py-4">
      <div style={{ perspective: "1200px" }}>
        {/* Back page (depth) */}
        <div
          aria-hidden
          className="absolute inset-x-6 top-4 h-full rounded-2xl border border-[var(--border)] bg-[var(--surface-2)]"
          style={{ transform: "rotateZ(-3deg) translateZ(-20px)" }}
        />
        {/* Front page */}
        <div
          aria-hidden
          className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
          style={{ transform: "rotateZ(1.5deg)" }}
        >
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--accent)" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--accent-2)" }} />
            <span className="h-2.5 w-2.5 rounded-full border border-[var(--border)]" />
          </div>

          <div className="mt-5 h-2 w-2/3 rounded-full bg-[var(--border)]" />
          <div className="mt-2 h-2 w-1/2 rounded-full bg-[var(--border)]" />

          <div className="mt-6 space-y-3">
            {reportDocumentSections.map((section, index) => (
              <div
                key={section}
                className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5"
              >
                <span
                  className="font-mono text-[10px]"
                  style={{ color: index % 2 === 0 ? "var(--accent)" : "var(--accent-2)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-secondary)]">
                  {section}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
