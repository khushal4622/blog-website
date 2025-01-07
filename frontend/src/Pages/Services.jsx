import React from 'react';

const Services = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Our Blog Services</h2>
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8">Explore our specialized services designed to enhance your blogging experience.</p>
      </div>

      {/* Services Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-10 mb-10">
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="bg-gray-100 hover:bg-blue-50 shadow-lg rounded-lg p-6">
            <img
              src="https://img.freepik.com/free-photo/web-design-internet-website-responsive-software-concept_53876-124757.jpg"
              alt="Content Creation"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mt-6">Content Creation</h3>
            <p className="text-gray-700 mt-4">We provide high-quality, SEO-optimized content to keep your audience engaged and growing.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-100 hover:bg-blue-50 shadow-lg rounded-lg p-6">
            <img
              src="https://img.freepik.com/free-photo/social-network-concept-with-smartphone_23-2148536760.jpg"
              alt="Social Media Integration"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mt-6">Social Media Integration</h3>
            <p className="text-gray-700 mt-4">Easily connect your blog to social media platforms for seamless sharing and promotion.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-100 hover:bg-blue-50 shadow-lg rounded-lg p-6">
            <img
              src="https://img.freepik.com/free-photo/seo-symbol-wooden-blocks_23-2148472259.jpg"
              alt="SEO Optimization"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mt-6">SEO Optimization</h3>
            <p className="text-gray-700 mt-4">Improve your blog’s visibility with our advanced SEO tools and strategies.</p>
          </div>

          {/* Service 4 */}
          <div className="bg-gray-100 hover:bg-blue-50 shadow-lg rounded-lg p-6">
            <img
              src="https://img.freepik.com/free-photo/analytics-dashboard-reporting-with-charts_53876-124020.jpg"
              alt="Analytics and Insights"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mt-6">Analytics and Insights</h3>
            <p className="text-gray-700 mt-4">Track your blog's performance with detailed analytics and insights.</p>
          </div>

          {/* Service 5 */}
          <div className="bg-gray-100 hover:bg-blue-50 shadow-lg rounded-lg p-6">
            <img
              src="https://img.freepik.com/free-photo/cyber-security-digital-data-protection-concept_53876-126930.jpg"
              alt="Security"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mt-6">Security</h3>
            <p className="text-gray-700 mt-4">Keep your blog and data secure with our advanced security features.</p>
          </div>

          {/* Service 6 */}
          <div className="bg-gray-100 hover:bg-blue-50 shadow-lg rounded-lg p-6">
            <img
              src="https://img.freepik.com/free-photo/website-customization-concept-with-icons_23-2149062747.jpg"
              alt="Customization"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mt-6">Customization</h3>
            <p className="text-gray-700 mt-4">We provide flexible customization options to give your blog a unique identity.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
