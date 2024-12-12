import styles from "./page.module.css"; // Import blog page styles

export default function Blog() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Blog 🗞️</h1>
        <p>🐛 here, to practice my bug-স্বাধীনতা ⛓️‍💥</p>
      </header>

      <ul className={styles.posts}>
        {/* Sample posts */}
        <li className={styles.post}>
          <h2>
            <a
              href="https://emerald-draw-709.notion.site/The-Heart-of-Ustad-Hotel-Discovering-Our-Why-1064c95a0f5d802eb698ed94334c591f?pvs=4"
              target="blank"
            >
              🎞️ The Heart of Ustad Hotel: Discovering Our 'Why’
            </a>
          </h2>
          <p>
            This movie has changed my perspective on life. I learned a simple
            yet valuable lesson...
          </p>
        </li>
      </ul>

      <footer className={styles.footer}>
        <p>© 2024 Samin Yeasar. All rights reserved.</p>
      </footer>
    </div>
  );
}
