import React from "react";
import Service_Hero from './Service_Hero';
import SoftwareDevImage from "../../assets/images/services/software_development.svg"; // Replace with an appropriate image for software development
import CallToAction from "./CallToAction";

const Software_Development = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Service_Hero
        title="System/Software Development"
        text="We develop customized systems and software tailored to your business requirements. Our team of expert developers ensures that your solutions are efficient, scalable, and aligned with your goals. From understanding your business processes to delivering robust software, we employ industry best practices to ensure seamless performance. Whether you need enterprise solutions, cloud-based applications, or system integrations, we create software that drives efficiency, productivity, and growth for your organization."
        image={SoftwareDevImage} // Update with an appropriate software development image
        contactLink="/contact"
        buttonText2="Get Your Custom Software"
      />

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Why Choose Us for System/Software Development?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Tailored Solutions</h3>
            <p className="text-gray-600">
              We provide software solutions designed to meet the unique requirements of your business.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Scalability & Performance</h3>
            <p className="text-gray-600">
              Our software is built to scale with your business, ensuring optimal performance at every stage.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Seamless Integration</h3>
            <p className="text-gray-600">
              We integrate your software with existing systems to streamline workflows and enhance productivity.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Agile Development Process</h3>
            <p className="text-gray-600">
              Our agile approach ensures timely delivery and flexibility throughout the development lifecycle.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">
              We prioritize data security and reliability, ensuring your software meets industry standards.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">End-to-End Support</h3>
            <p className="text-gray-600">
              From planning to deployment and maintenance, we provide support at every stage of development.
            </p>
          </div>
        </div>
      </div>

      {/* Call To Action Section */}
      <CallToAction />
    </div>
  );
};

export default Software_Development;
