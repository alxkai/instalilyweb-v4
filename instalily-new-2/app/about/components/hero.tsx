"use client"

import Image from "next/image"

interface AboutHeroProps {
  title: string
  description: string
}

export function AboutHero({ title, description }: AboutHeroProps) {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/assets/000.png"
          alt="InstaLILY About Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <div className="text-xl text-gray-300">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
} 
