import React, { useEffect, useState } from "react";

const PopUp = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Check if the user has visited before
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

    // If the user hasn't visited before, show the pop-up and set the flag
    if (!hasVisitedBefore) {
      setShowMessage(true);

      // Set the flag in localStorage to indicate that the user has visited
      localStorage.setItem("hasVisitedBefore", "true");

      // Set a timer to hide the message after 5 seconds
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      // Clean up the timer
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-60 bg-black z-50 transition-opacity duration-500 opacity-100">
          <div className="relative bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg text-center w-full max-w-[800px] h-[500px] sm:max-w-[50%] sm:h-[auto] transform transition-all duration-500 scale-100 opacity-100">
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
    </>
  );
};

export default PopUp;
