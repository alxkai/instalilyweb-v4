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

const HealthcareDashboardSVG = () => (
  <svg viewBox="-20 0 520 260" className="w-full h-full" fill="none">
    {/* Defs for soft shadow */}
    <defs>
      <filter id="softShadowHealthcareDesktop" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#1e293b" floodOpacity="0.08" />
      </filter>
    </defs>

    {/* Patient Record Card - Left */}
    <g transform="translate(20, 50)">
      <g className="transition-transform duration-200 hover:scale-105" filter="url(#softShadowHealthcareDesktop)">
        <rect x="0" y="0" width="160" height="110" fill="white" rx="12" />
        <g transform="translate(20, 20)">
          <circle cx="12" cy="12" r="12" fill="#e0f2fe" />
          <path d="M7 12h10M12 7v10" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
          <text x="35" y="10" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Patient</text>
          <text x="35" y="26" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Record</text>
        </g>
        <rect x="20" y="60" width="120" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="70" width="90" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="80" width="105" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="90" width="80" height="4" fill="#e2e8f0" rx="2"/>
      </g>
    </g>

    {/* Connecting Lines - now curved and elegant */}
    <path d="M180 105 C 220 105, 240 45, 280 45" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 230 105, 240 105, 280 105" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 220 105, 240 165, 280 165" stroke="#cbd5e1" strokeWidth="2"/>

    {/* Output Cards - Right Side (with corrected vertical alignment and spacing) */}
    {/* Verified Card */}
    <g transform="translate(280, 25)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#e6f8f0" stroke="#bbf7d0" strokeWidth="2" rx="20"/>
        <circle cx="20" cy="20" r="12" fill="#22c55e"/>
        <path d="M15.5 20l2.5 2.5 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="50" y="22" fontSize="16" fill="#064e3b" fontWeight="600" dominantBaseline="middle">Verified</text>
      </g>
    </g>

    {/* Scheduled Card - Centered and Icon Corrected */}
    <g transform="translate(280, 85)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#fffbe6" stroke="#fef08a" strokeWidth="2" rx="20"/>
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="20" height="20" fill="#f59e0b" rx="5"/>
          <path d="M5 3h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <rect x="3" y="8" width="14" height="9" fill="white" rx="1"/>
          <rect x="6" y="11" width="8" height="2" fill="#f59e0b" rx="1"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#78350f" fontWeight="600" dominantBaseline="middle">Scheduled</text>
      </g>
    </g>
    
    {/* Compliant Card - Shield Corrected */}
    <g transform="translate(280, 145)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="2" rx="20"/>
        <g transform="translate(10, 6)">
          <path d="M10 0 L20 5 V 18 L10 28 L0 18 V 5 Z" fill="#8b5cf6" />
          <path d="M6 14l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#5b21b6" fontWeight="600" dominantBaseline="middle">Compliant</text>
      </g>
    </g>

    {/* Bottom Labels - with corrected layout */}
    <text x="100" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Manual process</text>
    <text x="100" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Hours-Days</text>
    
    <text x="370" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Automated</text>
    <text x="370" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Minutes</text>
  </svg>
);

const FinancialServicesSVG = () => (
  <svg viewBox="-20 0 520 260" className="w-full h-full" fill="none">
    {/* Defs for soft shadow */}
    <defs>
      <filter id="softShadowFinancialDesktop" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#1e293b" floodOpacity="0.08" />
      </filter>
    </defs>

    {/* Input Card - Left */}
    <g transform="translate(20, 50)">
      <g className="transition-transform duration-200 hover:scale-105" filter="url(#softShadowFinancialDesktop)">
        <rect x="0" y="0" width="160" height="110" fill="white" rx="12" />
        <g transform="translate(20, 20)">
          <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0Z" fill="#eef2ff"/>
          <path d="M12 6V10M12 18V14M16 12L14 12M8 12L10 12" stroke="#4338ca" strokeWidth="2.5" strokeLinecap="round"/>
          <text x="35" y="10" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Client</text>
          <text x="35" y="26" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Application</text>
        </g>
        <rect x="20" y="60" width="120" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="70" width="90" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="80" width="105" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="90" width="80" height="4" fill="#e2e8f0" rx="2"/>
      </g>
    </g>

    {/* Connecting Lines */}
    <path d="M180 105 C 220 105, 240 45, 280 45" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 230 105, 240 105, 280 105" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 220 105, 240 165, 280 165" stroke="#cbd5e1" strokeWidth="2"/>

    {/* Output Cards - Right Side */}
    {/* KYC Verified */}
    <g transform="translate(280, 25)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="2" rx="20"/>
        <circle cx="20" cy="20" r="12" fill="#22c55e"/>
        <path d="M16 16v8h8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 24l8-8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="50" y="22" fontSize="16" fill="#166534" fontWeight="600" dominantBaseline="middle">KYC Verified</text>
      </g>
    </g>

    {/* Risk Assessed */}
    <g transform="translate(280, 85)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#eef2ff" stroke="#c7d2fe" strokeWidth="2" rx="20"/>
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="20" height="20" fill="#4338ca" rx="5"/>
          <path d="M4 14l4-4 4 4 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#312e81" fontWeight="600" dominantBaseline="middle">Risk Assessed</text>
      </g>
    </g>
    
    {/* Client Onboarded */}
    <g transform="translate(280, 145)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="2" rx="20"/>
        <g transform="translate(12, 12)">
          <circle cx="8" cy="8" r="8" fill="#64748b"/>
          <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#334155" fontWeight="600" dominantBaseline="middle">Onboarded</text>
      </g>
    </g>

    {/* Bottom Labels */}
    <text x="100" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Manual Review</text>
    <text x="100" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Weeks-Long</text>
    
    <text x="370" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Automated</text>
    <text x="370" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Real-Time</text>
  </svg>
);

const ManufacturingSVG = () => (
  <svg viewBox="-20 0 520 260" className="w-full h-full" fill="none">
    {/* Defs for soft shadow */}
    <defs>
      <filter id="softShadowManufacturingDesktop" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#1e293b" floodOpacity="0.08" />
      </filter>
    </defs>

    {/* Input Card - Left */}
    <g transform="translate(20, 50)">
      <g className="transition-transform duration-200 hover:scale-105" filter="url(#softShadowManufacturingDesktop)">
        <rect x="0" y="0" width="160" height="110" fill="white" rx="12" />
        <g transform="translate(20, 20)">
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#fee2e2" />
          <path d="M12 6V12L16 14" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="35" y="10" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Machine</text>
          <text x="35" y="26" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Breakdown</text>
        </g>
        <rect x="20" y="60" width="120" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="70" width="90" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="80" width="105" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="90" width="80" height="4" fill="#e2e8f0" rx="2"/>
      </g>
    </g>

    {/* Connecting Lines */}
    <path d="M180 105 C 220 105, 240 45, 280 45" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 230 105, 240 105, 280 105" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 220 105, 240 165, 280 165" stroke="#cbd5e1" strokeWidth="2"/>

    {/* Output Cards - Right Side */}
    {/* Root Cause Identified */}
    <g transform="translate(280, 25)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="2" rx="20"/>
        <g transform="translate(10, 10)">
          <circle cx="10" cy="10" r="8" fill="#0ea5e9"/>
          <path d="M10 6a4 4 0 110 8 4 4 0 010-8z" stroke="white" strokeWidth="2" fill="none"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#0c4a6e" fontWeight="600" dominantBaseline="middle">Root Cause ID</text>
      </g>
    </g>

    {/* Parts Ordered */}
    <g transform="translate(280, 85)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="2" rx="20"/>
        <g transform="translate(10, 10)">
          <path d="M5 0h10a5 5 0 015 5v10a5 5 0 01-5 5H5a5 5 0 01-5-5V5a5 5 0 015-5z" fill="#94a3b8"/>
          <circle cx="10" cy="10" r="3" fill="white"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#334155" fontWeight="600" dominantBaseline="middle">Parts Ordered</text>
      </g>
    </g>
    
    {/* Technician Dispatched */}
    <g transform="translate(280, 145)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#fff7ed" stroke="#fed7aa" strokeWidth="2" rx="20"/>
        <g transform="translate(12, 12)">
          <path d="M8 8a3 3 0 100-6 3 3 0 000 6z" fill="#fb923c"/>
          <path d="M12.5 16a4.5 4.5 0 00-9 0" stroke="#fb923c" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#9a3412" fontWeight="600" dominantBaseline="middle">Dispatched</text>
      </g>
    </g>

    {/* Bottom Labels */}
    <text x="100" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Manual Diagnosis</text>
    <text x="100" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Downtime: Days</text>
    
    <text x="370" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Automated</text>
    <text x="370" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Uptime: Hours</text>
  </svg>
);

const RetailSVG = () => (
  <svg viewBox="-20 0 570 260" className="w-full h-full" fill="none">
    {/* Defs for soft shadow */}
    <defs>
      <filter id="softShadowRetailDesktop" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#1e293b" floodOpacity="0.08" />
      </filter>
    </defs>

    {/* Input Card - Left */}
    <g transform="translate(20, 50)">
      <g className="transition-transform duration-200 hover:scale-105" filter="url(#softShadowRetailDesktop)">
        <rect x="0" y="0" width="160" height="110" fill="white" rx="12" />
        <g transform="translate(20, 20)">
          <circle cx="12" cy="12" r="12" fill="#e0f2fe" />
          <path d="M7 12h10M12 7v10" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
          <text x="35" y="10" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Customer</text>
          <text x="35" y="26" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Inquiry</text>
        </g>
        <rect x="20" y="60" width="120" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="70" width="90" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="80" width="105" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="90" width="80" height="4" fill="#e2e8f0" rx="2"/>
      </g>
    </g>

    {/* Connecting Lines */}
    <path d="M180 105 C 220 105, 240 45, 300 45" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 230 105, 240 105, 300 105" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 220 105, 240 165, 300 165" stroke="#cbd5e1" strokeWidth="2"/>

    {/* Output Cards - Right Side */}
    {/* Inventory Checked */}
    <g transform="translate(300, 25)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="210" height="40" fill="#f0fdfa" stroke="#ccfbf1" strokeWidth="2" rx="20"/>
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="20" height="20" fill="#14b8a6" rx="5"/>
          <path d="M5 5h10v10H5z M5 10h10" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#0f766e" fontWeight="600" dominantBaseline="middle">Inventory Checked</text>
      </g>
    </g>

    {/* Order Processed */}
    <g transform="translate(300, 85)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="210" height="40" fill="#fdf2f8" stroke="#fce7f3" strokeWidth="2" rx="20"/>
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="20" height="20" fill="#db2777" rx="5"/>
          <path d="M5 5h10l-2 8H7z M4 5l-2 1h16" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#9d174d" fontWeight="600" dominantBaseline="middle">Order Processed</text>
      </g>
    </g>
    
    {/* Support Provided */}
    <g transform="translate(300, 145)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="210" height="40" fill="#faf5ff" stroke="#f3e8ff" strokeWidth="2" rx="20"/>
        <g transform="translate(12, 12)">
          <path d="M8 8a3 3 0 100-6 3 3 0 000 6z" fill="#9333ea"/>
          <path d="M12.5 16a4.5 4.5 0 00-9 0" stroke="#9333ea" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#6b21a8" fontWeight="600" dominantBaseline="middle">Support Provided</text>
      </g>
    </g>

    {/* Bottom Labels */}
    <text x="100" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Manual Tasks</text>
    <text x="100" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Hours</text>
    
    <text x="425" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Automated</text>
    <text x="425" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Seconds</text>
  </svg>
);

const HealthcareMobileSVG = () => (
  <svg viewBox="-20 0 540 260" className="w-full h-full" fill="none">
    {/* Defs for soft shadow */}
    <defs>
      <filter id="softShadowHealthcareMobile" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#1e293b" floodOpacity="0.08" />
      </filter>
    </defs>

    {/* Patient Record Card - Left */}
    <g transform="translate(20, 50)">
      <g className="transition-transform duration-200 hover:scale-105" filter="url(#softShadowHealthcareMobile)">
        <rect x="0" y="0" width="160" height="110" fill="white" rx="12" />
        <g transform="translate(20, 20)">
          <circle cx="12" cy="12" r="12" fill="#e0f2fe" />
          <path d="M7 12h10M12 7v10" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
          <text x="35" y="10" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Patient</text>
          <text x="35" y="26" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Record</text>
        </g>
        <rect x="20" y="60" width="120" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="70" width="90" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="80" width="105" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="90" width="80" height="4" fill="#e2e8f0" rx="2"/>
      </g>
    </g>

    {/* Connecting Lines - now curved and elegant */}
    <path d="M180 105 C 220 105, 240 45, 280 45" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 230 105, 240 105, 280 105" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 220 105, 240 165, 280 165" stroke="#cbd5e1" strokeWidth="2"/>

    {/* Output Cards - Right Side (with corrected vertical alignment and spacing) */}
    {/* Verified Card */}
    <g transform="translate(280, 25)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#e6f8f0" stroke="#bbf7d0" strokeWidth="2" rx="20"/>
        <circle cx="20" cy="20" r="12" fill="#22c55e"/>
        <path d="M15.5 20l2.5 2.5 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="50" y="22" fontSize="16" fill="#064e3b" fontWeight="600" dominantBaseline="middle">Verified</text>
      </g>
    </g>

    {/* Scheduled Card - Centered and Icon Corrected */}
    <g transform="translate(280, 85)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#fffbe6" stroke="#fef08a" strokeWidth="2" rx="20"/>
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="20" height="20" fill="#f59e0b" rx="5"/>
          <path d="M5 3h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <rect x="3" y="8" width="14" height="9" fill="white" rx="1"/>
          <rect x="6" y="11" width="8" height="2" fill="#f59e0b" rx="1"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#78350f" fontWeight="600" dominantBaseline="middle">Scheduled</text>
      </g>
    </g>
    
    {/* Compliant Card - Shield Corrected */}
    <g transform="translate(280, 145)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="2" rx="20"/>
        <g transform="translate(10, 6)">
          <path d="M10 0 L20 5 V 18 L10 28 L0 18 V 5 Z" fill="#8b5cf6" />
          <path d="M6 14l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#5b21b6" fontWeight="600" dominantBaseline="middle">Compliant</text>
      </g>
    </g>

    {/* Bottom Labels - with corrected layout */}
    <text x="100" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Manual process</text>
    <text x="100" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Hours-Days</text>
    
    <text x="370" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Automated</text>
    <text x="370" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Minutes</text>
  </svg>
);

const FinancialMobileSVG = () => (
  <svg viewBox="-20 0 540 260" className="w-full h-full" fill="none">
    {/* Defs for soft shadow */}
    <defs>
      <filter id="softShadowFinancialMobile" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#1e293b" floodOpacity="0.08" />
      </filter>
    </defs>

    {/* Input Card - Left */}
    <g transform="translate(20, 50)">
      <g className="transition-transform duration-200 hover:scale-105" filter="url(#softShadowFinancialMobile)">
        <rect x="0" y="0" width="160" height="110" fill="white" rx="12" />
        <g transform="translate(20, 20)">
          <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0Z" fill="#eef2ff"/>
          <path d="M12 6V10M12 18V14M16 12L14 12M8 12L10 12" stroke="#4338ca" strokeWidth="2.5" strokeLinecap="round"/>
          <text x="35" y="10" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Client</text>
          <text x="35" y="26" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Application</text>
        </g>
        <rect x="20" y="60" width="120" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="70" width="90" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="80" width="105" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="90" width="80" height="4" fill="#e2e8f0" rx="2"/>
      </g>
    </g>

    {/* Connecting Lines */}
    <path d="M180 105 C 220 105, 240 45, 280 45" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 230 105, 240 105, 280 105" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 220 105, 240 165, 280 165" stroke="#cbd5e1" strokeWidth="2"/>

    {/* Output Cards - Right Side */}
    {/* KYC Verified */}
    <g transform="translate(280, 25)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="2" rx="20"/>
        <circle cx="20" cy="20" r="12" fill="#22c55e"/>
        <path d="M16 16v8h8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 24l8-8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="50" y="22" fontSize="16" fill="#166534" fontWeight="600" dominantBaseline="middle">KYC Verified</text>
      </g>
    </g>

    {/* Risk Assessed */}
    <g transform="translate(280, 85)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#eef2ff" stroke="#c7d2fe" strokeWidth="2" rx="20"/>
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="20" height="20" fill="#4338ca" rx="5"/>
          <path d="M4 14l4-4 4 4 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#312e81" fontWeight="600" dominantBaseline="middle">Risk Assessed</text>
      </g>
    </g>
    
    {/* Client Onboarded */}
    <g transform="translate(280, 145)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="2" rx="20"/>
        <g transform="translate(12, 12)">
          <circle cx="8" cy="8" r="8" fill="#64748b"/>
          <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#334155" fontWeight="600" dominantBaseline="middle">Onboarded</text>
      </g>
    </g>

    {/* Bottom Labels */}
    <text x="100" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Manual Review</text>
    <text x="100" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Weeks-Long</text>
    
    <text x="370" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Automated</text>
    <text x="370" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Real-Time</text>
  </svg>
);

const ManufacturingMobileSVG = () => (
  <svg viewBox="-20 0 540 260" className="w-full h-full" fill="none">
    {/* Defs for soft shadow */}
    <defs>
      <filter id="softShadowManufacturingMobile" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#1e293b" floodOpacity="0.08" />
      </filter>
    </defs>

    {/* Input Card - Left */}
    <g transform="translate(20, 50)">
      <g className="transition-transform duration-200 hover:scale-105" filter="url(#softShadowManufacturingMobile)">
        <rect x="0" y="0" width="160" height="110" fill="white" rx="12" />
        <g transform="translate(20, 20)">
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#fee2e2" />
          <path d="M12 6V12L16 14" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="35" y="10" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Machine</text>
          <text x="35" y="26" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Breakdown</text>
        </g>
        <rect x="20" y="60" width="120" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="70" width="90" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="80" width="105" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="90" width="80" height="4" fill="#e2e8f0" rx="2"/>
      </g>
    </g>

    {/* Connecting Lines */}
    <path d="M180 105 C 220 105, 240 45, 280 45" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 230 105, 240 105, 280 105" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 220 105, 240 165, 280 165" stroke="#cbd5e1" strokeWidth="2"/>

    {/* Output Cards - Right Side */}
    {/* Root Cause Identified */}
    <g transform="translate(280, 25)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="2" rx="20"/>
        <g transform="translate(10, 10)">
          <circle cx="10" cy="10" r="8" fill="#0ea5e9"/>
          <path d="M10 6a4 4 0 110 8 4 4 0 010-8z" stroke="white" strokeWidth="2" fill="none"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#0c4a6e" fontWeight="600" dominantBaseline="middle">Root Cause ID</text>
      </g>
    </g>

    {/* Parts Ordered */}
    <g transform="translate(280, 85)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="2" rx="20"/>
        <g transform="translate(10, 10)">
          <path d="M5 0h10a5 5 0 015 5v10a5 5 0 01-5 5H5a5 5 0 01-5-5V5a5 5 0 015-5z" fill="#94a3b8"/>
          <circle cx="10" cy="10" r="3" fill="white"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#334155" fontWeight="600" dominantBaseline="middle">Parts Ordered</text>
      </g>
    </g>
    
    {/* Technician Dispatched */}
    <g transform="translate(280, 145)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="180" height="40" fill="#fff7ed" stroke="#fed7aa" strokeWidth="2" rx="20"/>
        <g transform="translate(12, 12)">
          <path d="M8 8a3 3 0 100-6 3 3 0 000 6z" fill="#fb923c"/>
          <path d="M12.5 16a4.5 4.5 0 00-9 0" stroke="#fb923c" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#9a3412" fontWeight="600" dominantBaseline="middle">Dispatched</text>
      </g>
    </g>

    {/* Bottom Labels */}
    <text x="100" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Manual Diagnosis</text>
    <text x="100" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Downtime: Days</text>
    
    <text x="370" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Automated</text>
    <text x="370" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Uptime: Hours</text>
  </svg>
);

const RetailMobileSVG = () => (
  <svg viewBox="-20 0 590 260" className="w-full h-full" fill="none">
    {/* Defs for soft shadow */}
    <defs>
      <filter id="softShadowRetailMobile" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#1e293b" floodOpacity="0.08" />
      </filter>
    </defs>

    {/* Input Card - Left */}
    <g transform="translate(20, 50)">
      <g className="transition-transform duration-200 hover:scale-105" filter="url(#softShadowRetailMobile)">
        <rect x="0" y="0" width="160" height="110" fill="white" rx="12" />
        <g transform="translate(20, 20)">
          <circle cx="12" cy="12" r="12" fill="#e0f2fe" />
          <path d="M7 12h10M12 7v10" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
          <text x="35" y="10" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Customer</text>
          <text x="35" y="26" fontSize="14" fontWeight="600" fill="#1e293b" dominantBaseline="middle">Inquiry</text>
        </g>
        <rect x="20" y="60" width="120" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="70" width="90" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="80" width="105" height="4" fill="#e2e8f0" rx="2"/>
        <rect x="20" y="90" width="80" height="4" fill="#e2e8f0" rx="2"/>
      </g>
    </g>

    {/* Connecting Lines */}
    <path d="M180 105 C 220 105, 240 45, 300 45" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 230 105, 240 105, 300 105" stroke="#cbd5e1" strokeWidth="2"/>
    <path d="M180 105 C 220 105, 240 165, 300 165" stroke="#cbd5e1" strokeWidth="2"/>

    {/* Output Cards - Right Side */}
    {/* Inventory Checked */}
    <g transform="translate(300, 25)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="210" height="40" fill="#f0fdfa" stroke="#ccfbf1" strokeWidth="2" rx="20"/>
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="20" height="20" fill="#14b8a6" rx="5"/>
          <path d="M5 5h10v10H5z M5 10h10" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#0f766e" fontWeight="600" dominantBaseline="middle">Inventory Checked</text>
      </g>
    </g>

    {/* Order Processed */}
    <g transform="translate(300, 85)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="210" height="40" fill="#fdf2f8" stroke="#fce7f3" strokeWidth="2" rx="20"/>
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="20" height="20" fill="#db2777" rx="5"/>
          <path d="M5 5h10l-2 8H7z M4 5l-2 1h16" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#9d174d" fontWeight="600" dominantBaseline="middle">Order Processed</text>
      </g>
    </g>

    {/* Support Provided */}
    <g transform="translate(300, 145)">
      <g className="transition-transform duration-200 hover:scale-105">
        <rect x="0" y="0" width="210" height="40" fill="#faf5ff" stroke="#f3e8ff" strokeWidth="2" rx="20"/>
        <g transform="translate(12, 12)">
          <path d="M8 8a3 3 0 100-6 3 3 0 000 6z" fill="#9333ea"/>
          <path d="M12.5 16a4.5 4.5 0 00-9 0" stroke="#9333ea" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </g>
        <text x="50" y="22" fontSize="16" fill="#6b21a8" fontWeight="600" dominantBaseline="middle">Support Provided</text>
      </g>
    </g>

    {/* Bottom Labels */}
    <text x="100" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Manual Tasks</text>
    <text x="100" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Hours</text>
    
    <text x="425" y="215" textAnchor="middle" fontSize="14" fill="#334155" fontWeight="500">Automated</text>
    <text x="425" y="235" textAnchor="middle" fontSize="14" fill="#94a3b8">Seconds</text>
  </svg>
);

export function IndustrySection() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <div className="border border-gray-200">
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-4">
        {/* Left Column: Industry List */}
        <div className="md:col-span-1 border-r border-gray-200">
          <ul>
            {industries.map((industry, index) => (
              <li
                key={industry.name}
                className={`p-4 cursor-pointer ${
                  selectedIndustry.name === industry.name
                    ? 'text-black'
                    : 'text-gray-400'
                } ${index !== industries.length - 1 ? 'border-b border-gray-200' : ''}`}
                onMouseEnter={() => setSelectedIndustry(industry)}
              >
                <h3 className="font-semibold text-lg tracking-wider">{industry.name}</h3>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-3">
          <div
            key={selectedIndustry.name}
            className="animate-fade-in md:grid md:grid-cols-5 md:items-center"
          >
            {/* Image Placeholder */}
            <div className="w-full h-80 md:col-span-3">
              {selectedIndustry.name === "HEALTHCARE" ? (
                <HealthcareDashboardSVG />
              ) : selectedIndustry.name === "FINANCIAL SERVICES" ? (
                <FinancialServicesSVG />
              ) : selectedIndustry.name === "MANUFACTURING" ? (
                <ManufacturingSVG />
              ) : selectedIndustry.name === "RETAIL & E-COMMERCE" ? (
                <RetailSVG />
              ) : (
                <span className="text-gray-400">Image Placeholder</span>
              )}
            </div>
            {/* Description */}
            <div className="px-4 py-4 md:p-8 md:col-span-2">
              <p className="body-copy text-gray-700">
                {selectedIndustry.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Accordion Style - TESTING LEFT SIDE ONLY */}
      <div className="md:hidden">
        {industries.map((industry) => {
          const isSelected = selectedIndustry.name === industry.name;
          return (
            <div key={industry.name} className="border-b border-gray-200 last:border-b-0">
              <button
                className={`w-full p-4 text-left cursor-pointer ${
                  isSelected ? 'text-black' : 'text-gray-400'
                }`}
                onClick={() => setSelectedIndustry(industry)}
              >
                <h3 className="font-semibold text-lg tracking-wider">{industry.name}</h3>
              </button>
              
              {isSelected && (
                <div className="animate-fade-in">
                  {/* Image Placeholder - MOBILE TEST VERSION */}
                  <div className="w-full h-64">
                    {industry.name === "HEALTHCARE" ? (
                      <HealthcareMobileSVG />
                    ) : industry.name === "FINANCIAL SERVICES" ? (
                      <FinancialMobileSVG />
                    ) : industry.name === "MANUFACTURING" ? (
                      <ManufacturingMobileSVG />
                    ) : industry.name === "RETAIL & E-COMMERCE" ? (
                      <RetailMobileSVG />
                    ) : (
                      <span className="text-gray-400">Image Placeholder</span>
                    )}
                  </div>
                  {/* Description */}
                  <div className="px-4 pb-4">
                    <p className="body-copy text-gray-700">
                      {industry.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
} 