import Image from 'next/image';
import React from 'react';
import { IoMdContact } from "react-icons/io";

const Hero = () => {
  return (
    <div className='bg-slate-200'>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
            <div className="lg:w-1/2 w-full flex justify-center">
              <Image
                alt="Mubashir Khan YousufZai - Profile Picture"
                className="rounded-lg object-cover"
                src="/profile.jpg"
                width={300}
                height={300}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <a href="/">
              <h2 className="text-xl font-normal text-blue-300 tracking-widest">
                Mubashir Khan YousufZai
              </h2>
              <h1 className="text-gray-900 text-3xl font-medium mt-4 mb-1">
                Web Developer
              </h1>
              </a>
              <div className="flex mt-2 items-center pb-5 border-b-2 border-slate-300 mb-5"></div>
              <p className="leading-relaxed mt-5">
              I completed my school education at Metropolitan Academy, securing 63% in my ninth-grade 
              board exams and 65% in matriculation, specializing in Computer Science. In January 2024, 
              I took a significant step forward by enrolling in a prestigious skill enhancement program 
              launched by Governor Sindh, Kamran Khan Tessori 🎓✨. As part of this initiative, I embarked 
              on an exciting journey into web development, honing my skills and expanding my expertise 💻🚀. 
              Currently, I am making great strides in my learning and progressing into the second quarter of the 
              program, eager to build innovative digital solutions!
              </p>
              <div className="flex mt-6">
                <a href="/components/contact" className="flex items-center text-black bg-slate-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-300 rounded">
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
