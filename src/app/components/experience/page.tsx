'use client';

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
    role: "Student",
    company: "Governor Sindh Program",
    duration: "Feb 2023 - Present",
    description:
      "Learning full-stack web development and working on real-world projects.",
  },
  {
    role: "Web Developer",
    company: "Freelance",
    duration: "2024 - Present",
    description:
      "Building responsive websites and web applications using Next.js, React, and Tailwind CSS. Specialized in UI development.",
  },
  {
    role: "Hackathon Participant",
    company: "GIAIC Hackathons",
    duration: "2024",
    description:
      "Participated in web development challenges, focusing on API integration and data migration.",
  },
];

export default function Experience() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900"
      >
        My <span className="text-primary">Experience</span>
      </motion.h1>

      {/* 3 Boxes Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card className="h-full shadow-md hover:shadow-xl border border-gray-100 hover:border-primary/40 transition-all duration-300 rounded-2xl bg-white flex flex-col p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                    <Briefcase size={26} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">
                    {exp.role}
                  </CardTitle>
                </div>
                <CardDescription className="text-base font-medium text-gray-700">
                  {exp.company}
                </CardDescription>
                <CardDescription className="text-sm text-gray-500 mt-1">
                  {exp.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 leading-relaxed text-base">
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
