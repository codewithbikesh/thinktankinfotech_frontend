import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const Hero = ({ title1, image, serviceLink, contactLink, buttonText1, buttonText2 }) => {
  return (
    <section className="flex flex-col-reverse sm:flex-row justify-between items-center sm:p-12 mt-[57px] max-w-7xl mx-auto px-4">
      <div className="text-left flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4 sm:mb-5 text-justify sm:text-left">{title1}</h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <Link to={serviceLink} className="px-6 py-3 bg-green-700 hover:bg-orange-600 transition-all duration-300 ease-in-out text-white rounded-lg cursor-pointer w-full sm:w-auto">
            {buttonText1}
          </Link>
          <Link to={contactLink} className="px-6 py-3 bg-green-700 hover:bg-orange-600 transition-all duration-300 ease-in-out text-white rounded-lg cursor-pointer w-full sm:w-auto">
            {buttonText2}
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center mt-6 sm:mt-0">
        <img
          src={image}
          alt="Hero Image"
          className="max-w-full h-auto rounded-lg"
          data-aos="zoom-in-left"
        />
      </div>
    </section>
  );
};
export default Hero;
