import { Button } from "@/components/ui/button"
import { getSiteResource } from "@/lib/sanity"

export async function DeployHero() {
  const platformHeroUrl = await getSiteResource("platform-hero-new-1")

  return (
    <section className="pt-24 pb-24 bg-black text-white">
      <div className="px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="mb-4 inline-flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-2 text-purple-400">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider text-purple-400">DEPLOY</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Deploy Lily to your team
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Lily integrates seamlessly into your existing infrastructure, allowing for quick deployment and immediate value. Our implementation process is designed to minimize disruption while maximizing impact.
          </p>
        </div>
        <div className="relative rounded-lg overflow-hidden w-full max-w-xl mx-auto">
          <div className="relative w-full aspect-square">
            {platformHeroUrl ? (
              <video 
                src={platformHeroUrl}
                className="absolute inset-0 w-full h-full object-contain"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400">Platform Interface Placeholder</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 