"use client"

import { useRef } from "react"
import { NavBar } from "@/components/layout/nav-bar"
import { Footer } from "@/components/layout/footer"
import { CareersHero } from "./components/hero"
import { WorkingAtSection } from "./components/working-at-section"
import { OpenPositions } from "./components/open-positions"
import { CTASection } from "@/components/layout/cta-section"
import { Values } from "./components/values"
import { OpenPositionType } from "@/sanity/schemas/openPosition"

interface CareersPageProps {
  positions: OpenPositionType[]
  photos: string[]
}

export default function CareersPageClient({ positions, photos }: CareersPageProps) {
  const openPositionsRef = useRef<HTMLDivElement>(null)

  const handleScrollToPositions = () => {
    openPositionsRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  
  return (
    <>
      <NavBar />
      <main>
        <CareersHero onButtonClick={handleScrollToPositions} />
        <WorkingAtSection photos={photos} />
        <Values />
        <OpenPositions ref={openPositionsRef} positions={positions} />
        <div className="bg-[#F4F1FF]">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  )
} 