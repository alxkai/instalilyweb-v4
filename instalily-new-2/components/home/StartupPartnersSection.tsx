import Image from "next/image"
import { AnimatedSectionWrapper } from "../layout/animated-section-wrapper"

const partners = [
  {
    name: "Nvidia",
    logo: "/images/logos/nvidia.webp",
    width: 360,
    height: 120,
    className: "h-32",
  },
  {
    name: "Google",
    logo: "/images/logos/google.png",
    width: 360,
    height: 120,
    className: "h-32",
  },
  {
    name: "Microsoft",
    logo: "/images/logos/microsoft.jpg",
    width: 192,
    height: 64,
    className: "h-20 lg:mt-2",
  },
]

export function StartupPartnersSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedSectionWrapper>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
              Our Startup Partners
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Fueling our innovation with the support of the world's top
              technology programs.
            </p>
          </AnimatedSectionWrapper>
        </div>
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="flex flex-col items-center gap-y-12 sm:flex-row sm:items-center sm:justify-center sm:gap-x-20 lg:gap-x-24">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex justify-center sm:w-1/3"
              >
                <AnimatedSectionWrapper delay={200}>
                  <Image
                    className={`${partner.className} object-contain`}
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                  />
                </AnimatedSectionWrapper>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 