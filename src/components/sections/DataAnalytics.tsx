import { technicalReportingSkills } from "@/data/reportWriting";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { DataSkillCards } from "@/components/sections/data/DataSkillCards";
import { DataPipeline } from "@/components/sections/data/DataPipeline";
import { EngineeringDataConnection } from "@/components/sections/data/EngineeringDataConnection";
import { SampleDataViz } from "@/components/sections/data/SampleDataViz";
import { ResearchFieldData } from "@/components/sections/data/ResearchFieldData";
import { ReportStructure } from "@/components/sections/data/ReportStructure";
import { ReportDocumentVisual } from "@/components/sections/data/ReportDocumentVisual";
import { ToolsMatrix } from "@/components/sections/data/ToolsMatrix";

export function DataAnalytics() {
  return (
    <section id="data" className="border-b border-[var(--border)] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Data & Analytics"
          title="Turning data into clear, actionable insight."
          description="I work across data collection, cleaning, analysis, visualization and reporting to transform raw information into structured insights that support better technical, business and research decisions."
        />

        <div className="mt-12">
          <DataSkillCards />
        </div>

        <div className="mt-20">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
              Data → Report Pipeline
            </p>
            <h3 className="mt-3 font-[var(--font-display)] text-2xl font-semibold text-[var(--text)] sm:text-3xl">
              The same information lifecycle, every time.
            </h3>
          </Reveal>
          <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10">
            <DataPipeline />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <EngineeringDataConnection />
          <SampleDataViz />
        </div>

        <div className="mt-20">
          <ResearchFieldData />
        </div>

        <div className="mt-24 border-t border-[var(--border)] pt-16">
          <SectionHeading
            eyebrow="Report Writing & Technical Documentation"
            title="From evidence to professional reports."
            description="I structure technical and research information into clear, professional reports that communicate findings, methods, results, recommendations and supporting evidence to technical and non-technical audiences."
          />

          <Reveal delay={0.05} className="mt-6 flex flex-wrap gap-2">
            {technicalReportingSkills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <ReportDocumentVisual />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-2)]">
                Research Report Structure
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                Reporting is an organised analytical process, not just writing documents —
                every report follows the same structure from context through to appendices.
              </p>
              <div className="mt-8">
                <ReportStructure />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
              Tools & Technologies
            </p>
          </Reveal>
          <div className="mt-6">
            <ToolsMatrix />
          </div>
        </div>
      </Container>
    </section>
  );
}
