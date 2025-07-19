'use client'

import React, { useState, useEffect, useRef, ReactNode } from "react"

// Animation wrapper
interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  slideDirection?: 'left' | 'right';
}

function AnimatedArchitectureItem({ children, delay = 0, slideDirection = 'right' }: AnimatedItemProps) {
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

  const translateX = slideDirection === 'right' ? 'translate-x-10' : '-translate-x-10';

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${translateX}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function PlatformArchitecture() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-2">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider">PLATFORM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl font-semibold mb-6">Trusted AI Across Your Organization</h2>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto space-y-4">
            <p>
              Lily is powered by a unique Composable Agents Layer™, automating multifaceted tasks through dynamically composable AI agents. It works harmoniously with existing tools and is always adapting, evolving and learning, combining many models for optimal results.
            </p>
            <p>
              Unlike others, Lily's adaptive AI offers greater security and precision, ensuring compliance with global data protection standards while customizing experiences through private AI models, never compromising on data safety.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Architecture Diagram */}
            <AnimatedArchitectureItem delay={0} slideDirection="left">
              <div className="border-2 border-gray-200 rounded-2xl p-8 pt-5 bg-white shadow-lg relative overflow-hidden">
                {/* Security wrapper - dotted border around entire diagram */}
                <div className="absolute top-0 left-0 right-0 bottom-0 border-2 border-dashed border-gray-300 rounded-xl m-3 pointer-events-none"></div>
                
                {/* Security icons at top - reduced spacing */}
                <div className="flex justify-center gap-6 mb-6 relative mt-4">
                  {/* Line connecting security icons to diagram border */}
                  <div className="absolute w-0.5 h-3 bg-gray-300 top-full left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full p-1.5 border border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full p-1.5 border border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                </div>

                {/* Customer Layer */}
                <div className="bg-gray-900 text-white p-5 rounded-lg text-center mb-6 shadow-md relative z-10 mx-4">
                  <div className="uppercase tracking-wider text-sm font-medium mb-2">CUSTOMER LAYER</div>
                  <div className="flex justify-center gap-8 mt-3">
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-gray-800 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                      <span className="text-xs">Web</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-gray-800 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                      <span className="text-xs">API</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-gray-800 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                          <line x1="12" y1="18" x2="12.01" y2="18" />
                        </svg>
                      </div>
                      <span className="text-xs">Mobile</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-gray-800 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          <line x1="12" y1="19" x2="12" y2="23" />
                          <line x1="8" y1="23" x2="16" y2="23" />
                        </svg>
                      </div>
                      <span className="text-xs">Voice</span>
                    </div>
                  </div>
                </div>

                {/* Learning Layer */}
                <div className="bg-gray-800 text-white p-5 rounded-lg text-center mb-6 shadow-md relative z-10 mx-4">
                  <div className="uppercase tracking-wider text-sm font-medium mb-2">LEARNING LAYER</div>
                </div>

                {/* Composable Layer */}
                <div className="bg-gray-700 text-white p-5 rounded-lg text-center mb-6 shadow-md relative z-10 mx-4">
                  <div className="uppercase tracking-wider text-sm font-medium mb-2">COMPOSABLE LAYER</div>
                  <div className="flex justify-center gap-8 mt-3">
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-gray-600 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </div>
                      <span className="text-xs">Task Manager</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-gray-600 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <ellipse cx="12" cy="5" rx="9" ry="3" />
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        </svg>
                      </div>
                      <span className="text-xs">Data Manager</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-gray-600 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </div>
                      <span className="text-xs">Web Agent</span>
                    </div>
                  </div>
                </div>

                {/* Data Layer */}
                <div className="bg-gray-600 text-white p-5 rounded-lg text-center shadow-md relative z-10 mx-4 mb-3">
                  <div className="uppercase tracking-wider text-sm font-medium mb-2">DATA LAYER</div>
                  <div className="flex justify-center gap-8 mt-3">
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-gray-500 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <span className="text-xs">Cloud</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-gray-500 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <span className="text-xs">Customer Data</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-gray-500 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <line x1="3" y1="9" x2="21" y2="9" />
                          <line x1="9" y1="21" x2="9" y2="9" />
                        </svg>
                      </div>
                      <span className="text-xs">External Data</span>
                    </div>
                  </div>
                </div>

                {/* Security label */}
                <div className="text-xs text-gray-500 text-center absolute top-6 right-6 font-medium">
                  End-to-end security
                </div>

                {/* Connect lines for layers */}
                <div className="absolute left-1/2 top-[3.5rem] bottom-[20%] w-0.5 bg-gray-300 -z-0 transform -translate-x-1/2"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-[20%] left-[20%] w-32 h-32 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-[20%] right-[20%] w-32 h-32 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
              </div>
            </AnimatedArchitectureItem>

            {/* Right side - Platform Description */}
            <AnimatedArchitectureItem delay={100} slideDirection="right">
              <div className="space-y-8">
                <div className="space-y-6 text-lg text-gray-700">
                  <div className="pt-4">
                    <a href="/get-started" className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-black hover:bg-gray-800 text-white font-medium">
                      Get a Demo
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedArchitectureItem>
          </div>
        </div>
      </div>
    </section>
  );
} 