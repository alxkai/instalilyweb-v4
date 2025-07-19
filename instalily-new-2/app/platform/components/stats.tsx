'use client'

import React, { useState, useEffect, useRef, ReactNode } from "react"

// Animation wrapper
interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
}

function AnimatedStatsColumn({ children, delay = 0 }: AnimatedItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // observer.unobserve(domRef.current); // Optional
        }
      });
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' // Fade and slide up
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function PlatformStats() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center mb-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-2">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              fill="currentColor"
            />
          </svg>
          <span className="text-sm font-medium uppercase tracking-wider">
            TOP USE CASES TRUSTED BY OPERATORS & P/L LEADERS
          </span>
        </div>
        <h2 className="text-3xl font-semibold mb-6">
          Our Platform is in Production & Driving ROI.
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tailored to your customer needs, continuously learning and makes your team work faster & smarter every day.
        </p>
        
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Lily Sales AI Agent */}
            <AnimatedStatsColumn delay={0}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Lily Sales AI Agent</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                    Drive upsell / cross-sell revenue
                  </div>
                  <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                    Intercept churn risk
                  </div>
                  <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                    Automate sales tasks
                  </div>
                  <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                    Generate ROI-driven next best action
                  </div>
                </div>
              </div>
            </AnimatedStatsColumn>

            {/* Lily Service AI Agent */}
            <AnimatedStatsColumn delay={100}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Lily Service AI Agent</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                    Build dense knowledge graphs
                  </div>
                  <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                    Speed up diagnosis by 90%
                  </div>
                  <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                    Faster customer resolution
                  </div>
                  <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                    Upskill workers & improve NPS
                  </div>
                </div>
              </div>
            </AnimatedStatsColumn>

            {/* Lily Marketing AI Agent */}
            <AnimatedStatsColumn delay={200}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Lily Marketing AI Agent</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                    Automate campaign creation
                  </div>
                  <div className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                    Deep performance insights
                  </div>
                  <div className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                    Conversational Integration
                  </div>
                  <div className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                    Faster iterations to drive ROI
                  </div>
                </div>
              </div>
            </AnimatedStatsColumn>
          </div>
        </div>
      </div>
    </section>
  )
}

