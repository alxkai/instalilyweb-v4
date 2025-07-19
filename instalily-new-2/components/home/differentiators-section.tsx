"use client"

import { BrainCircuit, ShieldCheck } from "lucide-react"
import React, { useState, useEffect, useRef, ReactNode } from "react"
import { AnimatedSectionWrapper } from "../layout/animated-section-wrapper"

// Animation wrapper
interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
}

function AnimatedDifferentiatorCard({ children, delay = 0 }: AnimatedItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Unobserve after animation
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the item is visible

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
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function DifferentiatorsSection() {
  return (
    <section className="bg-purple-100 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSectionWrapper>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black text-center">
              Trusted AI Across Your Organization
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our unique Composable Agents Layer™ delivers powerful automation with the enterprise-grade security and precision you require.
            </p>
          </AnimatedSectionWrapper>
        </div>
        
        <div className="mt-16 sm:mt-20 flow-root flex flex-col md:grid md:grid-cols-5 md:gap-8 md:items-stretch">
          {/* Animation */}
          <AnimatedSectionWrapper delay={300} className="md:col-span-3 md:order-2 mb-10 md:mb-0">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <div className="relative rounded-xl overflow-hidden">
                <video
                  src="/video/ani-01.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </AnimatedSectionWrapper>
          
          {/* Text Content */}
          <div className="md:col-span-2 md:order-1">
            <div className="grid grid-cols-1 gap-y-10 h-full">
              {/* Composable Agents Layer */}
              <AnimatedDifferentiatorCard delay={100}>
                <div className="bg-gradient-to-br from-purple-950 to-black p-8 rounded-xl shadow-xl -translate-y-1 transition-all duration-300 border-gray-100 group h-full md:bg-white md:bg-gradient-to-b md:from-purple-50 md:to-white md:shadow-lg md:translate-y-0 md:hover:bg-gradient-to-br md:hover:from-purple-950 md:hover:to-black md:hover:shadow-xl md:hover:-translate-y-1">
                  <div className="flex items-center gap-x-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-purple-900/30 border-2 border-purple-200 rounded-xl flex items-center justify-center transition-colors duration-300 md:bg-white md:group-hover:bg-purple-900/30">
                      <BrainCircuit className="w-8 h-8 text-purple-300 scale-110 transition-transform duration-300 md:text-purple-600 md:scale-100 md:group-hover:text-purple-300 md:group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white md:text-purple-900 md:group-hover:text-white">Composable Agents Layer™</h3>
                  </div>
                  <p className="text-purple-300 leading-relaxed md:text-gray-600 md:group-hover:text-purple-300">
                    Lily is powered by a unique Composable Agents Layer™, automating multifaceted tasks through dynamically composable AI agents. It works harmoniously with existing tools and is always adapting, evolving and learning, combining many models for optimal results.
                  </p>
                </div>
              </AnimatedDifferentiatorCard>
              
              {/* Adaptive AI & Security */}
              <AnimatedDifferentiatorCard delay={200}>
                <div className="bg-gradient-to-br from-blue-950 to-black p-8 rounded-xl shadow-xl -translate-y-1 transition-all duration-300 border-gray-100 group h-full md:bg-white md:bg-gradient-to-b md:from-purple-50 md:to-white md:shadow-lg md:translate-y-0 md:hover:bg-gradient-to-br md:hover:from-blue-950 md:hover:to-black md:hover:shadow-xl md:hover:-translate-y-1">
                  <div className="flex items-center gap-x-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-900/30 border-2 border-blue-200 rounded-xl flex items-center justify-center transition-colors duration-300 md:bg-white md:group-hover:bg-blue-900/30">
                      <ShieldCheck className="w-8 h-8 text-blue-300 scale-110 transition-transform duration-300 md:text-blue-700 md:scale-100 md:group-hover:text-blue-300 md:group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white md:text-purple-900 md:group-hover:text-white">Adaptive AI & Security</h3>
                  </div>
                  <p className="text-blue-300 leading-relaxed md:text-gray-600 md:group-hover:text-blue-300">
                    Unlike others, Lily's adaptive AI offers greater security and precision, ensuring compliance with global data protection standards while customizing experiences through private AI models, never compromising on data safety.
                  </p>
                </div>
              </AnimatedDifferentiatorCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

