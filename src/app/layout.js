"use client";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar"; // Import Sidebar component
import TopNav from "@/app/components/TopNav"; // Import TopNav component
import styles from "./layout.module.css"; // Import CSS for layout
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Samin Yeasar</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        <div className={styles.container}>
          {/* Left Space */}
          <div className={styles.leftSpace}></div>

          {/* Wrapper Div */}
          <div className={styles.wrapper}>
            <TopNav />
            <div className={styles.middleContent}>
              <Sidebar />
              <main className={styles.mainContent}>{children}</main>
            </div>
            <Footer />
          </div>

          {/* Right Space */}
          <div className={styles.rightSpace}></div>
        </div>
      </body>
    </html>
  );
}
