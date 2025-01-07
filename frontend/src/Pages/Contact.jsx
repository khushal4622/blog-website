import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='py-20 sm:py-32 lg:py-40 bg-black text-center text-white px-4'>
        <h2 className="text-4xl sm:text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Contact Us
        </h2>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border border-gray-600 p-6">
          
          {/* Left side text with background image (visible only on md and above) */}
          <div className="hidden md:block flex-col justify-center items-center bg-cover bg-center h-full p-8"
            style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/051/189/568/non_2x/contact-us-concept-customer-service-online-support-hotline-help-desk-call-center-online-customer-support-contact-us-customer-service-for-personal-assistant-service-illustration-vector.jpg")' }}>
            {/* No content on the left side */}
          </div>

          {/* Right side form */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg border border-gray-600">
            <form action="#" method="POST">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" name="name" required className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" name="email" required className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows="4" required className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>

                <div>
                  <button type="submit" className="w-full py-3 px-6 bg-black text-white text-lg rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
