import React, { useEffect, useState } from "react";

const PopUp = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Check if the message has already been shown
    const hasShownMessage = localStorage.getItem("hasShownMessage");

    if (!hasShownMessage) {
      setShowMessage(true);

      // Set the flag in localStorage
      localStorage.setItem("hasShownMessage", "true");

      // Set a timer to hide the message after 5 seconds
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      // Clean up the timer
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      {/* Main Homepage Content */}
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Software Development Services</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl">
        At our company, we specialize in crafting custom software solutions tailored to your needs. From web development to mobile apps, we bring your ideas to life with cutting-edge technology and expert developers. Let us help you achieve your business goals!
      </p>

      {/* Pop-up Message */}
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-60 bg-black z-50">
          <div className="relative bg-green-500 text-white px-6 py-4 rounded shadow-lg text-center w-80">
            {/* Cancel Icon */}
            <button
              onClick={() => setShowMessage(false)}
              className="absolute top-2 right-2 text-white hover:text-gray-300"
              aria-label="Close"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-2">🎉 Get 20% Off!</h2>
            <p className="text-lg">
              First order for website development gets an **exclusive 20% discount**!
            </p>
            <p className="mt-2 text-sm">
              Don’t miss out on this amazing deal. Contact us today to kickstart your project!
            </p>
          </div>
        </div>
      )}

      <p className="mt-8 text-gray-600">
        Ready to start? Reach out to us for a consultation and take the first step towards building something extraordinary.
      </p>
    </div>
  );
};

export default PopUp;
