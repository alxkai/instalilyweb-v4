"use client"

import { useRef } from "react"
import { NavBar } from "@/components/layout/nav-bar"
import { HeroSection } from "@/components/home/hero-section"
import { ClientSection } from "@/components/home/client-section"
import { ProblemSolutionSection } from "@/components/home/problem-solution-section"
import { FeaturesSection } from "@/components/home/features-section"
import { WorkflowSection } from "@/components/home/workflow-section"
import { ProofSection } from "@/components/home/proof-section"
import { ComplianceSection } from "@/components/home/compliance-section"
import { DifferentiatorsSection } from "@/components/home/differentiators-section"
import { StartupPartnersSection } from "./StartupPartnersSection"
import { TeamSection } from "@/components/home/team-section"
import { CTASection } from "@/components/layout/cta-section"
import { Footer } from "@/components/layout/footer"

interface ProfileType {
  _id: string
  name: string
  position: string
  description: string
  img: any
  role: string
  order: number
}
interface HomePageClientProps {
  profiles: ProfileType[]
}


export function HomePageClient({ profiles }: HomePageClientProps) {
  const problemSolutionRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <NavBar problemSolutionRef={problemSolutionRef} />
      <main>
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0 z-0 pointer-events-none grainy"
            style={{
              backgroundImage: "radial-gradient(circle at 50% 90%, rgba(108, 92, 231, 0.95) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <HeroSection problemSolutionRef={problemSolutionRef} />
            <ClientSection />
          </div>
        </div>
        <ProblemSolutionSection ref={problemSolutionRef} />
        <FeaturesSection />
        <DifferentiatorsSection />
        <WorkflowSection />
        <ProofSection />
        <ComplianceSection />
        <StartupPartnersSection />
        <TeamSection profiles={profiles} />
        <CTASection />
      </main>
      <Footer />
    </>
  )
} 