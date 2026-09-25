import type { Project } from "@/data/projects";

const frameProps = {
  role: "presentation" as const,
  "aria-hidden": true,
};

function Frame({ children, caption }: { children: React.ReactNode; caption: string }) {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" {...frameProps}>
      <rect width="400" height="240" fill="var(--surface-2)" />
      {children}
      <text
        x="200"
        y="228"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fill="var(--text-muted)"
      >
        {caption}
      </text>
    </svg>
  );
}

/**
 * Tasteful CSS/SVG technical visuals used in place of fake project screenshots.
 * No stock imagery is used to represent work that doesn't have a real screenshot.
 */
export function ProjectVisual({ variant }: { variant: Project["visual"] }) {
  if (variant === "miti") {
    return (
      <Frame caption="Django REST API · AI detection · IoT / MQTT">
        <g stroke="var(--border)" strokeWidth="1" opacity="0.7">
          {Array.from({ length: 8 }).map((_, i) => (
            <path key={`v-${i}`} d={`M${i * 50} 0V240`} />
          ))}
        </g>
        <g fill="var(--accent)">
          <circle cx="90" cy="90" r="5" />
          <circle cx="180" cy="140" r="5" />
          <circle cx="260" cy="80" r="5" />
          <circle cx="320" cy="160" r="5" />
        </g>
        <g stroke="var(--accent)" strokeOpacity="0.5" fill="none">
          <path d="M90 90 L180 140 L260 80 L320 160" />
        </g>
        <path
          d="M200 200c-14-4-24-16-24-30 0-16 14-28 24-28s24 12 24 28c0 14-10 26-24 30Z"
          fill="var(--accent)"
          opacity="0.18"
        />
      </Frame>
    );
  }

  if (variant === "platform") {
    return (
      <Frame caption="Next.js · design tokens · i18n">
        <g fill="none" stroke="var(--accent)" strokeOpacity="0.75" strokeWidth="1.5">
          <rect x="40" y="40" width="150" height="34" rx="5" />
          <rect x="40" y="86" width="90" height="90" rx="5" />
          <rect x="140" y="86" width="90" height="42" rx="5" />
          <rect x="140" y="134" width="90" height="42" rx="5" />
          <rect x="250" y="40" width="110" height="136" rx="5" />
        </g>
        <g fontFamily="var(--font-mono)" fontSize="9" fill="var(--text-muted)">
          <text x="50" y="60">EN / SO</text>
          <text x="260" y="60">Tokens</text>
        </g>
      </Frame>
    );
  }

  if (variant === "commerce") {
    return (
      <Frame caption="Catalogue · cart · orders">
        <g fill="none" stroke="var(--accent)" strokeOpacity="0.75" strokeWidth="1.5">
          <rect x="40" y="40" width="90" height="70" rx="5" />
          <rect x="155" y="40" width="90" height="70" rx="5" />
          <rect x="270" y="40" width="90" height="70" rx="5" />
        </g>
        <g fill="var(--accent)" opacity="0.7">
          <circle cx="330" cy="160" r="16" />
        </g>
        <g stroke="var(--accent)" strokeWidth="2" fill="none">
          <path d="M300 150 h14 l8 24 h-40 z" />
        </g>
      </Frame>
    );
  }

  if (variant === "records") {
    return (
      <Frame caption="Members · catalogue · loans">
        <g fill="none" stroke="var(--accent)" strokeOpacity="0.75" strokeWidth="1.5">
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x="60" y={48 + i * 34} width="280" height="22" rx="4" />
          ))}
        </g>
        <g fill="var(--accent)" opacity="0.6">
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx="76" cy={59 + i * 34} r="4" />
          ))}
        </g>
      </Frame>
    );
  }

  if (variant === "sites") {
    return (
      <Frame caption="Static sites · responsive layouts">
        <g stroke="var(--border)" strokeWidth="1">
          <path d="M0 60H400M0 120H400M0 180H400" />
        </g>
        <g fill="none" stroke="var(--accent)" strokeWidth="2" strokeOpacity="0.8">
          <path d="M200 40 L200 200" />
          <path d="M170 70 L230 70" />
          <path d="M140 210 L140 130 L260 130 L260 210 Z" />
        </g>
        <rect x="120" y="205" width="160" height="10" fill="var(--accent)" opacity="0.15" />
      </Frame>
    );
  }

  return (
    <Frame caption="REST API · JWT · MySQL">
      <g fill="none" stroke="var(--accent)" strokeOpacity="0.7" strokeWidth="1.5">
        <rect x="40" y="40" width="90" height="60" rx="6" />
        <rect x="270" y="40" width="90" height="60" rx="6" />
        <rect x="155" y="140" width="90" height="60" rx="6" />
        <path d="M85 100 L200 140 M315 100 L200 140" />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-muted)">
        <text x="55" y="75">Client</text>
        <text x="285" y="75">M-Pesa</text>
        <text x="172" y="175">Django</text>
      </g>
    </Frame>
  );
}
