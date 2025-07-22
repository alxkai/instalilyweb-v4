export function CTASection() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
          Ready to Build Your AI Workforce?
        </h2>
        <p className="body-copy mb-12 opacity-90">
          Stop dwelling on the limits of work — build it. Let&apos;s discuss your specific challenges so we can deploy InstaWorkers™ that deliver immediate value.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/book-a-demo"
            className="bg-white text-gray-900 px-8 py-3 rounded font-medium hover:bg-gray-200 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/book-a-demo"
            className="border border-white/30 px-8 py-3 rounded font-medium hover:bg-white/10 transition-colors"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  )
} 