"use client";

import React from "react";
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
    role: "Full Stack Web Developer",
    company: "The Pawfect Store",
    duration: "Nov 2024 - Present",
    description:
      "Developing modern web applications using Next.js and Tailwind CSS.",
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    duration: "2023 - Present",
    description:
      "Built responsive and interactive websites for various clients using Next.js, React, and Tailwind CSS.",
  },
  {
    role: "Web Development Student",
    company: "Governor Sindh Program",
    duration: "Jan 2024 - Present",
    description:
      "Learning advanced web technologies and improving coding skills.",
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
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg flex justify-center items-center gap-3">
          <Briefcase size={40} className="text-indigo-400" />
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
                <CardTitle className="text-xl text-white">{exp.role}</CardTitle>
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
