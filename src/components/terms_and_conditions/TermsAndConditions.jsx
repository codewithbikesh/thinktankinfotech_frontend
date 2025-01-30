import React, { useState } from "react";
import CallToAction from "../services/CallToAction";

const TermsAndConditions = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">
            <span className="text-green-600">Terms and</span>{" "}
            <span className="text-orange-400">Conditions </span>
          </h1>

          <p className="text-lg mb-4 text-justify">
            Welcome to our website! These terms and conditions outline the rules
            and regulations for the use of our website, located at{" "}
            <a
              className="text-green-600"
              href="https://www.thinktankinfotech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Think Tank Info Tech Pvt. Ltd.
            </a>
            .
          </p>

          <p className="text-lg mb-4 text-justify">
            By accessing this website, we assume you accept these terms and
            conditions. Do not continue to use our website if you do not agree
            to take all of the terms and conditions stated on this page.
          </p>

          {/* Add more specific terms and conditions here */}

          {/* Welcome To Think Tank Info Tech Pvt. Ltd.  */}
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-green-600">Welcome To</span>{" "}
            <span className="text-orange-400">
              Think Tank Info Tech Pvt. Ltd.
            </span>
          </h2>
          <p className="text-lg mb-4 text-justify">
            These terms and conditions outline the rules and regulations for the
            use of Think Tank Info Tech Pvt. Ltd.'s website, located at
            https://www.thinktankinfotech.com. By accessing this website, we
            assume you accept these terms and conditions. If you do not agree
            with any part of these terms and conditions, please refrain from
            using our services.
          </p>

          <p className="text-lg mb-4 text-justify">
            These terms and conditions apply fully and govern your use of this
            website. By continuing to use this website, you agree to accept all
            terms and conditions stated herein. If you disagree with any of
            these Website Standard Terms and Conditions, do not use this
            website.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-green-600">Terminology and </span>{" "}
            <span className="text-orange-400">Definitions </span>
          </h2>
          <p className="text-lg mb-4">
            The following terminology applies to these Terms and Conditions,
            Privacy Statement, and Disclaimer Notice:
          </p>

          <ul className="list-disc ml-6">
            <li>
              "<strong>Client</strong>," "You," and "Your" refer to you, the
              person accessing this website and accepting the Company's terms
              and conditions.
            </li>
            <li>
              "<strong>Company</strong>," "Ourselves," "We," and "Us," refer to
              our organization. We are Think Tank Info Tech Pvt. Ltd.
            </li>
            <li>
              "<strong>Party</strong>," "Parties," or "Us," refers to both the
              Client and ourselves. All terms refer to the client and ourselves.
            </li>
            <li>
              "<strong>Website</strong>," "Site," refers to this website,
              https://www.thinktankinfotech.com.
            </li>
          </ul>

          <p className="text-lg mb-4 text-justify">
            All terms refer to the offer, acceptance, and consideration of
            payment necessary to undertake the process of assisting the Client
            in the most appropriate manner for the express purpose of meeting
            the Client’s needs in respect to the provision of the Company’s
            stated services, in accordance with and subject to the prevailing
            laws of Nepal. Any use of the above terminology or other words in
            the singular, plural, capitalization, and/or he/she or they, are
            taken as interchangeable and, therefore, as referring to the same.
          </p>

          {/* You must not: */}
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-green-600">You must</span>{" "}
            <span className="text-orange-400">not:</span>
          </h2>
          <p className="text-lg mb-4 text-justify">
            Republishing or redistributing material from Think Tank Info Tech
            Pvt. Ltd., selling, renting, or sub-licensing material from the
            company, as well as reproducing, duplicating, or copying material
            from us, is strictly prohibited. This Agreement shall begin on the
            date hereof. The website provides users with an opportunity to post
            and exchange opinions and information in certain areas. Think Tank
            Info Tech Pvt. Ltd. does not filter, edit, publish, or review
            Comments before they appear on the website. Comments do not reflect
            the views and opinions of Think Tank Info Tech Pvt. Ltd., its
            agents, and/or affiliates; rather, they solely represent the views
            of the individuals who post them. To the extent permitted by
            applicable laws, Think Tank Info Tech Pvt. Ltd. shall not be
            responsible for any Comments or any liability, damages, or expenses
            arising from the use, posting, or appearance of such Comments on
            this website. Think Tank Info Tech Pvt. Ltd. reserves the right to
            monitor all remarks and remove any comments deemed inappropriate,
            offensive, or in violation of these Terms and Conditions.
          </p>

          {/* You warrant and represent that: */}
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-green-600">You warrant and </span>{" "}
            <span className="text-orange-400">represent that: </span>
          </h2>
          <p className="text-lg mb-4 text-justify">
            You warrant and represent that you are enabled to post the Comments
            on our website and have all necessary licenses and consents to do
            so. The remarks do not infringe on any intellectual property rights,
            including but not limited to copyright, patent, or trademark of any
            third party. They do not contain any defamatory, libelous,
            offensive, indecent, or otherwise unlawful material that constitutes
            an invasion of privacy. Additionally, remarks will not be used to
            solicit, promote business or custom, or engage in any commercial or
            unlawful activities. You hereby grant Think Tank Info Tech Pvt. Ltd.
            a legal license to use, reproduce, edit, and authorize others to
            use, reproduce, and edit any of your Comments in all forms, formats,
            or media.
          </p>

          {/* Use of License */}
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-green-600">Use of </span>{" "}
            <span className="text-orange-400"> License </span>
          </h2>
          <p className="text-lg mb-4 text-justify">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Think Tank Info Tech Pvt.
            Ltd.'s website for personal, non-commercial transitory viewing only.
            This is the grant of a license, not a transfer of title, and under
            this license you may not:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on
              Think Tank Info Tech Pvt. Ltd.'s website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials;
            </li>
            <li>
              transfer the materials to another person or "mirror" the materials
              on any other server.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">
          <span className="text-green-600"> Disclaimer </span>
          </h2>
          <p className="text-lg mb-4 text-justify">
          We exclude all representations, warranties, and conditions relating to our website and the use of this website, to the maximum extent permitted by applicable law.
          </p>
        </div>
      </div>
      <CallToAction />
    </>
  );
};

export default TermsAndConditions;
