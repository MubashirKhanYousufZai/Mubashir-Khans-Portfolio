"use client";

import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaNpm } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID!
      );
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Failed to send message. Please try again later. Contact me on Whatsapp");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-100 text-slate-950 min-h-screen flex items-center justify-center py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl mx-auto px-6"
      >
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white shadow-lg rounded-xl p-8"
        >
          <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Contact Me
          </h1>

          <form className="space-y-6" onSubmit={sendEmail}>
            <motion.div whileFocus={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </motion.div>

            <motion.div whileFocus={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </motion.div>

            <motion.div whileFocus={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-32 px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              ></textarea>
            </motion.div>

            <div className="flex justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex items-center px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <TfiEmail className="ml-2 text-xl" />
              </motion.button>
            </div>
          </form>

          {success && <p className="mt-4 text-center text-green-600">Message sent successfully!</p>}
          {error && <p className="mt-4 text-center text-red-500">{error}</p>}

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Find me on</h2>
            <div className="flex justify-center space-x-8">
              <FaGithub className="text-3xl text-blue-600 hover:text-blue-800" />
              <FaNpm className="text-3xl text-yellow-600 hover:text-yellow-800" />
              <FaWhatsapp className="text-3xl text-green-500 hover:text-green-700" />
              <FaLinkedinIn className="text-3xl text-blue-500 hover:text-blue-700" />
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Contact;
