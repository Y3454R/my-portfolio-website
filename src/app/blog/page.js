import { posts } from "@/data/posts";
import styles from "./page.module.css"; // Import blog page styles

export default function Blog() {
  function stripHtmlTags(html) {
    return html.replace(/<[^>]+>/g, ""); // Removes HTML tags
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Blog 🗞️</h1>
        <p>🐛 here, to practice my bug-স্বাধীনতা ⛓️‍💥</p>
      </header>

      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.slug} className={styles.post}>
            <h2>
              <a href={`/blog/${post.slug}`}>{post.title}</a>
            </h2>
            <p>{stripHtmlTags(post.content).substring(0, 100)}...</p>{" "}
            {/* Display plain text */}
          </li>
        ))}
      </ul>

      <footer className={styles.footer}>
        <p>© 2024 Samin Yeasar. All rights reserved.</p>
      </footer>
    </div>
  );
}
