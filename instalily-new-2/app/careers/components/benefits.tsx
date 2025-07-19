import { Values } from "./values"

interface Benefit {
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    title: "Competitive compensation",
    description: "We offer top-tier base salary, equity, and comprehensive benefits to attract and retain the best talent."
  },
  {
    title: "Remote-first culture",
    description: "Work from anywhere in the world. We believe in hiring the best people, regardless of location."
  },
  {
    title: "Learning & development",
    description: "Continuous learning is part of our DNA. We provide resources and support for your professional growth."
  },
  {
    title: "Health & wellness",
    description: "Comprehensive health coverage, mental health support, and wellness programs for you and your family."
  },
  {
    title: "Work-life balance",
    description: "Flexible PTO, parental leave, and a culture that respects your time outside of work."
  },
  {
    title: "Latest tech stack",
    description: "Work with cutting-edge technology and contribute to the future of enterprise AI."
  }
]

export function Benefits() {
  return (
    <>
      <Values />
      <section className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Why work at InstaLILY?</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                We're building something special at InstaLILY, and we want you to be part of it. 
                Here's what you can expect when you join our team:
              </p>
            </div>
          </div>
          
          <div className="mx-auto mt-16 flow-root sm:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 