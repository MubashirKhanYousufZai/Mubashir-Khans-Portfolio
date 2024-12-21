import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt,FaNode } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
const Skills = () => {
  return (
    <div>
      <section className="text-slate-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="text-3xl font-bold title-font mb-2 text-black">
                Skills
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-black">
               I am UI/UX designer. 
            </p>
            </div>
            <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-slate-400 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 text-xl font-bold mb-4">
                    <TiHtml5/>
                </div>
                <h2 className="text-lg text-slate-900 font-medium title-font mb-2">
                    HTML
                </h2>
                <p className="leading-relaxed text-base">
                    50%(Still learning)
                </p>
                </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-slate-400 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                    <FaCss3Alt/>
                </div>
                <h2 className="text-lg text-slate-900 font-medium title-font mb-2">
                    CSS/Tailwind CSS
                </h2>
                <p className="leading-relaxed text-base">
                50%(Still learning)
                </p>
                </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-slate-400 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                    <BiLogoTypescript/>
                </div>
                <h2 className="text-lg text-slate-900 font-medium title-font mb-2">
                    TypeScript/Javascript
                </h2>
                <p className="leading-relaxed text-base">
                50%(Still learning)
                </p>
                </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-slate-400 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                   <FaNode/> 
                </div>
                <h2 className="text-lg text-slate-900 font-medium title-font mb-2">
                    NODE.JS
                </h2>
                <p className="leading-relaxed text-base">
                    (Learning)
                </p>
                </div>
            </div>
            </div>
            <button className="flex mx-auto mt-16 text-black bg-slate-300 border-0 py-2 px-8 focus:outline-none hover:bg-blue-300 hover:text-white rounded text-lg">
               <a href="/components/contact">Contact</a>
            </button>
        </div>
      </section>
    </div>
  )
}

export default Skills;
