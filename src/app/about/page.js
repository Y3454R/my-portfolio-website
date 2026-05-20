"use client";
import { FaPython, FaJs, FaReact, FaNodeJs, FaSwift } from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiFastapi,
  SiGit,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiPytorch,
} from "react-icons/si";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const techRows = [
  {
    label: "Programming",
    items: [
      { icon: <FaPython className="text-yellow-500" />, name: "Python" },
      { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
      { icon: <SiCplusplus className="text-blue-600" />, name: "C++" },
      // { icon: <FaSwift className="text-orange-400" />, name: "Swift" },
    ],
  },
  {
    label: "Backend",
    items: [
      { icon: <SiFastapi className="text-teal-500" />, name: "FastAPI" },
      { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { icon: <FaReact className="text-blue-400" />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
    ],
  },
  {
    label: "Mobile",
    items: [
      { icon: <FaReact className="text-blue-400" />, name: "React Native" },
    ],
  },
  {
    label: "AI",
    items: [{ icon: <SiPytorch className="text-red-500" />, name: "PyTorch" }],
  },
  {
    label: "Database",
    items: [
      { icon: <SiPostgresql className="text-blue-700" />, name: "PostgreSQL" },
    ],
  },
  {
    label: "Tools",
    items: [
      { icon: <SiGit className="text-red-500" />, name: "Git" },
      { icon: <SiDocker className="text-blue-500" />, name: "Docker" },
    ],
  },
];

export default function About() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-notion-muted uppercase tracking-wider underline underline-offset-4">
          Work
        </h2>
        <div className="border-l-2 border-notion-accent pl-3">
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm font-medium text-notion-text">
              <a
                href="https://www.codemarshal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                CodeMarshal IT Systems
              </a>
            </p>
            <span className="text-xs text-notion-muted shrink-0">
              Feb 2024 – Present
            </span>
          </div>
          <p className="text-xs text-notion-muted mt-0.5">Software Engineer</p>
          <p className="text-xs text-notion-muted mt-0.5">
            Web Apps • CI/CD • Computer Vision
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-notion-muted uppercase tracking-wider underline underline-offset-4">
          Education
        </h2>
        <div className="border-l-2 border-notion-accent pl-3">
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm font-medium text-notion-text">
              Khulna University of Engineering & Technology (KUET)
            </p>
            <span className="text-xs text-notion-muted shrink-0">
              2016 – 2023
            </span>
          </div>
          <p className="text-xs text-notion-muted mt-0.5">
            B.Sc. in Computer Science & Engineering
          </p>
          <p className="text-xs text-notion-muted mt-0.5">
            CGPA: 3.24 / 4.00 • Last 4 Semesters Avg: 3.54
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-semibold text-notion-muted uppercase tracking-wider underline underline-offset-4 mb-3">
          Technologies
        </h2>
        <div className="border-l-2 border-notion-accent pl-3 space-y-2">
          {techRows.map(({ label, items }) => (
            <div key={label} className="flex items-start gap-3 text-sm">
              <span className="text-notion-muted w-24 shrink-0 pt-0.5">
                {label}
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map(({ icon, name }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-notion-sidebar border border-notion-border rounded text-notion-text"
                  >
                    {icon}
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-notion-muted uppercase tracking-wider underline underline-offset-4">
          Contact
        </h2>
        <div className="border-l-2 border-notion-accent pl-3 space-y-1.5">
          <p className="text-xs text-notion-muted flex items-center gap-2">
            <FaMapMarkerAlt size={10} /> Dhaka, Bangladesh
          </p>
          <a
            href="mailto:syeasar.kuet@gmail.com"
            className="text-xs text-notion-muted hover:text-notion-accent transition-colors flex items-center gap-2"
          >
            <FaEnvelope size={10} /> syeasar.kuet@gmail.com
          </a>
          <a
            href="tel:+8801733066769"
            className="text-xs text-notion-muted hover:text-notion-accent transition-colors flex items-center gap-2"
          >
            <FaPhone size={10} /> +880 1733 066769
          </a>
          <a
            href="https://www.linkedin.com/in/samin-yeasar-abir/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-notion-muted hover:text-notion-accent transition-colors flex items-center gap-2"
          >
            <FaLinkedin size={10} /> linkedin.com/in/samin-yeasar-abir
          </a>
          <a
            href="https://github.com/Y3454R"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-notion-muted hover:text-notion-accent transition-colors flex items-center gap-2"
          >
            <FaGithub size={10} /> github.com/Y3454R
          </a>
        </div>
      </section>
    </div>
  );
}
