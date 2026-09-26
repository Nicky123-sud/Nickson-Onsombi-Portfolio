export type ToolCategory = {
  id: string;
  title: string;
  tools: string[];
};

/** Capability categories, not proficiency percentages. */
export const toolsMatrix: ToolCategory[] = [
  { id: "programming", title: "Programming", tools: ["Python", "SQL", "TypeScript", "JavaScript"] },
  { id: "data", title: "Data", tools: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
  { id: "databases", title: "Databases", tools: ["MySQL", "PostgreSQL"] },
  { id: "backend", title: "Backend", tools: ["Django", "Django REST Framework"] },
  { id: "research", title: "Research / Data Collection", tools: ["KoboToolbox"] },
  { id: "engineering", title: "Engineering", tools: ["Git", "GitHub", "REST APIs"] },
  { id: "reporting", title: "Reporting", tools: ["Microsoft Word", "Excel", "PowerPoint"] },
];
