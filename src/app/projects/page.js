import styles from "./projects.module.css";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🚀 Projects</h1>
      <ul className={styles.projectsList}>
        {projects.map((project, index) => (
          <li key={index} className={styles.projectItem}>
            <h2 className={styles.projectName}>
              <a href={project.link}>{project.name}</a>
            </h2>
            <p
              className={styles.projectDescription}
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </li>
        ))}
      </ul>
      <p>
        To explore more, visit{" "}
        <a href="https://www.github.com/y3454r">my GitHub profile.</a>
      </p>
    </div>
  );
}
