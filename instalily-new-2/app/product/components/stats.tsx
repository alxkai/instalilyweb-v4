export function ProductStats() {
  return (
    <section className="bg-[#F4F1FF] py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="text-sm font-medium text-purple-600 mb-4">
          TOP USE CASES TRUSTED BY OPERATORS & P/L LEADERS
        </div>
        <h2 className="text-4xl font-semibold mb-4">
          Our Platform is in Production & Driving ROI.
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Tailored to your customer needs, continuously learning and makes your team work faster & smarter every day.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Lily Sales AI Agent */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Lily Sales AI Agent</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                Drive upsell / cross-sell revenue
              </div>
              <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                Intercept churn risk
              </div>
              <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                Automate sales tasks
              </div>
              <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                Generate ROI-driven next best action
              </div>
            </div>
          </div>

          {/* Lily Service AI Agent */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Lily Service AI Agent</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                Build dense knowledge graphs
              </div>
              <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                Speed up diagnosis by 90%
              </div>
              <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                Faster customer resolution
              </div>
              <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                Upskill workers & improve NPS
              </div>
            </div>
          </div>

          {/* Lily Marketing AI Agent */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Lily Marketing AI Agent</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                Automate campaign creation
              </div>
              <div className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                Deep performance insights
              </div>
              <div className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                Conversational Integration
              </div>
              <div className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-full py-3 px-6 border border-purple-300/40 shadow-sm font-semibold">
                Faster iterations to drive ROI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

