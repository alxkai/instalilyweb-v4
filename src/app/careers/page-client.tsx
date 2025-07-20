"use client"

import { useRef } from "react"
import { Nav } from "@/components/layout/nav"
import { Footer } from "@/components/layout/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { WorkingAtSection } from "@/components/careers/working-at-section"
import { OpenPositions } from "@/components/careers/open-positions"
import { FullWidthCTA } from "@/components/layout/full-width-cta"
import { Values } from "@/components/careers/values"
import { OpenPositionType } from "@/lib/types"

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
    <div className="min-h-screen bg-[#fdfff7]">
      <div className="sticky top-0 z-50 w-full">
        <div className="w-full max-w-[1340px] mx-auto pt-4">
          <Nav />
        </div>
      </div>
      
      <main className="-mt-[90px]">
        <CareersHero onButtonClick={handleScrollToPositions} />
        <WorkingAtSection photos={photos} />
        <Values />
        <OpenPositions ref={openPositionsRef} positions={positions} />
        <FullWidthCTA />
      </main>
      <Footer />
    </div>
  )
} 