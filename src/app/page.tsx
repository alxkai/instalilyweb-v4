import Image from "next/image"

function Nav() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-gradient-to-r from-[#18181844] relative rounded-2xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.11)] to-[#99999980] to-[78.269%]">
      <div className="relative flex items-center justify-center w-full px-6 py-5">
        {/* Logo on the left */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 mt-1">
          <div className="bg-center bg-cover bg-no-repeat h-[39px] w-24">
            <Image
              src="/assets/logo_white.svg"
              alt="Instalily Logo"
              width={96}
              height={39}
              className="object-contain"
            />
          </div>
        </div>

        {/* Centered Nav Links */}
        <div className="flex items-center gap-8 font-semibold text-[#fdfff7] text-[15px]">
          <p className="cursor-pointer">HOME</p>
          <p className="cursor-pointer">ABOUT</p>
          <p className="cursor-pointer">NEWS</p>
          <p className="cursor-pointer">AI DISPATCH</p>
          <p className="cursor-pointer">CAREERS</p>
        </div>

        {/* Button on the right */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <div className="box-border flex items-center justify-center h-[50px] w-auto px-5 rounded-2xl border border-white">
            <div className="font-semibold text-[#fdfff7] text-[16px] whitespace-nowrap">
              Book a Demo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function Home() {
  return (
    <main className="relative bg-[#fdfff7] w-full overflow-clip">
      {/* Top Banner */}
      <div className="bg-[#fdfff7] flex items-center justify-center h-12 px-4 w-full">
        <div className="font-normal text-[#000000] text-[16px] text-center">
          <p className="leading-normal">
            Read about our Upcoming Event: Women in AI 2025, San Francisco
          </p>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 w-full pt-8">
        <div className="w-full max-w-[1340px] mx-auto px-4">
          <Nav />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden -mt-[122px]">
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
      <div className="bg-[#202426] py-16 px-4">
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
      <div className="pt-24 pb-16 px-4">
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
            <div className="bg-gray-300 h-[184px] w-[300px] rounded flex items-center justify-center">
              <span className="text-gray-600 text-lg">Partner Logo</span>
            </div>
            <div className="bg-gray-300 h-[51px] w-[394.33px] rounded flex items-center justify-center">
              <span className="text-gray-600 text-sm">Google for Startups</span>
            </div>
            <div className="bg-gray-300 h-[110px] w-[260.741px] rounded flex items-center justify-center">
              <span className="text-gray-600 text-sm">NVIDIA Inception</span>
            </div>
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
    </main>
  )
}
