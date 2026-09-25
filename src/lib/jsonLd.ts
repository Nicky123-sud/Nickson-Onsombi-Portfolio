import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import type { Project } from "@/data/projects";

const siteUrl = "https://nicky123-sud.github.io/Nickson-Onsombi-Portfolio";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    alternateName: profile.displayName,
    jobTitle: profile.title,
    description: profile.summary,
    email: `mailto:${profile.email}`,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kisii",
      addressCountry: "Kenya",
    },
    sameAs: socialLinks
      .filter((link) => link.href.startsWith("http"))
      .map((link) => link.href),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.displayName} — Portfolio`,
    url: siteUrl,
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Person",
      name: profile.fullName,
    },
    url: `${siteUrl}/projects/${project.slug}`,
  };
}
