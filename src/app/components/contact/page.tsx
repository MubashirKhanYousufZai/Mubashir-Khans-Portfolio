"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendToWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const phoneNumber = "923152669152"; // ✅ apna WhatsApp number
    const textMessage = `👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;
    const encodedMessage = encodeURIComponent(textMessage);

    // ✅ api.whatsapp.com use karo
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setLoading(false);
    setName("");
    setEmail("");
    setMessage("");
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

          <form className="space-y-6" onSubmit={sendToWhatsApp}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-32 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
              required
            ></textarea>

            <div className="flex justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex items-center px-6 py-3 text-white font-semibold bg-green-600 rounded-lg shadow-lg hover:bg-green-700"
                disabled={loading}
              >
                {loading ? "Redirecting..." : "Send to WhatsApp"}
                <TfiEmail className="ml-2 text-xl" />
              </motion.button>
            </div>
          </form>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Contact;
