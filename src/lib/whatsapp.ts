const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;

const WHATSAPP_MESSAGE =
  "Hello Nickson, I came across your portfolio and would like to discuss a project or opportunity.";

/**
 * Returns the wa.me deep link, or null when VITE_WHATSAPP_NUMBER isn't
 * configured. The number is never invented — when it's unset, every
 * WhatsApp entry point in the UI simply doesn't render.
 */
export function getWhatsAppUrl(): string | null {
  if (!WHATSAPP_NUMBER) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
