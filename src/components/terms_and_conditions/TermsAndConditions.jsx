import React, { useState } from 'react';
import CallToAction from '../services/CallToAction';

const TermsAndConditions = () => {

  return (
    <>
        <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Terms and Conditions</h1>

        <p className="text-lg mb-4">
          Welcome to our website! These terms and conditions outline the rules and regulations for the use of our website, located at <a href="https://www.thinktankinfotech.com" target="_blank" rel="noopener noreferrer">Think Tank Info Tech Pvt. Ltd.</a>.
        </p>

        <p className="text-lg mb-4">
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use our website if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        {/* Add more specific terms and conditions here */}

        {/* Example: */}
        <h2 className="text-2xl font-semibold mb-4">Use of License</h2>
        <p className="text-lg mb-4">
          Permission is granted to temporarily download one copy of the materials (information or software) on Think Tank Info Tech Pvt. Ltd.'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc ml-6">
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on Think Tank Info Tech Pvt. Ltd.'s website;</li>
          <li>remove any copyright or other proprietary notations from the materials;</li>
          <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
      </div>
    </div>
    <CallToAction />    
    </>
  );
};

export default TermsAndConditions;
