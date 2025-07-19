"use client"

import React from "react"
import { Rocket, Network, SlidersHorizontal } from "lucide-react"
import { AnimatedSectionWrapper } from "../layout/animated-section-wrapper"

export function FeaturesSection() {
  return (
    <section className="bg-gradient-to-b from-white via-purple-50 to-purple-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 md:px-0">
        <div className="text-center space-y-4">
          <AnimatedSectionWrapper>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
              One Platform to Supercharge Every Team
            </h2>
          </AnimatedSectionWrapper>
          <AnimatedSectionWrapper delay={150}>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our platform provides a suite of AI agents that plug into your existing systems, supercharging your teams by automating complex workflows and providing actionable intelligence.
            </p>
          </AnimatedSectionWrapper>
        </div>

        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="flex flex-col md:grid md:grid-cols-12 md:gap-8 md:items-stretch">
            {/* Video Column */}
            <AnimatedSectionWrapper delay={300} className="md:col-span-7 mb-8 md:mb-0">
              <div className="bg-white p-2 rounded-2xl shadow-lg h-full">
                <div className="relative rounded-xl overflow-hidden h-full">
                  <video
                    src="/video/ani-00.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </AnimatedSectionWrapper>

            {/* Cards Column */}
            <div className="md:col-span-5 flex flex-col gap-8">
              <AnimatedSectionWrapper delay={450}>
                <div className="bg-gradient-to-br from-purple-950 to-black p-8 rounded-xl shadow-xl -translate-y-1 transition-all duration-300 border border-gray-100 group h-full md:bg-white md:bg-gradient-to-b md:from-purple-50 md:to-white md:shadow-lg md:translate-y-0 md:hover:bg-gradient-to-br md:hover:from-purple-950 md:hover:to-black md:hover:shadow-xl md:hover:-translate-y-1">
                  <div className="flex items-center gap-x-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-purple-900/30 border-2 border-purple-200 rounded-xl flex items-center justify-center transition-colors duration-300 md:bg-white md:group-hover:bg-purple-900/30">
                      <Rocket className="w-8 h-8 text-purple-300 scale-110 transition-transform duration-300 md:text-purple-600 md:scale-100 md:group-hover:text-purple-300 md:group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white md:text-purple-900 md:group-hover:text-white">Accelerate Sales</h3>
                  </div>
                  <p className="text-purple-300 leading-relaxed md:text-gray-600 md:group-hover:text-purple-300">
                    Proactively identify at-risk accounts, recommend upsells, and auto-draft personalized outreach to accelerate pipeline velocity.
                  </p>
                </div>
              </AnimatedSectionWrapper>

              <AnimatedSectionWrapper delay={550}>
                <div className="bg-gradient-to-br from-indigo-950 to-black p-8 rounded-xl shadow-xl -translate-y-1 transition-all duration-300 border border-gray-100 group h-full md:bg-white md:bg-gradient-to-b md:from-purple-50 md:to-white md:shadow-lg md:translate-y-0 md:hover:bg-gradient-to-br md:hover:from-indigo-950 md:hover:to-black md:hover:shadow-xl md:hover:-translate-y-1">
                  <div className="flex items-center gap-x-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-indigo-900/30 border-2 border-purple-200 rounded-xl flex items-center justify-center transition-colors duration-300 md:bg-white md:group-hover:bg-indigo-900/30">
                      <Network className="w-8 h-8 text-indigo-300 scale-110 transition-transform duration-300 md:text-purple-600 md:scale-100 md:group-hover:text-indigo-300 md:group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white md:text-purple-900 md:group-hover:text-white">Unify Intelligence</h3>
                  </div>
                  <p className="text-indigo-300 leading-relaxed md:text-gray-600 md:group-hover:text-indigo-300">
                    Connect CRMs, supplier databases, and inventory systems into one composable intelligence layer that drives action.
                  </p>
                </div>
              </AnimatedSectionWrapper>

              <AnimatedSectionWrapper delay={650}>
                <div className="bg-gradient-to-br from-blue-950 to-black p-8 rounded-xl shadow-xl -translate-y-1 transition-all duration-300 border border-gray-100 group h-full md:bg-white md:bg-gradient-to-b md:from-purple-50 md:to-white md:shadow-lg md:translate-y-0 md:hover:bg-gradient-to-br md:hover:from-blue-950 md:hover:to-black md:hover:shadow-xl md:hover:-translate-y-1">
                  <div className="flex items-center gap-x-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-900/30 border-2 border-purple-200 rounded-xl flex items-center justify-center transition-colors duration-300 md:bg-white md:group-hover:bg-blue-900/30">
                      <SlidersHorizontal className="w-8 h-8 text-blue-300 scale-110 transition-transform duration-300 md:text-purple-600 md:scale-100 md:group-hover:text-blue-300 md:group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white md:text-purple-900 md:group-hover:text-white">Transform Operations</h3>
                  </div>
                  <p className="text-blue-300 leading-relaxed md:text-gray-600 md:group-hover:text-blue-300">
                    Turn tribal knowledge into code and automate service tasks to reduce downtime and improve customer satisfaction.
                  </p>
                </div>
              </AnimatedSectionWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

