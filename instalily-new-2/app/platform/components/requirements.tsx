export function ProductRequirements() {
  const deploymentSteps = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Discovery",
      duration: "2 weeks",
      description: "Initial workshop to identify automation opportunities using agents",
      week: 0
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Access",
      duration: "2 weeks",
      description: "Secure data access and integrate environment into the orchestration layer",
      week: 2
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Build",
      duration: "4 to 8 weeks",
      description: "Begin building and composing agents, and iterate continuously",
      week: 4
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Test",
      duration: "1 week",
      description: "Conduct UAT in a staging environment",
      week: 8
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Deploy",
      duration: "2 weeks",
      description: "Launch in production with active monitoring",
      week: 10
    }
  ]

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-sm font-medium text-purple-600 mb-4 text-center">TYPICAL DEPLOYMENT PROCESS</div>
        <h2 className="text-3xl font-semibold text-center">Deploy Lily to your team in just a few weeks</h2>
        
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="relative">
            {/* Timeline line - hidden on mobile, shown on desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200"></div>
            
            {/* Vertical line for mobile */}
            <div className="md:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-purple-200 via-purple-400 to-purple-200"></div>
            
            {/* Timeline items */}
            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {deploymentSteps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Week marker - repositioned for mobile */}
                  <div className="absolute md:static md:-top-8 right-0 md:left-0 top-1 text-sm text-gray-500 font-medium md:text-center">
                    Week {step.week}
                  </div>
                  
                  {/* Timeline node */}
                  <div className="relative mb-8 flex md:block">
                    <div className="w-14 h-14 bg-white border-2 border-purple-200 group-hover:border-purple-500 rounded-xl flex items-center justify-center md:mx-auto mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <div className="text-purple-500 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Content - adjusted for mobile */}
                    <div className="pl-6 md:pl-0 text-left md:text-center group-hover:-translate-y-1 transition-transform duration-300">
                      <h3 className="font-bold text-xl mb-2 text-gray-900">{step.title}</h3>
                      <div className="text-purple-600 font-medium text-sm mb-3">{step.duration}</div>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

