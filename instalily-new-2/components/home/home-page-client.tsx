"use client"

import { useRef } from "react"
import Image from "next/image"

interface ProfileType {
  _id: string
  name: string
  position: string
  description: string
  img: any
  role: string
  order: number
}

interface HomePageClientProps {
  profiles: ProfileType[]
}

function Nav() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-gradient-to-r from-[#18181844] relative rounded-2xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.11)] to-[#99999980] to-[78.269%]">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[324px] items-center justify-start px-[19px] py-4 relative size-full">
          <div className="bg-center bg-cover bg-no-repeat h-[39px] shrink-0 w-24">
            <Image
              src="/logo_w.png"
              alt="Instalily Logo"
              width={96}
              height={39}
              className="object-contain"
            />
          </div>
          <div className="font-semibold grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-[#fdfff7] text-[15px] text-left">
            <div className="[grid-area:1_/_1] ml-0 mt-0 relative w-[43.946px]">
              <p className="block leading-[normal]">HOME</p>
            </div>
            <div className="[grid-area:1_/_1] ml-[76.65px] mt-0 relative w-[51.1px]">
              <p className="block leading-[normal]">ABOUT</p>
            </div>
            <div className="[grid-area:1_/_1] ml-[159.433px] mt-0 relative w-[43.946px]">
              <p className="block leading-[normal]">NEWS</p>
            </div>
            <div className="[grid-area:1_/_1] ml-[234.039px] mt-0 relative w-[94.025px]">
              <p className="block leading-[normal]">AI DISPATCH</p>
            </div>
            <div className="[grid-area:1_/_1] ml-[350.548px] mt-0 relative w-[67.452px]">
              <p className="block leading-[normal]">CAREERS</p>
            </div>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
              <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-2.5 h-[45px] items-center justify-center ml-0 mt-0 pl-[34px] pr-[19px] py-3.5 relative rounded-2xl w-[150px]">
                <div className="absolute border border-[#fdfff7] border-solid inset-0 pointer-events-none rounded-2xl" />
                <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#fdfff7] text-[16px] text-left w-[108px]">
                  <p className="block leading-[normal]">Book a Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HomePageClient({ profiles }: HomePageClientProps) {
  return (
    <div className="relative w-full min-h-screen">
      <div className="relative w-full">
        <div className="relative bg-[#fdfff7] w-full overflow-clip">
          
          {/* Top Banner */}
          <div className="bg-[#fdfff7] flex items-center justify-center h-12 px-4 w-full">
            <div className="font-normal text-[#000000] text-[16px] text-center">
              <p className="leading-normal">
                Read about our Upcoming Event: Women in AI 2025, San Francisco
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative h-[970px] w-full overflow-hidden">
            {/* Hero Background */}
            <div className="absolute bg-[#d9d9d9] h-full w-full" />
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/assets/hero.webm" type="video/webm" />
              <div className="absolute inset-0 bg-[#d9d9d9]" />
            </video>

            {/* Navigation */}
            <div className="absolute top-[65px] left-1/2 transform -translate-x-1/2 w-full max-w-[1340px] px-4">
              <Nav />
            </div>

            {/* Hero Text */}
            <div className="absolute top-[367px] left-1/2 transform -translate-x-1/2 w-full max-w-[1340px] px-4">
              <div className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-normal leading-[110px] text-[#fdfff7] text-[90px] text-left">
                <p className="mb-0">Deploy your</p>
                <p>AI Workforce</p>
              </div>
              <div className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-normal text-[#fdfff7] text-[48px] text-left mt-8">
                <p className="leading-[120px]">Transform work with InstaWorkers™</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="py-16 px-4">
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

          {/* Trusted By Section */}
          <div className="bg-[#202426] py-16 px-4">
            <div className="max-w-[1340px] mx-auto">
              <div className="font-medium text-[#fdfff7] text-[36px] text-left mb-12">
                <p className="leading-normal">Trusted by industry leaders</p>
              </div>

              {/* Company Logos */}
              <div className="opacity-[0.88]">
                <div className="flex flex-wrap gap-8 items-center justify-start">
                  <div className="bg-center bg-cover bg-no-repeat h-[50px] w-[164.147px]" style={{ backgroundImage: "url('/images/logos/google.png')" }} />
                  <div className="bg-center bg-cover bg-no-repeat h-16 w-[91.626px]" style={{ backgroundImage: "url('/images/logos/microsoft.jpg')" }} />
                  <div className="bg-center bg-cover bg-no-repeat h-[35px] w-[165.543px]" style={{ backgroundImage: "url('/images/logos/nvidia.webp')" }} />
                </div>
              </div>
            </div>
          </div>

          {/* The Old Way vs New Way Section */}
          <div className="py-16 px-4">
            <div className="max-w-[1340px] mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <div className="font-semibold text-[#000000] text-[40px] text-left mb-8">
                    <p className="leading-normal">The Old Way</p>
                  </div>
                  <ul className="list-disc font-normal text-[#000000] text-[22px] space-y-4">
                    <li className="leading-[36px] ms-[33px]">
                      <span className="font-medium">Costly Rip-and-Replace:</span>
                      <span> Forcing you to overhaul proven systems.</span>
                    </li>
                    <li className="leading-[36px] ms-[33px]">
                      <span className="font-medium">Rigid, Brittle Bots:</span>
                      <span> Breaking with any change in process or UI.</span>
                    </li>
                    <li className="leading-[36px] ms-[33px]">
                      <span className="font-medium">Generic AI:</span>
                      <span> Unintelligent AI lacks the deep industry knowledge to handle complex tasks.</span>
                    </li>
                    <li className="leading-[36px] ms-[33px]">
                      <span className="font-medium">Months to Deploy:</span>
                      <span> Long, expensive implementation cycles with uncertain ROI.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="font-semibold text-[#000000] text-[40px] text-left mb-8">
                    <p className="leading-normal">The New Way</p>
                  </div>
                  <ul className="list-disc font-normal text-[#000000] text-[22px] space-y-4">
                    <li className="leading-[36px] ms-[33px]">
                      <span className="font-medium">Seamless Integration:</span>
                      <span> Our AI agents work with your current stack—Salesforce, custom databases, internal tools—from day one.</span>
                    </li>
                    <li className="leading-[36px] ms-[33px]">
                      <span className="font-medium">Human-like Adaptability:</span>
                      <span> InstaWorkers™ understand context, handle variance, and collaborate with your human teams.</span>
                    </li>
                    <li className="leading-[36px] ms-[33px]">
                      <span className="font-medium">Proprietary Vertical Intelligence:</span>
                      <span> Pre-built ontologies and domain packs.</span>
                    </li>
                    <li className="leading-[36px] ms-[33px]">
                      <span className="font-medium">Days to Value:</span>
                      <span> Go from kickoff to a live, productive AI workforce in a fraction of the time.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Intelligent Automation Section */}
          <div className="py-16 px-4">
            <div className="max-w-[1340px] mx-auto">
              <div className="font-semibold text-[#000000] text-[48px] text-left mb-8">
                <p className="mb-0">Intelligent automation,</p>
                <p>Built for your industry.</p>
              </div>

              <div className="font-normal text-[#000000] text-[36px] text-left mb-12 max-w-[1339px]">
                <p className="leading-normal">Generic AI doesn't understand your business. Our InstaWorkers™ are equipped with deep domain knowledge to solve your most critical challenges.</p>
              </div>

              {/* Industry Sections */}
              <div className="border border-[#d8d8d8] p-8 mb-16">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="font-medium text-[#000000] text-[20px]">
                      <p className="leading-normal">01. RETAIL & E-COMMERCE</p>
                    </div>
                    <div className="font-medium text-[#000000] text-[20px]">
                      <p className="leading-normal">02. INDUSTRIAL GOODS</p>
                    </div>
                    <div className="font-medium text-[#000000] text-[20px]">
                      <p className="leading-normal">03. HEALTHCARE</p>
                    </div>
                  </div>
                  <div className="font-normal text-[#000000] text-[26px]">
                    <p className="leading-[36px]">
                      Empower store associates with AI-driven, personalized client outreach. Unify online and offline inventory data to optimize stock levels and in-store labor. Our retail solution combines customer data and purchase history to create unique, effective customer engagement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="font-semibold text-[#000000] text-[48px] text-left mb-12">
                <p className="leading-normal">More than just automation.</p>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="font-medium text-[#000000] text-[40px] mb-4">
                    <p className="leading-normal">01. PROPRIETARY INNOVATION</p>
                  </div>
                  <div className="font-normal text-[#000000] text-[32px] max-w-[986px]">
                    <p className="leading-normal">Our platform is built on a foundation of unique, patent-pending technologies. From our integration engine to our human-interaction models, our innovations are your competitive advantage.</p>
                  </div>
                </div>

                <div className="font-medium text-[#000000] text-[40px]">
                  <p className="leading-normal">02. TRUE HUMAN-IN-THE-LOOP</p>
                </div>

                <div className="font-medium text-[#000000] text-[40px]">
                  <p className="leading-normal">03. INTUITIVE EXPERIENCES</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="py-16 px-4">
            <div className="max-w-[1340px] mx-auto">
              <div className="font-semibold text-[#000000] text-[48px] text-left mb-12">
                <p className="leading-normal">What our partners say</p>
              </div>

              <div className="border border-[#d8d8d8] p-8">
                <div className="font-normal text-[#000000] text-[28px] max-w-[638px] mx-auto">
                  <p className="mb-4">
                    "At SRS Distribution, our follow-up time dropped from days to hours. InstaWorkers™ scan live data overnight, identify at-risk accounts, draft outreach, and log it back to CRM."
                  </p>
                  <p className="mb-0">Patrick Garcia</p>
                  <p className="mb-0">Chief Digital Officer</p>
                  <p>SRS Distribution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Startup Partners Section */}
          <div className="py-16 px-4">
            <div className="max-w-[1340px] mx-auto">
              <div className="font-normal text-[#000000] text-[36px] text-left mb-12">
                <p className="leading-normal">Fueling our innovation with the support of the world's top technology programs.</p>
              </div>

              <div className="flex flex-wrap gap-16 items-center justify-center">
                <div className="bg-center bg-cover bg-no-repeat h-[184px] w-[300px]" style={{ backgroundImage: "url('/images/partners/pg.jpeg')" }} />
                <div className="bg-center bg-cover bg-no-repeat h-[51px] w-[394.33px]" style={{ backgroundImage: "url('/images/logos/google.png')" }} />
                <div className="bg-center bg-cover bg-no-repeat h-[110px] w-[260.741px]" style={{ backgroundImage: "url('/images/logos/nvidia.webp')" }} />
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="py-16 px-4">
            <div className="max-w-[1340px] mx-auto">
              <div className="font-medium text-[#000000] text-[48px] text-left mb-8">
                <p className="mb-0">Pushing the boundaries</p>
                <p>of AI development</p>
              </div>

              <div className="font-normal text-[#000000] text-[36px] text-left mb-12">
                <p className="mb-0">Meet the team building the future of AI agents.</p>
              </div>

              <div className="grid grid-cols-6 gap-4 max-w-[1230px] mx-auto">
                {profiles.map((profile, index) => (
                  <div key={profile._id} className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden">
                    {profile.img && (
                      <Image
                        src={profile.img}
                        alt={profile.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="bg-[#202426] py-16 px-4">
            <div className="max-w-[1340px] mx-auto text-center">
              <div className="font-medium text-[#ffffff] text-[64px] mb-8">
                <p className="leading-normal">Ready to Build Your AI Workforce?</p>
              </div>
              <div className="font-normal text-[#ffffff] text-[36px]">
                <p className="leading-normal">Stop waiting for the future of work — build it. Let's discuss your specific challenges and design a deployment plan that delivers immediate, measurable ROI.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
} 