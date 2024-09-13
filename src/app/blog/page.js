import styles from "./page.module.css"; // Import blog page styles

export default function Blog() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Blog</h1>
        <p>Welcome to my blog. Here are some of my recent posts:</p>
      </header>
      <ul className={styles.posts}>
        {/* Sample posts */}
        <li className={styles.post}>
          <h2>
            <a href="/blog/sample-post">Sample Post Title</a>
          </h2>
          <p>Sample excerpt from the post.</p>
        </li>
      </ul>
      <footer className={styles.footer}>
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
