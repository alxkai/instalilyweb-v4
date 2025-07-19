"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export function HeroSection({ problemSolutionRef }: { problemSolutionRef: React.RefObject<HTMLElement> }) {
  const [showDescription, setShowDescription] = useState(false)
  const [hasEnteredSite, setHasEnteredSite] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasEnteredSite(true)
    }, 800)
    
    const descriptionTimer = setTimeout(() => {
      setShowDescription(true)
    }, 2500)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(descriptionTimer)
    }
  }, [])

  const handleHeroClick = () => {
    const targetSection = problemSolutionRef.current
    const navBar = document.querySelector('nav');
    
    if (targetSection && navBar) {
      const navBarHeight = navBar.offsetHeight;
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navBarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      ref={heroRef} 
      className="relative text-white flex items-center cursor-pointer h-screen"
      style={{ height: "calc(100vh - 80px)" }}
      onClick={handleHeroClick}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/assets/003.png"
          alt="Abstract background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-12 w-full flex-grow flex items-center -translate-y-8 md:translate-y-0">
        <div className="absolute inset-0 flex items-center justify-end z-10 p-8 md:pr-8">
          <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
            <Image
              src="/images/assets/005.png"
              alt="InstaLILY Platform Visual"
              fill
              className="object-contain opacity-60 lg:opacity-80"
              priority
            />
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-300/70 rounded-full animate-pulse blur-sm" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-purple-200/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1/6 right-1/6 w-3 h-3 bg-blue-200/60 rounded-full animate-pulse blur-md" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute top-2/3 left-1/4 w-10 h-10 bg-purple-300/40 rounded-full animate-pulse blur-md" style={{ animationDelay: '0.8s' }}></div>
              <div className="hidden lg:block absolute top-1/2 right-1/3 w-8 h-8 bg-blue-300/50 rounded-full animate-pulse" style={{ animationDelay: '1.1s' }}></div>
              <div className="absolute top-3/4 right-2/5 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse blur-xl" style={{ animationDelay: '1.3s' }}></div>
              <div className="absolute bottom-2/5 left-1/8 w-5 h-5 bg-purple-300/35 rounded-full animate-pulse blur-md" style={{ animationDelay: '0.6s' }}></div>
              <div className="absolute top-1/5 right-1/6 w-12 h-12 bg-purple-400/20 rounded-full animate-pulse blur-md transform translate-x-16 translate-y-16" style={{ animationDelay: '0.9s' }}></div>
              <div className="absolute bottom-1/5 left-1/6 w-10 h-10 bg-blue-400/25 rounded-full animate-pulse blur-xl" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center text-purple-300/50">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12 flex items-center justify-center text-blue-300/50">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center text-blue-300/50">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 flex items-center justify-center text-purple-300/50">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-20 grid lg:grid-cols-2 xl:grid-cols-3 gap-8 items-center w-full">
          <div className="space-y-2 order-1 text-center lg:text-left xl:col-span-2">
            <h1 className={`text-3xl lg:text-[2.1rem] font-regular leading-tight tracking-tight transition-all duration-1000 ease-out ${
              hasEnteredSite ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="relative inline-block">
                <span className="relative z-10">Stop Buying More Software.</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 blur-xl -z-10 scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/15 via-blue-300/15 to-purple-300/15 blur-2xl -z-20 scale-125"></div>
              </span>
            </h1>
            <h1 
              className={`text-[2.1rem] lg:text-[2.5rem] font-regular leading-tight tracking-tight bg-clip-text text-transparent transition-all duration-1000 ease-out delay-300 ${
                hasEnteredSite ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ backgroundImage: 'linear-gradient(to right, #B794F6, #4FD1C7, #68D391)' }}
            >
              Start Transforming How Work Gets Done.
            </h1>
          </div>
          <div className="order-2 lg:order-2">
          </div>
        </div>
      </div>
    </section>
  )
}

