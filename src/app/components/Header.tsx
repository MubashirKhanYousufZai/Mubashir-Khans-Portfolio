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
  );
};

export default Header;
