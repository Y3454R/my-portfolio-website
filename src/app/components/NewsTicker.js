"use client";
import { useEffect, useState } from "react";
import styles from "./NewsTicker.module.css"; // Import the CSS module for styling

const NewsTicker = ({ text, speed = 5 }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Dynamically update the width of the ticker content to calculate the right scroll distance
    const tickerWidth = document.getElementById("ticker-content")?.offsetWidth;
    if (tickerWidth) {
      setWidth(tickerWidth);
    }
  }, [text]);

  return (
    <div className={styles.tickerContainer}>
      <div
        id="ticker-content"
        className={styles.tickerContent}
        style={{
          animationDuration: `${speed}s`,
          animationIterationCount: "infinite",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default NewsTicker;
