interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How does the free trial work?",
    answer: "Our free trial gives you full access to all features for 14 days. No credit card required. You can upgrade to a paid plan at any time during or after the trial."
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, you'll be prorated for the remainder of your billing period. If you downgrade, your new rate will take effect at the next billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and can also arrange alternative payment methods for Enterprise customers."
  },
  {
    question: "Do you offer custom enterprise pricing?",
    answer: "Yes, we offer custom pricing for enterprise organizations with specific needs. Contact our sales team to discuss your requirements and get a custom quote."
  },
  {
    question: "What kind of support is included?",
    answer: "All plans include email support. Business plans include priority support with faster response times. Enterprise plans include 24/7 support and a dedicated account manager."
  },
  {
    question: "Can I use Writer with my existing tools?",
    answer: "Yes, Writer integrates with many popular tools and platforms. We offer APIs and webhooks for custom integrations, and our team can help with enterprise integration needs."
  }
]

export function FAQ() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Frequently asked questions</h2>
          
          <div className="mx-auto mt-16 flow-root sm:mt-20">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 