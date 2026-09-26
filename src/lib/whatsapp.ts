import { profile } from "@/data/profile";

const ENV_WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;

const WHATSAPP_MESSAGE =
  "Hello Nickson, I came across your portfolio and would like to discuss a project or opportunity.";

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

/**
 * Nickson's published contact number (see src/data/profile.ts) is also his
 * WhatsApp number, so it's the default. VITE_WHATSAPP_NUMBER can override it
 * (e.g. a different number dedicated to WhatsApp) without a code change.
 * Never a guessed or invented number either way.
 */
const WHATSAPP_NUMBER = ENV_WHATSAPP_NUMBER?.trim() || digitsOnly(profile.phone);

/** Returns the wa.me deep link, or null if somehow no number is available. */
export function getWhatsAppUrl(): string | null {
  if (!WHATSAPP_NUMBER) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
