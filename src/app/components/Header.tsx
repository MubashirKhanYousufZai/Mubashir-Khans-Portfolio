<<<<<<< HEAD
"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/components/hero" },
    { name: "Projects", path: "/components/projects" },
    { name: "Skills", path: "/components/skills" },
    { name: "Experience", path: "/components/experiance" },
    { name: "Contact", path: "/components/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md py-2"
          : "bg-black/90 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <motion.a
          href="https://github.com/MubashirKhanYousufZai"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 text-white hover:text-blue-400 transition-all duration-300"
        >
          <CgProfile className="text-3xl" />
          <span className="text-lg md:text-xl font-bold tracking-wide">
            Mubashir Khan Yousufzai
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={item.path}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                  pathname === item.path
                    ? "text-blue-400 after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-blue-400 after:rounded-full"
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CV Download */}
        <motion.a
          href="/components/CV"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-xl shadow-md transition-all duration-300"
        >
          Download CV
          <HiDocumentArrowDown className="text-xl" />
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-black/95 px-6 py-6 space-y-4"
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-base font-medium transition-all duration-300 hover:text-blue-400 ${
                pathname === item.path ? "text-blue-400" : "text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <a
            href="/components/CV"
            className="block mt-4 w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-xl shadow-md transition-all duration-300"
          >
            Download CV
          </a>
        </motion.div>
      )}
    </motion.header>
=======
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { HiDocumentArrowDown } from 'react-icons/hi2';

const Header = () => {
  return (
    <header className="bg-black text-white shadow-lg w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">

        {/* Logo / Name */}
        <a 
          className="flex items-center text-white transition-all duration-300 hover:text-blue-300"
          href='https://github.com/MubashirKhanYousufZai'
        >
          <FaGithub className='text-3xl' />
          <span className="ml-3 text-xl font-semibold">Mubashir Khan Yousufzai</span>
        </a>

        {/* Navbar Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/components/hero" },
            { name: "Projects", path: "/components/projects" },
            { name: "Skills", path: "/components/skills" },
            { name: "Experience", path: "/components/experiance" }, 
            { name: "Contact", path: "/components/contact" }
          ].map((item, index) => (
            <a 
              key={index}
              href={item.path}
              className="relative group transition-all duration-300 hover:text-blue-300"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CV Download Button */}
        <a 
          href="/components/CV"
          className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 focus:outline-none"
        >
          CV <HiDocumentArrowDown className='text-xl' />
        </a>

      </div>
    </header>
>>>>>>> 3d761dc1563fa40451afe0e4a453ffab131ee75e
  );
};

export default Header;
