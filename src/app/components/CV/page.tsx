"use client";

import React from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const CV = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-12 text-white">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold mb-10 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500"
      >
        My CV
      </motion.h1>

      {/* CV Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl h-[720px] backdrop-blur-lg bg-white/5 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
      >
        <iframe
          src="/CV/mubashir.pdf"
          className="w-full h-full rounded-2xl"
          title="My CV"
        ></iframe>
      </motion.div>

      {/* Download Button */}
      <motion.a
        href="/CV/mubashir.pdf"
        download="mubashir.pdf"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3 px-8 py-3 mt-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500"
      >
        <FaDownload className="text-lg" />
        Download CV
      </motion.a>

      {/* Bottom Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-gray-400 text-sm"
      >
        Updated: September 2025 — Mubashir Khan Yousufzai
      </motion.p>
    </div>
  );
};

export default CV;
