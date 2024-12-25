import React from "react";
import Service_Hero from './Service_Hero';
import GraphicDesignImage from "../../assets/images/services/designer.svg"; // Replace with an appropriate graphic design image
import CallToAction from "./CallToAction";

const Graphic_Design = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Service_Hero
        title="Graphic Design"
        text="Our graphic design services bring your brand’s story to life with visually compelling designs that resonate with your audience. From logo design to marketing materials and digital assets, we create designs that are not only aesthetically pleasing but also strategically aligned with your brand identity. Let us help you stand out in a crowded marketplace with visuals that inspire, engage, and leave a lasting impression on your audience."
        image={GraphicDesignImage} // Update with an appropriate graphic design image
        contactLink="/contact"
        buttonText2="Get Stunning Designs"
      />

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Why Choose Us for Your Graphic Design Needs?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Brand-Focused Designs</h3>
            <p className="text-gray-600">
              We create designs that tell your brand’s story and connect with your target audience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Versatile Creativity</h3>
            <p className="text-gray-600">
              From logos to brochures, social media graphics, and more, we deliver versatile designs.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Attention to Detail</h3>
            <p className="text-gray-600">
              Every element of your design is crafted with precision to create impactful visuals.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Custom Solutions</h3>
            <p className="text-gray-600">
              No templates here—we create custom designs tailored to your unique needs and goals.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Brand Consistency</h3>
            <p className="text-gray-600">
              We ensure your designs align with your brand’s identity across all platforms and media.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Timely Delivery</h3>
            <p className="text-gray-600">
              We value your time and ensure your designs are delivered on schedule, every time.
            </p>
          </div>
        </div>
      </div>

      {/* Call To Action Section */}
      <CallToAction />
    </div>
  );
};

export default Graphic_Design;
