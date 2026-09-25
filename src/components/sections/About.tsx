import { MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  {
    title: "API-first architecture",
    description:
      "I design backends around clear, well-documented APIs so frontend and backend can evolve independently.",
  },
  {
    title: "Maintainable over clever",
    description:
      "Code should be easy for the next person — often future me — to read, extend and debug.",
  },
  {
    title: "Data-informed decisions",
    description:
      "Where possible, I use data analysis to validate assumptions instead of guessing.",
  },
  {
    title: "Continuous learning",
    description:
      "From IoT firmware to AI-assisted detection, I actively expand into technologies that solve real problems.",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-[var(--border)] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Engineering systems, not just interfaces"
          description="A short professional story — how I think about building software, and where I'm headed."
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal delay={0.05} className="space-y-5 text-base leading-relaxed text-[var(--text-muted)]">
            <p>
              I'm {profile.fullName}, a full-stack software engineer based in{" "}
              {profile.location}, specialising in Python backend engineering
              and full-stack web development. I hold a Diploma in Information
              Communication Technology from Kisii National Polytechnic
              (final module awarded Distinction), I'm pursuing a BSc in
              Computer Science at the Open University of Kenya, and I
              completed web development training in Python and Django
              through eMobilis on a Mastercard Foundation scholarship.
            </p>
            <p>
              I'm the backend engineer on Miti App, an AI-powered agritech
              platform — I built its Django REST Framework API with JWT
              authentication and MySQL, integrated AI detection services, and
              built the firmware for its ESP32 sensor node streaming
              environmental data over MQTT. In parallel, I work as a freelance
              full-stack developer and ICT officer for Siraj Research &amp;
              Development Consultancy, building a multilingual Next.js
              platform with a full design-token system and English/Somali
              internationalisation.
            </p>
            <p>
              I've also integrated M-Pesa's Daraja API into point-of-sale and
              billing systems, and I care about the practices that keep
              software trustworthy as it grows: code review, automated
              testing with Playwright, CI pipelines, and clear technical
              documentation for both technical and non-technical
              stakeholders.
            </p>
            <p>
              I'm currently based in {profile.location} and {profile.availability.toLowerCase()}.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <MapPin size={16} className="text-[var(--accent)]" />
                {profile.location}
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <Sparkles size={16} className="text-[var(--accent)]" />
                {profile.availability}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {principles.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-4"
                  >
                    <p className="font-[var(--font-display)] text-sm font-semibold text-[var(--text)]">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-muted)]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
