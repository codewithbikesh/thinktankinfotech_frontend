import React from 'react';
import { Heart, Shield, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about technology and its potential to transform businesses.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest standards of honesty and transparency in all our dealings.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and partnership with our clients.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge solutions.',
  },
];

const CoreValues = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600">The principles that guide everything we do</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-duration="1000">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-green-600 mb-6">
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;