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
