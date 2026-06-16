"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiDocumentArrowDown } from "react-icons/hi2";

const navItems = [
  { name: "About", href: "/components/hero" },
  { name: "Projects", href: "/components/projects" },
  { name: "Skills", href: "/components/skills" },
  { name: "Experience", href: "/components/experience" },
  { name: "Contact", href: "/components/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-white shadow-lg">
              MK
            </div>

            <div>
              <h2 className="font-bold text-white text-lg">
                Mubashir Khan
              </h2>

              <p className="text-xs text-gray-400">
                Frontend Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 transition-all duration-300 hover:text-blue-400"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Resume Button */}
          <a
            href="/components/CV"
            target="_blank"
            className="hidden md:flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-white transition-all duration-300 hover:scale-105"
          >
            Resume
            <HiDocumentArrowDown size={18} />
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-blue-400 transition-all"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="/components/CV"
                target="_blank"
                className="mt-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-center text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}