import React from 'react';
import CompanyIntro from '../components/about/CompanyIntro';
import CoreValues from '../components/about/CoreValues';
import Timeline from '../components/about/Timeline';
import CallToAction from "../components/services/CallToAction";

const About = () => {
  return (
    <div className="pt-10">
      <CompanyIntro />
      <CoreValues />
      {/* <Timeline /> */}
      <CallToAction />
    </div>
  );
};

export default About;