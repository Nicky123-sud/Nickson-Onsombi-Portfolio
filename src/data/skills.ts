export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
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
    id: "databases",
    title: "Databases & Data",
    description: "Modeling, validating and reporting on relational data.",
    skills: [
      "MySQL",
      "Relational Database Design",
      "Data Modelling",
      "Data Entry & Validation",
      "Record Audits",
      "Reporting Modules",
      "Excel Registers",
    ],
  },
  {
    id: "engineering",
    title: "Engineering Practices",
    description: "How I keep software reliable as it grows.",
    skills: [
      "Git & GitHub",
      "Code Review",
      "Debugging & Root-Cause Analysis",
      "Playwright Automated Testing",
      "CI Pipelines",
      "Docker",
      "Technical Documentation",
    ],
  },
  {
    id: "systems",
    title: "Systems & Support",
    description: "Bridging technical work with real stakeholders.",
    skills: [
      "Requirements Gathering & Specifications",
      "Change Management",
      "Stakeholder Sign-off",
      "User & Application Support",
      "Software Installation & Configuration",
    ],
  },
  {
    id: "iot",
    title: "IoT & Emerging Tech",
    description: "Where software meets physical sensors and data.",
    skills: ["ESP32", "Environmental Sensors", "MQTT Cloud Messaging"],
  },
  {
    id: "tools",
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
