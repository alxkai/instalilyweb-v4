'use client';

import { useState } from 'react';

const industries = [
  {
    name: "HEALTHCARE",
    description: "Streamline patient onboarding, automate insurance verification, and manage complex care coordination workflows with AI agents that understand HIPAA compliance and healthcare protocols."
  },
  {
    name: "FINANCIAL SERVICES", 
    description: "Automate KYC processes, manage loan applications, and handle customer service inquiries with AI agents trained on financial regulations and compliance requirements."
  },
  {
    name: "MANUFACTURING",
    description: "Optimize supply chain management, automate quality control processes, and coordinate production schedules with AI agents that understand manufacturing workflows and safety protocols."
  },
  {
    name: "RETAIL & E-COMMERCE",
    description: "Manage inventory, process orders, handle customer inquiries, and coordinate fulfillment with AI agents that understand retail operations and customer service best practices."
  },
]

export function IndustrySection() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  const toggleIndustry = (industry: typeof industries[0]) => {
    setSelectedIndustry(selectedIndustry.name === industry.name ? industries[0] : industry);
  };

  return (
    <div className="border-t border-b border-gray-200">
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-3">
        {/* Left Column: Industry List */}
        <div className="md:col-span-1 border-r border-gray-200">
          <ul>
            {industries.map((industry, index) => (
              <li
                key={industry.name}
                className={`p-6 cursor-pointer ${
                  selectedIndustry.name === industry.name
                    ? 'text-black'
                    : 'text-gray-400'
                } ${index !== industries.length - 1 ? 'border-b border-gray-200' : ''}`}
                onMouseEnter={() => setSelectedIndustry(industry)}
              >
                <h3 className="font-semibold text-xl tracking-wider">{industry.name}</h3>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-2 p-12">
          <div
            key={selectedIndustry.name}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in"
          >
            {/* Image Placeholder */}
            <div className="w-full h-64 bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center">
              <span className="text-gray-400">Image Placeholder</span>
            </div>
            {/* Description */}
            <div>
              <p className="text-xl leading-relaxed text-gray-700">
                {selectedIndustry.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {industries.map((industry) => {
          const isOpen = selectedIndustry.name === industry.name;
          return (
            <div key={industry.name} className="border-b border-gray-200 last:border-b-0">
              <button
                className={`w-full p-4 text-left cursor-pointer transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'text-black bg-gray-50'
                    : 'text-gray-600'
                }`}
                onClick={() => toggleIndustry(industry)}
              >
                <h3 className="font-semibold text-lg tracking-wider">{industry.name}</h3>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`p-4 pt-0 transform transition-transform duration-500 ease-in-out ${
                  isOpen ? 'translate-y-0' : '-translate-y-4'
                }`}>
                  <div className="pt-4 border-t border-gray-200">
                    {/* Image Placeholder */}
                    <div className="w-full h-48 bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center mb-4">
                      <span className="text-gray-400">Image Placeholder</span>
                    </div>
                    {/* Description */}
                    <p className="text-base leading-relaxed text-gray-700">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 