'use client';

import { useState } from 'react';

const industries = [
  {
    name: '01. RETAIL & E-COMMERCE',
    description:
      'Empower store associates with AI-driven, personalized client outreach. Unify online and offline inventory data to optimize stock levels and in-store labor. Our retail solution combines customer data and purchase history to create unique, effective customer engagement.',
    imagePlaceholder: '/path/to/retail-image.jpg', // Replace with actual image path
  },
  {
    name: '02. INDUSTRIAL GOODS',
    description:
      'Automate your supply chain, from order processing to inventory management. Our agents handle complex logistics, predict demand, and optimize routes, reducing operational costs and improving delivery times.',
    imagePlaceholder: '/path/to/industrial-image.jpg', // Replace with actual image path
  },
  {
    name: '03. HEALTHCARE',
    description:
      "Streamline patient intake, appointment scheduling, and billing. Our HIPAA-compliant agents reduce administrative burden, minimize errors, and allow your staff to focus on patient care.",
    imagePlaceholder: '/path/to/healthcare-image.jpg', // Replace with actual image path
  },
];

export function IndustrySection() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <div className="border-t border-b border-gray-200" onMouseLeave={() => setSelectedIndustry(industries[0])}>
      <div className="grid grid-cols-1 md:grid-cols-3">
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
    </div>
  );
} 