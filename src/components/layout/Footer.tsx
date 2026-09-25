import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const icons = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail, phone: Mail };

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-[var(--font-display)] text-lg font-semibold text-[var(--text)]">
            {profile.displayName}
          </p>
          <p className="text-sm text-[var(--text-muted)]">{profile.title}</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = icons[link.icon];
            return (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="border-t border-[var(--border)]">
        <p className="mx-auto w-full max-w-6xl px-5 py-4 text-center font-mono text-xs text-[var(--text-muted)] sm:px-8 sm:text-left">
          © {year} {profile.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
