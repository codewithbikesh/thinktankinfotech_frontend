import React from "react";
import Service_Hero from './Service_Hero';
import WebDevImage from "../../assets/images/services-images/web_development.svg";

const Web_Development = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Service_Hero
        title="Web Development"
        text="We build modern, responsive, and scalable websites to help your business grow and succeed. Our team leverages cutting-edge technologies and industry best practices to create custom websites that are not only visually appealing but also highly functional. Whether you need a simple portfolio, a robust e-commerce platform, or a complex enterprise solution, we have the expertise to bring your ideas to life. We ensure that your website is fast, secure, and optimized for all devices, ensuring a seamless user experience for your audience. Our goal is to provide solutions that enhance your online presence, drive traffic, and help you achieve your business objectives with measurable results."
        image={WebDevImage}
        contactLink="/contact"
        buttonText2="Build Your Website Today"
      />

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Why Choose Us for Your Web Development Needs?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Custom Solutions</h3>
            <p className="text-gray-600">
              We create tailored websites that meet your unique business requirements.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Responsive Design</h3>
            <p className="text-gray-600">
              Our websites are fully responsive and optimized for all devices.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">SEO Optimized</h3>
            <p className="text-gray-600">
              We ensure your website ranks higher in search engines for maximum visibility.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Scalable Architecture</h3>
            <p className="text-gray-600">
              Our solutions are built to grow with your business needs.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">E-commerce Ready</h3>
            <p className="text-gray-600">
              We specialize in developing high-performing e-commerce websites.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Ongoing Support</h3>
            <p className="text-gray-600">
              We provide continuous support to ensure your website stays up-to-date.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green-600 text-white py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Take Your Business Online?</h2>
          <p className="text-lg mb-6">
            Contact us today to get started on your journey to digital success.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-green-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Web_Development;
