import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform duration-200 ease-out will-change-transform hover:-translate-y-0.5 focus-visible:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-contrast)] shadow-[0_0_0_1px_color-mix(in_srgb,var(--accent)_40%,transparent)] hover:shadow-[0_0_24px_-4px_var(--accent)]",
  ghost:
    "border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
};

type Variant = keyof typeof variants;

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  children,
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
