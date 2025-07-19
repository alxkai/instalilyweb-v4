import Link from "next/link"
import Image from "next/image"
import { AnimatedSectionWrapper } from "./animated-section-wrapper"

export function CTASection() {
  return (
    <section className="relative py-16 sm:py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/assets/000.png"
          alt="InstaLILY CTA Background"
          fill
          className="object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <AnimatedSectionWrapper>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 max-w-4xl mx-auto text-white">
            Ready to See the Work Get Done?
          </h2>
        </AnimatedSectionWrapper>
        <AnimatedSectionWrapper delay={150}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 border border-white bg-transparent hover:bg-white/10 text-white font-medium"
            >
              Book a Demo
            </Link>
            {/* <Link
              href="/get-started"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-[#6C5CE7] hover:bg-[#5A4ED1] text-white font-medium"
            >
              See 2-Min Overview
            </Link> */}
          </div>
        </AnimatedSectionWrapper>
      </div>
    </section>
  )
}

