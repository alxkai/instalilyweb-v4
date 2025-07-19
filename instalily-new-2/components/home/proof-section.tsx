import { Quote } from "lucide-react"
import Image from "next/image"
import { AnimatedSectionWrapper } from "../layout/animated-section-wrapper"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const testimonials = [
  {
    body: "At SRS Distribution, our follow-up time dropped from days to hours. InstaWorkers™ scan live data overnight, identify at-risk accounts, draft outreach, and log it back to CRM.",
    author: {
      name: "Patrick Garcia",
      role: "Chief Digital Officer, SRS Distribution",
      image: "/images/partners/pg.jpeg",
    },
  },
  {
    body: "We cut our mean-time-to-repair by more than 50%. Describing the fault now triggers an agent that predicts the correct part, verifies stock, and sends a phone-ready repair checklist.",
    author: {
      name: "Emanuela Delgado",
      role: "Head of Innovation, Parts Town",
      image: "/images/partners/ed.png",
    },
  },
]

export function ProofSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <AnimatedSectionWrapper>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
              The Measured Impact
            </h2>
          </AnimatedSectionWrapper>
          <AnimatedSectionWrapper delay={150}>
            <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">
              These are not projections; they are real results from our enterprise partners. We provide the receipts to show how AI labor translates to measurable business outcomes.
            </p>
          </AnimatedSectionWrapper>
        </div>
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSectionWrapper key={testimonial.author.name} delay={300 + index * 100}>
                <Card className="h-full bg-gradient-to-b from-purple-50 to-white shadow-lg rounded-xl p-8 grid place-items-center">
                  <div className="max-w-lg pl-4">
                    <CardContent className="p-0 mb-6">
                      <blockquote className="relative text-lg font-medium leading-7 tracking-tight text-gray-900">
                        <Quote
                          className="absolute -top-4 -left-6 h-16 w-16 text-purple-100"
                          aria-hidden="true"
                        />
                        <p className="relative" style={{ textWrap: "balance" }}>
                          {testimonial.body}
                        </p>
                      </blockquote>
                    </CardContent>
                    <CardFooter className="p-0">
                      <div className="flex items-center gap-x-4">
                        <Image
                          className="h-20 w-20 rounded-full object-cover"
                          src={testimonial.author.image}
                          alt={`Photo of ${testimonial.author.name}`}
                          width={100}
                          height={100}
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                          <div className="text-gray-600">{testimonial.author.role}</div>
                        </div>
                      </div>
                    </CardFooter>
                  </div>
                </Card>
              </AnimatedSectionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 