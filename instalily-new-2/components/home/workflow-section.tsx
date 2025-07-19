"use client"

import { Rocket, ShieldCheck, Cog, Waypoints } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"
import { AnimatedSectionWrapper } from "../layout/animated-section-wrapper"

const steps = [
  {
    icon: <Waypoints className="h-8 w-8 text-black transition-colors duration-300 group-hover:text-purple-300" strokeWidth={1.5} />,
    title: "Connect Securely",
    description: "Our API overlay plugs into your existing CRMs, ERPs, and file shares. No rip-and-replace, no data migration.",
    hover_gradient: "group-hover:from-purple-950 group-hover:to-black",
  },
  {
    icon: <Cog className="h-8 w-8 text-black transition-colors duration-300 group-hover:text-indigo-300" strokeWidth={1.5} />,
    title: "Configure with Domain Logic",
    description: "Activate pre-built AI agents trained for your industry or compose new skills with our low-code tools.",
    hover_gradient: "group-hover:from-indigo-950 group-hover:to-black",
  },
  {
    icon: <Rocket className="h-8 w-8 text-black transition-colors duration-300 group-hover:text-blue-300" strokeWidth={1.5} />,
    title: "Activate Your Digital Workforce",
    description: "Deploy InstaWorkers™ to execute tasks. They learn from feedback and improve autonomously from day one.",
    hover_gradient: "group-hover:from-blue-950 group-hover:to-black",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-black transition-colors duration-300 group-hover:text-sky-300" strokeWidth={1.5} />,
    title: "Govern with Confidence",
    description: "Maintain full command with complete audit trails, role-based controls, and our SOC 2 compliant security framework.",
    hover_gradient: "group-hover:from-sky-950 group-hover:to-black",
  },
]

export function WorkflowSection() {
  const [isLineVisible, setIsLineVisible] = useState(false)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsLineVisible(true)
            if (lineRef.current) {
              observer.unobserve(lineRef.current)
            }
          }, 800)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = lineRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])
  return (
    <section
      id="workflow-section"
      className="bg-gradient-to-b from-purple-100 via-purple-50 to-white py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedSectionWrapper>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black text-center">
              Go Live in Weeks, Not Quarters
            </h2>
          </AnimatedSectionWrapper>
          <AnimatedSectionWrapper delay={150}>
            <p className="mt-4 text-xl text-gray-600 text-center">
              Our streamlined four-step process ensures a rapid and secure deployment, activating your AI workforce without disrupting your core operations.
            </p>
          </AnimatedSectionWrapper>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none relative flow-root">
          <div
            ref={lineRef}
            aria-hidden="true"
            className={`hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 origin-left transition-transform duration-1000 ${
              isLineVisible ? "scale-x-100" : "scale-x-0"
            }`}
          ></div>
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0 relative">
            {steps.map((step, index) => (
              <AnimatedSectionWrapper key={step.title} delay={300 + index * 100}>
                <div className="text-center group">
                  <div
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-lg mx-auto bg-white border-2 border-gray-300 transition-all duration-300 group-hover:scale-125 group-hover:bg-gradient-to-br ${step.hover_gradient} group-hover:border-transparent`}
                  >
                    {step.icon}
                  </div>
                  <div className="mt-5">
                    <h3 className="text-xl font-semibold leading-7 text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-lg leading-7 text-gray-600">{step.description}</p>
                  </div>
                </div>
              </AnimatedSectionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

