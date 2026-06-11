"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Download,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "OpenAI",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%)]" />
      <div className="absolute top-20 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm text-green-400 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Available for Internships & Junior Developer Roles
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/10 shadow-[0_0_70px_rgba(59,130,246,0.35)] sm:h-48 sm:w-48">
            <Image
              src="/mubashir.jpg"
              alt="Mubashir Khan"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="max-w-5xl text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Building Modern
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
            Digital Products
          </span>
        </motion.h1>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-6 text-2xl font-bold text-white md:text-3xl"
        >
          Mubashir Khan
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-6 max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl"
        >
          Frontend Developer specializing in Next.js, React,
          TypeScript, and modern UI development.
          <br />
          I build fast, responsive, and user-focused web applications
          while exploring AI Agents and intelligent software systems.
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {techStack.map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md"
            >
              {tech}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="group bg-blue-600 hover:bg-blue-700"
          >
            <a href="/components/projects" className="flex items-center gap-2">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10"
          >
            <a
              href="/components/CV"
              target="_blank"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="https://github.com/MubashirKhanYousufZai"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:border-blue-500 hover:bg-white/10"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/mubashir-khan-538a662bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:border-blue-500 hover:bg-white/10"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-white">15+</h3>
            <p className="mt-2 text-gray-400">
              Projects Built
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-white">
              React & Next.js
            </h3>
            <p className="mt-2 text-gray-400">
              Modern Web Development
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-white">
              Open
            </h3>
            <p className="mt-2 text-gray-400">
              To Internships & Remote Work
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}