"use client";
import styles from "./Footer.module.css"; // Import the footer styles

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href="/home" className={styles.link}>
              <span role="img" aria-label="home" className={styles.emoji}>
                🏠
              </span>
            </a>
          </li>
          <li>
            <a href="/about" className={styles.link}>
              <span role="img" aria-label="about" className={styles.emoji}>
                ℹ️
              </span>
            </a>
          </li>
          <li>
            <a href="/projects" className={styles.link}>
              <span role="img" aria-label="projects" className={styles.emoji}>
                📂
              </span>
            </a>
          </li>
          <li>
            <a href="/blog" className={styles.link}>
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
