"use client";
import {
  FaPython, FaJs, FaReact, FaNodeJs, FaSwift,
} from "react-icons/fa";
import {
  SiCplusplus, SiExpress, SiGit, SiNextdotjs,
  SiPostgresql, SiDocker, SiPytorch,
} from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";

const techRows = [
  {
    label: "Programming",
    items: [
      { icon: <SiCplusplus className="text-blue-600" />, name: "C++" },
      { icon: <FaPython className="text-yellow-500" />, name: "Python" },
      { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
      { icon: <FaSwift className="text-orange-400" />, name: "Swift" },
    ],
  },
  {
    label: "Backend",
    items: [
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
    items: [
      { icon: <SiPytorch className="text-red-500" />, name: "PyTorch" },
    ],
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
        <h2 className="text-xs font-semibold text-notion-muted uppercase tracking-wider underline underline-offset-4">Work</h2>
        <div className="border-l-2 border-notion-accent pl-3">
          <p className="text-sm font-medium text-notion-text">
            <a href="https://www.codemarshal.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              CodeMarshal IT Systems
            </a>
          </p>
          <p className="text-xs text-notion-muted mt-0.5">Software Engineer · web, ocr, computer vision</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-notion-muted uppercase tracking-wider underline underline-offset-4">Education</h2>
        <div className="border-l-2 border-notion-accent pl-3">
          <p className="text-sm font-medium text-notion-text">KUET</p>
          <p className="text-xs text-notion-muted mt-0.5">BSc CSE · CGPA 3.24 (3.54 last 4 semesters)</p>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-semibold text-notion-muted uppercase tracking-wider underline underline-offset-4 mb-3">Stack</h2>
        <div className="border-l-2 border-notion-accent pl-3 space-y-2">
          {techRows.map(({ label, items }) => (
            <div key={label} className="flex items-start gap-3 text-sm">
              <span className="text-notion-muted w-24 shrink-0 pt-0.5">{label}</span>
              <div className="flex flex-wrap gap-2">
                {items.map(({ icon, name }) => (
                  <span key={name} className="inline-flex items-center gap-1 px-2 py-0.5 bg-notion-sidebar border border-notion-border rounded text-notion-text">
                    {icon}
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-notion-muted flex items-center gap-1">
        <FaMapMarkerAlt size={10} /> Dhaka, Bangladesh
      </p>

    </div>
  );
}
