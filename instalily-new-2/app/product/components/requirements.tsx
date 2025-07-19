'use client'

import { Clock, FileText, Settings, BarChart3, Zap } from "lucide-react"
import React, { useState, useEffect, useRef, ReactNode } from "react"

// New component to handle animation
interface AnimatedTimelineItemProps {
  children: ReactNode;
  index: number;
}

function AnimatedTimelineItem({ children, index }: AnimatedTimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: stop observing after the element is visible once
          // observer.unobserve(domRef.current);
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
      className={`transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}

export function ProductRequirements() {
  const deploymentSteps = [
    {
      icon: <Clock strokeWidth={1.5} />,
      title: "Discovery",
      description: "We work together to understand your document sources, workflows, and integration requirements.",
      week: "Week 0",
      gradient: "from-purple-600 to-purple-900",
      hoverGradient: "hover:from-purple-500 hover:to-purple-800",
      textColor: "text-purple-200",
      bgIconColor: "bg-purple-800/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <FileText strokeWidth={1.5} />,
      title: "Access",
      description: "We establish connections to your existing systems and document repositories.",
      week: "Week 2",
      gradient: "from-indigo-600 to-indigo-900",
      hoverGradient: "hover:from-indigo-500 hover:to-indigo-800",
      textColor: "text-indigo-200",
      bgIconColor: "bg-indigo-800/20", 
      borderColor: "border-indigo-500/30"
    },
    {
      icon: <Settings strokeWidth={1.5} />,
      title: "Build",
      description: "We configure Lily to match your specific business processes and requirements.",
      week: "Week 4",
      gradient: "from-blue-600 to-blue-900",
      hoverGradient: "hover:from-blue-500 hover:to-blue-800",
      textColor: "text-blue-200",
      bgIconColor: "bg-blue-800/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <BarChart3 strokeWidth={1.5} />,
      title: "Test",
      description: "We validate Lily's performance against your actual documents and workflows.",
      week: "Week 8",
      gradient: "from-teal-600 to-blue-900",
      hoverGradient: "hover:from-teal-500 hover:to-blue-800",
      textColor: "text-teal-200",
      bgIconColor: "bg-teal-800/20",
      borderColor: "border-teal-500/30"
    },
    {
      icon: <Zap strokeWidth={1.5} />,
      title: "Deploy",
      description: "We launch Lily into production with ongoing support and optimization.",
      week: "Week 10",
      gradient: "from-emerald-600 to-teal-900",
      hoverGradient: "hover:from-emerald-500 hover:to-teal-800",
      textColor: "text-emerald-200",
      bgIconColor: "bg-emerald-800/20",
      borderColor: "border-emerald-500/30"
    },
  ]

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 w-2/5 h-3/5 bg-gradient-to-br from-purple-600/30 via-purple-400/20 to-transparent blur-2xl"></div>
        <div className="absolute right-0 top-0 w-1/3 h-1/2 bg-gradient-to-bl from-blue-600/30 via-blue-400/20 to-transparent blur-2xl"></div>
        <div className="absolute bottom-10 left-1/3 w-1/2 h-1/3 bg-gradient-to-t from-emerald-500/25 to-transparent blur-2xl"></div>
        <div className="absolute left-1/5 bottom-1/4 w-1/5 h-1/5 bg-indigo-500/15 rounded-full blur-3xl"></div>
        <div className="absolute right-1/3 top-1/4 w-1/6 h-1/6 bg-emerald-500/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-2 text-blue-400">
              <path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider text-blue-400">TYPICAL DEPLOYMENT PROCESS</span>
          </div>
          <h2 className="text-4xl font-semibold text-white mb-6">How we organize deployments.</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our streamlined deployment process ensures a smooth integration of Lily into your existing workflows, 
            with clearly defined milestones and deliverables at each stage.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div 
            className="absolute h-full w-1 bg-gradient-to-b from-purple-600 via-blue-600 to-emerald-600 left-1/2 transform -translate-x-1/2 top-0 rounded-full"
            style={{ 
              maxHeight: 'calc(100% - 60px)', 
              marginTop: '30px',
              boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)' 
            }}
          ></div>
          
          <div className="space-y-12">
            {deploymentSteps.map((step, index) => (
              <AnimatedTimelineItem key={index} index={index}>
                <div
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 relative`}
                >
                  {/* Card */}
                  <div className={`w-full md:w-5/12 z-10 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div 
                      className={`bg-gradient-to-br ${step.gradient} ${step.hoverGradient} p-8 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:-translate-y-2 transition-all duration-500 ease-in-out border border-white/10 group h-full`}
                    >
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-black/30 text-white text-sm font-medium">
                          {step.week}
                        </span>
                      </div>
                      <div className={`w-16 h-16 ${step.bgIconColor} ${step.borderColor} border-2 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                        {React.cloneElement(step.icon, {
                          className: "w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500",
                        })}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-white transform transition-all duration-500 ease-in-out group-hover:translate-x-1">{step.title}</h3>
                      <p className={`${step.textColor} transform transition-all duration-500 ease-in-out group-hover:translate-x-1`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 w-6 h-6 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] border-4 border-blue-500"></div>
                  
                  {/* Spacer div for alternating layout */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              </AnimatedTimelineItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

