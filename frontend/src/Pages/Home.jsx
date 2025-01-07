import React from 'react';
import Banner from '../Components/Banner';
import BlogPage from '../Components/BlogPage';

const Home = () => {
  return (
    <div className='w-full'>
      {/* Banner Section */}
      <Banner />

      {/* Blog Section */}
      <div className='max-w-7xl mx-auto px-4'>
        <BlogPage />
      </div>
    </div>
  );
};

export default Home;
