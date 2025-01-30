import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'Think Tank IT has transformed our infrastructure with their innovative cloud solutions. Their expertise and support are unmatched.',
  },
  {
    name: 'Michael Chen',
    role: 'CEO, Innovation Labs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'The cybersecurity solutions provided by Think Tank IT have given us peace of mind. Their team is professional and highly skilled.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of Operations, DataFlow',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'Working with Think Tank IT has been a game-changer for our business. Their custom solutions have streamlined our operations.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-2 bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-400">
            Trusted by leading companies worldwide
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full mx-auto mb-8 object-cover"
            />
            <blockquote className="text-xl md:text-2xl mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="mb-8">
              <p className="text-lg font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-gray-400">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;