import { useEffect, useRef } from "react";

const MAX_DEGREES = 1.6;

/**
 * Extremely subtle pointer-based 3D tilt (max ~1.6deg) for the floating nav.
 * Inert on touch devices and under prefers-reduced-motion — the nav must
 * never feel unstable.
 */
export function useSubtleTilt<T extends HTMLElement>(disabled: boolean) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const handleMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(1200px) rotateX(${(-y * MAX_DEGREES).toFixed(2)}deg) rotateY(${(x * MAX_DEGREES).toFixed(2)}deg)`;
    };

    const reset = () => {
      el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
    };

    reset();
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [disabled]);

  return ref;
}
