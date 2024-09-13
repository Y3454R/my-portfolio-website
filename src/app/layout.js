// src/app/layout.js
import "./globals.css"; // Import global styles
import styles from "./layout.module.css"; // Import layout-specific styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Portfolio</title>
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
                  <a href="/home">🏠 Home</a>
                </li>
                <li>
                  <a href="/about">ℹ️ About</a>
                </li>
                <li>
                  <a href="/projects">📂 Projects</a>
                </li>
                <li>
                  <a href="/blog">📝 Blog</a>
                </li>
                <li>
                  <a href="/blog">💩 Shit-posts</a>
                </li>
              </ul>
            </nav>
          </aside>
          <main className={styles.mainContent}>{children}</main>
        </div>
      </body>
    </html>
  );
}
