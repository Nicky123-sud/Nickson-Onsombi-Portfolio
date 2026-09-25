export type EducationEntry = {
  id: string;
  title: string;
  institution: string;
  period: string;
  status: "Completed" | "In Progress";
  description: string;
};

export const education: EducationEntry[] = [
  {
    id: "bsc-cs",
    title: "Bachelor of Science in Computer Science",
    institution: "Open University of Kenya",
    period: "In progress",
    status: "In Progress",
    description: "Fully online, flexible study schedule.",
  },
  {
    id: "ict-diploma",
    title: "Diploma in Information Communication Technology",
    institution: "Kisii National Polytechnic (KNEC)",
    period: "Sep 2022 – Jul 2025",
    status: "Completed",
    description:
      "Module III awarded Distinction; Modules I and II awarded Credit. Top grades in Database Management Systems, Internet-Based Programming, Management Information Systems, Computer Applications, Visual Programming and the Course Specialisation Project. Relevant coursework: Systems Analysis and Design, Object-Oriented Programming, Structured Programming, Quantitative Methods.",
  },
  {
    id: "emobilis",
    title: "Website Development Boot Camp — Certificate of Completion",
    institution: "eMobilis Technology Training Institute",
    period: "August 2025",
    status: "Completed",
    description:
      "Python and Django web development and full-stack web application development. Full scholarship funded by the Mastercard Foundation.",
  },
  {
    id: "kcse",
    title: "Kenya Certificate of Secondary Education (KCSE)",
    institution: "E.L.C.K. Itierio Boys High School",
    period: "2021",
    status: "Completed",
    description: "Eight subjects including Mathematics, Biology, Chemistry and Business Studies.",
  },
];
