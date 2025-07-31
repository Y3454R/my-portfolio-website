/* src/app/home/page.js */
"use client";
import NewsTicker from "../components/NewsTicker";
import styles from "./home.module.css"; // Import specific styles

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.profileContainer}>
        <img
          src="/profile-pic.jpg"
          alt="Profile Picture"
          className={styles.profilePic}
        />
      </div>
      <h1 className={styles.title}>I Wonder How, I Wonder Why! 🍋</h1>{" "}
      <div className={styles.paragraph}>
        <NewsTicker text="💻 এখানে CSE ইঞ্জিনিয়ার দ্বারা গান লোড করা হয় 🎵" />
      </div>
      <p className={styles.paragraph}>SWE 💻 | Bibliophile 📚 | Weeb ◕⩊◕</p>
      <p className={styles.paragraph}>
        I’m Samin Yeasar, a software engineer from 🇧🇩. I create 🐛 in code, try
        to make 💻 smarter while staying dumb myself, and face ❌ on LeetCode
        now and then.
      </p>
      <p className={styles.paragraph}>
        In my free time, I love to read 📚, watch anime 🎬, and engage in what I
        call '💩-coding' — powered by ☕ or 🍫.
      </p>
      <p className={styles.paragraph}>
        I can relate to Kafka's <em>Metamorphosis</em> — to know how, you can
        mail me 📧: syeasar.kuet@gmail.com.
      </p>
    </div>
  );
}
