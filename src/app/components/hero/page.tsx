import Image from 'next/image';
import React from 'react'
import { IoMdContact } from "react-icons/io";
const Hero = () => {
  return (
    <div className='bg-slate-200'>
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <Image
                    alt="Profile"
                    className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                    src={"data:image/jpeg;base64,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"}
                    width={400} height={400}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-xl title-font font-normal text-blue-300 tracking-widest">
                    Mubashir Khan YousufZai
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mt-4 mb-1">
                    Web-Developor
                    </h1>
                    <div className="flex mt-2 items-center pb-5 border-b-2 border-slate-300 mb-5"></div>
                    <p className="leading-relaxed mt-10">
                    I completed my school education at Metropolitan Academy,
                    achieving 63% in my ninth-grade board exams and 65% in matriculation,
                    with a faculty in Computer Science. In January 2024,
                    I enrolled in a special course initiated by Governor Sindh,
                    Kamran Khan Tessori, to enhance my skills.
                    I also began learning web development as part of this program and am now progressing into the second quarter.
                    </p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-slate-300 mb-5"></div>
                    <div className="flex">
                    <button className="flex items-center justify-center ml-4 text-black bg-slate-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-300 rounded">
                        <a href="/components/contact">Contact</a><IoMdContact className='text-2xl'/>
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero
