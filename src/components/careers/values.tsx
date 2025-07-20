interface Value {
  title: string
  description: string
  bulletPoints: string[]
  gradient: string
}

const values: Value[] = [
  {
    title: "Customer",
    description: "Our customers are at the heart of everything we do.",
    gradient: "from-blue-100 via-indigo-100 to-purple-100",
    bulletPoints: [
      "Drive measurable outcomes by automating workflows with AI.",
      "Streamline processes to enhance efficiency and unlock growth.",
      "Showcase customer success through impactful case studies."
    ]
  },
  {
    title: "Culture",
    description: "We believe in building a workplace where everyone can thrive.",
    gradient: "from-purple-100 via-pink-100 to-rose-100",
    bulletPoints: [
      "Prioritize collaboration and inclusivity, valuing every voice.",
      "Foster support and innovation through mentorship and recognition.",
      "Create a space for ideas to flourish and team members to excel."
    ]
  },
  {
    title: "Code",
    description: "At InstaLILY, code is more than just technology—it&apos;s our commitment to quality and impact.",
    gradient: "from-indigo-100 via-purple-100 to-pink-100",
    bulletPoints: [
      "Create scalable AI solutions to solve real-world problems.",
      "Our foundation of reliable technology delivers trusted value.",
      "Continuously innovate to keep you ahead."
    ]
  }
]

export function Values() {
  return (
    <section className="w-full bg-[#fdfff7]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
          <div className="text-lg text-gray-600">
            <p>
              At InstaLILY, we&apos;re driven by three core principles—Customers, Culture, and Code
              —what we call The Three C&apos;s. These values shape everything we do, from the
              solutions we build to the way we collaborate as a team.
            </p>
          </div>
        </div>
        
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-purple-950 to-black p-8 rounded-xl shadow-xl -translate-y-1 transition-all duration-300 border border-gray-100 group h-full md:bg-white md:bg-gradient-to-b md:from-purple-50 md:to-white md:shadow-lg md:translate-y-0 md:hover:bg-gradient-to-br md:hover:from-purple-950 md:hover:to-black md:hover:shadow-xl md:hover:-translate-y-1"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4 text-white md:text-purple-900 md:group-hover:text-white transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-purple-300 mb-6 md:text-gray-600 md:group-hover:text-purple-300 transition-colors">
                    {value.description}
                  </p>
                  <ul className="space-y-4">
                    {value.bulletPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-purple-300 md:text-gray-600 md:group-hover:text-purple-300 transition-colors flex items-start">
                        <span className="mr-2 text-purple-300 md:text-purple-500 md:group-hover:text-purple-300">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 