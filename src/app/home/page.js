import styles from "./home.module.css"; // Import specific styles

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.profileContainer}>
        <img
          src="/profile-pic.jpg" // Correct path
          alt="Profile Picture"
          className={styles.profilePic} // Apply profilePic class here
        />
      </div>
      <h1>Welcome to My Website</h1>
      <h4>💻 এখানে সিএসই ইঞ্জিনিয়ার দিয়ে গান ডাউনলোড করা হয় 🎵</h4>
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
