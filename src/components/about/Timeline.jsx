import React from 'react';

const milestones = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'Think Tank IT was established with a vision to transform digital businesses.',
  },
  {
    year: '2013',
    title: 'Global Expansion',
    description: 'Opened offices in major tech hubs across three continents.',
  },
  {
    year: '2016',
    title: 'Innovation Award',
    description: 'Recognized for breakthrough cloud solutions in enterprise technology.',
  },
  {
    year: '2019',
    title: 'AI Division Launch',
    description: 'Launched specialized AI and machine learning services division.',
  },
  {
    year: '2022',
    title: 'Industry Leader',
    description: 'Ranked among top 10 IT consulting firms globally.',
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600">A timeline of our major milestones</p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />
          
          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-green-600" />
                </div>
                <div className={`flex ${index % 2 === 0 ? 'justify-end' : ''} items-center w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="text-green-600 font-bold">{milestone.year}</span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-2">{milestone.title}</h3>
                    <p className="text-gray-600 mt-2">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;