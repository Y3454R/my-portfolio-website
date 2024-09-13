"use client";
import { useEffect, useState } from "react";
import styles from "./about.module.css";

export default function About() {
  const lines = [
    "Hi, I’m Samin Yeasar ",
    ">> Education: CS Grad from KUET ",
    ">> Experiences: Jr. SWE @ CodeMarshal IT Systemss",
    ">> skills : ",
    " *languages: C++, JS, Python ",
    " *frontend: React Native, Next JS ",
    " *backend: Node JS, Express ",
    " *database: PostgreSQL ",
    " *tools: git ",
  ];

  const [displayedText, setDisplayedText] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      if (currentCharIndex < lines[currentLine].length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => {
            const updatedText = [...prev];
            updatedText[currentLine] =
              (updatedText[currentLine] || "") +
              lines[currentLine][currentCharIndex];
            return updatedText;
          });
          setCurrentCharIndex(currentCharIndex + 1);
        }, 100); // Typing speed (adjust the delay)

        return () => clearTimeout(timeoutId); // Cleanup the timeout
      } else {
        // Move to the next line
        const nextLineTimeout = setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setCurrentCharIndex(0);
        }, 500); // Delay between lines
        return () => clearTimeout(nextLineTimeout);
      }
    }
  }, [currentCharIndex, currentLine, lines]);

  return (
    <div className={styles.container}>
      <div className={styles.terminal}>
        <div className={styles.typingWrapper}>
          {displayedText.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className={styles.cursor}></div>
      </div>
    </div>
  );
}
