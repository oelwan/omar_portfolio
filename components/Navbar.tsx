"use client";

import { useEffect, useState } from "react";

import AnimatedButton from "./AnimatedButton";

const navItems = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#" className="font-mono font-bold text-sm md:text-base group">
          <span className="text-syntax-comment group-hover:text-syntax-keyword transition-colors">
            {"<"}
          </span>
          <span className="text-syntax-function">Omar</span>
          <span className="text-syntax-punctuation">.</span>
          <span className="text-syntax-type">Ibrahim</span>
          <span className="text-syntax-comment group-hover:text-syntax-keyword transition-colors">
            {" />"}
          </span>
        </a>

        <div className="hidden sm:flex gap-6 md:gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}()
            </a>
          ))}
        </div>

        <AnimatedButton
          href="#contact"
          variant="primary"
          className="sm:hidden text-xs py-2 px-3"
        >
          contact()
        </AnimatedButton>
      </div>
    </nav>
  );
}
