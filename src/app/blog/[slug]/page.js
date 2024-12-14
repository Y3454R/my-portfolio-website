/* src/app/blog/[slug]/page.js */

import { posts } from "@/data/posts";
import styles from "./page.module.css";

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1>{post.title}</h1>
        <p className={styles.meta}>
          {post.genre} | {post.date} | {post.author}
        </p>
        <img src={post.image} alt={post.title} className={styles.image} />
      </header>
      <section
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></section>
      <footer className={styles.footer}>
        <p>Thank you for reading! 🍩</p>
      </footer>
    </article>
  );
}
