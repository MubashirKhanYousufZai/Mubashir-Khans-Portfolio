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
      description: "🐾 A user-friendly web app for pet lovers to find their loving partner.",
      image: "/pawfect.webp",
    },
    {
      type: "Full Stack",
      link: "https://quick-crave-iota.vercel.app/",
      name: "Quick Crave",
      description: "☕ A Q-commerce website for Cafe Quick Crave.",
      image: "/quick.webp",
    },
    {
      type: "Full Stack",
      link: "https://quarter2-final-hackathon-day4-1lxd.vercel.app/",
      name: "Pizza Run",
      description: "🍕 A Q-commerce website for Pizza Run restaurant.",
      image: "/pizza.jpg",
    },
    {
      type: "Full Stack",
      link: "https://urdu-rapandreality.vercel.app/",
      name: "Urdu Rap And Reality",
      description: "🎤 A blog website for Urdu Rap And Reality.",
      image: "/urdu.webp",
    },
    {
      type: "FrontEnd & UI/UX",
      link: "https://project-12-murex.vercel.app/",
      name: "Rivayati Andaz",
      description: "🪑 A rental E-commerce site for Rivayati Andaz furniture brand.",
      image: "/rivayati.webp",
    },
    {
      type: "Full Stack",
      link: "https://hackathon-milestone5-task2.vercel.app/",
      name: "Resume Builder",
      description: "📄 Create personalized resumes effortlessly.",
      image: "/resume.webp",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-slate-100 min-h-screen px-5 py-12 md:py-20">
      <section className="text-gray-700 body-font">
        <div className="container mx-auto">
          {/* Section Title */}
          <div className="flex flex-wrap items-center w-full mb-12">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="text-4xl font-extrabold text-gray-900">
                🚀 Few of My Projects
              </h1>
              <div className="h-1 w-24 bg-blue-500 rounded mt-2"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-lg text-gray-600 mt-5 lg:mt-0">
              Explore my portfolio featuring full-stack applications, backend
              utilities, and UI/UX-focused experiences. Each project reflects my
              passion for clean design & performance.
            </p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300"
              >
                <div className="relative w-full h-[250px] sm:h-[300px]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xs font-semibold text-blue-500 tracking-widest uppercase">
                    {project.type}
                  </h3>
                  <h2 className="text-lg font-bold text-gray-900 mt-2 hover:text-blue-500 transition-colors">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                  </h2>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* LinkedIn Profile Box */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mt-16 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <FaLinkedin className="text-blue-600 text-5xl mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">
              View My LinkedIn Profile
            </h2>
            <p className="text-gray-600 mt-2">
              Check out my LinkedIn for more projects & collaborations.
            </p>
            <a
              href="https://www.linkedin.com/in/mubashir-khan-538a662bb"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300"
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
