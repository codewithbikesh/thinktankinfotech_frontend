import React from "react";
import { Target, Lightbulb } from "lucide-react";
import About_Banner from "../../assets/images/about.png";

const CompanyIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-700 mb-6">
             <span className="text-green-600">About Think</span>{" "} 
              <span className="text-orange-600">Tank Info Tech</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 text-justify">
              Founded in 2024, Think Tank Info Tech Pvt. Ltd. is a forward-thinking
              technology solutions provider committed to helping businesses
              navigate the digital landscape. We offer innovative solutions in
              software development, IT consulting, data analytics, and cloud
              services, designed to drive growth, efficiency, and
              transformation. Our expert team blends deep technical expertise
              with strategic insights to deliver customized results that exceed
              expectations. At Think Tank Info Tech, we empower businesses to
              stay ahead by leveraging the latest technologies, fostering
              long-term success, and building lasting partnerships.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    <span className="text-green-600">Our</span>{" "} 
                   <span className="text-orange-600">Mission</span>
                  </h3>
                  <p className="text-gray-600">
                    To empower businesses through innovative technology
                    solutions that drive growth and efficiency.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lightbulb className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    <span className="text-green-600">Our</span>{" "} 
                   <span className="text-orange-600">Vision</span>
                  </h3>
                  <p className="text-gray-600">
                    To be the global leader in delivering transformative IT
                    solutions that shape the future of digital business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={About_Banner}
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
              data-aos="zoom-in-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
