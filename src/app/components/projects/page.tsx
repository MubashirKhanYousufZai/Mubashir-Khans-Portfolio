"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      type: "Full Stack",
      link: "https://the-pawfect-store.vercel.app/",
      name: "The Pawfect Store",
      description: "A user-friendly web app for pet lovers to find their loving partner.",
      image: "/pawfect.webp"
    },
    {
      type: "Full Stack",
      link: "https://quick-crave-iota.vercel.app/",
      name: "Quick Crave",
      description: "A Q-commerce website for a Cafe Quick Crave.",
      image: "/quick.webp"
    },
    {
      type: "Full Stack",
      link: "https://quarter2-final-hackathon-day4-1lxd.vercel.app/",
      name: "Pizza Run",
      description: "A Q-commerce website for a restaurant Pizza Run.",
      image: "/pizza.jpg"
    },
    {
      type: "Full Stack",
      link: "https://urdu-rapandreality.vercel.app/",
      name: "Urdu Rap And Reality",
      description: "A Blog website for Urdu Rap And Reality.",
      image: "/urdu.webp"
    },
    {
      type: "FrontEnd & UI/UX",
      link: "https://project-12-murex.vercel.app/",
      name: "Rivayati Andaz",
      description: "A Rental E-commerce website for a furniture brand Rivayati Andaz.",
      image: "/rivayati.webp"
    },
    {
      type: "Full Stack",
      link: "https://hackathon-milestone5-task2.vercel.app/",
      name: "Resume Builder",
      description: "A user-friendly web app for creating personalized resumes effortlessly.",
      image: "/resume.webp",
    },
  ];

  return (
    <div className="bg-slate-200 min-h-screen px-5 py-10 md:py-20">
      <section className="text-gray-700 body-font">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center w-full mb-12">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="text-4xl font-extrabold text-gray-900">Few of My Projects!</h1>
              <div className="h-1 w-24 bg-blue-300 rounded mt-2"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-lg text-gray-600 mt-5 lg:mt-0">
              Explore my diverse portfolio featuring full-stack applications, backend utilities, and UI/UX-focused web experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-full h-[300px]">
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg mb-4" 
                  />
                </div>
                <h3 className="text-xs font-medium text-blue-300 tracking-widest">{project.type}</h3>
                <h2 className="text-lg font-semibold text-gray-900 mt-2 hover:text-blue-400 transition-colors">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={project.name}>
                    {project.name}
                  </a>
                </h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-2 bg-blue-300 text-slate-600 font-medium rounded-lg hover:bg-blue-400 transition-all duration-300"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>

          {/* LinkedIn Profile Box */}
          <motion.div 
            className="mt-16 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaLinkedin className="text-blue-600 text-5xl mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">View My LinkedIn Profile</h2>
            <p className="text-gray-600 mt-2">
              Check out my LinkedIn for more previous and upcoming projects!
            </p>
            <a 
              href="https://www.linkedin.com/in/mubashir-khan-538a662bb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 bg-blue-300 text-slate-600 font-medium rounded-lg hover:bg-blue-400 transition-all duration-300"
            >
              Visit LinkedIn
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Projects;
