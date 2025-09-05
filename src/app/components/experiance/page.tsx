'use client';

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";


const experiences = [
  {
    role: "Web Developer",
    company: "Freelance",
    duration: "2023 - Present",
    description: "Building responsive websites and web applications using Next.js, React, and Tailwind CSS. Specialized in UI development."
  },
  {
    role: "Intern",
    company: "Governor Sindh Program",
    duration: "Jan 2024 - Present",
    description: "Learning full-stack web development and working on real-world projects."
  },
  {
    role: "Hackathon Participant",
    company: "GIAIC Hackathons",
    duration: "2024",
    description: "Participated in web development challenges, focusing on API integration and data migration."
  }
];

export default function ExperiencePage() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">My Experience</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="shadow-lg hover:shadow-2xl transition duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary">
                  <Briefcase size={24} />
                  <CardTitle>{exp.role}</CardTitle>
                </div>
                <CardDescription>{exp.company}</CardDescription>
                <CardDescription className="text-sm text-gray-500">{exp.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
