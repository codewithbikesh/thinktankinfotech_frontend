import React from 'react';
import { Award, Clock, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Highly skilled professionals with years of industry experience.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance services.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Tailored solutions focused on your business objectives.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Cutting-edge technology solutions for modern businesses.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">
            Delivering excellence through innovation and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-duration="1000">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-green-600 mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;