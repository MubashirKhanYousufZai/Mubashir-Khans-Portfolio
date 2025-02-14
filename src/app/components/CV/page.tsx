import React from "react";
import { FaDownload } from "react-icons/fa";

const CV = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 tracking-wide">
        My CV
      </h1>

      {/* CV Display */}
      <div className="w-full max-w-4xl h-[700px] border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="/CV/me.pdf"
          className="w-full h-full rounded-lg"
          title="My CV"
        ></iframe>
      </div>

      {/* Download Button */}
      <a
        href="/CV/me.pdf"
        download="me.pdf"
        className="flex items-center gap-3 px-6 py-3 mt-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <FaDownload className="text-lg" />
        Download CV
      </a>
    </div>
  );
};

export default CV;
