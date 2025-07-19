import Image from "next/image"

function ValueCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="mb-6">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </div>
  )
}

export function AboutValues() {
  const values = [
    {
      title: "Connect",
      description: "We build bridges between teams and make complex things simple. We're direct, honest, and always transparent.",
      icon: "/icons/connect.svg"
    },
    {
      title: "Challenge",
      description: "We push boundaries and challenge assumptions. We're not afraid to disagree and have difficult conversations.",
      icon: "/icons/challenge.svg"
    },
    {
      title: "Own",
      description: "We take initiative and ownership. We're accountable for our work and never say 'that's not my job.'",
      icon: "/icons/own.svg"
    }
  ]

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-semibold text-center">Our values</h2>
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 