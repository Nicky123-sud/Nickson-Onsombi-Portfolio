import { useEffect, useRef } from "react";
import {
  Inbox,
  Filter,
  ShieldCheck,
  SearchCode,
  BarChart3,
  Lightbulb,
  FileText,
  Compass,
} from "lucide-react";
import { pipelineStages } from "@/data/pipeline";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const icons = [Inbox, Filter, ShieldCheck, SearchCode, BarChart3, Lightbulb, FileText, Compass];

/**
 * COLLECT → CLEAN → VALIDATE → ANALYZE → VISUALIZE → INTERPRET → REPORT → DECIDE.
 * Horizontal engineering/data pipeline on desktop, vertical timeline on mobile.
 * The connecting line draws in and each node lights up as it scrolls into
 * view; everything renders fully lit and static under prefers-reduced-motion.
 */
export function DataPipeline() {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const lineRefMobile = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-pipeline-node]"));
    const lines = [lineRef.current, lineRefMobile.current].filter(Boolean) as HTMLElement[];

    if (reducedMotion) {
      gsap.set(nodes, { opacity: 1 });
      gsap.set(lines, { scaleX: 1, scaleY: 1 });
      return;
    }

    gsap.set(nodes, { opacity: 0.3 });
    gsap.set(lines, { scaleX: 0, scaleY: 0 });

    const lineTrigger = ScrollTrigger.create({
      trigger: root,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(lines, { scaleX: 1, scaleY: 1, duration: 1.1, ease: "power2.inOut" });
      },
    });

    const nodeTriggers = nodes.map((node, index) =>
      ScrollTrigger.create({
        trigger: node,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(node, { opacity: 1, duration: 0.4, delay: index * 0.06, ease: "power2.out" });
        },
      }),
    );

    return () => {
      lineTrigger.kill();
      nodeTriggers.forEach((trigger) => trigger.kill());
    };
  }, [reducedMotion]);

  return (
    <div ref={rootRef} className="relative">
      {/* Static track */}
      <div aria-hidden className="absolute left-6 right-6 top-6 hidden h-px bg-[var(--border)] lg:block" />
      <div aria-hidden className="absolute left-6 top-6 bottom-6 w-px bg-[var(--border)] lg:hidden" />
      {/* Animated accent line */}
      <div
        ref={lineRef}
        aria-hidden
        className="absolute left-6 right-6 top-6 hidden h-px origin-left bg-[var(--accent)] lg:block"
      />
      <div
        ref={lineRefMobile}
        aria-hidden
        className="absolute left-6 top-6 bottom-6 w-px origin-top bg-[var(--accent)] lg:hidden"
      />

      <ol className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
        {pipelineStages.map((stage, index) => {
          const Icon = icons[index] ?? FileText;
          return (
            <li
              key={stage.id}
              className="relative flex items-start gap-4 lg:flex-col lg:items-center lg:gap-3 lg:text-center"
            >
              <div
                data-pipeline-node
                className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] text-[var(--accent)]"
              >
                <Icon size={18} aria-hidden />
              </div>

              <div className="lg:max-w-[9.5rem]">
                <p className="pt-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text)] lg:pt-0">
                  {stage.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                  {stage.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
