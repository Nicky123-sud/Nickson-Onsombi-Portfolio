import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to a section hash on route change (e.g. navigating "/" -> "/#projects"). */
export function RouteScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
