'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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

  return (
    <div className="py-32 pt-40 px-4">
      <h2 className="font-semibold text-5xl text-black mb-12">More than just automation.</h2>
      <div onMouseLeave={() => setOpenFeature(null)}>
        {features.map((feature) => {
          const isOpen = openFeature === feature.title;
          return (
            <div
              key={feature.title}
              className={`border-b border-gray-200 transition-colors duration-300 ease-in-out ${
                isOpen ? 'bg-[#181818] text-white' : 'bg-transparent text-black'
              }`}
            >
              <div
                className="py-12 px-6 cursor-pointer flex justify-between items-center"
                onMouseEnter={() => setOpenFeature(feature.title)}
              >
                <h3 className="font-medium text-4xl">{feature.title}</h3>
                {isOpen ? (
                  <Minus className="w-8 h-8" />
                ) : (
                  <Plus className="w-8 h-8" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-[max-height] ease-in-out ${
                  isOpen ? 'duration-500 max-h-96' : 'duration-0 max-h-0'
                }`}
              >
                <div className="px-6 pb-16 md:pl-24">
                  <p
                    className={`text-2xl leading-relaxed transition-colors duration-300 ${
                      isOpen ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}