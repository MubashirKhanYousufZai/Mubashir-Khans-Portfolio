"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/components/hero" },
    { name: "Projects", path: "/components/projects" },
    { name: "Skills", path: "/components/skills" },
    { name: "Experience", path: "/components/experiance" },
    { name: "Contact", path: "/components/contact" },
  ];

  return (
    <header className="bg-black text-white shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/MubashirKhanYousufZai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            <FaGithub className="text-3xl" />
          </Link>
          <Link 
            href="/" 
            className="text-xl font-semibold hover:text-blue-300 transition-colors duration-300"
          >
            Mubashir Khan Yousufzai
          </Link>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((item, index) => (
            <Link 
              key={index}
              href={item.path}
              className={`relative group transition-all duration-300 hover:text-blue-300 ${
                pathname === item.path ? "text-blue-300 border-b-2 border-blue-300 pb-1" : ""
              }`}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CV Button Desktop */}
        <Link 
          href="/components/CV"
          className="hidden md:flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg shadow-md transition-all duration-300"
        >
          CV <HiDocumentArrowDown className="text-xl" />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((item, index) => (
              <Link 
                key={index}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl transition-colors duration-300 hover:text-blue-300 ${
                  pathname === item.path ? "text-blue-300" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* CV in Mobile */}
            <Link 
              href="/components/CV"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg shadow-md transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              CV <HiDocumentArrowDown className="text-xl" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
