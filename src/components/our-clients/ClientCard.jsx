import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Correctly importing Link from react-router-dom
import SopChahiyo from "../../assets/images/our-clients/sop-chahiyo.png";
import SUNRISE_Logo from "../../assets/images/our-clients/SUNRISE_Logo-removebg.webp";
import Arrive4You from "../../assets/images/our-clients/arrive4you.png";

// Component for individual client
const ClientCard = ({ logo, name, link }) => {
  return (
    <a
      href={link} // Use <a> instead of <Link> for external links
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white shadow-lg rounded-lg p-6 text-center mx-4 flex-shrink-0 w-64 transform transition-transform duration-300 hover:scale-105"
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-auto h-24 mx-auto mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{name}</h3>
    </a>
  );
};

// Main "Our Clients" section
const OurClients = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    const scrollSpeed = 1; // Speed (pixels per frame)
    let scrollStep = 0; // Step for smooth scrolling

    const scroll = () => {
      if (marquee) {
        scrollStep += scrollSpeed;

        // Scroll the container horizontally
        marquee.scrollLeft = scrollStep;

        // Reset when reaching the end to create an infinite loop
        if (scrollStep >= marquee.scrollWidth / 2) {
          scrollStep = 0;
        }
      }
    };

    // Run the scroll function at 60fps (1000ms / 60 ≈ 16ms)
    const interval = setInterval(scroll, 16);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const clients = [
    { name: "SOP Chahiyo", logo: SopChahiyo, link: "https://sopchaiyo.com/" },
    { name: "Sun Rise", logo: SUNRISE_Logo, link: "https://sen.edu.np/" },
    { name: "Arrive4You", logo: Arrive4You, link: "https://arrive4you.com/" },
    { name: "Sun Rise", logo: SUNRISE_Logo, link: "https://sen.edu.np/" },
    { name: "SOP Chahiyo", logo: SopChahiyo, link: "https://sopchaiyo.com/" },
    { name: "Arrive4You", logo: Arrive4You, link: "https://arrive4you.com/" },
  ];

  // Duplicate the clients for a seamless infinite scrolling effect
  const infiniteClients = [...clients, ...clients];

  return (
    <section className="bg-gray-50 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-4">Our Clients</h2>
        <div
          ref={marqueeRef}
          className="flex overflow-hidden whitespace-nowrap"
        >
          {infiniteClients.map((client, index) => (
            <ClientCard
              key={index}
              logo={client.logo}
              link={client.link}
              name={client.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
