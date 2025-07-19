"use client"

export function GetStartedHero() {
  return (
    <section className="pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12">
          {/* Top - Content */}
          <div className="space-y-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Learn how InstaLILY&apos;s Autonomous AI can work for your enterprise.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              With InstaLILY, you can enable your company to tailor next-generation AI to your business and customers.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simply fill out the form and one of our specialists will get in touch to arrange a convenient time for your comprehensive walkthrough of our InstaAgents.
            </p>
          </div>

          {/* Bottom - Form */}
          <div className="max-w-5xl mx-auto w-full">
            <div className="w-full h-[1100px] md:h-[700px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3PkjeUl2AJmki-Ee99GBqjE60s5u2W1B9U_FyUcwLUYaoILAPo0DKwfd6YsxPUao1ZGJsw-657?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no"
                title="InstaLILY Calendar"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 