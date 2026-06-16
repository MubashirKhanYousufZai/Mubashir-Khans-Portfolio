"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-white">
                MK
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Mubashir Khan
                </h3>

                <p className="text-sm text-gray-400">
                  Frontend Developer
                </p>
              </div>
            </div>

            <p className="mt-5 text-gray-400 leading-relaxed">
              Building modern, responsive and user-focused web
              applications with Next.js, React and TypeScript.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Navigation
            </h4>

            <div className="flex flex-col gap-3">
              <a href="/components/about" className="text-gray-400 hover:text-white">
                About
              </a>

              <a href="/components/projects" className="text-gray-400 hover:text-white">
                Projects
              </a>

              <a href="/components/skills" className="text-gray-400 hover:text-white">
                Skills
              </a>

              <a href="/components/experience" className="text-gray-400 hover:text-white">
                Experience
              </a>

              <a href="/components/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Connect
            </h4>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://github.com/MubashirKhanYousufZai"
                target="_blank"
                className="rounded-xl border border-white/10 p-3 text-white hover:border-blue-500"
              >
                <FaGithub size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://www.linkedin.com/in/mubashir-khan-538a662bb/"
                target="_blank"
                className="rounded-xl border border-white/10 p-3 text-white hover:border-blue-500"
              >
                <FaLinkedin size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://x.com/MubashirKh67451"
                target="_blank"
                className="rounded-xl border border-white/10 p-3 text-white hover:border-blue-500"
              >
                <FaTwitter size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="mailto:mubashirmpa2008@gmail.com"
                className="rounded-xl border border-white/10 p-3 text-white hover:border-blue-500"
              >
                <IoMail size={20} />
              </motion.a>
            </div>

            <p className="mt-4 text-gray-400 text-sm">
              mubashirmpa2008@gmail.com
            </p>
          </div>

          {/* Availability */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Available For
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>✓ Frontend Internships</li>
              <li>✓ Junior Developer Roles</li>
              <li>✓ Freelance Projects</li>
              <li>✓ Remote Opportunities</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            © {year} Mubashir Khan. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0 text-sm text-gray-500">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}