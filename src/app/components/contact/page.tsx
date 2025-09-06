"use client";

import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaNpm } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
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

      // Add user message
      setChatMessages((prev) => [...prev, `👤 ${name}: ${message}`]);

      // Auto bot reply
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          "🤖 Mubashir: Thanks! I'll get back to you soon 🚀",
        ]);
      }, 1000);

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center font-sans">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl py-16 px-6"
      >
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700"
        >
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Contact Me
          </h1>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={sendEmail}>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 mt-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-32 px-4 py-2 mt-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex items-center px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <TfiEmail className="ml-2 text-xl" />
              </motion.button>
            </div>
          </form>

          {/* Error / Success */}
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          {success && (
            <p className="mt-4 text-green-400 text-center">
              ✅ Message sent successfully!
            </p>
          )}

          {/* Chat Box */}
          {chatMessages.length > 0 && (
            <div className="mt-8 bg-gray-900 rounded-lg p-4 h-64 overflow-y-auto border border-gray-700">
              <h2 className="text-white font-semibold mb-3">📩 Chat History</h2>
              <div className="space-y-2 text-gray-200">
                {chatMessages.map((msg, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`${
                      msg.startsWith("👤") ? "text-blue-400" : "text-green-400"
                    }`}
                  >
                    {msg}
                  </motion.p>
                ))}
              </div>
            </div>
          )}

          {/* Social Links */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Find me on
            </h2>
            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/MubashirKhanYousufZai"
                target="_blank"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="https://www.npmjs.com/~mubashir_khan08"
                target="_blank"
                className="text-red-500 hover:text-red-600 transition-all duration-300"
              >
                <FaNpm className="text-3xl" />
              </a>
              <a
                href="https://wa.me/qr/FWX3BWWPABVRG1"
                target="_blank"
                className="text-green-500 hover:text-green-600 transition-all duration-300"
              >
                <FaWhatsapp className="text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/mubashir-khan-538a662bb"
                target="_blank"
                className="text-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                <FaLinkedinIn className="text-3xl" />
              </a>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Contact;
