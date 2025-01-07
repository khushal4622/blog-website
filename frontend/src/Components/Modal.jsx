import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign-Up

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"} bg-black bg-opacity-50`}
    >
      <div className="modal-container">
        <div className="bg-white p-5 lg:w-[500px] rounded-md border border-black shadow-lg relative">
          {/* Close Icon */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-black text-2xl hover:text-gray-600 transition-colors"
            style={{ margin: "10px" }}
          >
            <AiOutlineClose />
          </button>

          {/* Page Heading */}
          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold uppercase text-black mb-6">
              {isLogin ? "Login Page" : "Sign Up Page"}
            </h2>
          </div>

          {/* Form Section */}
          <form className="px-4">
            {isLogin ? (
              <>
                {/* Login Form */}
                <div className="mb-5">
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    id="password"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Sign-Up Form */}
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Enter Your Name..."
                    name="name"
                    id="name"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="password"
                    placeholder="Create your password"
                    name="password"
                    id="password"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
                  />
                </div>
              </>
            )}

            {/* Terms and Policy Checkbox */}
            <div className="flex items-center mt-4 mb-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mr-2 accent-blue-500"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-black underline hover:text-blue-800"
                >
                  Terms and Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-md text-sm font-medium transition-all border-2 border-black hover:bg-white hover:text-black"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </div>
          </form>

          {/* Toggle Between Login and Sign-Up */}
          <div className="text-center mt-4">
            {isLogin ? (
              <p className="text-base text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-black font-medium underline underline-offset-4
                   hover:text-gray-800 transition-colors"
                >
                  Create an Account
                </button>
              </p>
            ) : (
              <p className="text-base text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-black font-medium underline underline-offset-4 hover:text-gray-800 transition-colors"
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
