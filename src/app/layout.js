/* src/app/layout.js */
"use client";
import { usePathname } from "next/navigation"; // Use the new hook for routing
import "./globals.css"; // Import global styles
import styles from "./layout.module.css"; // Import layout-specific styles

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current path

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Samin Yeasar</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* Add any other meta tags or links here */}
      </head>
      <body>
        <div className={styles.container}>
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
                {/* <li>
                  <a
                    href="/error-log"
                    className={pathname === "/error-log" ? styles.active : ""}
                  >
                    <span className={styles.emoji}>🐛</span>
                    <span className={styles.title}>Bug Log</span>
                  </a> 
                </li> */}
              </ul>
            </nav>
          </aside>

          <main className={styles.mainContent}>{children}</main>
        </div>
      </body>
    </html>
  );
}
