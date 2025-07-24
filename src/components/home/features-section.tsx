'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { AnimatedSectionWrapper } from '@/components/layout/animated-section-wrapper';

const features = [
  {
    title: '01. PROPRIETARY INNOVATION',
    description:
      'Our platform is built on a foundation of unique, patent-pending technologies. From our integration engine to our human-interaction models, our innovations are your competitive advantage.',
  },
  {
    title: '02. TRUE HUMAN-IN-THE-LOOP',
    description:
      'InstaWorkers™ are not black boxes. Our platform provides complete transparency and allows your team to supervise, intervene, and collaborate with AI agents in real-time, ensuring quality and control.',
  },
  {
    title: '03. INTUITIVE EXPERIENCES',
    description:
      'We believe powerful technology should be accessible. Our user-centric design makes it easy for anyone on your team to deploy, manage, and interact with your AI workforce, no technical expertise required.',
  },
];

export function FeaturesSection() {
  const [openFeature, setOpenFeature] = useState<string | null>(null);

  const toggleFeature = (title: string) => {
    setOpenFeature(openFeature === title ? null : title);
  };

  return (
    <div className="py-24 md:py-32 px-4">
      <h2 className="title-text text-black mb-12">More than just automation.</h2>
      <div>
        {features.map((feature, index) => {
          const isOpen = openFeature === feature.title;
          return (
            <AnimatedSectionWrapper key={feature.title} delay={index * 150}>
              <div
                className={`border-b border-gray-200 transition-all duration-300 ease-in-out ${
                  isOpen ? 'bg-[#181818] text-white' : 'bg-transparent text-black'
                }`}
              >
                <div
                  className="py-8 md:py-12 px-4 md:px-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFeature(feature.title)}
                >
                  <h3 className="font-medium text-lg md:text-4xl">{feature.title}</h3>
                  <div className="transition-transform duration-300 ease-in-out">
                    {isOpen ? (
                      <Minus className="w-6 h-6 md:w-8 md:h-8" />
                    ) : (
                      <Plus className="w-6 h-6 md:w-8 md:h-8" />
                    )}
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`px-4 md:px-6 pb-12 md:pb-16 md:pl-24 pr-8 md:pr-16 transform transition-transform duration-500 ease-in-out ${
                    isOpen ? 'translate-y-0' : '-translate-y-4'
                  }`}>
                    <p
                      className={`subtitle-copy transition-colors duration-300 ${
                        isOpen ? 'text-gray-300' : 'text-gray-700'
                      } pr-8 md:pr-16`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSectionWrapper>
          );
        })}
      </div>
    </div>
  );
}