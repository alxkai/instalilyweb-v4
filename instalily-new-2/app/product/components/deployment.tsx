'use client'

import { Maximize2, LayoutGrid, Network, Lightbulb } from "lucide-react"
import React, { useState, useEffect, useRef, ReactNode } from "react"

// New component for feature card animation
interface AnimatedFeatureCardProps {
  children: ReactNode;
  delay: number; // Add delay prop for staggering
}

function AnimatedFeatureCard({ children, delay }: AnimatedFeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // observer.unobserve(domRef.current); // Optional: stop observing
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
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }} // Apply delay
    >
      {children}
    </div>
  );
}

export function ProductDeployment() {
  const benefits = [
    {
      title: "Extreme high speed",
      description: "Integrate deep process analysis, enabling faster and more accurate decision-making.",
      bgColor: "bg-black",
    },
    {
      title: "SOC2 secure and compliant",
      description: "Ensure your data and processes meet the highest security and compliance standards.",
      bgColor: "bg-black",
    },
  ]

  const features = [
    {
      icon: <Maximize2 strokeWidth={1.5} />,
      title: "Ingest",
      description: "Lily connects with your data and business logic.",
      gradient: "from-purple-600 to-purple-900",
      hoverGradient: "hover:from-purple-500 hover:to-purple-800",
      textColor: "text-purple-200",
      bgIconColor: "bg-purple-800/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <LayoutGrid strokeWidth={1.5} />,
      title: "Compose",
      description: "Lily recruits composable AI agents to take action.",
      gradient: "from-indigo-600 to-indigo-900",
      hoverGradient: "hover:from-indigo-500 hover:to-indigo-800",
      textColor: "text-indigo-200",
      bgIconColor: "bg-indigo-800/20",
      borderColor: "border-indigo-500/30"
    },
    {
      icon: <Network strokeWidth={1.5} />,
      title: "Integrate",
      description: "Lily works within your established processes.",
      gradient: "from-blue-600 to-blue-900",
      hoverGradient: "hover:from-blue-500 hover:to-blue-800",
      textColor: "text-blue-200",
      bgIconColor: "bg-blue-800/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Lightbulb strokeWidth={1.5} />,
      title: "Learn",
      description: "Lily learns continuously and gets better.",
      gradient: "from-teal-600 to-teal-900",
      hoverGradient: "hover:from-teal-500 hover:to-teal-800",
      textColor: "text-teal-200",
      bgIconColor: "bg-teal-800/20",
      borderColor: "border-teal-500/30"
    },
  ]

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-2/5 h-2/3 bg-gradient-to-tr from-purple-600/30 via-purple-400/20 to-transparent blur-2xl"></div>
        <div className="absolute right-10 bottom-10 w-1/3 h-1/2 bg-gradient-to-tl from-blue-600/30 via-blue-400/20 to-transparent blur-2xl"></div>
        <div className="absolute top-10 left-1/3 w-1/2 h-1/3 bg-gradient-to-b from-teal-400/25 to-transparent blur-2xl"></div>
        <div className="absolute left-1/4 top-1/3 w-1/5 h-1/5 bg-purple-500/15 rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/3 w-1/6 h-1/6 bg-blue-500/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-2 text-blue-400">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider text-blue-400">WORKFLOW AUTOMATION</span>
          </div>
          <h2 className="text-4xl font-semibold text-white">Lily can automate any sales and service workflows with AI Agents.</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedFeatureCard key={index} delay={index * 100}>
              <div 
                className={`bg-gradient-to-br ${feature.gradient} ${feature.hoverGradient} p-8 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out border border-white/10 group h-full`}
              >
                <div>
                  <div className={`w-16 h-16 ${feature.bgIconColor} ${feature.borderColor} border-2 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                    {React.cloneElement(feature.icon, {
                      className: "w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500",
                    })}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white transform transition-all duration-500 ease-in-out group-hover:translate-x-1">{feature.title}</h3>
                  <p className={`${feature.textColor} transform transition-all duration-500 ease-in-out group-hover:translate-x-1`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedFeatureCard>
          ))}
        </div>
      </div>
    </section>
  )
}

