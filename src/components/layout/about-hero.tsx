"use client"

import Image from "next/image"

interface AboutHeroProps {
  title: string
  description: string
}

export function AboutHero({ title, description }: AboutHeroProps) {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bkd0.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-36 pb-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <div className="body-copy text-gray-300">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
} 