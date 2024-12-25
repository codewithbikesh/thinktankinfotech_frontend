import React from "react";
import Service_Hero from './Service_Hero';
import SocialMediaMarketingImage from "../../assets/images/services/smm.svg"; // Replace with an appropriate SMM image
import CallToAction from "./CallToAction";

const SocialMediaMarketing = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Service_Hero
        title="Social Media Marketing (SMM)"
        text="Grow your business online with expert digital marketing strategies tailored for your brand. Our social media marketing services are designed to increase your online visibility, engage your target audience, and drive measurable results. From creating compelling content to managing ad campaigns and analyzing performance, we help you leverage the power of social media to achieve your business goals."
        image={SocialMediaMarketingImage} // Update with an appropriate social media marketing image
        contactLink="/contact"
        buttonText2="Boost Your Online Presence"
      />

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Why Choose Us for Social Media Marketing?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Custom Strategies</h3>
            <p className="text-gray-600">
              We create tailored social media strategies that align with your brand and business goals.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Engaging Content Creation</h3>
            <p className="text-gray-600">
              Our team designs captivating visuals and compelling posts that drive engagement.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Targeted Advertising</h3>
            <p className="text-gray-600">
              Reach the right audience with precision through optimized social media ad campaigns.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Analytics & Insights</h3>
            <p className="text-gray-600">
              We provide detailed reports and actionable insights to improve your campaign performance.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Multi-Platform Expertise</h3>
            <p className="text-gray-600">
              We manage your presence across platforms like Facebook, Instagram, Twitter, LinkedIn, and more.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Consistent Branding</h3>
            <p className="text-gray-600">
              Our strategies ensure your brand's voice and visuals remain consistent across all platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Call To Action Section */}
      <CallToAction />
    </div>
  );
};

export default SocialMediaMarketing;
