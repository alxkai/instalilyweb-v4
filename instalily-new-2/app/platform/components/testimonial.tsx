import Image from "next/image"

interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
}

const testimonialData: Testimonial = {
  quote:
    "Lily has transformed our sales and service outcomes. The seamless integration of AI agents into our existing systems made the transition effortless.",
  author: "Patrick Garcia",
  title: "Chief Digital Officer",
  company: "SRS Distribution",
}

export function PlatformTestimonial() {
  return (
    <section className="bg-white sm:pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <div className="transition-all duration-500 ease-in-out">
            <div className="space-y-8">
              <blockquote className="text-[32px] text-center leading-[1.25] tracking-tight max-w-4xl mx-auto font-serif">
                "{testimonialData.quote}"
              </blockquote>

              <div className="flex items-center gap-6 justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                  <Image 
                    src="/images/partners/pg.jpeg"
                    alt="Patrick Garcia"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-semibold">{testimonialData.author}</h3>
                  <p className="text-gray-600">{testimonialData.title}</p>
                  <p className="text-gray-700 font-medium mt-1">{testimonialData.company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

