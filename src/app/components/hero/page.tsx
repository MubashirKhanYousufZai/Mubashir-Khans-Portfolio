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
  );
};

export default Hero;
