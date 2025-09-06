<<<<<<< HEAD
"use client";
import Image from "next/image";
import React from "react";
import { IoMdContact } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="bg-gradient-to-b from-gray-900 via-black to-gray-800">
      <section className="text-gray-700 body-font">
        <div className="container mx-auto px-5 py-20">
          <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-between">
            
            {/* Profile Image */}
            <motion.div 
              className="lg:w-1/3 w-full flex justify-center mb-6 lg:mb-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Image
                alt="Mubashir Khan YousufZai - Profile Picture"
                className="rounded-full object-cover shadow-xl hover:scale-110 transition-transform duration-300"
                src="/profile.jpg"
                width={280}
                height={280}
                quality={100}  
              />
            </motion.div>

            {/* Profile Details */}
            <motion.div 
              className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-2xl font-semibold text-blue-600 tracking-wide uppercase mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Mubashir Khan YousufZai
              </motion.h2>

              <h1 className="text-white text-4xl font-extrabold mt-3 mb-3 leading-tight">
                Web Developer & Tech Enthusiast 🚀
              </h1>

              <div className="flex mt-2 items-center pb-3 border-b-2 border-slate-300 mb-5"></div>

              <p className="text-gray-700 leading-relaxed text-lg">
                I completed my school education at <strong>Metropolitan Academy II</strong>, securing 63% in my ninth-grade exams 
                and 65% in matriculation, specializing in Computer Science 📚🎓. In January 2024, I joined a prestigious skill enhancement program 
                launched by <strong>Governor Sindh, Kamran Khan Tessori</strong> 🚀✨, where I am learning modern web development. 
                I <strong>successfully passed Quarter 2 of GIAIC 🏆</strong>, further strengthening my technical foundation. 
                With <strong>over a Year of experience 👨‍💻</strong>, I’m building responsive websites and also learning Python 🐍 to diversify my skills.
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
                  className="flex items-center justify-center lg:justify-start text-white bg-blue-600 border-0 py-3 px-8 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                >
                  Contact Me <IoMdContact className="text-2xl ml-2" />
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
=======
import Image from 'next/image';
import React from 'react';
import { IoMdContact } from "react-icons/io";

const Hero = () => {
  return (
    <div className='bg-slate-100'>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto flex justify-center">
          <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-between">
            
            {/* Profile Image */}
            <div className="lg:w-1/3 w-full flex justify-center mb-6 lg:mb-0">
              <Image
                alt="Mubashir Khan YousufZai - Profile Picture"
                className="rounded-full object-cover shadow-xl"
                src="/profile.jpg"
                width={250}
                height={250}
                quality={100}  
              />
            </div>

            {/* Profile Details */}
            <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <a href="/">
                <h2 className="text-xl font-semibold text-blue-600 tracking-widest mb-2">Mubashir Khan YousufZai</h2>
                <h1 className="text-gray-900 text-4xl font-semibold mt-4 mb-2 leading-tight">
                  Web Developer
                </h1>
              </a>
              <div className="flex mt-2 items-center pb-3 border-b-2 border-slate-300 mb-5"></div>
              <p className="leading-relaxed mt-5 text-lg text-gray-700">
                I completed my school education at <strong>Metropolitan Academy</strong>, securing 63% in my ninth-grade 
                board exams and 65% in matriculation, specializing in Computer Science. In January 2024, 
                I took a significant step forward by enrolling in a prestigious skill enhancement program 
                launched by <strong>Governor Sindh, Kamran Khan Tessori</strong> 🎓✨. As part of this initiative, I embarked 
                on an exciting journey into web development, honing my skills and expanding my expertise 💻🚀. 
                Currently, I am progressing into the second quarter of the program, eager to build innovative digital solutions! 
                <strong>With over six months of hands-on experience</strong> in web development, I am ready to take on more challenging projects.
              </p>
              <div className="flex mt-6">
                <a 
                  href="/components/contact" 
                  className="flex items-center text-white bg-blue-600 hover:bg-blue-700 py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none"
                >
                  Contact <IoMdContact className='text-2xl ml-2' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
>>>>>>> 3d761dc1563fa40451afe0e4a453ffab131ee75e
  );
};

export default Hero;
