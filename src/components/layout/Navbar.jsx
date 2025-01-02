import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Think from "../../assets/images/think_tank_info_tech.png";
import WebDevImage from "../../assets/images/services/web_development.svg";
import AppDevImage from "../../assets/images/services/mobile_development.svg";
import UIDesignImage from "../../assets/images/services/graphic_designer.svg";
import Graphic_Designer from "../../assets/images/services/designer.svg";
import Online_add from "../../assets/images/services/seo.svg";
import Content_Creator from "../../assets/images/services/content_writting.svg";
import Software_Development from "../../assets/images/services/software_development.svg";
import SMM from "../../assets/images/services/smm.svg";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    AOS.refresh();
    return () => {
      AOS.refresh();
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // Track open submenu

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    // { name: "Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const megaMenuItems = [
    {
      title: "Web Development",
      link: "/services/web-development",
      description:
        "Build modern, responsive, and scalable websites for your business needs.",
      image: WebDevImage,
    },
    {
      title: "App Development",
      link: "/services/app-development",
      description:
        "Create powerful and user-friendly mobile apps for iOS and Android.",
      image: AppDevImage,
    },
    {
      title: "UI/UX Design",
      link: "/services/ui-ux-design",
      description: "Design intuitive and visually appealing user experiences.",
      image: UIDesignImage,
    },
    {
      title: "System/Software Development",
      link: "/services/system-software-development",
      description:
        "System/software developed according to your business needs.",
      image: Software_Development,
    },
    {
      title: "Graphic Design",
      link: "/services/graphic-design",
      description:
        "Designs that Speak Your Brand’s Narrative and Connect with Your Audience.",
      image: Graphic_Designer,
    },
    {
      title: "Social Media Marketing (SMM)",
      link: "/services/social-media-marketing",
      description:
        "Grow your business online with expert digital marketing strategies.",
      image: SMM,
    },
    {
      title: "Content Writing",
      link: "/services/content-writing",
      description:
        "Engaging and meaningful content to connect with your audience.",
      image: Content_Creator,
    },
    {
      title: "Search Engine Optimization (SEO)",
      link: "/services/search-engine-optimization",
      description:
        "Custom SEO solutions for enhanced search engine visibility and growth.",
      image: Online_add,
    },
  ];

  const megaMenuItemsAbout = [
    {
      title: "Introduction",
      link: "/about",
      description:
        "Learn about our mission, vision, and the values that drive our organization forward.",
    },
    {
      title: "Our Team",
      link: "/team",
      description:
        "Meet the passionate individuals behind our success and their expertise.",
    },
  ];

  const handleSubMenuToggle = (submenu) => {
    if (openSubMenu === submenu) {
      setOpenSubMenu(null); // Close if the same submenu is clicked
    } else {
      setOpenSubMenu(submenu); // Open the clicked submenu
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={Think} alt="Logo" className="w-[192px] h-[48px]" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 relative">
            {navItems.map((item) =>
              item.name === "Services" ? (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                  >
                    {item.name}
                    <ChevronDown className="ml-1" size={14} />
                  </Link>
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden group-hover:grid grid-cols-4 gap-4 bg-white shadow-lg p-6 w-[720px] z-50">
                    {megaMenuItems.map((menuItem) => (
                      <Link
                        key={menuItem.title}
                        to={menuItem.link}
                        className="flex flex-col items-start space-y-2 p-4 rounded hover:bg-gray-100 transition"
                      >
                        <img
                          src={menuItem.image}
                          alt={menuItem.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <h3 className="text-gray-800 hover:text-green-600 text-sm font-bold">
                          {menuItem.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {menuItem.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : item.name === "About" ? (
                <div key={item.name} className="relative group">
                  <button
                    className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                    onClick={(e) => e.preventDefault()} // Prevent default action
                  >
                    {item.name}
                    <ChevronDown className="ml-1" size={14} />
                  </button>
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col bg-white shadow-lg p-6 w-[320px] z-50">
                    {megaMenuItemsAbout.map((menuItem) => (
                      <Link
                        key={menuItem.title}
                        to={menuItem.link}
                        className="flex flex-col items-start space-y-2 p-4 rounded hover:bg-gray-100 transition"
                      >
                        <h3 className="text-gray-800 hover:text-green-600 text-sm font-bold">
                          {menuItem.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {menuItem.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) =>
              item.name === "Services" ? (
                <div key={item.name}>
                  <button
                    onClick={() => handleSubMenuToggle("services")}
                    className="w-full text-left flex justify-between items-center text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                    {openSubMenu === "services" ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openSubMenu === "services" && (
                    <div className="bg-white px-4 py-0 rounded-md h-auto">
                      <div className="flex flex-col">
                        {megaMenuItems.map((menuItem) => (
                          <Link
                            key={menuItem.title}
                            to={menuItem.link}
                            className="flex flex-row items-center space-x-4 bg-white p-4 rounded-lg"
                            onClick={() => {
                              setIsOpen(false); // Close menu on link click
                              setOpenSubMenu(null); // Close all submenus
                            }}
                          >
                            <div className="flex">
                              <img
                                src={menuItem.image}
                                alt={menuItem.title}
                                className="w-10 h-10 object-cover rounded"
                              />
                            </div>
                            <h3 className="text-gray-800 hover:text-green-600 text-sm font-bold">
                              {menuItem.title}
                            </h3>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : item.name === "About" ? (
                <div key={item.name}>
                  <button
                    onClick={() => handleSubMenuToggle("about")}
                    className="w-full text-left flex justify-between items-center text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                    {openSubMenu === "about" ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openSubMenu === "about" && (
                    <div className="bg-white px-4 py-0 rounded-md h-auto">
                      <div className="flex flex-col">
                        {megaMenuItemsAbout.map((menuItem) => (
                          <Link
                            key={menuItem.title}
                            to={menuItem.link}
                            className="flex flex-col items-start space-y-2 bg-white p-4 rounded-lg hover:bg-gray-200 transition"
                            onClick={() => {
                              setIsOpen(false); // Close menu on link click
                              setOpenSubMenu(null); // Close all submenus
                            }}
                          >
                            <h3 className="text-gray-800 hover:text-green-600 text-sm font-bold">
                              {menuItem.title}
                            </h3>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
