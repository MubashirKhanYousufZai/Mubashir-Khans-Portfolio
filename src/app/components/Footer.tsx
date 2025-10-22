"use client";

import React from "react";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

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
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
            href="https://x.com/MubashirKh67451"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl transition-all duration-300"
          >
            <FaTwitter />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, color: "#ccc" }}
            href="mailto:mubashirmpa2008@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl transition-all duration-300"
          >
            <IoIosMail />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
