"use client";

import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    company: "The Pawfect Store",
    duration: "Nov 2024 - Present",
    description: "Developing modern web applications using Next.js and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Freelance",
    duration: "Jan 2025",
    description: "Built responsive and interactive websites for various clients.",
  },
  {
    id: 3,
    title: "Web Development Student",
    company: "Governor Sindh's Program",
    duration: "Feb 2024 - Present",
    description: "Learning advanced web technologies and improving coding skills.",
  }
];

const ExperiencePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="bg-gray-100 min-h-screen py-16"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          <FaBriefcase className="inline-block text-blue-500 mr-2" /> My Experience
        </motion.h1>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-900">{exp.title}</h2>
              <p className="text-gray-600 font-medium">
                {exp.company} • <span className="text-blue-500">{exp.duration}</span>
              </p>
              <p className="mt-3 text-gray-700">{exp.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default ExperiencePage;
