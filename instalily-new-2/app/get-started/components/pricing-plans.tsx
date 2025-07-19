interface PricingFeature {
  name: string
  included: boolean
}

interface PricingPlan {
  name: string
  description: string
  price: string
  billingPeriod: string
  features: PricingFeature[]
  ctaLabel: string
  ctaLink: string
  highlighted?: boolean
}

const plans: PricingPlan[] = [
  {
    name: "Team",
    description: "Perfect for small teams getting started with AI",
    price: "$29",
    billingPeriod: "per user/month",
    features: [
      { name: "Up to 10 users", included: true },
      { name: "Basic AI features", included: true },
      { name: "Standard support", included: true },
      { name: "Basic analytics", included: true },
      { name: "Custom models", included: false },
      { name: "Advanced security", included: false },
    ],
    ctaLabel: "Start free trial",
    ctaLink: "#"
  },
  {
    name: "Business",
    description: "For growing teams that need more power and flexibility",
    price: "$79",
    billingPeriod: "per user/month",
    features: [
      { name: "Unlimited users", included: true },
      { name: "Advanced AI features", included: true },
      { name: "Priority support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Custom models", included: true },
      { name: "Advanced security", included: true },
    ],
    ctaLabel: "Contact sales",
    ctaLink: "#",
    highlighted: true
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    price: "Custom",
    billingPeriod: "contact for pricing",
    features: [
      { name: "Unlimited users", included: true },
      { name: "All AI features", included: true },
      { name: "24/7 support", included: true },
      { name: "Custom analytics", included: true },
      { name: "Custom models", included: true },
      { name: "Enterprise security", included: true },
    ],
    ctaLabel: "Contact sales",
    ctaLink: "#"
  }
]

function CheckIcon({ included }: { included: boolean }) {
  return included ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-purple-600">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-300">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export function PricingPlans() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                relative p-8 rounded-lg
                ${plan.highlighted 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-50'
                }
              `}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.highlighted ? 'text-purple-100' : 'text-gray-600'}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`ml-2 ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                    {plan.billingPeriod}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckIcon included={feature.included} />
                    <span className={feature.included ? '' : 'text-gray-400'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={plan.ctaLink}
                className={`
                  block w-full py-3 px-4 rounded-lg text-center font-medium
                  ${plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                  }
                  transition-colors
                `}
              >
                {plan.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 