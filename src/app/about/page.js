"use client";
import styles from "./about.module.css"; // CSS Module for scoped styles

import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLinkedin,
  FaGithub,
  FaGoodreads,
  FaEnvelope,
} from "react-icons/fa"; // React Icons
import {
  SiCplusplus,
  SiExpress,
  SiGit,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si"; // Specific icons
import { GrCode } from "react-icons/gr"; // General code icon for LeetCode

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.title}>🧃 About Me 🌵</h1>
      <div className={styles.qaContainer}>
        {/* <div className={styles.qaItem}>
          <h3>👻</h3>
          <p>
            I’m a curious soul navigating the world of tech, still figuring out
            my place here.
          </p>
        </div> */}
        <div className={styles.qaItem}>
          <h3>💼</h3>
          <p>
            Currently, I work as a Junior Software Engineer at{" "}
            <a href="https://www.codemarshal.com/" target="blank">
              CodeMarshal IT Systems
            </a>
            , focusing mostly on JavaScript technologies since February 2024.
          </p>
        </div>
        <div className={styles.qaItem}>
          <h3>🎓</h3>
          <p>
            I hold a B.Sc in CSE from KUET with a CGPA of{" "}
            <span style={{ color: "#71b69c" }}>3.24/4.00</span>. My roll number
            was <span style={{ color: "#71b69c" }}>1507099</span>. Nearly
            dropped out, but that’s a story for another time!
          </p>
        </div>
        <div className={styles.qaItem}>
          <h3>🔧</h3>
          <p>
            Programming:{" "}
            <b>
              <SiCplusplus style={{ color: "#00599C" }} /> C++{" "}
              <FaPython style={{ color: "#FFD43B" }} /> Python{" "}
              <FaJs style={{ color: "#F0DB4F" }} /> JavaScript{" "}
            </b>
          </p>
          <p>
            Frontend:{" "}
            <b>
              <FaReact style={{ color: "#61DBFB" }} /> React.js{" "}
              <SiNextdotjs style={{ color: "#000000" }} /> Next.js{" "}
            </b>
          </p>
          <p>
            Backend:{" "}
            <b>
              <FaNodeJs style={{ color: "#68A063" }} /> Node.js{" "}
              <SiExpress style={{ color: "#000000" }} /> Express.js{" "}
            </b>
          </p>
          <p>
            Mobile Application:{" "}
            <b>
              <FaReact style={{ color: "#61DBFB" }} /> React Native{" "}
            </b>
          </p>
          <p>
            Database:{" "}
            <b>
              <SiPostgresql style={{ color: "#336791" }} /> PostgreSQL{" "}
            </b>
          </p>
          <p>
            Tools:{" "}
            <b>
              <SiGit style={{ color: "#F05033" }} /> Git
            </b>
          </p>
        </div>
        <div className={styles.qaItem}>
          <h3>📟</h3>
          <p>
            Ping me @{" "}
            <a
              className={styles.icon}
              target="_blank"
              rel="noopener"
              href="https://github.com/y3454r"
            >
              <FaGithub style={{ color: "#333" }} /> {/* GitHub Icon */}
            </a>
            ,{" "}
            <a
              className={styles.icon}
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/samin-yeasar-abir/"
            >
              <FaLinkedin style={{ color: "#0077B5" }} /> {/* LinkedIn Icon */}
            </a>
            ,{" "}
            <a
              className={styles.icon}
              target="_blank"
              rel="noopener"
              href="https://www.goodreads.com/user/show/69334929-abir-yeasar"
            >
              <FaGoodreads style={{ color: "#372213" }} />{" "}
              {/* Goodreads Icon */}
            </a>
            , and{" "}
            <a
              className={styles.icon}
              target="_blank"
              rel="noopener"
              href="mailto:syeasar.kuet@gmail.com"
            >
              <FaEnvelope style={{ color: "#EA4335" }} /> {/* Email Icon */}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
