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
              href="https://emerald-draw-709.notion.site/My-Lifestyle-Goals-403bf5bfa5084282828f1fdea64780de?pvs=4"
              target="blank"
            >
              🌱 My Lifestyle Goals
            </a>
          </h2>
          <p>
            I believe that to upgrade one’s lifestyle, one must first upgrade
            themselves.
          </p>
        </li>
      </ul>
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
      <ul className={styles.posts}>
        {/* Sample posts */}
        <li className={styles.post}>
          <h2>
            <a
              href="https://emerald-draw-709.notion.site/I-ve-Blocked-Facebook-from-My-Computer-1044c95a0f5d8011a419fa1057817799?pvs=4"
              target="blank"
            >
              💪 I've Blocked Facebook from My Computer!
            </a>
          </h2>
          <p>
            For the sake of increasing my productivity, I’ve blocked facebook
            directly from my computer...
          </p>
        </li>
      </ul>
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
