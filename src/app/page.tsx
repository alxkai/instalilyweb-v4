"use client"

import Image from "next/image"
import { Footer } from "@/components/layout/footer"
import { useState, useEffect } from "react"
import { X } from 'lucide-react';
import { IndustrySection } from '@/components/home/industry-section';
import { FeaturesSection } from '@/components/home/features-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { FullWidthCTA } from '@/components/layout/full-width-cta';
import Link from "next/link";
import { Nav } from '@/components/layout/nav';

export default function Home() {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

  return (
    <>
      <main className="relative bg-[#fdfff7] w-full overflow-clip">
        {/* Top Banner */}
        <div
          className={`bg-[#fdfff7] w-full overflow-hidden transition-all duration-300 ease-in-out ${
            isAnnouncementVisible ? 'h-10' : 'h-0'
          }`}
        >
          <div className="w-full max-w-[1340px] mx-auto px-4 h-full flex items-center justify-between">
            <div className="font-normal text-[#000000] text-sm">
              <p className="leading-normal">
                Read about our Upcoming Event: Women in AI 2025, San Francisco
              </p>
            </div>
            <button onClick={() => setIsAnnouncementVisible(false)} className="p-1">
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky top-0 z-50 w-full pt-4">
          <div className="w-full max-w-[1340px] mx-auto">
            <Nav />
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative h-screen w-full overflow-hidden -mt-[74px]">
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
            <div className="w-full max-w-[1340px] px-4">
              <div className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-['IBM_Plex_Sans'] text-[#fdfff7] text-[90px] leading-[110px] not-italic text-left">
                <p className="block mb-0">Deploy your</p>
                <p className="block mb-0">AI Workforce</p>
              </div>
              <div className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-['IBM_Plex_Sans'] text-[#fdfff7] text-[48px] leading-[120px] not-italic text-left -mt-4">
                <p className="block">Transform work with InstaWorkers™</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="bg-[#181818] py-24 px-4">
          <div className="max-w-[1340px] mx-auto">
            <div className="font-medium text-[#fdfff7] text-[36px] text-left mb-12">
              <p className="leading-normal">Trusted by industry leaders</p>
            </div>

            {/* Company Logos */}
            <div className="opacity-[0.88]">
              <div className="flex flex-col gap-y-8">
                {/* First Row */}
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
                {/* Second Row */}
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
        </div>

        {/* Main Content */}
        <div className="py-24 px-4">
          <div className="max-w-[1340px] mx-auto">
            <div className="font-medium text-left mb-8">
              <p className="mb-0 text-[#999999] text-[36px]">Legacy automation is broken.</p>
              <p className="font-semibold text-[48px]">The future is an AI workforce.</p>
            </div>

            <div className="font-normal text-justify max-w-[1339px]">
              <p className="leading-[normal] text-[40px]">
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
          </div>
        </div>

        {/* The Old Way vs New Way Section */}
        <div className="py-24 px-4">
          <div className="max-w-[1340px] mx-auto">
            {/* Comparison Table */}
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
              <div className="grid border-b border-gray-200" style={{ gridTemplateColumns: '300px 1fr 1fr' }}>
                <div className="p-8 border-r border-gray-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <span className="font-medium text-xl text-black">Integration</span>
                  </div>
                </div>
                <div className="p-8 border-r border-gray-200">
                  <div className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black">Costly Rip-and-Replace:</span>
                      <span className="text-black"> Forcing you to overhaul proven systems.</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black">Seamless Integration:</span>
                      <span className="text-black"> Our AI agents work with your current stack—Salesforce, custom databases, internal tools—from day one.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adaptability Row */}
              <div className="grid border-b border-gray-200" style={{ gridTemplateColumns: '300px 1fr 1fr' }}>
                <div className="p-8 border-r border-gray-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <span className="font-medium text-xl text-black">Adaptability</span>
                  </div>
                </div>
                <div className="p-8 border-r border-gray-200">
                  <div className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black">Rigid, Brittle Bots:</span>
                      <span className="text-black"> Breaking with any change in process or UI.</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black">Human-like Adaptability:</span>
                      <span className="text-black"> InstaWorkers™ understand context, handle variance, and collaborate with your human teams.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intelligence Row */}
              <div className="grid border-b border-gray-200" style={{ gridTemplateColumns: '300px 1fr 1fr' }}>
                <div className="p-8 border-r border-gray-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <span className="font-medium text-xl text-black">Intelligence</span>
                  </div>
                </div>
                <div className="p-8 border-r border-gray-200">
                  <div className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black">Generic AI:</span>
                      <span className="text-black"> Unintelligent AI lacks the deep industry knowledge to handle complex tasks.</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black">Proprietary Vertical Intelligence:</span>
                      <span className="text-black"> Pre-built ontologies and domain packs.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deployment Row */}
              <div className="grid" style={{ gridTemplateColumns: '300px 1fr 1fr' }}>
                <div className="p-8 border-r border-gray-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <span className="font-medium text-xl text-black">Deployment</span>
                  </div>
                </div>
                <div className="p-8 border-r border-gray-200">
                  <div className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black">Months to Deploy:</span>
                      <span className="text-black"> Long, expensive implementation cycles with uncertain ROI.</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-black">Days to Value:</span>
                      <span className="text-black"> Go from kickoff to a live, productive AI workforce in a fraction of the time.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Intelligent Automation Section */}
        <div className="py-24 px-4">
          <div className="max-w-[1340px] mx-auto">
            <div className="font-semibold text-[#000000] text-[48px] text-left mb-6">
              <p className="mb-0 leading-[1.1]">Intelligent automation,</p>
              <p className="leading-[1.1]">Built for your industry.</p>
            </div>

            <div className="font-normal text-[#000000] text-[36px] text-left mb-12 max-w-[1339px]">
              <p className="leading-[1.3]">Generic AI doesn't understand your business. Our InstaWorkers™ are equipped with deep domain knowledge to solve your most critical challenges.</p>
            </div>

            <IndustrySection />

            {/* Features Section */}
            <FeaturesSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Startup Partners Section */}
            <div className="py-24 px-4">
              <div className="max-w-[1340px] mx-auto">
                <div className="font-normal text-[#000000] text-[36px] text-left mb-12">
                  <p className="leading-normal">Fueling our innovation with the support of the world's top technology programs.</p>
                </div>

                <div className="flex flex-wrap items-center justify-between w-full">
                  <Image src="/assets/startup0.png" alt="Partner Logo 1" width={225} height={138} className="object-contain" />
                  <Image src="/assets/startup1.png" alt="Partner Logo 2" width={295} height={38} className="object-contain" />
                  <Image src="/assets/startup2.png" alt="Partner Logo 3" width={195} height={82} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FullWidthCTA />
      <Footer />
    </>
  );
}
