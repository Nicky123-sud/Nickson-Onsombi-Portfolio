import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  jsonLd?: Record<string, unknown>;
};

/** Lightweight per-route document head + JSON-LD manager (no extra dependency needed for an SPA this size). */
export function Seo({ title, description, jsonLd }: SeoProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const descTag = document.querySelector('meta[name="description"]');
    const previousDescription = descTag?.getAttribute("content") ?? "";
    descTag?.setAttribute("content", description);

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.title = previousTitle;
      descTag?.setAttribute("content", previousDescription);
      script?.remove();
    };
  }, [title, description, jsonLd]);

  return null;
}
