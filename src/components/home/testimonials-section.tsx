'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatedSectionWrapper } from '@/components/layout/animated-section-wrapper';

const testimonials = [
  {
    id: 1,
    name: 'SRS DISTRIBUTION',
    quote:
      'At SRS Distribution, our follow-up time dropped from days to hours. InstaWorkers™ scan live data overnight, identify at-risk accounts, draft outreach, and log it back to CRM."',
    author: 'Patrick Garcia',
    title: 'Chief Digital Officer',
    company: 'SRS Distribution',
  },
  {
    id: 2,
    name: 'PARTSTOWN',
    quote:
      'The ease of building, deploying, and monitoring AI agents allowed us to quickly enhance our operations. The intuitive interface and powerful capabilities made the transition seamless, driving significant improvements in efficiency and customer satisfaction."',
    author: 'Emanuela Delgado',
    title: 'Head of Innovation',
    company: 'Partstown',
  },
  {
    id: 3,
    name: 'UNKNOWN',
    quote:
      'We were skeptical about AI at first, but the results speak for themselves. Our efficiency has skyrocketed, and our team can now focus on high-value tasks instead of repetitive data entry."',
    author: 'John Smith',
    title: 'Director of Innovation',
    company: 'Unknown Corp',
  },
];

export function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);

  return (
    <div className="py-12 px-4">
      <div className="max-w-[1340px] mx-auto">
        <h2 className="title-text text-black text-left mb-12">
          What our partners say
        </h2>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div
            className="border border-gray-200"
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
                      className={`transform -rotate-90 whitespace-nowrap text-base font-semibold tracking-widest transition-colors ${
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
                  {/* Image */}
                  <div className="w-full h-80 relative overflow-hidden rounded-lg">
                    {selectedTestimonial.id === 1 ? (
                      <Image
                        src="/assets/test0.png"
                        alt="SRS Distribution testimonial"
                        fill
                        className="object-cover"
                      />
                    ) : selectedTestimonial.id === 2 ? (
                      <Image
                        src="/assets/test1.png"
                        alt="Partstown testimonial"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center">
                        <span className="text-gray-400">Image Placeholder</span>
                      </div>
                    )}
                  </div>

                  {/* Quote */}
                  <div className="flex flex-col justify-center">
                    <blockquote className="body-copy text-black mb-6 relative">
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
                      className={`transform -rotate-90 whitespace-nowrap text-base font-semibold tracking-widest transition-colors ${
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

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSectionWrapper key={testimonial.id} delay={index * 150}>
              <div className="border border-gray-200 rounded-lg p-6">
              <div className="w-full h-64 relative overflow-hidden rounded-lg mb-4">
                {testimonial.id === 1 ? (
                  <Image
                    src="/assets/test0.png"
                    alt="SRS Distribution testimonial"
                    fill
                    className="object-cover"
                  />
                ) : testimonial.id === 2 ? (
                  <Image
                    src="/assets/test1.png"
                    alt="Partstown testimonial"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-gray-400">Image Placeholder</span>
                  </div>
                )}
              </div>
              <blockquote className="body-copy text-black mb-4 relative">
                <span className="absolute -left-4 -top-1 text-4xl text-gray-200">“</span>
                <span className="relative z-10">{testimonial.quote}</span>
              </blockquote>
              <cite className="not-italic">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </cite>
              </div>
            </AnimatedSectionWrapper>
          ))}
        </div>
      </div>
    </div>
  );
} 