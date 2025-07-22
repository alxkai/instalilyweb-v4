"use client"

import { PhotoScroll } from "./photo-scroll"

interface WorkingAtSectionProps {
  photos: string[]
}

export function WorkingAtSection({ photos }: WorkingAtSectionProps) {
  return (
    <section className="bg-[#fdfff7] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="title-text mb-6">Working at InstaLILY</h2>
        <p className="subtitle-copy text-gray-600 max-w-3xl">
          We are a team with staff expertise in artificial intelligence, machine
          learning, engineering, software development, product and design based
          in New York City, with a leadership of over 10+ years of collaborative
          work.
        </p>
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <PhotoScroll photos={photos} />
        </div>
      </div>
    </section>
  )
} 