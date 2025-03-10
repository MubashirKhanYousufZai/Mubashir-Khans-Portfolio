"use client";

import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub, FaLinkedin, FaNpm, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      );
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Failed to send email:", err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center py-16 px-6"
    >
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8"
      >
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Contact Me
        </h1>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={sendEmail}>
          <motion.div
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
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

          <motion.div
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
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

          <motion.div
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
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

        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-center text-green-600"
          >
            Message sent successfully!
          </motion.p>
        )}

        {/* Social Links Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Find me on</h2>
          <div className="flex justify-center space-x-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              href="https://github.com/MubashirKhanYousufZai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-all duration-300"
            >
              <FaGithub className="text-3xl" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              href="https://www.npmjs.com/~mubashir_khan08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 hover:text-yellow-800 transition-all duration-300"
            >
              <FaNpm className="text-3xl" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              href="https://wa.me/qr/FWX3BWWPABVRG1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 transition-all duration-300"
            >
              <FaWhatsapp className="text-3xl" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              href="https://www.linkedin.com/in/mubashir-khan-538a662bb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-all duration-300"
            >
              <FaLinkedin className="text-3xl" />
            </motion.a>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Contact;

