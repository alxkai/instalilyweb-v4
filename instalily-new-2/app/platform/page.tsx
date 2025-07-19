import { NavBar } from "@/components/layout/nav-bar"
import { ProductHero } from "../product/components/hero"
import { ProductFeatures } from "../product/components/features"
import { PlatformArchitecture } from "./components/architecture"
import { PlatformStats } from "./components/stats"
import { PlatformAssistants } from "./components/assistants"
import { PlatformTestimonial } from "./components/testimonial"
import { CTASection } from "@/components/layout/cta-section"
import { Footer } from "@/components/layout/footer"

export default function PlatformPage() {
  return (
    <>
      <NavBar />
      <main>
        <div className="relative overflow-hidden bg-black">
          <div
            className="absolute inset-0 z-0 pointer-events-none grainy"
            style={{
              backgroundImage: "radial-gradient(circle at 50% 90%, rgba(108, 92, 231, 0.95) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <ProductHero />
            <ProductFeatures />
          </div>
        </div>
        <PlatformArchitecture />
        <div className="bg-purple-100">
          <PlatformStats />
        </div>
        <div className="bg-gradient-to-b from-purple-100 to-white">
          <PlatformAssistants />
        </div>
        <PlatformTestimonial />
        <CTASection />
      </main>
      <Footer />
    </>
  )
} 