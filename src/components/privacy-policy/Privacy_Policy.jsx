import React, { useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../services/CallToAction";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">
            <span className="text-green-600">Privacy</span>{" "}
            <span className="text-orange-400">Policy</span>
          </h1>

          {/* Add more specific terms and conditions here */}

          {/* Welcome To Think Tank Info Tech Pvt. Ltd.!  */}
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-green-600">Privacy Policy for </span>{" "}
            <span className="text-orange-400">
              Think Tank Info Tech Pvt. Ltd.
            </span>
          </h2>
          <p className="text-lg mb-4 text-justify">
            At Think Tank Info Tech Pvt. Ltd., accessible from
          <Link to="https://www.thinktankinfotech.com" className="text-green-600"> https://www.thinktankinfotech.com </Link>, one of our main priorities is the
            privacy of our visitors. This Privacy Policy document contains types
            of information that are collected and recorded by Think Tank Info
            Tech Pvt. Ltd. and how we use it. If you have further queries or
            require more information about our Privacy Policy, do not hesitate
            to contact us.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-green-600">Log</span>{" "}
            <span className="text-orange-400">Files:</span>
          </h2>
          <p className="text-lg mb-4 text-justify">
            Think Tank Info Tech Pvt. Ltd. follows a standard procedure of using
            log files. These files log visitors when they visit websites. All IT
            service companies do this as part of IT-related services' analytics.
            The information gathered by log files includes:
          </p>

          <ul className="list-disc ml-6">
            <li>Internet protocol (IP) addresses</li>
            <li>Website</li>
            <li>Internet Service Provider (ISP)</li>
            <li>Time & Date Stamp</li>
            <li>Referring/exit pages</li>
            <li>
              Several clicks that are not linked to personally identifiable
              information, used for analyzing trends, administering the site,
              tracking users' movement on the browser, and gathering demographic
              information.
            </li>
          </ul>

          {/* Privacy Policies: */}
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-green-600">Privacy</span>{" "}
            <span className="text-orange-400">Policies:</span>
          </h2>
          <p className="text-lg mb-4 text-justify">
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Think Tank Info Tech Pvt. Ltd. Our Privacy
            Policy will be applied fully and will affect your use of this
            Website, meaning you agree to accept all terms and conditions
            written here. If you disagree with any of these Website Standard
            Terms and Conditions, do not use this Website. We use technologies
            like cookies and tracking to measure the effectiveness of
            advertising campaigns used in respective advertisements and links
            that appear on Think Tank Info Tech Pvt. Ltd., which are sent
            directly to users' browsers. When this occurs, they automatically
            receive your IP address. Note that Think Tank Info Tech Pvt. Ltd.
            has no access to or control over these cookies used by third-party
            advertisers. For more details, visit
            <Link to="https://www.thinktankinfotech.com" className="text-green-600"> https://www.thinktankinfotech.com. </Link>
          </p>

          {/* Third-Party Privacy Policies: */}
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-green-600">Third-Party</span>{" "}
            <span className="text-orange-400">Privacy Policies:</span>
          </h2>
          <p className="text-lg mb-4 text-justify">
            Our Privacy Policy does not apply to other advertisers or websites.
            Thus, we suggest you consult the respective Privacy Policies of
            these third-party ad servers for further information, including
            their practices and instructions on how to opt out of specific
            options. You may find a complete list of these Privacy Policies and
            their links at Privacy Policy Links. You can choose to disable
            cookies through your browser settings. For more information about
            cookie management with specific web browsers, please refer to the
            browsers' respective websites. For further details, visit
            <Link to="https://www.thinktankinfotech.com" className="text-green-600"> https://www.thinktankinfotech.com. </Link>
          </p>

          {/* Children's Information: */}
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-green-600">Children's </span>{" "}
            <span className="text-orange-400">Information:</span>
          </h2>
          <p className="text-lg mb-4 text-justify">
            Another priority is to ensure the protection of children while using
            the internet. We encourage parents and guardians to observe,
            participate in, and monitor or guide their children's online
            activity. Think Tank Info Tech Pvt. Ltd. does not knowingly collect
            any Personally Identifiable Information from children under the age
            of 13. If you believe that your child has provided such information
            on our website, we strongly encourage you to contact us immediately,
            and we will make our best effort to promptly remove such information
            from our records. For more details, visit
            <Link to="https://www.thinktankinfotech.com" className="text-green-600"> https://www.thinktankinfotech.com. </Link>
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-green-600"> Privacy</span>{" "}
            <span className="text-orange-400">Policy: </span>
          </h2>
          <p className="text-lg mb-4 text-justify">
            Our Privacy Policy applies to our company activities and all
            valuable visitors regarding the information they share and/or
            collect on Think Tank Info Tech Pvt. Ltd. This also includes
            information collected offline or via other communication channels.
            For more details, visit <Link to="https://www.thinktankinfotech.com" className="text-green-600"> https://www.thinktankinfotech.com. </Link>
          </p>
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-green-600">Consent:</span>
          </h2>
          <p className="text-lg mb-4 text-justify">
          By using our website, you hereby acquiesce to our Privacy Policy and agree to its Terms and Conditions. For more details, visit <Link to="https://www.thinktankinfotech.com" className="text-green-600"> https://www.thinktankinfotech.com </Link>
          </p>
        </div>
      </div>
      <CallToAction />
    </>
  );
};

export default PrivacyPolicy;
