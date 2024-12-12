"use client";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <h2>📋 The Menu</h2>
      <nav>
        <ul>
          <li>
            <a
              href="/home"
              className={pathname === "/home" ? styles.active : ""}
            >
              <span className={styles.emoji}>🏠</span>
              <span className={styles.title}>Home</span>
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={pathname === "/about" ? styles.active : ""}
            >
              <span className={styles.emoji}>ℹ️</span>
              <span className={styles.title}>About</span>
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className={pathname === "/projects" ? styles.active : ""}
            >
              <span className={styles.emoji}>📂</span>
              <span className={styles.title}>Projects</span>
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className={pathname === "/blog" ? styles.active : ""}
            >
              <span className={styles.emoji}>📝</span>
              <span className={styles.title}>Blog</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
