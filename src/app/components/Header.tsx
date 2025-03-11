"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { HiDocumentArrowDown } from "react-icons/hi2";

const Header = () => {
  const pathname = usePathname(); // Get current route for active link styling
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle mobile menu

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/components/hero" },
    { name: "Projects", path: "/components/projects" },
    { name: "Skills", path: "/components/skills" },
    { name: "Experience", path: "/components/experience" },
    { name: "Contact", path: "/components/contact" },
  ];

  return (
    <header className="bg-black text-white shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo / Name */}
        <Link 
          href="https://github.com/MubashirKhanYousufZai" 
          className="flex items-center text-white transition-all duration-300 hover:text-blue-300"
          aria-label="GitHub Profile of Mubashir Khan Yousufzai"
        >
          <FaGithub className="text-3xl" />
          <span className="ml-3 text-xl font-semibold">Mubashir Khan Yousufzai</span>
        </Link>

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

        {/* CV Download Button (Visible on Desktop) */}
        <Link 
          href="/components/CV"
          className="hidden md:flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 focus:outline-none"
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

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-90 z-40 transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex flex-col items-center justify-center h-screen space-y-6 text-white">
          {navLinks.map((item, index) => (
            <Link 
              key={index}
              href={item.path}
              onClick={() => setMenuOpen(false)} // Close menu on click
              className="text-2xl transition-all duration-300 hover:text-blue-300"
            >
              {item.name}
            </Link>
          ))}
          {/* CV Download Button (Visible in Mobile Menu) */}
          <Link 
            href="/components/CV"
            className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            CV <HiDocumentArrowDown className="text-xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
