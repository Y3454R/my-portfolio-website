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
        I am a software engineer. I love to read books (mostly fiction) and
        watch anime.
      </p>
      <p className={styles.paragraph}>
        I want to know about computers.
      </p>
      {/* <blockquote className={styles.paragraph}>
        So give me coffee and TV, easily
        <br />
        I've seen so much, I'm going blind
        <br />
        And I'm brain-dead virtually
        <br />
        Sociability is hard enough for me
        <br />
        Take me away from this big bad world
        <br /> ~{" "}
        <a target="_blank" href="https://youtu.be/6oqXVx3sBOk">
          Blur
        </a>
      </blockquote> */}
    </div>
  );
}
