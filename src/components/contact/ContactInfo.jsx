import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Tokha-11", "Baniyatar, Kathmandu"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "+977-9856017621",
      "+977-9866077949",
      "+977-9744221258",
      "+977-9866114605",
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@thinktankinfotech.com", "thinktankinfotech5@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 2PM"],
  },
];

const ContactInfo = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10" // Ensuring relative positioning and no z-index conflicts
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {contactDetails.map((item, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="p-3 bg-blue-100 rounded-lg">
              <item.icon className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1 w-full">
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 break-words">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
