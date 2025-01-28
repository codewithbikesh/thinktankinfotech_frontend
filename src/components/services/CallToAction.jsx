import React from "react";
import coverImage from "../../assets/images/think.jpg";
import { Phone } from "lucide-react";
import CallUs from "../../assets/images/chat.gif";
function CallToAction() {
  return (
    <div
      className="relative p-5 mt-5 shadow-md bg-cover bg-center"
      style={{ backgroundImage: `url(${coverImage})` }}  
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 p-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        {/* Left Column (12 columns) */}
        <div className="sm:col-span-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            <span className="text-green-400">Let's connect and </span>
            <span className="text-orange-400">
              turn your vision into reality.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg font-semibold text-white">
            Reach Out Now!
          </p>
          <p className="mt-4 text-sm sm:text-base text-white">
            We are available from 9:00 AM to 6:00 PM, Sunday to Friday.
          </p>
        </div>
        {/* Middle Column (4 columns) */}
        <div className="sm:col-span-2">
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-y-4">
            <img src={CallUs} width={200} height={200} alt="Phone Icon" />
          </div>
        </div>

        {/* Right Column (2 columns) */}
        <div className="sm:col-span-2 flex flex-col items-center gap-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-orange-400 text-center">
            <span className="flex items-center">
              <Phone className="h-9 w-9" />
              &nbsp;9856017621
            </span>
          </h2>
          <a
            href="tel:9856017621"
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out text-center"
          >
            Let's Start Conversation
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
