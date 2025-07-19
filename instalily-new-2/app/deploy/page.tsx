import { NavBar } from "@/components/layout/nav-bar"
import { DeployHero } from "./components/hero"
import { ProductRequirements } from "../product/components/requirements"
import { ProductDeployment } from "../product/components/deployment"
import { DeployTestimonial } from "./components/testimonial"
import { CTASection } from "@/components/layout/cta-section"
import { Footer } from "@/components/layout/footer"

export default function DeployPage() {
  return (
    <>
      <NavBar />
      <main>
        <DeployHero />
        <ProductRequirements />
        <ProductDeployment />
        <DeployTestimonial />
        <CTASection />
      </main>
      <Footer />
    </>
  )
} 