'use client';

import React, { useState } from 'react';
import { TfiEmail } from "react-icons/tfi";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
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
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_USER_ID'
      );
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Failed to send email:', err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-700 body-font relative w-full max-w-2xl p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Contact Me
        </h1>
        <form className="space-y-4" onSubmit={sendEmail}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:ring-blue-300 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:ring-blue-300 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-32 px-3 py-2 mt-1 border rounded-lg focus:ring-blue-300 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
              <TfiEmail className="ml-2 text-xl" />
            </button>
          </div>
        </form>
        {success && (
          <p className="mt-4 text-center text-green-600">Message sent successfully!</p>
        )}
      </section>
    </div>
  );
};

export default Contact;
