<<<<<<< HEAD
"use client";

import React from "react";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { FaGithub, FaLinkedin, FaNpm, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 body-font border-t border-gray-800">
      <div className="container px-6 py-8 mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo & Name */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="flex items-center text-white hover:text-blue-400 transition-all duration-300"
        >
          <CgProfile className="text-3xl" />
          <span className="ml-3 text-lg font-semibold tracking-wide">
            Mubashir Khan Yousufzai
          </span>
        </motion.a>

        {/* Email */}
        <motion.p
          whileHover={{ scale: 1.05, color: "#60A5FA" }}
          className="text-sm text-gray-400 mt-4 md:mt-0 cursor-pointer transition-all duration-300"
        >
          ©{" "}
          <a href="mailto:mubashirmpa2008@gmail.com" className="hover:underline">
            mubashirmpa2008@gmail.com
          </a>
        </motion.p>

        {/* Social Media Links */}
        <div className="flex gap-5 mt-6 md:mt-0">
          <motion.a
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
            href="https://www.linkedin.com/in/mubashir-khan-538a662bb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl transition-all duration-300"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, color: "#ccc" }}
            href="https://github.com/MubashirKhanYousufZai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl transition-all duration-300"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, color: "#FF0000" }}
            href="https://www.npmjs.com/~mubashir_khan08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl transition-all duration-300"
          >
            <FaNpm />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, color: "#25D366" }}
            href="https://wa.me/qr/FWX3BWWPABVRG1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl transition-all duration-300"
          >
            <FaWhatsapp />
          </motion.a>
        </div>
=======
import React from 'react';
import { FaGithub, FaLinkedin, FaNpm, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 body-font">
      <div className="container px-5 py-6 mx-auto flex flex-col sm:flex-row items-center justify-between">
        
        {/* Logo & Name */}
        <a 
          href="https://github.com/MubashirKhanYousufZai"
          className="flex items-center text-white transition-all duration-300 hover:text-blue-300"
        >
          <FaGithub className="text-3xl" />
          <span className="ml-3 text-lg font-semibold">Mubashir Khan Yousufzai</span>
        </a>

        {/* Email */}
        <p className="text-sm text-gray-400 hover:text-blue-300 sm:border-l-2 sm:border-gray-600 sm:pl-4 cursor-pointer">
          © <a href="mailto:mubashirmpa2008@gmail.com">mubashirmpa2008@gmail.com</a>
        </p>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="https://www.linkedin.com/in/mubashir-khan-538a662bb" 
            className="text-white hover:text-blue-400 transition-all duration-300 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/MubashirKhanYousufZai" 
            className="text-white hover:text-gray-300 transition-all duration-300 text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.npmjs.com/~mubashir_khan08" 
            className="text-white hover:text-red-500 transition-all duration-300 text-2xl">
            <FaNpm />
          </a>
          <a href="https://wa.me/qr/FWX3BWWPABVRG1" 
            className="text-white hover:text-green-400 transition-all duration-300 text-2xl">
            <FaWhatsapp />
          </a>
        </div>
        
>>>>>>> 3d761dc1563fa40451afe0e4a453ffab131ee75e
      </div>
    </footer>
  );
};

export default Footer;
