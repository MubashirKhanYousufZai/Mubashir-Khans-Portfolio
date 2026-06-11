"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      type: "AI Agent",
      link: "https://mubashirkhanyousufzai-chat-assistent-app-fefd95.streamlit.app/",
      name: "Chitty Chat",
      description:
        "Friendly AI chatbot that answers questions and assists users in a conversational way.",
      image: "/Chitty.png",
    },
    {
      type: "Frontend + AI",
      link: "https://fitlytic.vercel.app/",
      name: "Fitlytic",
      description:
        "AI-powered fitness platform that helps users build workout and health plans.",
      image: "/fitlytic.png",
    },
    {
      type: "Full Stack",
      link: "https://the-pawfect-store.vercel.app/",
      name: "The Pawfect Store",
      description:
        "E-commerce platform for pet lovers with a smooth shopping experience.",
      image: "/pawfect.webp",
    },
    {
      type: "Full Stack",
      link: "https://pizza-run.vercel.app/",
      name: "Pizza Run",
      description:
        "Modern food ordering platform with cart system and responsive UI.",
      image: "/pizza.jpg",
    },
    {
      type: "Full Stack",
      link: "https://quick-crave-iota.vercel.app/",
      name: "Quick Crave",
      description:
        "Cafe ordering platform built for fast and smooth user experience.",
      image: "/quick.webp",
    },
    {
      type: "Frontend",
      link: "https://urdu-rapandreality.vercel.app/",
      name: "Urdu Rap & Reality",
      description:
        "Blog platform about Urdu rap culture and storytelling content.",
      image: "/urdu.webp",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-black py-24 text-white">
      {/* HERO BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%)]" />
      <div className="absolute top-20 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[140px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Featured
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Real-world applications built with modern technologies,
            AI integration, and scalable UI systems.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30 hover:bg-white/[0.06]"
            >
              {/* IMAGE (FIXED - FULL VIEW) */}
              <div className="relative h-56 w-full bg-black/40 flex items-center justify-center overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 relative">
                <span className="text-xs text-blue-400 uppercase tracking-widest">
                  {project.type}
                </span>

                <h2 className="text-xl font-bold mt-2 group-hover:text-blue-400 transition">
                  <a href={project.link} target="_blank">
                    {project.name}
                  </a>
                </h2>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LINKEDIN SECTION FIXED */}
        <motion.div
          className="mt-24 max-w-xl mx-auto text-center rounded-3xl border border-white/10 bg-white/[0.05] p-10 backdrop-blur-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <FaLinkedin className="text-blue-500 text-5xl mx-auto mb-4" />

          <h2 className="text-2xl font-bold text-white">
            More Projects & Updates
          </h2>

          <p className="text-gray-300 mt-3">
            Check my LinkedIn for upcoming projects and professional updates.
          </p>

          <a
            href="https://www.linkedin.com/in/mubashir-khan-538a662bb"
            target="_blank"
            className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition"
          >
            Visit LinkedIn
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;