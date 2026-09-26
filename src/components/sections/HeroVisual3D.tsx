import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { CanvasErrorBoundary } from "@/components/three/CanvasErrorBoundary";
import { isWebGLAvailable } from "@/lib/webgl";

const SystemMapScene = lazy(() => import("@/components/three/SystemMapScene"));

const NODE_LABELS = ["Frontend", "API", "Backend", "Database", "AI", "Data"];

/**
 * Renders the interactive 3D system map on capable desktop/tablet viewports
 * with WebGL support. On mobile widths, when WebGL is unavailable, or when
 * the OS requests reduced motion, the 3D bundle is never even downloaded —
 * the lightweight SVG network diagram is used instead. A runtime error
 * boundary also catches any WebGL/Three.js failure after mount (unsupported
 * driver, disabled GPU, etc.) so a 3D crash can never take down the page.
 */
export function HeroVisual3D() {
  const reducedMotion = useReducedMotion();
  const [canUse3D, setCanUse3D] = useState(false);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const evaluate = () => setCanUse3D(mql.matches && isWebGLAvailable());
    evaluate();
    mql.addEventListener("change", evaluate);
    return () => mql.removeEventListener("change", evaluate);
  }, []);

  if (!canUse3D) {
    return <HeroVisual />;
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

  return (
    <CanvasErrorBoundary fallback={<HeroVisual />}>
      <div className="relative aspect-square w-full max-w-lg mx-auto">
        <div aria-hidden className="absolute inset-0 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <div
          role="img"
          aria-label="Interactive 3D diagram of a software system: frontend, API, backend, database, AI and data nodes connected by animated data flow"
          className="relative h-full w-full"
        >
          <Suspense fallback={<HeroVisual />}>
            <SystemMapScene reducedMotion={reducedMotion} dpr={dpr} labelRefs={labelRefs} />
          </Suspense>
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            {NODE_LABELS.map((label, i) => (
              <span
                key={label}
                ref={(el) => {
                  labelRefs.current[i] = el;
                }}
                className="absolute left-0 top-0 whitespace-nowrap rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider opacity-0 backdrop-blur-sm"
                style={{
                  color: "#f4f7fb",
                  borderColor: "rgba(28,52,78,0.9)",
                  background: "rgba(11,23,40,0.55)",
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CanvasErrorBoundary>
  );
}
