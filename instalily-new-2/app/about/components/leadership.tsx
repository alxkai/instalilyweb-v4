import Image from "next/image"

function LeaderCard({ name, role, imageSrc }: { name: string; role: string; imageSrc: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="aspect-[1/1] w-32 h-32 mb-4 rounded-full bg-purple-200 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`Portrait of ${name}`}
          className="object-cover w-full h-full"
          width={400}
          height={400}
          style={{ filter: "grayscale(100%)" }}
        />
      </div>
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  )
}

export function AboutLeadership() {
  const leaders = [
    {
      name: "Sarah Johnson",
      role: "VP of Engineering",
      imageSrc: ""
    },
    {
      name: "Michael Chang",
      role: "VP of Product",
      imageSrc: ""
    },
    {
      name: "Emily Williams",
      role: "VP of Marketing",
      imageSrc: ""
    },
    {
      name: "David Lee",
      role: "VP of Sales",
      imageSrc: ""
    },
    {
      name: "Rachel Martinez",
      role: "VP of Customer Success",
      imageSrc: ""
    },
    {
      name: "Alex Thompson",
      role: "VP of Operations",
      imageSrc: ""
    },
    {
      name: "Lisa Chen",
      role: "VP of People",
      imageSrc: ""
    },
    {
      name: "Kevin Patel",
      role: "VP of Finance",
      imageSrc: ""
    }
  ]

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-semibold text-center">Leadership</h2>
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {leaders.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
