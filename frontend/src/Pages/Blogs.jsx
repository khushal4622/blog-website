import React from 'react';
import BlogPage from '../Components/BlogPage';

const Blogs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='py-20 sm:py-32 lg:py-40 bg-black text-center text-white px-4'>
        <h2 className="text-4xl sm:text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Blogs Page
        </h2>
      </div>

      {/* All blogs container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogPage />
      </div>
    </div>
  );
}

export default Blogs;
