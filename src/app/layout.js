"use client";
import "./globals.css";
import TopNav from "@/app/components/TopNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Samin Yeasar</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* Remove dark class only if user explicitly chose light */}
        <script dangerouslySetInnerHTML={{ __html: `
          if (localStorage.getItem('theme') === 'light') {
            document.documentElement.classList.remove('dark');
          }
        `}} />
      </head>
      <body className="bg-notion-bg text-notion-text min-h-screen font-sans">
        <TopNav />
        <main className="max-w-2xl mx-auto px-6 pt-6 pb-24 sm:pt-12 sm:pb-12">
          {children}
        </main>
      </body>
    </html>
  );
}
