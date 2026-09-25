export type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "Current Role" | "Freelance / Remote" | "Attachment / Internship";
  location: string;
  responsibilities: string[];
  technologies: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "miti-app",
    role: "Backend Engineer — Miti App (Miti Ni Poa)",
    organization: "MitiNiPoa Africa Group Ltd",
    period: "Current",
    type: "Current Role",
    location: "Remote, Kenya",
    responsibilities: [
      "Built the platform's REST API with Django, Django REST Framework and MySQL — covering user management, JWT authentication, tree-planting records, AI detection and reports.",
      "Contribute to the organisation's backend repository, extending the platform with AI services, analytics and notifications.",
      "Leading remediation of findings from a principal-level backend audit (September 2026) alongside new features, and containerising the service with Docker for consistent environments.",
      "Built firmware for the platform's ESP32 sensor node, streaming temperature, humidity and soil-moisture data to the cloud over MQTT; resolved GPIO, ADC2/Wi-Fi, calibration and power issues.",
    ],
    technologies: ["Django", "Django REST Framework", "MySQL", "JWT", "Docker", "ESP32", "MQTT"],
  },
  {
    id: "srdc",
    role: "Full-Stack Software Developer & ICT Officer",
    organization: "Siraj Research & Development Consultancy (SRDC)",
    period: "Current — Freelance, Remote",
    type: "Freelance / Remote",
    location: "Hargeisa, Somaliland (remote)",
    responsibilities: [
      "Building the company's multilingual website on Next.js 16, React 19, strict TypeScript and Tailwind CSS v4, with a design-token system, component library and internationalisation for English and Somali, extensible to four more languages.",
      "Gathered requirements and wrote an 18-document architecture and specification suite before build; manage changes through versioned documentation and phased stakeholder sign-off.",
      "Set up CI, lint/type checks and Playwright tests; caught defects in review, including a form bug that would have broken submissions and a colour token failing WCAG AA contrast.",
      "Produce data-driven technical reports, Excel registers, branded templates and presentations for government and development-sector clients, including work under the World Bank–funded Somaliland Food Systems Resilience Project.",
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Playwright", "CI"],
  },
  {
    id: "kisii-county",
    role: "ICT Attachee (two industrial attachments)",
    organization: "Kisii County Government",
    period: "Sep – Dec 2023, Sep – Dec 2024",
    type: "Attachment / Internship",
    location: "Kisii, Kenya",
    responsibilities: [
      "Participated in system development and maintenance activities within the county ICT department.",
      "Installed, upgraded and configured software, provided first-line application support to staff, and performed hardware diagnostics.",
      "Handled data entry, documentation and records preparation.",
    ],
    technologies: ["System Administration", "Application Support", "Documentation"],
  },
];
