export type PipelineStage = {
  id: string;
  label: string;
  description: string;
};

/** The information lifecycle this portfolio is built to demonstrate, end to end. */
export const pipelineStages: PipelineStage[] = [
  { id: "collect", label: "Collect", description: "Gather structured or field data from forms, surveys or systems." },
  { id: "clean", label: "Clean", description: "Remove errors, duplicates and inconsistencies before analysis." },
  { id: "validate", label: "Validate", description: "Check completeness, ranges and logic against expected structure." },
  { id: "analyze", label: "Analyze", description: "Explore and summarise the data to find what actually matters." },
  { id: "visualize", label: "Visualize", description: "Represent findings as charts, tables and dashboards." },
  { id: "interpret", label: "Interpret", description: "Translate visual patterns into plain-language meaning." },
  { id: "report", label: "Report", description: "Structure findings into a clear, professional document." },
  { id: "decide", label: "Decide", description: "Support the technical, business or research decision that follows." },
];
