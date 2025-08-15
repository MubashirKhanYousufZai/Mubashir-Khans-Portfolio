"use client";

import React from "react";
import { motion } from "framer-motion";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaNode, FaPython } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { MdEngineering } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", level: "60%", icon: <TiHtml5 className="text-4xl text-orange-500" /> },
  { name: "CSS", level: "60%", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
  { name: "Tailwind CSS", level: "60%", icon: <SiTailwindcss className="text-4xl text-cyan-500" /> },
  { name: "TypeScript", level: "50%", icon: <BiLogoTypescript className="text-4xl text-blue-700" /> },
  { name: "JavaScript", level: "50%", icon: <BiLogoJavascript className="text-4xl text-yellow-500" /> },
  { name: "Node.js", level: "50%", icon: <FaNode className="text-4xl text-green-600" /> },
  { name: "Next.js", level: "70%", icon: <RiNextjsFill className="text-4xl text-black" /> },
  { name: "Python", level: "30%", icon: <FaPython className="text-4xl text-yellow-500" /> },
  { name: "Prompt Engineering", level: "70%", icon: <MdEngineering className="text-4xl text-gray-700" /> },
];

const Skills = () => {
  return (
    <motion.section
      className="text-slate-600 py-20 px-5 bg-gradient-to-br from-gray-100 to-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-extrabold text-black"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Skills 🛠️
          </motion.h1>
          <p className="mt-2 text-lg text-gray-700">
            Front-End Developer • UI/UX Designer • Tech Explorer 🚀
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="border border-gray-300 rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-xl bg-white"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4 shadow-inner">
                {skill.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{skill.name}</h2>
              <p className="text-gray-600 mt-1">{skill.level} • Still Learning 📚</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Button */}
        <motion.div className="flex justify-center mt-16" whileHover={{ scale: 1.1 }}>
          <a
            href="/components/contact"
            className="bg-indigo-500 text-white font-semibold py-3 px-10 rounded-lg hover:bg-indigo-600 shadow-md"
          >
            Contact Me 🤙🏻
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
