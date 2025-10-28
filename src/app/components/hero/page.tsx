"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-gray-900 via-black to-gray-800">
      {/* Background subtle grid */}
      <div className="absolute inset-0 -z-10 bg-grid-slate-200/40 dark:bg-grid-slate-700/40" />

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl ring-4 ring-blue-600/20">
          <Image
            src="/mubashir.jpg"
            alt="Mubashir Khan"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-50 dark:text-white"
      >
        Hi, I am{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          Mubashir Khan
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300"
      >
        A passionate Web Developer building modern, responsive, and user-friendly
        web apps with <span className="font-semibold">Next.js</span>,{" "}
        <span className="font-semibold">React</span>, and{" "}
        <span className="font-semibold">Tailwind CSS</span>.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <Button
          size="lg"
          className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          <a href="/components/projects" className="flex items-center gap-2">
            View Projects <ArrowRight className="h-5 w-5" />
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="px-8 py-4 text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <a href="/components/contact">Contact Me</a>
        </Button>
      </motion.div>
    </section>
  );
}
