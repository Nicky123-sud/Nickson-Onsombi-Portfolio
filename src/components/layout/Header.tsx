import { useEffect, useState, type CSSProperties } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useSubtleTilt } from "@/hooks/useSubtleTilt";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

const GLASS_STYLE: CSSProperties = {
  background: "rgba(7,17,31,0.55)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 20px 45px -20px rgba(0,0,0,0.55)",
  transformStyle: "preserve-3d",
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const activeId = useActiveSection(isHome ? sectionIds : []);
  const reducedMotion = useReducedMotion();
  const tiltRef = useSubtleTilt<HTMLDivElement>(reducedMotion || menuOpen);
  const whatsAppUrl = getWhatsAppUrl();

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
    <>
      <div
        ref={tiltRef}
        style={{ perspective: "1200px", ...GLASS_STYLE }}
        className="fixed top-3 left-3 right-3 z-50 rounded-[20px] transition-transform duration-200 ease-out sm:top-4 sm:left-6 sm:right-6"
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
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

          <div className="flex items-center gap-2 sm:gap-3">
            {whatsAppUrl && (
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                aria-label="Chat with Nickson on WhatsApp"
                className="hidden items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent-2)] hover:text-[var(--accent-2)] lg:inline-flex"
              >
                <WhatsAppIcon size={15} /> WhatsApp
              </a>
            )}
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
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile"
          style={GLASS_STYLE}
          className="fixed top-[5.25rem] left-3 right-3 z-50 max-h-[70vh] overflow-y-auto rounded-2xl px-5 py-4 md:hidden"
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
          <div className="mt-3 flex flex-col gap-2">
            {whatsAppUrl && (
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with Nickson on WhatsApp"
                className="flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-4 py-3 text-sm font-medium text-[var(--text)]"
              >
                <WhatsAppIcon size={16} /> WhatsApp
              </a>
            )}
            <a
              href={profile.resumePath}
              download
              className="flex items-center justify-center rounded-full px-4 py-3 text-sm font-medium text-[var(--accent-contrast)]"
              style={{ background: "var(--gradient-primary)" }}
            >
              Download CV
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
