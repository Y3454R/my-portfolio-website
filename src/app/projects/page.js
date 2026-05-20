import projects from "@/data/projects";

const cleanName = (name) => name.replace(/^\p{Emoji}\s*/u, "");

export default function Projects() {
  return (
    <div>
<ul className="space-y-2">
        {projects.map((project, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-notion-accent text-xs">▸</span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-notion-text underline underline-offset-4 hover:text-notion-accent transition-colors"
            >
              {cleanName(project.name)}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-notion-muted">
        Explore more on{" "}
        <a href="https://github.com/y3454r" target="_blank" rel="noopener noreferrer" className="text-notion-accent hover:underline">
          GitHub
        </a>
      </p>
    </div>
  );
}
