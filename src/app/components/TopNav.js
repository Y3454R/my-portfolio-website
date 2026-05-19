"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { href: "/home",     label: "Home"     },
  { href: "/about",    label: "About"    },
  { href: "/projects", label: "Projects" },
  { href: "/blog",     label: "Blog"     },
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
          className={`relative w-8 h-4 rounded-full transition-colors duration-300 shrink-0 ${
            dark ? "bg-notion-accent" : "bg-notion-border"
          }`}
        >
          <span className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white shadow-sm transition-transform duration-300 ${
            dark ? "translate-x-4" : "translate-x-0"
          }`} />
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
              pathname === href
                ? "text-notion-text underline underline-offset-4"
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
              pathname === href
                ? "text-notion-accent font-medium"
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
