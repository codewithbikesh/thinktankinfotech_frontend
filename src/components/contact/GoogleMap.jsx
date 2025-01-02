import React from "react";

export default function GoogleMap() {
  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ height: "400px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56514.112953586795!2d85.25475281953123!3d27.71320858779174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19976e51f677%3A0x6a3697c1b58af60!2sThink%20Tank%20Info%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1735800662874!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
