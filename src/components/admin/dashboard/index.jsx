import React from 'react';
import ChartOne from '../Charts/ChartOne';
import ChartThree from '../Charts/ChartThree';
import ChartTwo from '../Charts/ChartTwo';


const ECommerce = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
            <ChartTwo />
            <ChartThree />
      </div>
    </>
  );
};

export default ECommerce;
