import Link from "next/link";

export function FullWidthCTA() {
  return (
    <div className="bg-[#181818]">
      <div className="max-w-7xl mx-auto py-24 px-4 text-center">
        <h2 className="text-5xl font-semibold text-white mb-6">
          Ready to Build Your AI Workforce?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Stop waiting for the future of work — build it. Let&apos;s discuss your
          specific challenges and design a deployment plan that delivers
          immediate, measurable ROI.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/book-a-demo"
            className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Book a Demo
          </Link>
          <Link
            href="/contact"
            className="bg-transparent text-white font-semibold py-3 px-6 rounded-lg border border-white hover:bg-white hover:text-black transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
} 