"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";

const experiences = [
  {
    role: "Student Developer",
    company: "Governor Sindh IT Program",
    duration: "2023 - Present",
    description:
      "Learning full-stack web development with real-world project building using Next.js, React, and modern UI tools.",
  },
  {
    role: "Frontend Web Developer",
    company: "Freelance",
    duration: "2024 - Present",
    description:
      "Building responsive and modern web applications using Next.js, Tailwind CSS, and API integrations.",
  },
  {
    role: "Hackathon Participant",
    company: "GIAIC Hackathons",
    duration: "2024",
    description:
      "Worked on real-time challenges involving API integration, UI development, and data handling under time constraints.",
  },
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      {/* HERO STYLE BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%)]" />

      <div className="absolute top-20 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[140px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-400 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Experience
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight">
            My
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            My learning path, freelance work, and real-world development experience.
          </p>
        </motion.div>

        {/* TIMELINE GRID */}
        <div className="grid gap-10 md:grid-cols-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30 hover:bg-white/[0.06]"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* ICON */}
              <div className="relative mb-5 flex items-center gap-3">
                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-3">
                  <Briefcase className="text-blue-400" size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <p className="text-sm text-blue-400">{exp.company}</p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="relative text-gray-400 leading-relaxed text-sm">
                {exp.description}
              </p>

              {/* DURATION BADGE */}
              <div className="relative mt-6 inline-block rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-xs text-gray-300">
                {exp.duration}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-gray-400">
            Always learning, building, and improving every day 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}