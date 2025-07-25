import { X, Check } from 'lucide-react';
import { AnimatedSectionWrapper } from '@/components/layout/animated-section-wrapper';
import Image from 'next/image';

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
      <AnimatedSectionWrapper>
        <h2 className="title-text mb-12">
          <span className="flex items-center justify-start normal-case">
            The old way vs. the
            <Image
              src="/assets/logo_black.svg"
              alt="InstaLILY Logo"
              width={120}
              height={40}
              className="h-8 w-auto mx-2"
            />
            way
          </span>
        </h2>
      </AnimatedSectionWrapper>
      
      {comparisons.map((comparison, index) => (
        <AnimatedSectionWrapper key={comparison.category} delay={index * 150}>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#181818] to-[#2a2a2a] p-4 border-b">
              <h3 className="text-xl font-semibold text-white">{comparison.category}</h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2 flex items-center">
                  <X className="w-5 h-5 text-black mr-2" />
                  The Old Way
                </h4>
                <p className="body-copy text-gray-700">{comparison.oldWay}</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center">
                  <Check className="w-5 h-5 text-black mr-2" />
                  The InstaLILY Way
                </h4>
                <p className="body-copy text-gray-700">{comparison.newWay}</p>
              </div>
            </div>
          </div>
        </AnimatedSectionWrapper>
      ))}
    </div>
  );
} 