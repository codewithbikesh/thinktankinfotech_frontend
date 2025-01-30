import React from "react";
import { Link } from "react-router-dom";
import WebCardImage from "../../assets/images/services-card-images/ss.jpeg";

const WDCard = () => {
  return (
    <section className="py-5 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex column for mobile, row for larger screens */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          {/* Text Content - Appears first in mobile, second in desktop */}
          <div className="w-full md:w-2/3 p-3 order-2 md:order-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              <span className="text-green-600">Web Development</span>{" "}
              <span className="text-orange-600">Services</span>
            </h2>
            <p className="text-gray-600 mb-4">
              We craft high-performing, user-friendly websites and web
              applications tailored to your business needs. From front-end
              design to back-end development, we've got you covered.
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Custom Website Design</li>
              <li>Responsive Development (Mobile-First)</li>
              <li>E-commerce Solutions</li>
              <li>Web Application Development</li>
              <li>API Integration</li>
              <li>Payment Gateway Integration</li>
            </ul>
            <Link
              to="/contact"
              className="inline-block bg-green-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded hover:underline"
            >
              Get a Free Consultation
            </Link>
          </div>

          {/* Image - Appears first in desktop, second in mobile */}
          <div className="w-full md:w-2/3 mb-4 md:mb-0 order-1 md:order-2">
            <div className="relative h-full w-full md:h-auto md:w-auto">
              <img
                src={WebCardImage}
                alt="Web Development"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WDCard;
