import Image from "next/image";
import { X, Check } from 'lucide-react';

export function MobileComparison() {
  const comparisons = [
    {
      category: "Integration",
      oldWay: "Costly Rip-and-Replace: Forcing you to overhaul proven systems.",
      newWay: "Seamless Integration: Our AI agents work with your current stack—Salesforce, custom databases, internal tools—from day one."
    },
    {
      category: "Adaptability", 
      oldWay: "Rigid, Brittle Bots: Breaking with any change in process or UI.",
      newWay: "Human-like Adaptability: InstaWorkers™ understand context, handle variance, and collaborate with your human teams."
    },
    {
      category: "Intelligence",
      oldWay: "Generic AI: Unintelligent AI lacks the deep industry knowledge to handle complex tasks.",
      newWay: "Proprietary Vertical Intelligence: Pre-built ontologies and domain packs."
    },
    {
      category: "Deployment",
      oldWay: "Months to Deploy: Long, expensive implementation cycles with uncertain ROI.",
      newWay: "Days to Value: Go from kickoff to a live, productive AI workforce in a fraction of the time."
    }
  ];

  return (
    <div className="md:hidden space-y-8">
      <h2 className="font-semibold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] mb-12">The Old Way vs. The InstaLILY Way</h2>
      
      {comparisons.map((comparison) => (
        <div key={comparison.category} className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-4 border-b">
            <h3 className="text-xl font-semibold">{comparison.category}</h3>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <X className="w-5 h-5 text-black mr-2" />
                The Old Way
              </h4>
              <p className="text-gray-700">{comparison.oldWay}</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <Check className="w-5 h-5 text-black mr-2" />
                The InstaLILY Way
              </h4>
              <p className="text-gray-700">{comparison.newWay}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 