import React from 'react'

function CallToAction() {
  return (
    <div className="bg-green-600 text-white py-10 mt-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to Take Your Business Online?</h2>
      <p className="text-lg mb-6">
        Contact us today to get started on your journey to digital success.
      </p>
      <a
        href="/contact"
        className="inline-block bg-white text-green-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Get in Touch
      </a>
    </div>
  </div>
  )
}

export default CallToAction