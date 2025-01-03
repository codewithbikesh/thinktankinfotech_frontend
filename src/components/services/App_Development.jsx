import React from "react";
import Service_Hero from "./Service_Hero";
import { Phone, Code, User, Shield, Layers } from "lucide-react"; // Import icons from lucide-react
import AppDevImage from "../../assets/images/services/mobile_development.svg";
import CallToAction from "./CallToAction";

const AppDevelopmentPage = () => {
  return (
    <>
      <div>
        <Service_Hero
          title="App Development"
          text="Our mobile app development services focus on delivering high-quality, user-friendly applications for iOS and Android. We specialize in creating apps that are not only functional but also provide a seamless user experience.

          From design to deployment, our team ensures your app aligns with your business goals while leveraging the latest technologies. Whether it’s a native or cross-platform app, we prioritize performance, security, and scalability.

          With features like AI integration, AR/VR, and cloud solutions, we build apps that stand out. Plus, we provide ongoing support to keep your app optimized for future success."
          image={AppDevImage}
          contactLink="/contact"
          buttonText2="Start Building Your App"
        />
      </div>
      <div className="max-w-screen-xl mx-auto p-6">
        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Features
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Phone className="text-green-500 mr-3" />
              <span className="text-lg text-gray-600">
                Cross-platform development (iOS & Android)
              </span>
            </li>
            <li className="flex items-center">
              <Code className="text-green-500 mr-3" />
              <span className="text-lg text-gray-600">
                Native app performance
              </span>
            </li>
            <li className="flex items-center">
              <User className="text-green-500 mr-3" />
              <span className="text-lg text-green-600">Custom UI/UX Design</span>
            </li>
            <li className="flex items-center">
              <Shield className="text-green-500 mr-3" />
              <span className="text-lg text-gray-600">
                Secure backend integration
              </span>
            </li>
            <li className="flex items-center">
              <Layers className="text-green-500 mr-3" />
              <span className="text-lg text-gray-600">
                Scalable and flexible architecture
              </span>
            </li>
          </ul>
        </section>

        {/* Development Process Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Development Process
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Our app development process is structured to ensure efficient
            delivery with the highest quality. We follow a streamlined approach
            to create apps that meet your specific requirements.
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-600">
            <li>Planning & Requirements Gathering</li>
            <li>Designing UI/UX</li>
            <li>Development & Testing</li>
            <li>Deployment & Maintenance</li>
          </ol>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Benefits of Mobile App Development
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Investing in mobile app development offers various advantages for
            your business, including increased brand visibility, improved
            customer engagement, and more efficient processes.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
            <li>Reach a larger audience across iOS and Android platforms</li>
            <li>Enhance user engagement with personalized features</li>
            <li>Improve customer loyalty and retention</li>
            <li>Streamline operations and improve efficiency</li>
            <li>Boost brand credibility and visibility</li>
          </ul>
        </section>
      </div>
      {/*Call To Action Section*/}
      <CallToAction />
    </>
  );
};

export default AppDevelopmentPage;
