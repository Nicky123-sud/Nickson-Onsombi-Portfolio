import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

export function WhatsAppFloatingButton() {
  const [showTip, setShowTip] = useState(false);
  const url = getWhatsAppUrl();

  if (!url) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <span
        role="tooltip"
        className={`absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text)] shadow-lg transition-opacity ${
          showTip ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        Chat on WhatsApp
      </span>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Nickson on WhatsApp"
        data-cursor="link"
        onFocus={() => setShowTip(true)}
        onBlur={() => setShowTip(false)}
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
        className="flex h-14 w-14 items-center justify-center rounded-full text-[var(--accent-2)] transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105"
        style={{
          background: "rgba(11,23,40,0.6)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.55)",
        }}
      >
        <WhatsAppIcon size={26} />
      </a>
    </div>
  );
}
