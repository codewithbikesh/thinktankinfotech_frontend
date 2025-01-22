import React from "react";

function FooterLinks() {
  return (
    <ul className="flex justify-center items-center flex-wrap gap-2 p-2">
      <li>
        <a href="#" className="hover:text-orange-600 transition">
          FAQ
        </a>
      </li>|
      <li>
        <a
          href="#"
          className="hover:text-orange-600 transition"
        >
          Terms &amp; Conditions
        </a>
      </li>|
      <li>
        <a href="#" className="hover:text-orange-600 transition">
          Privacy Policy
        </a>
      </li>
    </ul>
  );
}

export default FooterLinks;
