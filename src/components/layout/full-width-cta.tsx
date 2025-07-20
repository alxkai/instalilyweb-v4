import Link from "next/link";
import { AnimatedSectionWrapper } from "./animated-section-wrapper";

export function FullWidthCTA() {
  return (
    <div className="bg-[#181818]">
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 text-center">
        <AnimatedSectionWrapper>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Ready to Build Your AI Workforce?
          </h2>
        </AnimatedSectionWrapper>
        <AnimatedSectionWrapper delay={150}>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stop waiting for the future of work — build it. Let&apos;s discuss your
            specific challenges and design a deployment plan that delivers
            immediate, measurable ROI.
          </p>
        </AnimatedSectionWrapper>
        <AnimatedSectionWrapper delay={300}>
          <div className="flex justify-center">
            <Link
              href="/book-a-demo"
              className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </AnimatedSectionWrapper>
      </div>
    </div>
  );
} 