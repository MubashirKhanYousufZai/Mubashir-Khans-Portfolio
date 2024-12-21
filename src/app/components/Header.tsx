import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
const Header = () => {
  return (
    <div>
        <header className="bg-black text-white body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href='https://github.com/MubashirKhanYousufZai'>
                <FaGithub className='text-3xl font-boid hover:text-blue-300'/>
                <span className="ml-3 text-xl hover:text-blue-300">Mubashir Khan Yousufzai !</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-blue-300" href='/'>Home</a>
                <a className="mr-5 hover:text-blue-300" href='/components/hero'>About</a>
                <a className="mr-5 hover:text-blue-300" href='/components/projects'>Projects</a>
                <a className="mr-5 hover:text-blue-300" href='/components/skills'>Skills</a>
                <a className="mr-5 hover:text-blue-300" href='/components/contact'>Contact</a>
                </nav>
                <button className="inline-flex items-center bg-slate-300 border-0 py-1 px-3 gap-2 focus:outline-none text-black hover:text-gray-100 hover:bg-blue-300 rounded text-base mt-4 md:mt-0">
                  <a href="mailto:mubashirmpa2008@gmail.com">E-mail</a><TfiEmail/>
                </button>
            </div>
        </header>
    </div>
  )
}

export default Header
