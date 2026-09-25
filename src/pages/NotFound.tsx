import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Seo } from "@/components/layout/Seo";

export function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Seo
        title="Page not found — Nickson Onsombi"
        description="The page you're looking for doesn't exist."
      />
      <p className="font-mono text-sm text-[var(--accent)]">404</p>
      <h1 className="mt-3 font-[var(--font-display)] text-3xl font-semibold text-[var(--text)]">
        This page doesn't exist.
      </h1>
      <p className="mt-3 max-w-md text-[var(--text-muted)]">
        The link may be broken, or the page may have moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent-contrast)] transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </Container>
  );
}
