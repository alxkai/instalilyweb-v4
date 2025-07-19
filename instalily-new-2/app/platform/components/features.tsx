"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Layers, 
  Users, 
  Network, 
  Database 
} from "lucide-react"

export function ProductFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)

  const featureIcons = [
    <Users className="h-5 w-5" key="users" />,
    <Layers className="h-5 w-5" key="layers" />,
    <Network className="h-5 w-5" key="network" />,
    <Database className="h-5 w-5" key="database" />,
  ]

  const features = [
    {
      title: "Flexible Customer Layer",
      description:
        "Lily works on any engagement surface - desktop, mobile, voice, and APIs.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Graph-based%20RAG%20_%20Writer%20Knowledge%20Graph-1yjzoU3MuuowC8CucuQOTm0Tda3dWk.png",
    },
    {
      title: "Composable Agentic Layer",
      description:
        "Lily recruits specialized composable AI agents to complete any workflows and continuously learn.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Graph-based%20RAG%20_%20Writer%20Knowledge%20Graph-1yjzoU3MuuowC8CucuQOTm0Tda3dWk.png",
    },
    {
      title: "Orchestration Layer",
      description:
        "Composable agents can integrate and precisely abstract with internal and external services.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Graph-based%20RAG%20_%20Writer%20Knowledge%20Graph-1yjzoU3MuuowC8CucuQOTm0Tda3dWk.png",
    },
    {
      title: "Integration-Dense Data Layer",
      description:
        "Lily scales across distributors and suppliers using reusable data integrations.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Graph-based%20RAG%20_%20Writer%20Knowledge%20Graph-1yjzoU3MuuowC8CucuQOTm0Tda3dWk.png",
    },
  ]

  return (
    <section className="py-16 text-white">
      <div className="max-w-4xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 mb-4 cursor-pointer hover:bg-gray-800 transition-colors"
            onClick={() => setActiveFeature(index)}
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
              <Button size="sm" variant="ghost" className="shrink-0">
                {featureIcons[index]}
              </Button>
            </div>
          </div>
        ))}
        {/*
        <div className="text-center mt-12">
          <Button variant="outline" className="text-white border-white/20 rounded-full hover:bg-white/5">
            Read the blog post →
          </Button>
        </div>
        */}
      </div>
    </section>
  )
}

