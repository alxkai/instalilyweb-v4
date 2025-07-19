"use client"

import { ShieldCheck, FileLock, KeyRound, Server } from "lucide-react"
import React, { cloneElement } from "react"
import { AnimatedSectionWrapper } from "../layout/animated-section-wrapper"

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-purple-300 scale-110 transition-transform duration-300 md:text-purple-600 md:scale-100 md:group-hover:text-purple-300 md:group-hover:scale-110" strokeWidth={1.5} />,
    title: "SOC 2 Type II Compliant",
    description: "Ensuring your data is handled with the highest standards of security and privacy.",
    hover_gradient: "from-purple-950 to-black",
    desktop_hover_gradient: "md:hover:from-purple-950 md:hover:to-black",
    icon_bg: "bg-purple-900/30",
    desktop_icon_bg: "md:group-hover:bg-purple-900/30",
    text_color: "text-purple-300",
  },
  {
    icon: <FileLock className="w-8 h-8 text-indigo-300 scale-110 transition-transform duration-300 md:text-purple-600 md:scale-100 md:group-hover:text-indigo-300 md:group-hover:scale-110" strokeWidth={1.5} />,
    title: "HIPAA Certified",
    description: "Meeting the rigorous requirements for protecting sensitive patient health information.",
    hover_gradient: "from-indigo-950 to-black",
    desktop_hover_gradient: "md:hover:from-indigo-950 md:hover:to-black",
    icon_bg: "bg-indigo-900/30",
    desktop_icon_bg: "md:group-hover:bg-indigo-900/30",
    text_color: "text-indigo-300",
  },
  {
    icon: <KeyRound className="w-8 h-8 text-blue-300 scale-110 transition-transform duration-300 md:text-purple-600 md:scale-100 md:group-hover:text-blue-300 md:group-hover:scale-110" strokeWidth={1.5} />,
    title: "Granular RBAC",
    description: "Maintain full control with precise, role-based access to features and data.",
    hover_gradient: "from-blue-950 to-black",
    desktop_hover_gradient: "md:hover:from-blue-950 md:hover:to-black",
    icon_bg: "bg-blue-900/30",
    desktop_icon_bg: "md:group-hover:bg-blue-900/30",
    text_color: "text-blue-300",
  },
  {
    icon: <Server className="w-8 h-8 text-sky-300 scale-110 transition-transform duration-300 md:text-purple-600 md:scale-100 md:group-hover:text-sky-300 md:group-hover:scale-110" strokeWidth={1.5} />,
    title: "Private Cloud & On-Prem Options",
    description: "Deploy in a way that meets your organization's specific security and infrastructure needs.",
    hover_gradient: "from-sky-950 to-black",
    desktop_hover_gradient: "md:hover:from-sky-950 md:hover:to-black",
    icon_bg: "bg-sky-900/30",
    desktop_icon_bg: "md:group-hover:bg-sky-900/30",
    text_color: "text-sky-300",
  },
]

export function ComplianceSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedSectionWrapper>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black text-center">
              Enterprise-Grade AI, Fortified
            </h2>
          </AnimatedSectionWrapper>
          <AnimatedSectionWrapper delay={150}>
            <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto text-center">
              We meet you where you are, with a security posture that's second to none. Our platform is built on a foundation of trust, transparency, and enterprise-level compliance.
            </p>
          </AnimatedSectionWrapper>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none flow-root">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSectionWrapper key={feature.title} delay={300 + index * 100}>
                <div
                  className={`bg-gradient-to-br ${feature.hover_gradient} p-8 rounded-xl shadow-xl -translate-y-1 transition-all duration-300 border border-gray-100 group h-full md:bg-white md:bg-gradient-to-b md:from-purple-50 md:to-white md:shadow-lg md:translate-y-0 md:hover:bg-gradient-to-br ${feature.desktop_hover_gradient} md:hover:shadow-xl md:hover:-translate-y-1`}
                >
                  <div className="mb-6">
                    <div className={`w-14 h-14 border-2 border-purple-200 ${feature.icon_bg} rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 md:bg-white ${feature.desktop_icon_bg}`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white md:text-purple-900 md:group-hover:text-white">{feature.title}</h3>
                    <p className={`${feature.text_color} leading-relaxed md:text-gray-600 md:group-hover:${feature.text_color}`}>{feature.description}</p>
                  </div>
                </div>
              </AnimatedSectionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 