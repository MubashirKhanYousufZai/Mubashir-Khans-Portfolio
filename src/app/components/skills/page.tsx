"use client";

import React from "react";
import { motion } from "framer-motion";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaNode, FaPython, FaReact, FaGitAlt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiFramer, SiShadcnui, SiStreamlit, SiPostman } from "react-icons/si";
import { MdEngineering } from "react-icons/md";

const skills = {
  frontend: [
    { name: "HTML5", icon: <TiHtml5 className="text-5xl text-orange-500" /> },
    { name: "CSS3 / TailwindCSS", icon: <FaCss3Alt className="text-5xl text-blue-500" /> },
    { name: "JavaScript / TypeScript", icon: <BiLogoTypescript className="text-5xl text-blue-700" /> },
    { name: "React.js", icon: <FaReact className="text-5xl text-sky-400" /> },
    { name: "Next.js (App Router)", icon: <SiNextdotjs className="text-5xl text-gray-900 dark:text-white" /> },
    { name: "ShadCN UI", icon: <SiShadcnui className="text-5xl text-purple-600" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-5xl text-pink-500" /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNode className="text-5xl text-green-600" /> },
    { name: "API Integration (REST, MockAPI, Sanity)", icon: <SiPostman className="text-5xl text-orange-600" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-5xl text-red-500" /> },
    { name: "Streamlit", icon: <SiStreamlit className="text-5xl text-pink-400" /> },
  ],
  other: [
    { name: "Python (Beginner)", icon: <FaPython className="text-5xl text-yellow-500" /> },
    { name: "Prompt Engineering", icon: <MdEngineering className="text-5xl text-gray-700" /> },
    { name: "Problem Solving", icon: <span className="text-4xl">💡</span> },
  ],
};

const Skills = () => {
  return (
    <motion.section
      className="body-font py-20 px-6 sm:px-10 bg-gradient-to-b from-gray-50 via-slate-100 to-gray-200 font-[Inter]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Skills</span>
          </motion.h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I’ve mastered and keep improving on my web development journey.
          </p>
        </div>

        {/* Skill Categories */}
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={category}
            className="mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-8 capitalize text-center">
              {category} Skills
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {skillList.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="group border border-slate-200 rounded-2xl p-8 flex flex-col items-center shadow-md bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-5 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center group-hover:text-indigo-600 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Contact Button */}
        <motion.div
          className="flex justify-center mt-20"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/components/contact"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 px-12 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
