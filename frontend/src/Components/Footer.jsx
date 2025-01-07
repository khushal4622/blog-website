import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            {/* Category 1: Technology */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Technology
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Artificial Intelligence
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Cybersecurity
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Software Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Tech Startups
                  </a>
                </li>
              </ul>
            </div>

            {/* Category 2: Sports */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Sports</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Football
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Cricket
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Basketball
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    {" "}
                    Olympic Games
                  </a>
                </li>
              </ul>
            </div>

            {/* Category 3: Artificial Intelligence */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Artificial Intelligence
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    AI-Powered Tools
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    AI in Education
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Ethical AI
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    AI in Healthcare
                  </a>
                </li>
              </ul>
            </div>

            {/* Category 4: Navbar */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Menu
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                   Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                   Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscription */}
          <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
            <p className="font-medium tracking-wide text-gray-300">
              Subscribe for updates
            </p>
            <form className="mt-4 flex flex-col md:flex-row">
              <input
                type="text"
                placeholder="email"
                id="email"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-base text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis consequuntur esse accusamus ducimus, quisquam labore
              velit, debitis quasi nemo maiores assumenda modi iure excepturi,
              id libero dolorem animi recusandae et.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-center text-gray-500 text-sm hover:underline-offset-2">
            Copyright &copy; 2024 Blog Website, All Rights Reserved. 
            <span className="hover:text-orange-500 hover:underline hover:underline-offset-4"> Developed
            by
            <span className="text-red-500"> &hearts; </span>
            <span className="hover:text-blue-500">Khushal Mahajan</span>
            </span>
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a href="#" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaTwitter className="h-6 w-6" /></a>
            <a href="#" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaInstagram className="h-6 w-6" /></a>
            <a href="#" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaLinkedin className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
