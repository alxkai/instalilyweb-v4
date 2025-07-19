import { NavBar } from "@/components/layout/nav-bar"
import { ProductHero } from "./components/hero"
import { ProductFeatures } from "./components/features"
import { ProductStats } from "./components/stats"
import { ProductAssistants } from "./components/assistants"
import { ProductTestimonial } from "./components/testimonial"
import { CTASection } from "@/components/layout/cta-section"
import { Footer } from "@/components/layout/footer"

export default function ProductPage() {
  return (
    <>
      <NavBar />
      <main className="bg-black">
        <ProductHero />
        <ProductFeatures />
        <ProductStats />
        <ProductAssistants />
        <ProductTestimonial />
        <div className="bg-[#F4F1FF]">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  )
}

