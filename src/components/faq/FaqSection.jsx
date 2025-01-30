import React, { useState } from "react";
import FaqImage from "../../assets/images/faq.png";

const FaqSection = () => {
  // Example data of FAQs
  const faqs = [
    {
      id: 1,
      question: "What services does your IT company offer?",
      answer:
        "As one of the best IT companies in Nepal, we provide you with a wide range of services. Our core services are as follows: Website Development, Mobile App Development, UI/UX Design, Graphics Design, Social Media Marketing (SMM), Search Engine Optimization (SEO),. Digital Marketing, Content Writing, Website Redesign",
    },
    {
      id: 2,
      question: "What industries does your IT company serve?",
      answer:
        "We serve a wide range of industries. Some of these include education consultancies, health care, travel and tourism, product wholesale and distributors, farming and inventory management, and home repair and management.",
    },
    {
      id: 3,
      question: "What sets your company apart from other IT service providers?",
      answer:
        "We differentiate ourselves through our client-centric approach, cutting-edge technologies, a team of skilled professionals, and a proven track record of delivering successful IT solutions.",
    },
    {
      id: 4,
      question: "Does your company offer custom website development?",
      answer:
        "Yes, we do. One of our specialties is offering our clients customized websites based on their business, branding, and digital needs.",
    },
    {
      id: 5,
      question:
        "How does your company handle website maintenance and updates post-launch?",
      answer:
        "We offer ongoing maintenance services to keep your website secure, up-to-date, and functioning optimally. This includes regular updates, security patches, and performance monitoring.",
    },
    {
      id: 6,
      question: "Can your company assist with mobile app development?",
      answer:
        "Absolutely. We specialize in mobile app development, creating solutions for both Android and iOS platforms to meet your specific requirements.",
    },
    {
      id: 7,
      question:
        "How does your company approach keyword research for SEO purposes?",
      answer:
        "Our SEO experts conduct thorough keyword research to identify relevant and high-performing keywords, ensuring optimal content targeting for search engines.",
    },
    {
      id: 8,
      question:
        "Does your company offer IT consulting services for businesses?",
      answer:
        "Yes, our IT consulting services are designed to help businesses assess, plan, and implement technology solutions that align with their goals and objectives.",
    },
    {
      id: 9,
      question:
        "Does your company provide mobile-responsive design for websites?",
      answer:
        "Yes, all our websites are designed to be mobile-responsive, ensuring a seamless and user-friendly experience across various devices.",
    },
    {
      id: 10,
      question:
        "How does your company approach social media management to enhance brand visibility?",
      answer:
        "Our social media management services focus on strategic content creation, engagement, and analytics to enhance brand visibility and connect with your target audience.",
    },
  ];

  // State to manage which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);

  // Toggle FAQ visibility
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="container mx-auto mt-8">
    <h2 className="text-3xl font-bold text-green-800 text-center"><span className="text-green-600">FA</span><span className="text-orange-400">Qs</span></h2>
    <p className="text-xl text-gray-600 text-center mb-6">Find answers to the most commonly asked questions below!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Header + Image */}
        <div>
          <div className="mb-6 text-center md:text-left">
            {/* Supports + Line */}
            {/* <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-800 uppercase">
                Supports
              </h3>
              <span className="flex-1 border-t border-gray-300"></span>
            </div> */}
            {/* FAQ Heading */}
            <h2 className="text-3xl sm:text-2xl font-bold text-orange-400 mt-4">
              Frequently Asked Questions
            </h2>
            {/* Description */}
            <p className="text-gray-600 font-semibold mt-3 text-justify">
              Welcome to our FAQ section! Here you'll find quick answers to the
              most common questions about our products and services.
            </p>
          </div>
          {/* Image */}
          <img
            className="h-96 w-full rounded-lg"
            src={FaqImage} // Replace with your image URL
            alt="FAQ Illustration"
          />
        </div>

        {/* Right Column: FAQ Accordion */}
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-300 rounded-lg overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left bg-gray-100 hover:bg-gray-200 transition"
                >
                  <span
                    className={`text-lg font-medium transition-colors ${
                      openFaq === faq.id ? "text-orange-400" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openFaq === faq.id
                        ? "rotate-180 stroke-orange-600"
                        : "stroke-gray-600"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer with Smooth Transition */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === faq.id ? "max-h-screen" : "max-h-0"
                  }`}
                  style={{
                    maxHeight: openFaq === faq.id ? "500px" : "0",
                  }}
                >
                  <div className="px-4 py-3 bg-white text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
