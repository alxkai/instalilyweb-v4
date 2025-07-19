import Link from 'next/link'
import Image from 'next/image'
import { NavBar } from "@/components/layout/nav-bar"
import { Footer } from "@/components/layout/footer"
import { CTASection } from "@/components/layout/cta-section"

export default function CaseStudiesPage() {
  return (
    <>
      <NavBar />
      <main>
        <div className="bg-black text-white py-16 relative overflow-hidden">
          {/* Gradient Background */}
          <div
            className="absolute inset-0 z-0 pointer-events-none grainy"
            style={{
              backgroundImage: "radial-gradient(ellipse at 50% 100%, rgba(108, 92, 231, 0.95) 0%, transparent 65%)",
            }}
          />
          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Discover how leading enterprises are leveraging InstaLILY's AI agents to transform their operations
              and drive measurable business outcomes.
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid gap-12">
            <article className="border-b pb-12 group">
              <Link href="/case-studies/srs-instalily" className="block group-hover:opacity-90 transition-opacity duration-200">
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                  <div className="rounded-lg overflow-hidden h-full">
                    <Image
                      src="/images/casestudy/srs.png"
                      alt="SRS Case Study"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                        AI Agents that Know the Route — and the Right Client
                      </h2>
                      <p className="text-lg text-gray-600 mb-4">
                        SRS, one of the largest building products distributors in the U.S., needed to help its field reps prioritize
                        the right contractors and make the most of every route. InstaLILY deployed a coordinated set of AI agents to
                        become the reps' behind-the-scenes copilots.
                      </p>
                    </div>
                    <div className="inline-flex items-center text-blue-600 font-medium">
                      Read case study
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="border-b pb-12 group">
              <Link href="/case-studies/parts-town" className="block group-hover:opacity-90 transition-opacity duration-200">
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                  <div className="rounded-lg overflow-hidden h-full">
                    <Image
                      src="/images/casestudy/pt.png"
                      alt="PartsTown Case Study"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                        Finding the Right Part, the First Time
                      </h2>
                      <p className="text-lg text-gray-600 mb-4">
                        PartsTown handles one of the toughest service challenges in the industry: helping technicians identify the correct part across tens of thousands of near-identical SKUs. InstaLILY's Part ID (PID) agent was deployed to make that process instant.
                      </p>
                    </div>
                    <div className="inline-flex items-center text-blue-600 font-medium">
                      Read case study
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="border-b pb-12 group">
              <Link href="/case-studies/united-rentals" className="block group-hover:opacity-90 transition-opacity duration-200">
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                  <div className="rounded-lg overflow-hidden h-full">
                    <Image
                      src="/images/casestudy/ur.png"
                      alt="United Rentals Case Study"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                        Turning Thousands of Emails into Instant Answers
                      </h2>
                      <p className="text-lg text-gray-600 mb-4">
                        United Rentals, North America's largest equipment rental provider, was facing high volumes of service requests routed through their National Account Services (NAS) inbox. InstaLILY deployed a system of autonomous AI agents to transform that bottleneck into a high-speed, high-accuracy workflow.
                      </p>
                    </div>
                    <div className="inline-flex items-center text-blue-600 font-medium">
                      Read case study
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
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