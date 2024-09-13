"use client";
import { useEffect, useState } from "react";
import styles from "./typingEffect.module.css"; // Import the CSS module for styling

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (index < text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        }, 100); // Typing speed

        return () => clearTimeout(timeoutId); // Cleanup the timeout
      } else {
        // Pause before starting to delete
        const pauseTimeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 1000); // Delay before deletion starts

        return () => clearTimeout(pauseTimeoutId);
      }
    } else {
      if (index > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        }, 50); // Deletion speed

        return () => clearTimeout(timeoutId); // Cleanup the timeout
      } else {
        // Pause before starting to type again
        const pauseTimeoutId = setTimeout(() => {
          setIsTyping(true);
          setIndex(0);
        }, 1000); // Delay before typing starts again

        return () => clearTimeout(pauseTimeoutId);
      }
    }
  }, [index, text, isTyping]);

  return <div className={styles.typingEffect}>{displayedText}</div>;
};

export default TypingEffect;
