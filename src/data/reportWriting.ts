export type ReportStructureStep = {
  step: string;
  title: string;
};

/** Communicates reporting as an organised analytical process, not just "writing documents". */
export const reportStructureSteps: ReportStructureStep[] = [
  { step: "01", title: "Background & Context" },
  { step: "02", title: "Methodology" },
  { step: "03", title: "Data & Analysis" },
  { step: "04", title: "Findings" },
  { step: "05", title: "Discussion" },
  { step: "06", title: "Conclusions" },
  { step: "07", title: "Recommendations" },
  { step: "08", title: "Appendices" },
];

export const technicalReportingSkills: string[] = [
  "Technical Reports",
  "Project Reports",
  "Progress Reports",
  "Assessment Reports",
  "Field Reports",
  "Research Reports",
  "Data Analysis Reports",
  "Executive Summaries",
  "Methodology Documentation",
  "Findings & Recommendations",
  "Tables & Figures",
  "Appendices",
  "Technical Documentation",
];

export const reportDocumentSections: string[] = [
  "Executive Summary",
  "Methodology",
  "Key Findings",
  "Data Analysis",
  "Recommendations",
];
