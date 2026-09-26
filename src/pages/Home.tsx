import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { DataAnalytics } from "@/components/sections/DataAnalytics";
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
        title="Nickson Onsombi — Software Engineer | Data, Automation & Research Technology"
        description="Nickson Onsombi Nyaboga is a Kenya-based software engineer building backend systems, APIs and AI-enabled platforms — and working across data analysis, visualization, research data and technical reporting to support real decisions."
        jsonLd={{ "@graph": [personJsonLd(), websiteJsonLd()] }}
      />
      <Hero />
      <About />
      <Skills />
      <DataAnalytics />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
    </>
  );
}
