"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Lily has transformed our sales and service outcomes. The seamless integration of AI agents into our existing systems made the transition effortless.",
    author: "Patrick Garcia",
    title: "Chief Digital Officer",
    company: "SRS Distribution",
    image: "/images/partners/pg.jpeg",
  },
  {
    quote:
      "The ease of building, deploying, and monitoring AI agents allowed us to quickly enhance our operations. The intuitive interface and powerful capabilities made the transition seamless, driving significant improvements in efficiency and customer satisfaction.",
    author: "Emanuela Delgado",
    title: "Head of Innovation",
    company: "Partstown",
    image: "/images/partners/ed.png",
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }
  
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-white pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <div className="transition-all duration-500 ease-in-out">
            <div className="space-y-8">
              <blockquote className="text-[32px] text-center leading-[1.25] tracking-tight max-w-4xl mx-auto font-serif h-48">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-6 justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-semibold">{currentTestimonial.author}</h3>
                  <p className="text-gray-600">{currentTestimonial.title}</p>
                  <p className="text-gray-700 font-medium mt-1">{currentTestimonial.company}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button variant="ghost" size="icon" onClick={handlePrev}>
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button variant="ghost" size="icon" onClick={handleNext}>
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

