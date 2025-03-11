"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaNpm, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black text-gray-400 body-font py-6"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
        
        {/* Logo & Name */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          href="https://github.com/MubashirKhanYousufZai"
          className="flex items-center text-white transition-all duration-300 hover:text-blue-300"
        >
          <FaGithub className="text-3xl" />
          <span className="ml-3 text-lg font-semibold">Mubashir Khan Yousufzai</span>
        </motion.a>

        {/* Email */}
        <motion.p
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-gray-400 hover:text-blue-300 sm:border-l-2 sm:border-gray-600 sm:pl-4 cursor-pointer"
        >
          © <a href="mailto:mubashirmpa2008@gmail.com">mubashirmpa2008@gmail.com</a>
        </motion.p>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          {[
            { href: "https://www.linkedin.com/in/mubashir-khan-538a662bb", icon: <FaLinkedin />, color: "hover:text-blue-400" },
            { href: "https://github.com/MubashirKhanYousufZai", icon: <FaGithub />, color: "hover:text-gray-300" },
            { href: "https://www.npmjs.com/~mubashir_khan08", icon: <FaNpm />, color: "hover:text-red-500" },
            { href: "https://wa.me/qr/FWX3BWWPABVRG1", icon: <FaWhatsapp />, color: "hover:text-green-400" },
          ].map(({ href, icon, color }, index) => (
            <motion.a
              key={index}
              href={href}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className={`text-white ${color} transition-all duration-300 text-2xl`}
            >
              {icon}
            </motion.a>
          ))}
        </div>
        
      </div>
    </motion.footer>
  );
};

export default Footer;
