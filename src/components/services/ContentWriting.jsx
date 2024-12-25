import React from "react";
import Service_Hero from './Service_Hero';
import ContentWritingImage from "../../assets/images/services/content_writting.svg"; // Replace with an appropriate content writing image
import CallToAction from "./CallToAction";

const ContentWriting = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Service_Hero
        title="Content Writing"
        text="Engage and inspire your audience with meaningful content that resonates with their needs and interests. Our content writing services are designed to help your brand stand out with well-researched, creative, and SEO-optimized content. Whether it's blog posts, website copy, product descriptions, or social media content, we deliver words that connect with your audience and drive results."
        image={ContentWritingImage} // Update with an appropriate content writing image
        contactLink="/contact"
        buttonText2="Get Quality Content"
      />

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Why Choose Us for Content Writing?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Audience-Centric Approach</h3>
            <p className="text-gray-600">
              We create content that speaks directly to your audience’s needs, interests, and pain points.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">SEO-Optimized Content</h3>
            <p className="text-gray-600">
              Our content is crafted to improve your search engine rankings and increase organic traffic.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Engaging Storytelling</h3>
            <p className="text-gray-600">
              We bring your brand’s story to life with creative and compelling narratives.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Versatile Content Types</h3>
            <p className="text-gray-600">
              From blogs and articles to website copy and product descriptions, we deliver diverse content.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Thorough Research</h3>
            <p className="text-gray-600">
              We dive deep into your industry to ensure content that is accurate, relevant, and impactful.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Timely Delivery</h3>
            <p className="text-gray-600">
              We respect your deadlines and deliver high-quality content on time, every time.
            </p>
          </div>
        </div>
      </div>

      {/* Call To Action Section */}
      <CallToAction />
    </div>
  );
};

export default ContentWriting;
