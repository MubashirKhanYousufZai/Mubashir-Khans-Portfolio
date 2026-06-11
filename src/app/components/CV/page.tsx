"use client";

import React from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";

const CV = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-4 py-24">

      {/* BACKGROUND GLOW (same system as your portfolio) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%)]" />
      <div className="absolute top-20 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[140px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl"
      >
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-400 backdrop-blur-xl">
            <Sparkles size={16} />
            Resume / CV
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight whitespace-nowrap">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              CV
            </span>
          </h1>

          <p className="mt-4 text-gray-400">
            Download or preview my professional resume
          </p>
        </div>

        {/* CV VIEWER */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-gray-300">
              <FileText size={18} className="text-blue-400" />
              <span className="text-sm">mubashir-cv.pdf</span>
            </div>
          </div>

          <iframe
            src="/CV/mubashir.pdf"
            className="w-full h-[650px]"
            title="CV Preview"
          />
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-10">
          <motion.a
            href="/CV/mubashir.pdf"
            download="mubashir-cv.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/20 transition"
          >
            <FaDownload />
            Download CV
          </motion.a>
        </div>

        {/* FOOT NOTE */}
        <p className="text-center mt-8 text-gray-500 text-sm">
          Last updated: 2026 — Mubashir Khan
        </p>
      </motion.div>
    </div>
  );
};

export default CV;