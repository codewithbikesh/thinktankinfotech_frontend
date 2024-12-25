import React from "react";
import Service_Hero from './Service_Hero';
import UIDesignImage from "../../assets/images/services/graphic_designer.svg"; // Replace with an appropriate image for UI/UX design
import CallToAction from "./CallToAction";

const UIDesign = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Service_Hero
        title="UI/UX Design"
        text="We design intuitive and visually appealing user experiences that enhance the usability and aesthetics of your digital products. Our team specializes in creating designs that are user-centric, ensuring your product is easy to navigate, engaging, and meets the needs of your audience. From wireframing to prototyping and high-fidelity mockups, we follow a user-centered design process to deliver designs that provide seamless interactions across all platforms. Whether you need a mobile app, website, or software solution, our designs will help you build a stronger connection with your users and increase user satisfaction."
        image={UIDesignImage} // Update with an appropriate UI/UX design image
        contactLink="/contact"
        buttonText2="Start Your Design Journey"
      />

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Why Choose Us for Your UI/UX Design Needs?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">User-Centered Design</h3>
            <p className="text-gray-600">
              We prioritize the needs of your users to create seamless and effective experiences.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Intuitive Interfaces</h3>
            <p className="text-gray-600">
              Our designs ensure your product is easy to navigate, with clear calls to action.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Responsive Design</h3>
            <p className="text-gray-600">
              We ensure your design looks great on all devices, from desktop to mobile.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Prototyping & Testing</h3>
            <p className="text-gray-600">
              We build interactive prototypes and conduct usability tests to validate designs.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Brand Consistency</h3>
            <p className="text-gray-600">
              We create designs that align with your brand identity, ensuring a consistent experience.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Ongoing Collaboration</h3>
            <p className="text-gray-600">
              We work closely with you throughout the design process to ensure your vision is realized.
            </p>
          </div>
        </div>
      </div>

       {/*Call To Action Section*/}
     <CallToAction />
    </div>
  );
};

export default UIDesign;
