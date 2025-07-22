"use client"

import Image from "next/image"
import { Footer } from "@/components/layout/footer"
import { useState } from "react"
import { X } from 'lucide-react';
import { IndustrySection } from '@/components/home/industry-section';
import { FeaturesSection } from '@/components/home/features-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { FullWidthCTA } from '@/components/layout/full-width-cta';
import { Nav } from '@/components/layout/nav';
import { TeamSection } from '@/components/home/team-section';
import { AnimatedSectionWrapper } from '@/components/layout/animated-section-wrapper';
import { MobileComparison } from "./mobile-comparison";

interface ProfileType {
  _id: string
  name: string
  position: string
  description: string
  img: {
    asset: {
      _ref: string
    }
  }
  role: string
  order: number
}

interface HomePageClientProps {
  profiles: ProfileType[]
}

export function HomePageClient({ profiles }: HomePageClientProps) {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

  return (
    <>
    <main className="relative bg-[#fdfff7] w-full overflow-clip">
      {/* Top Banner */}
      {/* <div 
        className={`hidden sm:block bg-[#fdfff7] w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isAnnouncementVisible ? 'h-10 opacity-100' : 'h-0 opacity-0'
        }`}
      >
        {isAnnouncementVisible && (
          <div className="w-full max-w-[1340px] mx-auto px-4 h-10 flex items-center justify-between">
            <div className="font-normal text-[#000000] text-sm">
              <p className="leading-normal">
                Read about our Upcoming Event: Women in AI 2025, San Francisco
              </p>
            </div>
            <button onClick={() => setIsAnnouncementVisible(false)} className="p-1">
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        )}
      </div> */}

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-[100] w-full">
        <div className="w-full max-w-[1340px] mx-auto md:pt-4">
          <Nav />
        </div>
      </div>

      {/* Hero Section */}
        <div className="relative h-screen w-full overflow-hidden -mt-[72px] md:-mt-[80px]">
        {/* Hero Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/hero.webm"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-full max-w-[1340px] px-4 sm:px-6">
            <div className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-['IBM_Plex_Sans'] text-[#fdfff7] text-[38px] sm:text-[48px] md:text-[64px] lg:text-[90px] leading-[1.2] sm:leading-[110px] not-italic text-left">
              <p className="block mb-0">Deploy your</p>
              <p className="block mb-0">AI Workforce</p>
            </div>
            <div className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-['IBM_Plex_Sans'] text-[#fdfff7] text-[22px] sm:text-[28px] md:text-[38px] lg:text-[48px] leading-[1.4] sm:leading-[120px] not-italic text-left mt-2 sm:-mt-4">
              <p className="block">Transform work with InstaWorkers™</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
        {/* <div className="bg-[#181818] py-24 px-4">
        <div className="max-w-[1340px] mx-auto">
          <div className="font-medium text-[#fdfff7] text-[36px] text-left mb-12">
            <p className="leading-normal">Trusted by industry leaders</p>
          </div>

          <div className="opacity-[0.88]">
            <div className="flex flex-col gap-y-8">
              <div className="flex w-full items-center justify-between">
                {Array.from({ length: 5 }).map((_, i) => {
                  const isSecondLogo = i === 1;
                  const width = isSecondLogo ? 94 : 118;
                  const height = isSecondLogo ? 31 : 39;
                  return (
                    <div key={i} className="h-auto">
                      <Image
                        src={`/assets/co${i}.svg`}
                        alt={`Company Logo ${i + 1}`}
                        width={width}
                        height={height}
                        className="object-contain"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex w-full items-center justify-between">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i + 5} className="h-auto">
                    <Image
                      src={`/assets/co${i + 5}.svg`}
                      alt={`Company Logo ${i + 6}`}
                      width={118}
                      height={39}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Startup Partners Section with Dark Background */}
      <div className="bg-[#181818] py-12 sm:py-16 md:py-24 px-4">
        <div className="max-w-[1340px] mx-auto">
          <AnimatedSectionWrapper>
            <div className="font-normal text-[#fdfff7] text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] text-left mb-8 sm:mb-12">
              <p className="leading-normal">Fueling our innovation with the support of the world&apos;s top technology programs.</p>
            </div>
          </AnimatedSectionWrapper>

          <AnimatedSectionWrapper delay={200}>
            <div className="flex flex-row items-center justify-between sm:justify-between w-full gap-2 sm:gap-6">
              <Image 
                src="/assets/startup0.png" 
                alt="Partner Logo 1" 
                width={180} 
                height={110} 
                className="object-contain brightness-0 invert w-auto h-12 sm:h-16 md:h-20 lg:h-24" 
              />
              <Image 
                src="/assets/startup1.png" 
                alt="Partner Logo 2" 
                width={240} 
                height={30} 
                className="object-contain brightness-0 invert w-auto h-5 sm:h-6 md:h-8 lg:h-10" 
              />
              <Image 
                src="/assets/startup2.webp" 
                alt="Partner Logo 3" 
                width={160} 
                height={66} 
                className="object-contain brightness-0 invert w-auto h-10 sm:h-12 md:h-14 lg:h-16" 
              />
            </div>
          </AnimatedSectionWrapper>
        </div>
      </div>

      {/* Main Content */}
        <div className="py-12 sm:py-16 md:py-24 px-4">
        <div className="max-w-[1340px] mx-auto">
          <AnimatedSectionWrapper>
            <div className="font-medium text-left mb-6 sm:mb-8">
              <p className="mb-0 text-[#999999] text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px]">Legacy automation is broken.</p>
              <p className="font-semibold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">The future is an AI workforce.</p>
            </div>
          </AnimatedSectionWrapper>

          <AnimatedSectionWrapper delay={150}>
            <div className="font-normal text-left sm:text-justify max-w-[1339px]">
              <p className="leading-[1.4] sm:leading-[normal] text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px]">
                <span className="text-[#999999]">Stop wrestling with rigid automation. </span>
                <span>InstaLILY provides </span>
                <span className="text-[#000000]">InstaWorkers™</span>
                <span>: </span>
                <span className="font-normal text-[#000000]">intelligent, human-like AI agents</span>
                <span> that integrate seamlessly into your existing workflows. No rip-and-replace required.</span>
                <span className="font-normal text-[#000000]"> </span>
                <span className="text-[#999999]">Augment your teams, automate complex processes, and drive immediate business value.</span>
              </p>
            </div>
          </AnimatedSectionWrapper>
        </div>
      </div>

      {/* The Old Way vs New Way Section */}
      <div className="py-12 sm:py-16 md:py-24 px-4">
        <div className="max-w-[1340px] mx-auto">
          
          {/* Desktop Table */}
          <AnimatedSectionWrapper>
            <div className="hidden md:block">
              <div className="border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="grid border-b border-gray-200" style={{ gridTemplateColumns: '300px 1fr 1fr' }}>
                <div className="p-8 text-left border-r border-gray-200">
                  <h3 className="text-2xl font-semibold text-black">Category</h3>
                </div>
                <div className="p-8 text-left border-r border-gray-200 relative">
                  <h3 className="text-2xl font-semibold text-black">The Old Way</h3>
                  <div className="absolute bottom-2 right-2 text-gray-400 text-sm font-mono">01.</div>
                </div>
                <div className="p-8 text-left relative">
                  <Image
                    src="/assets/logo_black.svg"
                    alt="InstaLILY"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <div className="absolute bottom-2 right-2 text-gray-400 text-sm font-mono">02.</div>
                </div>
              </div>

              {/* Integration Row */}
              <div className="grid border-b border-gray-200 group hover:bg-black hover:text-white transition-colors duration-300" style={{ gridTemplateColumns: '300px 1fr 1fr' }}>
                <div className="p-8 border-r border-gray-200 group-hover:border-gray-600">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 group-hover:bg-gray-700 rounded-lg flex items-center justify-center mr-3 transition-colors duration-300">
                      <svg className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <span className="font-medium text-xl text-black group-hover:text-white transition-colors duration-300">Integration</span>
                  </div>
                </div>
                <div className="p-8 border-r border-gray-200 group-hover:border-gray-600">
                  <div className="flex items-start">
                    <span className="text-black group-hover:text-white mr-2 transition-colors duration-300">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black group-hover:text-white transition-colors duration-300">Costly Rip-and-Replace:</span>
                      <span className="text-black group-hover:text-white transition-colors duration-300"> Forcing you to overhaul proven systems.</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start">
                    <span className="text-black group-hover:text-white mr-2 transition-colors duration-300">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black group-hover:text-white transition-colors duration-300">Seamless Integration:</span>
                      <span className="text-black group-hover:text-white transition-colors duration-300"> Our AI agents work with your current stack—Salesforce, custom databases, internal tools—from day one.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adaptability Row */}
              <div className="grid border-b border-gray-200 group hover:bg-black hover:text-white transition-colors duration-300" style={{ gridTemplateColumns: '300px 1fr 1fr' }}>
                <div className="p-8 border-r border-gray-200 group-hover:border-gray-600">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 group-hover:bg-gray-700 rounded-lg flex items-center justify-center mr-3 transition-colors duration-300">
                      <svg className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <span className="font-medium text-xl text-black group-hover:text-white transition-colors duration-300">Adaptability</span>
                  </div>
                </div>
                <div className="p-8 border-r border-gray-200 group-hover:border-gray-600">
                  <div className="flex items-start">
                    <span className="text-black group-hover:text-white mr-2 transition-colors duration-300">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black group-hover:text-white transition-colors duration-300">Rigid, Brittle Bots:</span>
                      <span className="text-black group-hover:text-white transition-colors duration-300"> Breaking with any change in process or UI.</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start">
                    <span className="text-black group-hover:text-white mr-2 transition-colors duration-300">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black group-hover:text-white transition-colors duration-300">Human-like Adaptability:</span>
                      <span className="text-black group-hover:text-white transition-colors duration-300"> InstaWorkers™ understand context, handle variance, and collaborate with your human teams.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intelligence Row */}
              <div className="grid border-b border-gray-200 group hover:bg-black hover:text-white transition-colors duration-300" style={{ gridTemplateColumns: '300px 1fr 1fr' }}>
                <div className="p-8 border-r border-gray-200 group-hover:border-gray-600">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 group-hover:bg-gray-700 rounded-lg flex items-center justify-center mr-3 transition-colors duration-300">
                      <svg className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <span className="font-medium text-xl text-black group-hover:text-white transition-colors duration-300">Intelligence</span>
                  </div>
                </div>
                <div className="p-8 border-r border-gray-200 group-hover:border-gray-600">
                  <div className="flex items-start">
                    <span className="text-black group-hover:text-white mr-2 transition-colors duration-300">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black group-hover:text-white transition-colors duration-300">Generic AI:</span>
                      <span className="text-black group-hover:text-white transition-colors duration-300"> Unintelligent AI lacks the deep industry knowledge to handle complex tasks.</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start">
                    <span className="text-black group-hover:text-white mr-2 transition-colors duration-300">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black group-hover:text-white transition-colors duration-300">Proprietary Vertical Intelligence:</span>
                      <span className="text-black group-hover:text-white transition-colors duration-300"> Pre-built ontologies and domain packs.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deployment Row */}
              <div className="grid group hover:bg-black hover:text-white transition-colors duration-300" style={{ gridTemplateColumns: '300px 1fr 1fr' }}>
                <div className="p-8 border-r border-gray-200 group-hover:border-gray-600">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 group-hover:bg-gray-700 rounded-lg flex items-center justify-center mr-3 transition-colors duration-300">
                      <svg className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <span className="font-medium text-xl text-black group-hover:text-white transition-colors duration-300">Deployment</span>
                  </div>
                </div>
                <div className="p-8 border-r border-gray-200 group-hover:border-gray-600">
                  <div className="flex items-start">
                    <span className="text-black group-hover:text-white mr-2 transition-colors duration-300">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black group-hover:text-white transition-colors duration-300">Months to Deploy:</span>
                      <span className="text-black group-hover:text-white transition-colors duration-300"> Long, expensive implementation cycles with uncertain ROI.</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start">
                    <span className="text-black group-hover:text-white mr-2 transition-colors duration-300">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black group-hover:text-white transition-colors duration-300">Days to Value:</span>
                      <span className="text-black group-hover:text-white transition-colors duration-300"> Go from kickoff to a live, productive AI workforce in a fraction of the time.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </AnimatedSectionWrapper>
          <MobileComparison />
        </div>
      </div>

        {/* Intelligent Automation Section */}
        <div className="py-12 sm:py-16 md:py-24 px-4">
          <div className="max-w-[1340px] mx-auto">
            <AnimatedSectionWrapper>
              <div className="font-semibold text-[#000000] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-left mb-4 sm:mb-6">
                <p className="mb-0 leading-[1.1]">Intelligent automation,</p>
                <p className="leading-[1.1]">Built for your industry.</p>
              </div>
            </AnimatedSectionWrapper>

            <AnimatedSectionWrapper delay={150}>
              <div className="font-normal text-[#000000] text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] text-left mb-8 sm:mb-12 max-w-[1339px]">
                <p className="leading-[1.3]">Generic AI doesn&apos;t understand your business. Our InstaWorkers™ are equipped with deep domain knowledge to solve your most critical challenges.</p>
              </div>
            </AnimatedSectionWrapper>

            <AnimatedSectionWrapper delay={300}>
              <IndustrySection />
            </AnimatedSectionWrapper>

            {/* Features Section */}
            <AnimatedSectionWrapper delay={450}>
              <FeaturesSection />
            </AnimatedSectionWrapper>

            {/* Testimonials Section */}
            <AnimatedSectionWrapper delay={600}>
              <TestimonialsSection />
            </AnimatedSectionWrapper>

            {/* Team Section */}
            <TeamSection profiles={profiles} />
            
          </div>
        </div>
    </main>

    <FullWidthCTA />
    <Footer />
    </>
  );
} 