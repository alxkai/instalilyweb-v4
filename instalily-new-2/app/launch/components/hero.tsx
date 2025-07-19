import { Button } from "@/components/ui/button"

export function LaunchHero() {
  return (
    <section className="pt-24 pb-24 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="text-sm font-medium text-purple-400 mb-6">LAUNCH</div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-8">
          Deploy Lily to your team
        </h1>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Lily integrates seamlessly into your existing infrastructure, allowing for quick deployment and immediate value. Our implementation process is designed to minimize disruption while maximizing impact.
        </p>
      </div>
    </section>
  )
} 