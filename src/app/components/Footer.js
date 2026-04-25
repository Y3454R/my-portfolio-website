"use client";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <a
              href="/home"
              className={`${styles.link} ${
                pathname === "/home" ? styles.active : ""
              }`}
            >
              <span role="img" aria-label="home" className={styles.emoji}>
                🏠
              </span>
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`${styles.link} ${
                pathname === "/about" ? styles.active : ""
              }`}
            >
              <span role="img" aria-label="about" className={styles.emoji}>
                ℹ️
              </span>
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className={`${styles.link} ${
                pathname === "/projects" ? styles.active : ""
              }`}
            >
              <span role="img" aria-label="projects" className={styles.emoji}>
                📂
              </span>
            </a>
          </li>

          <li>
            <a
              href="/blog"
              className={`${styles.link} ${
                pathname === "/blog" ? styles.active : ""
              }`}
            >
              <span role="img" aria-label="blog" className={styles.emoji}>
                📝
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
