"use client"

import Image from "next/image"

interface CareersHeroProps {
  onButtonClick: () => void
}

export function CareersHero({ onButtonClick }: CareersHeroProps) {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bkd0.png"
          alt="InstaLILY Careers Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-36 pb-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Be Part of Building the Future of AI Agents
          </h1>
          <p className="body-copy text-gray-300 mb-8">
            Here, cutting-edge technology meets real-world impact. Together, we&apos;re redefining how businesses operate with innovation, intelligence, and speed.
          </p>
          <button 
            onClick={onButtonClick}
            className="bg-white text-black hover:bg-gray-100 font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            View Open Roles
          </button>
        </div>
      </div>
    </section>
  )
} 