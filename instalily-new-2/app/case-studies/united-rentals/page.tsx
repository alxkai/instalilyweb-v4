'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NavBar } from "@/components/layout/nav-bar"
import { Footer } from "@/components/layout/footer"
import { CTASection } from "@/components/layout/cta-section"

export default function UnitedRentalsCaseStudy() {
  const shareToX = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent("Check out how United Rentals is using InstaLILY's AI agents to turn thousands of emails into instant answers!")
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
  }

  const shareToLinkedIn = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent("Check out how United Rentals is using InstaLILY's AI agents to turn thousands of emails into instant answers! Read the full case study here:")
    window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${text}%20${url}`, '_blank')
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
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
              <h1 className="text-3xl md:text-4xl font-semibold mt-4">Turning Thousands of Emails into Instant Answers</h1>
              <div className="flex items-center space-x-4 text-gray-300 mt-4">
                <p>By InstaLILY Team</p>
                <span>•</span>
                <p>2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <div className="border border-gray-200 rounded-lg mb-12 overflow-hidden">
                <Image
                    src="/images/casestudy/ur.png"
                    alt="SRS Case Study Hero"
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
                    <li className="flex items-start"><div className="bg-[#6C5CE7] rounded-full w-3 h-3 mt-2 mr-3 flex-shrink-0"></div><p className="text-lg">70% faster first-response time</p></li>
                    <li className="flex items-start"><div className="bg-[#6C5CE7] rounded-full w-3 h-3 mt-2 mr-3 flex-shrink-0"></div><p className="text-lg">4x improvement in ticket routing accuracy</p></li>
                    <li className="flex items-start"><div className="bg-[#6C5CE7] rounded-full w-3 h-3 mt-2 mr-3 flex-shrink-0"></div><p className="text-lg">24/7 response coverage — with human-in-the-loop on high-risk queries</p></li>
                  </ul>
                </div>
              </section>
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Overview</h2>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>United Rentals, North America's largest equipment rental provider, was facing high volumes of service requests routed through their National Account Services (NAS) inbox. The manual triage and response process was slowing down customer service and overloading high-value team members.</p>
                  <p>InstaLILY deployed a system of autonomous AI agents to transform that bottleneck into a high-speed, high-accuracy workflow. What was once tribal knowledge—spread across reps, documents, and disparate tools—was captured, codified, and activated through AI.</p>
                </div>
              </section>
              <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">The Challenge</h3>
                <div className="text-lg text-gray-700">
                  <p>NAS agents were managing thousands of daily inquiries, many of which were routine ("Is this lift still available?" "Can we extend the rental by 2 days?"). But the lack of structure in incoming messages required manual effort to parse, classify, and route requests. This wasn't just inefficient — it buried institutional knowledge and left frontline teams without leverage.</p>
                </div>
              </section>
              <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">The Solution</h3>
                <div className="text-lg text-gray-700 mb-6">InstaLILY's digital workforce included:</div>
                <ul className="space-y-4">
                  <li className="flex items-start"><div className="text-[#6C5CE7] mr-3 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div><p className="text-lg text-gray-700">Classification Agent: Categorizes email intents based on learned service workflows.</p></li>
                  <li className="flex items-start"><div className="text-[#6C5CE7] mr-3 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div><p className="text-lg text-gray-700">Logistics Agent: Queries internal systems for real-time data (availability, extensions, contract terms).</p></li>
                  <li className="flex items-start"><div className="text-[#6C5CE7] mr-3 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div><p className="text-lg text-gray-700">Response Agent: Drafts fully formed replies with built-in compliance checks.</p></li>
                  <li className="flex items-start"><div className="text-[#6C5CE7] mr-3 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div><p className="text-lg text-gray-700">Each agent draws from a shared layer of company intelligence — a dynamic knowledge graph that reflects how United Rentals operates, learns, and serves its clients.</p></li>
                </ul>
              </section>
              <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Impact</h3>
                <div className="text-lg text-gray-700 space-y-4">
                  <ul className="space-y-4">
                    <li className="flex items-start"><div className="text-green-500 mr-3 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div><p>AI agents now resolve up to 60% of service tickets without human escalation.</p></li>
                    <li className="flex items-start"><div className="text-green-500 mr-3 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div><p>Tribal knowledge (e.g., how to handle a recurring issue with a certain client or asset type) is no longer lost — it's systematized and reused.</p></li>
                    <li className="flex items-start"><div className="text-green-500 mr-3 mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div><p>Customer satisfaction scores increased as response times dropped from hours to minutes.</p></li>
                  </ul>
                </div>
              </section>
              <section className="mb-16 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-br from-[#EDE9FF] to-[#DCD3FF] p-8 border-l-4 border-[#6C5CE7]">
                  <blockquote className="text-xl italic mb-4 text-gray-800">"It's like we put our smartest service rep into every inbox, at once. We've never been this fast, and the AI actually gets better with every ticket it touches."</blockquote>
                  <div className="font-semibold text-gray-800">NAS Team Lead</div>
                  <div className="text-gray-600">United Rentals</div>
                </div>
              </section>
              <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Future Vision</h3>
                <p className="text-lg text-gray-700">InstaLILY is now helping United Rentals build proactive support agents — AI that flags issues before customers write in. This includes service reminders, parts availability nudges, and predictive resolution paths, powered by the same core agent orchestration layer.</p>
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
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Share on LinkedIn" onClick={shareToLinkedIn}>
                      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Copy link" onClick={copyToClipboard}>
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