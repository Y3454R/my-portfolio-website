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
      <p className={styles.paragraph}>
        I am Samin Yeasar, a software engineer 💼 from 🇧🇩. I create 🐛 in
        JavaScript, try to make 🤖 learn cringe things (for now) in Python, and
        ❌ fail test cases in C++.
      </p>
      <p className={styles.paragraph}>
        {" "}
        I love to read 📚, watch anime 🎬, and engage in what I call
        'shit-coding' 💩.
      </p>
      <p className={styles.paragraph}>
        I can relate to Kafka's <em>Metamorphosis</em>—to know how, you can mail
        me 📧: syeasar.kuet@gmail.com.
      </p>
    </div>
  );
}
