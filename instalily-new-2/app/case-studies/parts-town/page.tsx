'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NavBar } from "@/components/layout/nav-bar"
import { Footer } from "@/components/layout/footer"
import { CTASection } from "@/components/layout/cta-section"

export default function PartsTownCaseStudy() {
  const shareToX = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent("Check out how PartsTown is using InstaLILY's AI agents to find the right part, the first time!")
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
  }

  const shareToLinkedIn = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent("Check out how PartsTown is using InstaLILY's AI agents to find the right part, the first time! Read the full case study here:")
    window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${text}%20${url}`, '_blank')
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      // You could add a toast notification here if you want
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <>
      <NavBar />
      <main>
        <div className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl">
              <Link href="/case-studies" className="text-purple-400 hover:underline mb-2 inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to all case studies
              </Link>
              <h1 className="text-3xl md:text-4xl font-semibold mt-4">Finding the Right Part, the First Time</h1>
              <div className="flex items-center space-x-4 text-gray-300 mt-4">
                <p>By InstaLILY Team</p>
                <span>•</span>
                <p>May 13, 2025</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <div className="border border-gray-200 rounded-lg mb-12 overflow-hidden">
                <Image
                  src="/images/casestudy/pt.png"
                  alt="PartsTown Case Study Hero"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <section className="mb-16 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-br from-[#EDE9FF] to-[#DCD3FF] p-8 border border-purple-200">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800">Key Results:</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start"><div className="bg-[#6C5CE7] rounded-full w-3 h-3 mt-2 mr-3 flex-shrink-0"></div><p className="text-lg">90% first-try match rate</p></li>
                    <li className="flex items-start"><div className="bg-[#6C5CE7] rounded-full w-3 h-3 mt-2 mr-3 flex-shrink-0"></div><p className="text-lg">60% reduction in support escalation</p></li>
                    <li className="flex items-start"><div className="bg-[#6C5CE7] rounded-full w-3 h-3 mt-2 mr-3 flex-shrink-0"></div><p className="text-lg">3x improvement in time-to-quote</p></li>
                  </ul>
                </div>
              </section>
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Overview</h2>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>PartsTown handles one of the toughest service challenges in the industry: helping technicians identify the correct part across tens of thousands of near-identical SKUs. Vague descriptions, blurry photos, and missing model numbers were leading to delays and reorders.</p>
                  <p>InstaLILY's Part ID (PID) agent was deployed to make that process instant — turning any input (photo, spec, serial snippet) into a confident match. And once it learns, it shares that logic system-wide.</p>
                </div>
              </section>
              <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">The Challenge</h3>
                <div className="text-lg text-gray-700">
                  <p>Field service reps were frequently stuck going back-and-forth with clients: "Is it the brass or chrome version?" "Can you confirm the serial?" This slowed repairs, added support load, and eroded trust.</p>
                </div>
              </section>
              <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">The Solution</h3>
                <div className="text-lg text-gray-700 mb-6">InstaLILY's PID Agent combines image recognition, structured part databases, and past resolution memory:</div>
                <ul className="space-y-4">
                  <li className="flex items-start"><div className="text-[#6C5CE7] mr-3 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div><p className="text-lg text-gray-700">Ingests visual or textual data from support tickets</p></li>
                  <li className="flex items-start"><div className="text-[#6C5CE7] mr-3 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div><p className="text-lg text-gray-700">Maps against manuals, historical ticket resolutions, and SKU data</p></li>
                  <li className="flex items-start"><div className="text-[#6C5CE7] mr-3 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div><p className="text-lg text-gray-700">Ranks the top 3 likely matches and generates quote-ready outputs</p></li>
                  <li className="flex items-start"><div className="text-[#6C5CE7] mr-3 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div><p className="text-lg text-gray-700">And because each ID improves the model, tribal knowledge becomes a real-time asset.</p></li>
                </ul>
              </section>
              <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Impact</h3>
                <div className="text-lg text-gray-700 space-y-4">
                  <ul className="space-y-4">
                    <li className="flex items-start"><div className="text-green-500 mr-3 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div><p>Technicians get what they need the first time</p></li>
                    <li className="flex items-start"><div className="text-green-500 mr-3 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div><p>Support teams are freed from chasing specs</p></li>
                    <li className="flex items-start"><div className="text-green-500 mr-3 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div><p>The knowledge of top parts specialists is now embedded in the workflow</p></li>
                  </ul>
                </div>
              </section>
              <section className="mb-16 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-br from-[#EDE9FF] to-[#DCD3FF] p-8 border-l-4 border-[#6C5CE7]">
                  <blockquote className="text-xl italic mb-4 text-gray-800">"It's like giving our reps instant recall across 50,000 SKUs — without them needing to lift a finger."</blockquote>
                  <div className="font-semibold text-gray-800">Director of Customer Operations</div>
                  <div className="text-gray-600">PartsTown</div>
                </div>
              </section>
              <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Looking Ahead</h3>
                <p className="text-lg text-gray-700">Next: plug-and-play agent interfaces for distributors, so even partner teams can access the same logic layer. One standard of precision — everywhere.</p>
              </section>
            </div>
            <div className="md:col-span-4">
              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Ready to transform your business?</h3>
                  <p className="text-gray-600 mb-6">Learn how InstaLILY's AI agents can help your team automate workflows and increase productivity.</p>
                  <Link
                    href="/get-started"
                    className="inline-flex w-full items-center justify-center rounded-full px-6 py-3 bg-[#6C5CE7] hover:bg-[#5A4ED1] text-white font-medium"
                  >
                    Get a Demo
                  </Link>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Share this case study</h3>
                  <div className="flex items-center space-x-3">
                    <button 
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors" 
                      aria-label="Share on X"
                      onClick={shareToX}
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                    <button 
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors" 
                      aria-label="Share on LinkedIn"
                      onClick={shareToLinkedIn}
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                    <button 
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors" 
                      aria-label="Copy link"
                      onClick={copyToClipboard}
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">More Case Studies</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/case-studies" className="text-[#6C5CE7] hover:underline">
                        View all case studies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F1FF]">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  )
} 