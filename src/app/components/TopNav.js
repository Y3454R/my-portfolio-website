// src/app/components/TopNav.js

"use client";
import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaResearchgate,
  FaEnvelope,
} from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import styles from "./TopNav.module.css";

const TopNav = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark/light theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme", !darkMode);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>🍔 Samin Yeasar</div>

      <div className={styles.icons}>
        <a
          href="https://www.linkedin.com/in/samin-yeasar-abir/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Y3454R"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://www.researchgate.net/profile/Samin-Yeasar-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaResearchgate size={24} />
        </a>
        <a
          href="mailto:syeasar.kuet@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={24} />
        </a>
        {/* <button className={styles.themeToggle} onClick={toggleTheme}>
          {darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
        </button> */}
      </div>
    </nav>
  );
};

export default TopNav;
