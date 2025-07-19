import { NavBar } from "@/components/layout/nav-bar"
import { LaunchHero } from "./components/hero"
import { ProductRequirements } from "../product/components/requirements"
import { ProductDeployment } from "../product/components/deployment"
import { CTASection } from "@/components/layout/cta-section"
import { Footer } from "@/components/layout/footer"

export default function LaunchPage() {
  return (
    <>
      <NavBar />
      <main>
        <LaunchHero />
        <ProductRequirements />
        <ProductDeployment />
        <div className="bg-[#F4F1FF]">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  )
} 