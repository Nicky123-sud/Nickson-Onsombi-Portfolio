import { type FormEvent, useState } from "react";
import { ExternalLink, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";

const githubLink = socialLinks.find((link) => link.icon === "github");
const linkedinLink = socialLinks.find((link) => link.icon === "linkedin");

type Status = "idle" | "loading" | "success" | "error";

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const whatsAppUrl = getWhatsAppUrl();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill every field, humans never see this one.
    if (String(data.get("company") ?? "").trim() !== "") {
      setStatus("success");
      form.reset();
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !subject || !message) {
      setStatus("error");
      setErrorMessage("Please fill in every field before sending.");
      return;
    }
    if (!emailPattern.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!FORM_ENDPOINT) {
      // No backend configured for this static deployment — fall back to a
      // pre-filled mailto so the message still reaches a real inbox.
      const body = `From: ${name} (${email})\n\n${message}`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong sending your message. Please try again or email me directly.");
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful."
          description="Have a product, system or technical problem worth solving?"
        />

        <Reveal delay={0.05} className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            data-cursor="link"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[var(--accent-contrast)] transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Mail size={16} /> Email Me
          </a>
          {whatsAppUrl && (
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]"
            >
              <WhatsAppIcon size={16} /> WhatsApp
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <GithubIcon size={16} /> View GitHub
            </a>
          )}
          {linkedinLink && (
            <a
              href={linkedinLink.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <LinkedinIcon size={16} /> LinkedIn <ExternalLink size={13} />
            </a>
          )}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-[var(--accent)]" />
              <div>
                <p className="text-sm font-medium text-[var(--text)]">Location</p>
                <p className="text-sm text-[var(--text-muted)]">{profile.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 text-[var(--accent)]" />
              <div>
                <p className="text-sm font-medium text-[var(--text)]">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]"
                >
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 text-[var(--accent)]" />
              <div>
                <p className="text-sm font-medium text-[var(--text)]">Phone</p>
                <a
                  href={profile.phoneHref}
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
              <p className="font-mono text-xs text-[var(--accent)]">{profile.availability}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Honeypot field — hidden from sighted and keyboard users, bots fill it anyway */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--text)]">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--text)]">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-[var(--text)]">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--text)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full resize-y rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  data-cursor="link"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[var(--accent-contrast)] transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                  <Send size={15} />
                </button>

                <div role="status" aria-live="polite" className="text-sm">
                  {status === "success" && (
                    <span className="text-[var(--accent-2)]">
                      Thanks — your message is on its way.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-red-400">{errorMessage}</span>
                  )}
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
