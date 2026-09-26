export type CapabilityLevel = "Practical experience" | "Working knowledge" | "Applied capability";

export type DataSkillCard = {
  id: string;
  title: string;
  level: CapabilityLevel;
  description: string;
  technologies: string[];
};

/**
 * Deliberately hedged capability levels (never "expert", never a percentage) —
 * see the Data & Analytics section copy for how these are surfaced.
 */
export const dataSkillCards: DataSkillCard[] = [
  {
    id: "data-analysis",
    title: "Data Analysis",
    level: "Practical experience",
    description:
      "Cleaning, transforming and exploring datasets before they're trusted for reporting or decisions.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Statistical Summaries",
    ],
  },
  {
    id: "data-visualization",
    title: "Data Visualization",
    level: "Working knowledge",
    description:
      "Presenting structured data as charts and dashboards built to support a decision, not just decorate a page.",
    technologies: [
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "Tableau",
      "Trend Analysis",
      "KPI Presentation",
    ],
  },
  {
    id: "database-sql",
    title: "Database & SQL",
    level: "Practical experience",
    description:
      "Designing relational schemas and writing queries that keep structured data consistent as it grows.",
    technologies: [
      "MySQL",
      "PostgreSQL",
      "SQL Querying",
      "Database Design",
      "Data Normalisation",
      "Data Validation",
    ],
  },
  {
    id: "research-data",
    title: "Research Data",
    level: "Working knowledge",
    description:
      "Structuring survey, household and field data from collection through to analysis-ready datasets.",
    technologies: [
      "KoboToolbox",
      "Survey Datasets",
      "Household Data",
      "KII / FGD Data",
      "Coding & Categorisation",
    ],
  },
  {
    id: "technical-reporting",
    title: "Technical Reporting",
    level: "Practical experience",
    description:
      "Structuring findings, methods and recommendations into reports technical and non-technical readers can use.",
    technologies: [
      "Technical Reports",
      "Executive Summaries",
      "Findings & Recommendations",
      "Tables & Figures",
    ],
  },
  {
    id: "documentation",
    title: "Documentation",
    level: "Practical experience",
    description:
      "Writing architecture, specification and methodology documentation a team can actually follow.",
    technologies: [
      "Architecture Docs",
      "Specifications",
      "Methodology Notes",
      "API Documentation",
    ],
  },
  {
    id: "automation",
    title: "Automation",
    level: "Working knowledge",
    description:
      "Scripting the repetitive parts of a data or reporting workflow so they run the same way every time.",
    technologies: ["Python Scripting", "Data Cleaning Pipelines", "CI Automation"],
  },
];
