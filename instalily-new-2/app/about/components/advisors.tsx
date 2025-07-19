import Image from "next/image"

function AdvisorCard({ name, role, company, imageSrc }: { 
  name: string
  role: string
  company: string
  imageSrc: string 
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 mb-4 rounded-full bg-purple-200 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`Portrait of ${name}`}
          className="object-cover w-full h-full"
          width={128}
          height={128}
          style={{ filter: "grayscale(100%)" }}
        />
      </div>
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
      <p className="text-purple-600 text-sm">{company}</p>
    </div>
  )
}

export function AboutAdvisors() {
  const advisors = [
    {
      name: "Dr. Sarah Miller",
      role: "AI Ethics Advisor",
      company: "Stanford University",
      imageSrc: ""
    },
    {
      name: "John Chen",
      role: "Technology Advisor",
      company: "Former CTO, Microsoft",
      imageSrc: ""
    },
    {
      name: "Lisa Thompson",
      role: "Strategy Advisor",
      company: "McKinsey & Company",
      imageSrc: ""
    },
    {
      name: "Mark Rodriguez",
      role: "Industry Advisor",
      company: "Salesforce",
      imageSrc: ""
    }
  ]

  const boardMembers = [
    {
      name: "Jennifer Lee",
      role: "Chief Digital Officer",
      company: "Fortune 500 Retail",
      imageSrc: ""
    },
    {
      name: "Michael Brown",
      role: "VP of Engineering",
      company: "Global Tech Company",
      imageSrc: ""
    },
    {
      name: "Patricia Garcia",
      role: "Head of Innovation",
      company: "Leading Financial Institution",
      imageSrc: ""
    },
    {
      name: "Robert Kim",
      role: "Director of AI",
      company: "Healthcare Technology",
      imageSrc: ""
    }
  ]

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Advisors */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold text-center">Advisors</h2>
          <div className="mx-auto mt-16 flow-root sm:mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {advisors.map((advisor, index) => (
                <AdvisorCard key={index} {...advisor} />
              ))}
            </div>
          </div>
        </div>

        {/* Customer Advisory Board */}
        <div>
          <h2 className="text-3xl font-semibold text-center">Customer Advisory Board</h2>
          <div className="mx-auto mt-16 flow-root sm:mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {boardMembers.map((member, index) => (
                <AdvisorCard key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
