import React from "react";
import { Link } from "react-router-dom";
function FooterLinks() {
  return (
    <ul className="flex justify-center items-center flex-wrap gap-2 p-2">
      <li>
        <Link to="/faq" className="hover:text-orange-400 transition">
          FAQs
        </Link>
      </li>|
      <li>
        <Link
          to="/terms-and-conditions"
          className="hover:text-orange-400 transition"
        >
          Terms &amp; Conditions
        </Link>
      </li>|
      <li>
        <Link to="/privacy-policy" className="hover:text-orange-400 transition">
          Privacy Policy
        </Link>
      </li>
    </ul>
  );
}

export default FooterLinks;
