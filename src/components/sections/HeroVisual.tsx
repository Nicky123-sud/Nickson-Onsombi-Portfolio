import { useReducedMotion } from "@/hooks/useReducedMotion";

const nodes = [
  { x: 60, y: 210, r: 5 },
  { x: 150, y: 80, r: 4 },
  { x: 260, y: 150, r: 6 },
  { x: 210, y: 300, r: 4 },
  { x: 340, y: 60, r: 4 },
  { x: 370, y: 240, r: 5 },
  { x: 430, y: 150, r: 7 },
  { x: 120, y: 350, r: 3 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 3],
  [2, 4],
  [2, 6],
  [4, 6],
  [6, 5],
  [3, 5],
  [3, 7],
];

/**
 * Abstract system/network topology visual — represents API + data architecture
 * rather than a literal 3D object. Pure SVG/CSS so it's cheap, mobile-friendly,
 * and fully respects prefers-reduced-motion.
 */
export function HeroVisual() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative aspect-square w-full max-w-md mx-auto select-none">
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-[var(--accent)]/10 blur-3xl"
      />
      <svg
        viewBox="0 0 480 400"
        className="relative h-full w-full"
        role="img"
        aria-label="Abstract diagram of connected nodes representing distributed systems and APIs"
      >
        <g stroke="var(--border)" strokeWidth="1" opacity="0.9">
          {edges.map(([a, b], i) => {
            const from = nodes[a];
            const to = nodes[b];
            return (
              <line
                key={i}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="var(--accent)"
                strokeOpacity="0.35"
                strokeDasharray={reducedMotion ? undefined : "4 6"}
                className={reducedMotion ? "" : "animate-dash"}
              />
            );
          })}
        </g>

        {nodes.map((node, i) => (
          <g
            key={i}
            className={reducedMotion ? "" : i % 2 === 0 ? "animate-float-slow" : "animate-float-slower"}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 8}
              fill="var(--accent)"
              opacity="0.12"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="var(--surface)"
              stroke="var(--accent)"
              strokeWidth="1.5"
              className={reducedMotion ? "" : "animate-pulse-slow"}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
