import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Seo } from "@/components/layout/Seo";
import { personJsonLd, websiteJsonLd } from "@/lib/jsonLd";

export function Home() {
  return (
    <>
      <Seo
        title="Nickson Onsombi — Full-Stack Software Engineer"
        description="Nickson Onsombi Nyaboga is a full-stack software engineer in Kenya building web applications, APIs, and data-driven, AI-enabled systems with Django, React and Python."
        jsonLd={{ "@graph": [personJsonLd(), websiteJsonLd()] }}
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}
