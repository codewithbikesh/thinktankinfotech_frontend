import React from "react";

const CareerPage = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-20">
      {/* Career Header */}
      <header className="text-center mb-12">
        <h1 className="text-1xl sm:text-1xl md:text-4xl font-bold text-gray-700 mb-4">
          <span className="text-green-600">Join Our Team at</span>{" "}
          <span className="text-orange-600">Think Tank Info Tech</span> 
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-justify">
          We're always looking for talented, passionate individuals who share
          our vision for innovation and technology. At Think Tank Info Tech, we
          foster a collaborative and inclusive work environment where your ideas
          are valued, and your skills are put to the test.
        </p>
      </header>

      {/* Company Culture */}
      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          <span className="text-green-600">Our</span>{" "}
          <span className="text-orange-600">Company Culture</span> 
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 text-justify">
          At Think Tank Info Tech Pvt. Ltd., we believe in empowering our employees to
          reach their full potential. We support continuous learning, open
          communication, and a work-life balance that nurtures creativity and
          productivity. Whether you’re in the office or working remotely, you’ll
          find an inclusive and supportive team culture focused on collaboration
          and growth.
        </p>
      </section>

      {/* Job Openings */}
      <section>
        <h2 className="text-1xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          <span className="text-green-600">Current</span>{" "}
          <span className="text-orange-600">Job Openings</span> 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-full text-center py-12">
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Sorry, there are no job openings available at the moment. Please
              check back later!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="my-12">
        <h2 className="text-1xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          <span className="text-green-600">Why Work</span>{" "}
          <span className="text-orange-600">With Us?</span> 
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
          <li>Competitive Salary & Performance Bonuses</li>
          <li>Health, Dental, and Vision Benefits</li>
          <li>Flexible Work Hours and Remote Options</li>
          <li>Professional Development Opportunities</li>
          <li>Collaborative, Supportive Work Environment</li>
          <li>Generous Paid Time Off (PTO) and Holidays</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12">
        <h3 className="text-xl sm:text-1xl md:text-2xl font-semibold text-gray-900 mb-4">
          <span className="text-green-600">Ready to take the next </span>{" "}
          <span className="text-orange-600">step in your career?</span> 
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 text-justify">
          If you’re passionate about technology, innovation, and creating
          meaningful solutions, we want to hear from you. Apply for one of our
          open positions or reach out to learn more about life at Think Tank Info
          Tech!
        </p>
      </footer>
    </div>
  );
};

export default CareerPage;
