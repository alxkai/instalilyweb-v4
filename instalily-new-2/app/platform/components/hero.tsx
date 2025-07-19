import { Button } from "@/components/ui/button"

export function ProductHero() {
  return (
    <section className="pt-32 pb-32 text-white relative overflow-hidden bg-black min-h-[400px]">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none grainy"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 100%, rgba(108, 92, 231, 0.95) 0%, transparent 65%)",
        }}
      />
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-2">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              fill="currentColor"
            />
          </svg>
          <span className="text-sm font-medium uppercase tracking-wider text-purple-400">PLATFORM</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          One Agentic and
          <br />
          Orchestration Layer
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
        From complex B2B Sales, Technical Service and Support, and more, Lily integrates seamlessly into your operations. She can build and operate entire teams of AI agents that can execute tasks instantly, cutting down hours of manual labor and offering quick, insightful results across various departments.
        </p>
        {/* <Button className="bg-[#6C5CE7] hover:bg-[#5A4ED1] text-white rounded-full px-8">Request a demo</Button>
        */}
      </div>
    </section>
  )
}

