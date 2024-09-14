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
              href="https://emerald-draw-709.notion.site/1014c95a0f5d80f4bb80ee4640219336?pvs=4"
              target="blank"
            >
              💬 কালকে থেকে পড়তে বসব
            </a>
          </h2>
          <p>
            জ্বর আসার আগে একটা ওম ওম ভাব হয় না? এই ওমে স্বপ্ন দেখতে খুব অপার্থিব
            একটা আরাম লাগে। ছোটবেলায় দেখা স্বপ্ন নস্টালজিয়ার মত মনে পড়ে...
          </p>
        </li>
      </ul>
      <footer className={styles.footer}>
        <p>© 2024 Samin Yeasar. All rights reserved.</p>
      </footer>
    </div>
  );
}
