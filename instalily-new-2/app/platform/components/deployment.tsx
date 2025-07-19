import { Maximize2, LayoutGrid, Network, Lightbulb } from "lucide-react"
import React from "react"

export function ProductDeployment() {
  const benefits = [
    {
      title: "Extreme high speed",
      description: "Integrate deep process analysis, enabling faster and more accurate decision-making.",
      bgColor: "bg-black",
    },
    {
      title: "SOC2 secure and compliant",
      description: "Ensure your data and processes meet the highest security and compliance standards.",
      bgColor: "bg-black",
    },
  ]

  const features = [
    {
      icon: <Maximize2 className="w-12 h-12" />,
      title: "Ingest",
      description: "Lily connects with your data and business logic.",
    },
    {
      icon: <LayoutGrid className="w-12 h-12" />,
      title: "Compose",
      description: "Lily recruits composable AI agents to take action.",
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Integrate",
      description: "Lily works within your established processes.",
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Learn",
      description: "Lily learns continuously and gets better.",
    },
  ]

  return (
    <section className="bg-[#FFFFFF] pb-24 pt-1">
      <div className="max-w-6xl mx-auto px-4">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#e879f9', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#c084fc', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
        <h2 className="text-3xl font-semibold mt-4 text-center">Lily can automate any sales and service workflows with AI Agents.</h2>
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white hover:bg-gradient-to-br hover:from-purple-950 hover:to-black rounded-xl p-6 shadow-md transition-all transform hover:-translate-y-1 hover:shadow-xl duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-4">
                  {React.cloneElement(feature.icon, {
                    className: "w-12 h-12 transition-all duration-300 text-purple-600 group-hover:text-purple-300",
                  })}
                </div>
                <h3 className="font-semibold text-xl mb-2 text-purple-900 group-hover:text-white">{feature.title}</h3>
                <p className="text-lg text-gray-600 group-hover:text-purple-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

