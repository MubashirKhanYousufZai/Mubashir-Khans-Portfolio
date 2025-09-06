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
<<<<<<< HEAD
      description:
        "A user-friendly web app for pet lovers to find their loving partner.",
      image: "/pawfect.webp",
=======
      description: "A user-friendly web app for pet lovers to find their loving partner.",
      image: "/pawfect.webp"
>>>>>>> 3d761dc1563fa40451afe0e4a453ffab131ee75e
    },
    {
      type: "Full Stack",
      link: "https://quick-crave-iota.vercel.app/",
      name: "Quick Crave",
      description: "A Q-commerce website for a Cafe Quick Crave.",
<<<<<<< HEAD
      image: "/quick.webp",
    },
    {
      type: "Full Stack",
      link: "https://pizza-run.vercel.app/",
      name: "Pizza Run",
      description: "A Q-commerce website for a restaurant Pizza Run.",
      image: "/pizza.jpg",
=======
      image: "/quick.webp"
    },
    {
      type: "Full Stack",
      link: "https://quarter2-final-hackathon-day4-1lxd.vercel.app/",
      name: "Pizza Run",
      description: "A Q-commerce website for a restaurant Pizza Run.",
      image: "/pizza.jpg"
>>>>>>> 3d761dc1563fa40451afe0e4a453ffab131ee75e
    },
    {
      type: "Full Stack",
      link: "https://urdu-rapandreality.vercel.app/",
      name: "Urdu Rap And Reality",
      description: "A Blog website for Urdu Rap And Reality.",
<<<<<<< HEAD
      image: "/urdu.webp",
=======
      image: "/urdu.webp"
>>>>>>> 3d761dc1563fa40451afe0e4a453ffab131ee75e
    },
    {
      type: "FrontEnd & UI/UX",
      link: "https://project-12-murex.vercel.app/",
      name: "Rivayati Andaz",
<<<<<<< HEAD
      description:
        "A Rental E-commerce website for a furniture brand Rivayati Andaz.",
      image: "/rivayati.webp",
=======
      description: "A Rental E-commerce website for a furniture brand Rivayati Andaz.",
      image: "/rivayati.webp"
>>>>>>> 3d761dc1563fa40451afe0e4a453ffab131ee75e
    },
    {
      type: "Full Stack",
      link: "https://hackathon-milestone5-task2.vercel.app/",
      name: "Resume Builder",
<<<<<<< HEAD
      description:
        "A user-friendly web app for creating personalized resumes effortlessly.",
=======
      description: "A user-friendly web app for creating personalized resumes effortlessly.",
>>>>>>> 3d761dc1563fa40451afe0e4a453ffab131ee75e
      image: "/resume.webp",
    },
  ];

  return (
<<<<<<< HEAD
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 min-h-screen px-6 py-20 md:py-28 font-sans text-gray-100">
      <section>
        {/* Header */}
        <motion.div
          className="container mx-auto mb-14 flex flex-wrap items-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Few of My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Projects
              </span>
            </h1>
            <div className="h-1 w-28 bg-gradient-to-r from-indigo-400 to-purple-500 rounded mt-3"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-lg text-gray-400 mt-5 lg:mt-0">
            Explore my diverse portfolio featuring full-stack applications,
            backend utilities, and UI/UX-focused web experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/60 rounded-xl shadow-md hover:shadow-indigo-500/40 transition-all duration-300 flex flex-col overflow-hidden border border-gray-700"
              whileHover={{ scale: 1.04, y: -6 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div className="relative w-full aspect-video bg-gray-900">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-contain p-3"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col text-center sm:text-left">
                <h3 className="text-xs font-semibold text-indigo-400 tracking-widest uppercase">
                  {project.type}
                </h3>
                <h2 className="text-lg font-semibold text-white mt-2 hover:text-indigo-400 transition-colors">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={project.name}
                  >
                    {project.name}
                  </a>
                </h2>
                <p className="text-gray-400 mt-3 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow hover:shadow-purple-500/40 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn Box */}
        <motion.div
          className="mt-24 bg-gray-800/70 p-10 rounded-xl shadow-md hover:shadow-indigo-500/40 transition-all duration-300 flex flex-col items-center text-center max-w-xl mx-auto border border-gray-700"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaLinkedin className="text-blue-500 text-5xl mb-4" />
          <h2 className="text-2xl font-bold text-white">
            View My LinkedIn Profile
          </h2>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Check out my LinkedIn for more previous and upcoming projects!
          </p>
          <a
            href="https://www.linkedin.com/in/mubashir-khan-538a662bb"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-purple-500/40 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
          >
            Visit LinkedIn
          </a>
        </motion.div>
=======
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
>>>>>>> 3d761dc1563fa40451afe0e4a453ffab131ee75e
      </section>
    </div>
  );
};

export default Projects;
