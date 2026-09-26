import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title?: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
        {eyebrow}
      </p>
      {title && (
        <h2 className="mt-3 break-words font-[var(--font-display)] text-3xl font-semibold text-balance text-[var(--text)] sm:text-4xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
          {description}
        </p>
      )}
    </Reveal>
  );
}
