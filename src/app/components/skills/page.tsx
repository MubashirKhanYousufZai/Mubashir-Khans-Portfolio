"use client";

import React from "react";
import { motion } from "framer-motion";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaNode, FaPython } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { MdEngineering } from "react-icons/md";

const skills = [
  { name: "HTML", level: "50%", icon: <TiHtml5 className="text-4xl text-orange-500" /> },
  { name: "CSS/Tailwind CSS", level: "50%", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
  { name: "TypeScript/JavaScript", level: "50%", icon: <BiLogoTypescript className="text-4xl text-blue-700" /> },
  { name: "Node.js", level: "50%", icon: <FaNode className="text-4xl text-green-600" /> },
  { name: "Prompt Engineering", level: "70%", icon: <MdEngineering className="text-4xl text-gray-700" /> },
  { name: "Python", level: "20%", icon: <FaPython className="text-4xl text-yellow-500" /> },
];

const Skills = () => {
  return (
    <motion.section
      className="text-slate-600 body-font py-20 px-5 bg-gray-100"
      initial={{ opacity: 0, y: 50 }} // Fade-in animation
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-black">Skills</h1>
          <p className="mt-2 text-lg text-gray-700">
            I am a UI/UX designer. I have also started learning Python.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="border border-slate-300 rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-all duration-300 bg-white"
              whileHover={{ scale: 1.05 }} // Hover effect
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                {skill.icon}
              </div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">{skill.name}</h2>
              <p className="text-gray-600">{skill.level} (Still Learning)</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Button */}
        <motion.div className="flex justify-center mt-16" whileHover={{ scale: 1.1 }}>
          <a
            href="/components/contact"
            className="bg-blue-500 text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300 hover:bg-blue-600 shadow-md"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
