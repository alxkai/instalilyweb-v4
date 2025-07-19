'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'SRS DISTRIBUTION',
    quote:
      '“At SRS Distribution, our follow-up time dropped from days to hours. InstaWorkers™ scan live data overnight, identify at-risk accounts, draft outreach, and log it back to CRM.”',
    author: 'Patrick Garcia',
    title: 'Chief Digital Officer',
    company: 'SRS Distribution',
  },
  {
    id: 2,
    name: 'PARTSTOWN',
    quote:
      '“The AI agents have transformed our customer service. We can now offer 24/7 support and resolve issues in record time, which has been a game-changer for our international clients.”',
    author: 'Jane Doe',
    title: 'VP of Operations',
    company: 'PartsTown',
  },
  {
    id: 3,
    name: 'UNKNOWN',
    quote:
      '“We were skeptical about AI at first, but the results speak for themselves. Our efficiency has skyrocketed, and our team can now focus on high-value tasks instead of repetitive data entry.”',
    author: 'John Smith',
    title: 'Director of Innovation',
    company: 'Unknown Corp',
  },
];

export function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);

  return (
    <div className="py-24 px-4">
      <h2 className="font-semibold text-5xl text-black text-center mb-16">
        What our partners say
      </h2>
      <div
        className="max-w-7xl mx-auto border border-gray-200"
        onMouseLeave={() => setSelectedTestimonial(testimonials[0])}
      >
        <div className="grid grid-cols-12">
          {/* Left Nav */}
          <div className="col-span-1 border-r border-gray-200 flex flex-col items-center justify-center">
            {testimonials.slice(0, 1).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="w-full text-center py-4 cursor-pointer"
                onMouseEnter={() => setSelectedTestimonial(testimonial)}
              >
                <p
                  className={`transform -rotate-90 whitespace-nowrap text-sm font-semibold tracking-widest transition-colors ${
                    selectedTestimonial.id === testimonial.id ? 'text-black' : 'text-gray-400'
                  }`}
                >
                  {`0${index + 1}. ${testimonial.name}`}
                </p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div
            key={selectedTestimonial.id}
            className="col-span-10 animate-fade-in"
          >
            <div className="grid grid-cols-2 gap-8 p-12 items-center">
              {/* Image Placeholder */}
              <div className="w-full h-80 bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>

              {/* Quote */}
              <div className="flex flex-col justify-center">
                <blockquote className="text-2xl text-black mb-6 relative">
                  <span className="absolute -left-6 -top-2 text-6xl text-gray-200">“</span>
                  <span className="relative z-10">{selectedTestimonial.quote}</span>
                </blockquote>
                <cite className="not-italic">
                  <p className="font-semibold text-lg">{selectedTestimonial.author}</p>
                  <p className="text-gray-600">{selectedTestimonial.title}</p>
                  <p className="text-gray-600">{selectedTestimonial.company}</p>
                </cite>
              </div>
            </div>
          </div>

          {/* Right Nav */}
          <div className="col-span-1 border-l border-gray-200 flex flex-col items-center justify-around">
            {testimonials.slice(1).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="w-full text-center py-4 cursor-pointer"
                onMouseEnter={() => setSelectedTestimonial(testimonial)}
              >
                <p
                  className={`transform -rotate-90 whitespace-nowrap text-sm font-semibold tracking-widest transition-colors ${
                    selectedTestimonial.id === testimonial.id ? 'text-black' : 'text-gray-400'
                  }`}
                >
                  {`0${index + 2}. ${testimonial.name}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 