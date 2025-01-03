import React from "react";
import Service_Hero from './Service_Hero';
import SEOImage from "../../assets/images/services/seo.svg"; // Replace with an appropriate SEO image
import CallToAction from "./CallToAction";

const SEO = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Service_Hero
        title="Search Engine Optimization (SEO)"
        text="Boost your search engine rankings with our custom SEO solutions tailored to your business needs. We help you achieve enhanced online visibility, attract organic traffic, and drive sustainable growth. From keyword research and on-page optimization to technical SEO and link building, our strategies are designed to ensure your website ranks higher and stays ahead of the competition."
        image={SEOImage} // Update with an appropriate SEO-related image
        contactLink="/contact"
        buttonText2="Start Optimizing Now"
      />

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        <span className="text-green-600">Why Choose Us for</span>{" "}
        <span className="text-orange-600">SEO Services?</span> 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 group">
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600">Custom SEO Strategies</h3>
            <p className="text-gray-600">
              We tailor our SEO plans to meet your unique business goals and target audience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 group">
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600">Comprehensive Keyword Research</h3>
            <p className="text-gray-600">
              We identify the most relevant and high-performing keywords for your niche.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 group">
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600">On-Page Optimization</h3>
            <p className="text-gray-600">
              Optimize your website’s content, meta tags, and structure to improve rankings.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 group">
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600">Technical SEO</h3>
            <p className="text-gray-600">
              Ensure your website is fast, mobile-friendly, and crawlable by search engines.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 group">
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600">Quality Link Building</h3>
            <p className="text-gray-600">
              Build a robust backlink profile with authoritative and relevant websites.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-lg shadow-md p-6 group">
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600">Regular Performance Reports</h3>
            <p className="text-gray-600">
              Get detailed insights into your SEO performance and progress with transparent reporting.
            </p>
          </div>
        </div>
      </div>

      {/* Call To Action Section */}
      <CallToAction />
    </div>
  );
};

export default SEO;
