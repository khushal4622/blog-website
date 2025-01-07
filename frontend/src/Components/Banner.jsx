import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='px-4 py-32 lg:px-20 bg-black mx-auto'>
        <div className="text-white text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-snug font-bold mb-5">
                Welcome to Our Blogs
            </h1>
            <p className="text-gray-100 sm:w-4/5 lg:w-3/5 mx-auto mb-5 font-primary">
                Start your blog today and join a community of writers and readers passionate about sharing their stories and ideas. We provide everything you need to get started, including helpful tips and tutorials.
            </p>
            <Link to="/" className='font-medium hover:text-orange-500 inline-flex items-center py-1'>
                Learn More <FaArrowRight className='mt-1 ml-2' />
            </Link>
        </div>
    </div>
  )
}

export default Banner
