"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, User, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendToWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const phoneNumber = "923152669152";

    const textMessage = `👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;
    const encodedMessage = encodeURIComponent(textMessage);

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setLoading(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-4 py-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%)]" />
      <div className="absolute top-20 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[140px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
      >
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-gray-400 mt-3">
            Let’s build something amazing together 🚀
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-6" onSubmit={sendToWhatsApp}>

          {/* NAME */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 outline-none"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 outline-none"
              required
            />
          </div>

          {/* MESSAGE */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full pl-10 pr-4 py-3 h-32 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 outline-none"
              required
            />
          </div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/20 transition"
          >
            {loading ? "Redirecting..." : "Send Message"}
            <Send size={18} />
          </motion.button>
        </form>

        {/* WHATSAPP NOTE */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          Or directly message me on WhatsApp 🚀
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;