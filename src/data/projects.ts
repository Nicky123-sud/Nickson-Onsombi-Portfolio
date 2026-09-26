export type ProjectStatus = "Live" | "In Development" | "Completed" | "Prototype";

const projectImage = (file: string) => `${import.meta.env.BASE_URL}images/projects/${file}`;

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  /** Real project visual (public/images/projects). Falls back to an SVG diagram when absent. */
  image?: string;
  visual: "miti" | "platform" | "commerce" | "api" | "records" | "sites";
  description: string;
  longDescription: string;
  role: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: { label: string; implemented: boolean }[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "mitiapp-miti-ni-poa",
    title: "Miti App — Miti Ni Poa",
    category: "AI-Powered Agritech Platform",
    status: "Live",
    image: projectImage("miti-app-project.webp"),
    visual: "miti",
    featured: true,
    description:
      "Backend engineer on an AI-powered tree-planting and environmental monitoring platform — REST API, AI detection, and IoT sensor firmware.",
    longDescription:
      "Miti Ni Poa (\"Trees are cool\") is a production AI-powered agritech platform for tree-planting and environmental monitoring, built by MitiNiPoa Africa Group Ltd. As backend engineer, I built the platform's REST API — user management, JWT authentication, tree-planting records, AI detection and reporting — and extended it into IoT territory with a custom ESP32 sensor node.",
    role: "Backend Engineer — REST API, AI service integration, IoT firmware, and backend audit remediation.",
    problem:
      "Tracking tree planting and environmental health at scale needs a reliable backend that can handle user data, AI-assisted detection results, and live sensor readings from the field.",
    solution:
      "A Django REST Framework API backed by MySQL, with JWT-based authentication, endpoints for tree-planting records and AI detection results, and a companion ESP32 sensor node streaming environmental data over MQTT.",
    architecture: [
      "Django REST Framework API with JWT authentication and MySQL",
      "AI detection service integration for plant/tree analysis",
      "Analytics and notifications extending the core backend",
      "Dockerized service for consistent deployment environments",
      "ESP32 firmware streaming temperature, humidity and soil-moisture data over MQTT",
    ],
    features: [
      { label: "REST API — user management, JWT auth, MySQL", implemented: true },
      { label: "Tree-planting records and reporting endpoints", implemented: true },
      { label: "AI detection service integration", implemented: true },
      { label: "ESP32 sensor node streaming data over MQTT", implemented: true },
      { label: "Dockerized deployment", implemented: true },
      { label: "Remediation of principal-level backend audit findings", implemented: true },
    ],
    technologies: ["Django", "Django REST Framework", "MySQL", "JWT", "Docker", "ESP32", "MQTT"],
  },
  {
    slug: "srdc-multilingual-platform",
    title: "SRDC Multilingual Website",
    category: "Full-Stack · Freelance",
    status: "In Development",
    image: projectImage("srdc-project.webp"),
    visual: "platform",
    featured: true,
    description:
      "A multilingual Next.js platform for a Somaliland-based research and development consultancy, built with a full design-token system and English/Somali i18n.",
    longDescription:
      "For Siraj Research & Development Consultancy (SRDC) in Hargeisa, Somaliland, I'm building a multilingual company website on Next.js 16 and React 19 — including a design-token system, a component library, and internationalisation for English and Somali (extensible to four more languages). The engagement also included an 18-document architecture and specification suite written up-front, CI with lint/type checks and Playwright tests, and technical reporting for government and development-sector clients, including work under the World Bank–funded Somaliland Food Systems Resilience Project.",
    role: "Full-Stack Software Developer & ICT Officer (freelance, remote).",
    problem:
      "A research and development consultancy working with government and development-sector clients needed a professional, multilingual web presence with a maintainable design system rather than a one-off marketing site.",
    solution:
      "A Next.js 16 / React 19 application built on strict TypeScript and Tailwind CSS v4, with a documented design-token system, reusable component library, and English/Somali internationalisation designed to extend to more languages.",
    architecture: [
      "Next.js 16 (App Router) + React 19, strict TypeScript",
      "Tailwind CSS v4 design-token system and component library",
      "Internationalisation (English, Somali; extensible)",
      "CI with lint/type checks and Playwright end-to-end tests",
    ],
    features: [
      { label: "Design-token system and component library", implemented: true },
      { label: "English / Somali internationalisation", implemented: true },
      { label: "CI, linting, type checks and Playwright tests", implemented: true },
      { label: "18-document architecture & specification suite", implemented: true },
      { label: "Extend i18n to four additional languages", implemented: false },
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Playwright"],
  },
  {
    slug: "mpesa-point-of-sale",
    title: "Point-of-Sale System with M-Pesa",
    category: "Personal Project",
    status: "Completed",
    image: projectImage("mpesa-pos-project.webp"),
    visual: "api",
    description:
      "A POS application with M-Pesa STK Push payments, tested against the Safaricom Daraja sandbox.",
    longDescription:
      "A point-of-sale application that integrates Safaricom's M-Pesa Daraja API to accept STK Push payments directly at checkout, tested end-to-end against the Daraja sandbox environment.",
    role: "Sole developer.",
    problem:
      "Small retail setups need a simple point-of-sale system that can accept mobile-money payments directly, without manual reconciliation.",
    solution:
      "A Django application handling sales records and inventory, integrated with the M-Pesa Daraja STK Push API so customers can pay directly from the till.",
    architecture: [
      "Django backend with MySQL",
      "M-Pesa Daraja API integration (STK Push)",
      "Tested against the Safaricom Daraja sandbox",
    ],
    features: [
      { label: "Sales and inventory records", implemented: true },
      { label: "M-Pesa STK Push checkout", implemented: true },
    ],
    technologies: ["Django", "MySQL", "Daraja API"],
  },
  {
    slug: "wifi-billing-system",
    title: "WiFi Billing System",
    category: "Personal Project",
    status: "Completed",
    image: projectImage("wifi-billing-project.webp"),
    visual: "api",
    description:
      "A billing platform with package management, user authentication and secure online M-Pesa payments.",
    longDescription:
      "A billing platform for WiFi/hotspot service providers — managing data packages, authenticating users, and accepting secure online payments via M-Pesa.",
    role: "Sole developer.",
    problem:
      "WiFi service providers need to manage packages and collect payments without manual tracking or trust-based access.",
    solution:
      "A Django-based billing system with package management, user authentication, and M-Pesa payment integration for secure online transactions.",
    architecture: [
      "Django backend with MySQL",
      "User authentication and package management",
      "M-Pesa Daraja API for online payments",
    ],
    features: [
      { label: "Package management", implemented: true },
      { label: "User authentication", implemented: true },
      { label: "Secure M-Pesa online payments", implemented: true },
    ],
    technologies: ["Django", "MySQL", "Daraja API"],
  },
  {
    slug: "online-shoe-store",
    title: "Online Shoe Store",
    category: "Personal Project",
    status: "Completed",
    image: projectImage("shoe-store-project.webp"),
    visual: "commerce",
    description:
      "An e-commerce platform with product listings, cart, user authentication, order management and a responsive UI.",
    longDescription:
      "A full e-commerce web application covering the core retail flow: browsing product listings, managing a cart, authenticating users, and tracking orders — built with a responsive interface.",
    role: "Sole developer.",
    problem:
      "Demonstrating a complete e-commerce flow end-to-end, from product discovery to order management.",
    solution:
      "A web application with product listings, a shopping cart, user authentication and order management, built with a responsive UI.",
    architecture: ["Product catalogue and cart", "User authentication", "Order management"],
    features: [
      { label: "Product listings and cart", implemented: true },
      { label: "User authentication", implemented: true },
      { label: "Order management", implemented: true },
      { label: "Responsive UI", implemented: true },
    ],
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
  },
  {
    slug: "membership-library-systems",
    title: "Membership & Library Management Systems",
    category: "Personal Project",
    status: "Completed",
    image: projectImage("library-management-project.webp"),
    visual: "records",
    description:
      "Record-management systems covering members, stock, cataloguing, loans and reporting.",
    longDescription:
      "Two related record-management systems built with Django 4.2: a membership system and a library management system, covering member records, stock/catalogue management, loan tracking and reporting.",
    role: "Sole developer.",
    problem:
      "Organisations tracking members or lending stock (like a library) need structured record-keeping instead of spreadsheets.",
    solution:
      "Django 4.2 applications modeling members, stock/catalogue items, and loans, with reporting views over the underlying data.",
    architecture: ["Django 4.2 models for members, stock and loans", "Reporting views"],
    features: [
      { label: "Member records", implemented: true },
      { label: "Stock / catalogue management", implemented: true },
      { label: "Loan tracking", implemented: true },
      { label: "Reporting", implemented: true },
    ],
    technologies: ["Python", "Django 4.2"],
  },
  {
    slug: "client-websites",
    title: "Client Websites",
    category: "Freelance",
    status: "Completed",
    image: projectImage("client-websites-project.webp"),
    visual: "sites",
    description:
      "Websites developed for Nyanchwa Adventist Primary School, Amatech Systems, and Hon. Patrick Lumumba.",
    longDescription:
      "A set of client websites built with HTML, CSS and JavaScript for a primary school, a technology company, and a public figure — each with its own content structure and presentation needs.",
    role: "Sole developer — design, markup, styling and content structure.",
    problem:
      "Each client needed a straightforward, reliable web presence without the overhead of a custom application.",
    solution:
      "Static, responsive websites tailored to each client's content and audience, built with HTML, CSS and JavaScript.",
    architecture: ["Static, responsive frontend per site (HTML/CSS/JS)"],
    features: [
      { label: "Nyanchwa Adventist Primary School website", implemented: true },
      { label: "Amatech Systems website", implemented: true },
      { label: "Hon. Patrick Lumumba website", implemented: true },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
