"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Server,
  Wrench,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "App Router",
      "ShadCN UI",
      "Framer Motion",
      "Responsive Design",
      "UI Development",
    ],
  },
  {
    title: "AI & Python",
    icon: Brain,
    skills: [
      "Python",
      "Streamlit",
      "OpenAI API",
      "Prompt Engineering",
      "AI Agents",
      "Agentic AI",
      "Chatbot Development",
      "Automation",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      "Node.js",
      "REST APIs",
      "API Integration",
      "MockAPI",
      "Sanity CMS",
      "JSON",
      "Data Fetching",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Postman",
      "Figma",
      "Deployment",
      "Version Control",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      {/* HERO STYLE BACKGROUND (same as Hero section) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%)]" />

      <div className="absolute top-20 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[140px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-400 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Skills & Technologies
          </div>

          <h2 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
            Building Products With
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Modern Technologies
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Technologies, frameworks, and tools I use to build modern web applications
            and AI-powered solutions.
          </p>
        </motion.div>

        {/* SKILL CARDS */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30 hover:bg-white/[0.06]"
              >
                {/* glow overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* header */}
                <div className="relative mb-6 flex items-center gap-4">
                  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-3">
                    <Icon className="h-7 w-7 text-blue-400" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {category.title}
                  </h3>
                </div>

                {/* skills */}
                <div className="relative flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:scale-105 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CURRENTLY LEARNING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-white/5 bg-white/[0.03] p-10 text-center backdrop-blur-xl"
        >
          <h3 className="text-3xl font-bold">
            Currently Learning
          </h3>

          <p className="mt-3 text-gray-400">
            Continuously expanding my skills in AI, automation, and modern software engineering.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Agentic AI",
              "LangChain",
              "AI Agents",
              "MCP",
              "OpenAI SDK",
              "Advanced TypeScript",
              "System Design",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}