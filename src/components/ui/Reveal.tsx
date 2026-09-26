import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
  y?: number;
};

/** Scroll-triggered fade/rise reveal (GSAP + ScrollTrigger), inert under prefers-reduced-motion. */
export function Reveal({ children, delay = 0, className, as = "div", y = 20 }: RevealProps) {
  const ref = useRef<HTMLDivElement | HTMLLIElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(el, { opacity: 0, y });
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay,
          ease: "power3.out",
        });
      },
    });

    return () => trigger.kill();
  }, [delay, y, reducedMotion]);

  if (as === "li") {
    return (
      <li ref={ref as React.RefObject<HTMLLIElement>} className={className}>
        {children}
      </li>
    );
  }

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </div>
  );
}
