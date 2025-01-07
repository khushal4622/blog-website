import React from "react";
import { FaBullseye, FaLightbulb, FaRegHandshake, FaAward, FaRocket, FaLeaf } from "react-icons/fa";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="py-20 sm:py-40 bg-black text-center text-white px-2 sm:px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl leading-snug font-bold mb-3 sm:mb-5">
          About Us Page
        </h2>
        <p className="text-base sm:text-xl mb-10">
          Learn more about our mission, vision, and values.
        </p>
      </div>

      {/* About Section */}
      <div className="w-full">
        {/* Full-Width Image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <img
            src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?ga=GA1.1.1375161805.1734534425&semt=ais_hybrid"
            alt="About Us"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Boxes Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Our Mission Box */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-blue-50 flex flex-col items-center text-center">
            <div className="flex justify-center items-center mb-4">
              <FaBullseye className="text-4xl sm:text-5xl text-blue-500 group-hover:text-blue-700 transition-colors" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors">
              We are committed to delivering the best products and services to
              our customers. Our mission is to create value and make a positive
              impact on society.
            </p>
          </div>

          {/* Our Vision Box */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-blue-50 flex flex-col items-center text-center">
            <div className="flex justify-center items-center mb-4">
              <FaLightbulb className="text-4xl sm:text-5xl text-yellow-500 group-hover:text-yellow-700 transition-colors" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors">
              We aim to be the leading provider of innovative solutions, pushing
              the boundaries of technology and creativity to offer exceptional
              experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-center">
          Our Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Integrity and Transparency */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-green-50 flex flex-col items-center text-center">
            <div className="flex justify-center items-center mb-4">
              <FaRegHandshake className="text-4xl sm:text-5xl text-blue-500 group-hover:text-blue-700 transition-colors" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">Integrity</h4>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800">
              We uphold honesty and transparency in everything we do.
            </p>
          </div>

          {/* Customer-Centric Approach */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-yellow-50 flex flex-col items-center text-center">
            <div className="flex justify-center items-center mb-4">
              <FaAward className="text-4xl sm:text-5xl text-yellow-500 group-hover:text-yellow-700 transition-colors" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">Excellence</h4>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800">
              Delivering exceptional quality and value to our customers.
            </p>
          </div>

          {/* Innovation and Excellence */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-red-50 flex flex-col items-center text-center">
            <div className="flex justify-center items-center mb-4">
              <FaRocket className="text-4xl sm:text-5xl text-red-500 group-hover:text-red-700 transition-colors" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">Innovation</h4>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800">
              Driving creativity and technological breakthroughs.
            </p>
          </div>

          {/* Sustainability and Responsibility */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-green-50 flex flex-col items-center text-center">
            <div className="flex justify-center items-center mb-4">
              <FaLeaf className="text-4xl sm:text-5xl text-green-500 group-hover:text-green-700 transition-colors" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">Sustainability</h4>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800">
              Promoting environmental and social responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
