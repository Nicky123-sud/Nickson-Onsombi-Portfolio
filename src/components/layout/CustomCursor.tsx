import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const INTERACTIVE_SELECTOR = 'a, button, [data-cursor="link"], input, textarea, [role="button"]';

/**
 * Small dot + trailing ring, desktop (fine-pointer) only. Expands over
 * interactive elements. Fully inert on touch devices and reduced motion.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mql.matches);
    const handler = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!enabled || reducedMotion) return;

    document.documentElement.classList.add("cursor-none-desktop");

    const ring = ringRef.current;
    const dot = dotRef.current;
    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      setVisible(true);
      if (dot) {
        dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      const target = e.target as Element | null;
      setActive(!!target?.closest(INTERACTIVE_SELECTOR));

      const animate = () => {
        ringX += (e.clientX - ringX) * 0.18;
        ringY += (e.clientY - ringY) * 0.18;
        if (ring) {
          ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        }
      };
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(animate);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("cursor-none-desktop");
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled, reducedMotion]);

  if (!enabled || reducedMotion) return null;

  return (
    <div aria-hidden className={`pointer-events-none fixed inset-0 z-[999] ${visible ? "" : "opacity-0"}`}>
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] transition-opacity duration-150"
      />
      <div
        ref={ringRef}
        className={`fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-200 ease-out ${
          active
            ? "h-10 w-10 border-[var(--accent)]"
            : "h-7 w-7 border-[var(--text-muted)]/70"
        }`}
      />
    </div>
  );
}
