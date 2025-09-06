"use client";

import React from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const experiences = [
  {
    role: "Web Developer",
    company: "Freelance",
    duration: "2023 - Present",
    description:
      "Building responsive websites and web applications using Next.js, React, and Tailwind CSS. Specialized in UI development.",
  },
  {
    role: "Intern",
    company: "Governor Sindh Program",
    duration: "Jan 2024 - Present",
    description:
      "Learning full-stack web development and working on real-world projects.",
  },
  {
    role: "Hackathon Participant",
    company: "GIAIC Hackathons",
    duration: "2024",
    description:
      "Participated in web development challenges, focusing on API integration and data migration.",
  },
];

export default function ExperiencePage() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-black to-gray-800 min-h-screen w-full py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          My Experience
        </h1>
        <p className="mt-3 text-gray-400 text-lg">
          A journey of learning, building, and growing 🚀
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="h-full rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 text-indigo-400">
                  <Briefcase size={26} />
                  <CardTitle className="text-xl text-white">
                    {exp.role}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-base font-medium">
                  {exp.company}
                </CardDescription>
                <CardDescription className="text-sm text-gray-500">
                  {exp.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
=======
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
>>>>>>> 3d761dc1563fa40451afe0e4a453ffab131ee75e
