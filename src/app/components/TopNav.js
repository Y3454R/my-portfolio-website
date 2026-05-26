"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { href: "/home",     label: "Home"     },
  { href: "/about",    label: "About"    },
  { href: "/projects", label: "Projects" },
  { href: "/blog",     label: "Blogs"    },
];

export default function TopNav() {
  const pathname = usePathname();
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
      {/* Top bar */}
      <nav className="max-w-2xl mx-auto px-6 py-3 flex items-center gap-4 border-b border-notion-border">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="relative w-9 h-9 flex items-center justify-center text-notion-muted hover:text-notion-accent transition-colors shrink-0"
        >
          {/* Sun — light mode */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={`absolute w-5 h-5 transition-all duration-300 ${dark ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}>
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
          </svg>
          {/* Moon — dark mode */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={`absolute w-5 h-5 transition-all duration-300 ${dark ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <Link href="/home" className="text-sm font-medium text-notion-text mr-auto">
          Samin Yeasar
        </Link>

        {/* Desktop nav links */}
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hidden sm:block text-sm transition-colors ${
              pathname.startsWith(href)
                ? "text-notion-accent underline underline-offset-4"
                : "text-notion-muted hover:text-notion-text"
            }`}
          >
            {label}
          </Link>
        ))}

        <a
          href="/cv/CV_Samin_Yeasar_2027.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block text-sm text-notion-muted hover:text-notion-text transition-colors"
        >
          CV
        </a>
      </nav>

      {/* Mobile bottom nav */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-20 bg-notion-bg border-t border-notion-border flex">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex-1 py-3 text-center text-xs transition-colors ${
              pathname.startsWith(href)
                ? "text-notion-accent font-medium underline underline-offset-2"
                : "text-notion-muted"
            }`}
          >
            {label}
          </Link>
        ))}
        <a
          href="/cv/CV_Samin_Yeasar_2027.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 text-center text-xs text-notion-muted"
        >
          CV
        </a>
      </nav>
    </>
  );
}
