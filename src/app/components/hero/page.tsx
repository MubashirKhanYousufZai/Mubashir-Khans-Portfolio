"use client";
import Image from "next/image";
import React from "react";
import { IoMdContact } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="bg-slate-100">
      <section className="text-gray-700 body-font">
        <div className="container mx-auto px-5 py-20">
          <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">

            {/* Profile Image */}
            <motion.div 
              className="lg:w-1/2 w-full flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Image
                alt="Mubashir Khan YousufZai - Profile Picture"
                className="rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300"
                src="/profile.jpg"
                width={320}
                height={320}
              />
            </motion.div>

            {/* Profile Details */}
            <motion.div 
              className="lg:w-1/2 w-full lg:pl-12 mt-8 lg:mt-0 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-2xl font-semibold text-blue-500 tracking-wide uppercase"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Mubashir Khan YousufZai
              </motion.h2>
              <h1 className="text-gray-900 text-4xl font-extrabold mt-3 mb-3">
                Web Developer & Tech Enthusiast 🚀
              </h1>

              <p className="text-gray-700 leading-relaxed text-lg">
                I completed my school education at <strong>Metropolitan Academy II</strong>, securing 63% in my ninth-grade board exams 
                and 65% in matriculation, specializing in Computer Science 📚🎓. In January 2024, I took a significant 
                step forward by enrolling in a prestigious skill enhancement program launched by <strong>Governor Sindh, Kamran 
                Khan Tessori</strong> 🚀✨. As part of this initiative, I embarked on an exciting journey into web development 💻🌐, 
                honing my skills and expanding my expertise. I <strong>successfully passed Quarter 2 of GIAIC 🏆</strong>, 
                further strengthening my technical foundation. Alongside web development, I am also learning Python 🐍 
                to diversify my skill set. With <strong>over 7 months of experience 👨‍💻</strong>, I am continuously striving to grow and innovate in 
                the digital space! 🚀🔥
              </p>

              {/* Contact Button */}
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <a 
                  href="/components/contact" 
                  className="flex items-center justify-center lg:justify-start text-white bg-blue-500 border-0 py-3 px-7 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
                >
                  Contact Me <IoMdContact className="text-2xl ml-2" />
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
