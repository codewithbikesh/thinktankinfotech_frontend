import React from 'react';
import TeamGrid from '../components/team/TeamGrid';
import CallToAction from "../components/services/CallToAction";
const Team = () => {
  return (
    <div className="pt-10">
      <TeamGrid />
      <CallToAction />
    </div>
  );
};

export default Team;