"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CareersHeroProps {
  onButtonClick: () => void
}

export function CareersHero({ onButtonClick }: CareersHeroProps) {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/assets/000.png"
          alt="InstaLILY Careers Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Be Part of Building the Future of AI Agents
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Here, cutting-edge technology meets real-world impact. Together, we're redefining how businesses operate with innovation, intelligence, and speed.
          </p>
          <Button 
            onClick={onButtonClick}
            className="bg-white text-black hover:bg-gray-100 font-medium"
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            View Open Roles
          </Button>
        </div>
      </div>
    </section>
  )
} 