import { MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import portrait from "@/assets/images/nickson-profile-square.jpg";

const focusAreas = [
  "Python", "Django", "Django REST Framework", "React", "TypeScript",
  "SQL", "MySQL", "AI Integration", "IoT", "APIs",
];

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
      "Where possible, I validate assumptions with real data rather than guessing.",
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
        <SectionHeading eyebrow="About" />

        <Reveal className="max-w-3xl">
          <h2 className="font-[var(--font-display)] text-3xl font-semibold leading-tight text-balance text-[var(--text)] sm:text-4xl lg:text-5xl">
            I build software at the intersection of{" "}
            <span className="text-gradient">engineering, data</span> and
            real-world problems.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal delay={0.05}>
            <div className="relative mx-auto w-fit lg:mx-0">
              <div className="relative h-64 w-64 overflow-hidden rounded-[2rem] border border-[var(--accent)]/40 shadow-[0_0_50px_-18px_var(--accent)] sm:h-80 sm:w-80">
                <img
                  src={portrait}
                  alt="Portrait of Nickson Onsombi Nyaboga"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-[var(--accent)]/25" />
              </div>
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2.5rem]"
                style={{ background: "var(--gradient-primary)", opacity: 0.08, filter: "blur(24px)" }}
              />
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <MapPin size={16} className="text-[var(--accent)]" />
              {profile.location}
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <Sparkles size={16} className="text-[var(--accent-2)]" />
              {profile.availability}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-[var(--text-secondary)]">
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

            <div className="flex flex-wrap gap-2 pt-2">
              {focusAreas.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--accent)]/40"
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
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
