import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const activeId = useActiveSection(isHome ? sectionIds : []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goToSection = (href: string) => {
    setMenuOpen(false);
    if (isHome) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <header
      className="sticky top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-300"
      style={
        scrolled
          ? {
              background: "rgba(7,17,31,.72)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderColor: "var(--border)",
            }
          : { background: "transparent", borderColor: "transparent" }
      }
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="font-[var(--font-display)] text-lg font-semibold tracking-tight text-[var(--text)]"
        >
          Nickson<span className="text-[var(--accent)]">.</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = isHome && activeId === id;
            return (
              <button
                key={item.href}
                type="button"
                data-cursor="link"
                onClick={() => goToSection(item.href)}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text)]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumePath}
            download
            data-cursor="link"
            className="hidden items-center rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] lg:inline-flex"
          >
            Download CV
          </a>
          <button
            type="button"
            data-cursor="link"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-[var(--border)] bg-[var(--bg)] px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => goToSection(item.href)}
                  className="w-full rounded-lg px-3 py-3 text-left text-base font-medium text-[var(--text)] hover:bg-[var(--surface-2)]"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={profile.resumePath}
            download
            className="mt-3 flex items-center justify-center rounded-full bg-[var(--accent)] px-4 py-3 text-sm font-medium text-[var(--accent-contrast)]"
          >
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
}
