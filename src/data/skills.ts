export type SkillCategory =
  | "Software Engineering"
  | "Data & Analytics"
  | "Research & Reporting"
  | "DevOps & Tools";

export type SkillGroup = {
  id: string;
  category: SkillCategory;
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    category: "Software Engineering",
    title: "Backend & APIs",
    description: "Server-side logic, authentication and third-party integrations.",
    skills: [
      "Django",
      "Django REST Framework",
      "RESTful API Design",
      "JWT Authentication & Access Control",
      "Django ORM",
      "M-Pesa Daraja (STK Push)",
      "SendGrid",
      "AI Detection Service Integration",
    ],
  },
  {
    id: "frontend",
    category: "Software Engineering",
    title: "Frontend",
    description: "Interfaces that are fast, responsive and accessible.",
    skills: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Bootstrap",
      "Accessible / WCAG UI",
    ],
  },
  {
    id: "systems",
    category: "Software Engineering",
    title: "Systems & IoT",
    description: "Where software meets physical sensors, stakeholders and change.",
    skills: [
      "ESP32",
      "Environmental Sensors",
      "MQTT Cloud Messaging",
      "Requirements Gathering & Specifications",
      "Change Management",
      "Stakeholder Sign-off",
    ],
  },
  {
    id: "data-analytics",
    category: "Data & Analytics",
    title: "Data Analysis & Visualization",
    description: "Working with structured data, from queries to charts.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Matplotlib",
      "Seaborn",
      "Data Validation",
    ],
  },
  {
    id: "data-management",
    category: "Data & Analytics",
    title: "Data Management",
    description: "Structuring and maintaining relational, real-world data.",
    skills: [
      "Relational Database Design",
      "Data Modelling",
      "Data Entry & Validation",
      "Record Audits",
      "Reporting Modules",
      "Excel Registers",
    ],
  },
  {
    id: "research-reporting",
    category: "Research & Reporting",
    title: "Research & Technical Reporting",
    description: "Turning field and technical data into decision-ready documents.",
    skills: [
      "Data Collection",
      "KoboToolbox",
      "Data Cleaning",
      "Data Validation",
      "Research Analysis",
      "Technical Reports",
      "Field Reports",
      "Data-Driven Reporting",
      "Technical Documentation",
    ],
  },
  {
    id: "devops-tools",
    category: "DevOps & Tools",
    title: "Engineering Practices",
    description: "How I keep software reliable as it grows.",
    skills: [
      "Git & GitHub",
      "Code Review",
      "Debugging & Root-Cause Analysis",
      "Playwright Automated Testing",
      "CI Pipelines",
      "Docker",
      "VS Code",
    ],
  },
  {
    id: "collaboration-tools",
    category: "DevOps & Tools",
    title: "Tools & Collaboration",
    description: "The everyday toolkit for shipping and reporting work.",
    skills: [
      "Microsoft 365 (Excel, Word, PowerPoint, Outlook, Teams, SharePoint)",
      "Google Workspace",
      "Jira",
      "Asana",
      "Slack",
    ],
  },
];

export const skillCategoryOrder: SkillCategory[] = [
  "Software Engineering",
  "Data & Analytics",
  "Research & Reporting",
  "DevOps & Tools",
];
