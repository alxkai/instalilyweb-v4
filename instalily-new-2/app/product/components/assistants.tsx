import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ProductAssistants() {
  return (
    <section className="bg-[#F4F1FF] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-sm font-medium text-purple-600 mb-4">LEVELS OF AI</div>
          <h2 className="text-4xl font-semibold mb-4">From Simple Search to Autonomous Action</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our AI evolves through four distinct levels of capability, each building upon the last. Starting with basic search and retrieval, 
            progressing through decision support and tribal knowledge, and culminating in autonomous AI agents that drive real business outcomes.
          </p>
        </div>

        {/* Levels of AI Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Level 1 */}
          <div className="bg-white hover:bg-gradient-to-br hover:from-purple-950 hover:to-black p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
            <div className="mb-8">
              <div className="w-14 h-14 bg-white border-2 border-purple-200 group-hover:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <div className="text-purple-500 group-hover:text-purple-300 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-purple-600 group-hover:text-purple-300" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-200">Level 1</h3>
              <h4 className="text-2xl font-bold mb-4 text-purple-900 group-hover:text-white">Search & Retrieval</h4>
              <p className="text-lg text-gray-600 group-hover:text-purple-300 font-medium leading-relaxed">LLM integrates with your data</p>
            </div>
            <div className="text-base text-gray-600 group-hover:text-purple-300 space-y-3 font-medium">
              <p className="leading-relaxed">• AI only activated when prompted</p>
              <p className="leading-relaxed">• Examples include, Chat with your PDF and Business intelligence workflows</p>
            </div>
          </div>

          {/* Level 2 */}
          <div className="bg-white hover:bg-gradient-to-br hover:from-indigo-950 hover:via-purple-950 hover:to-black p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
            <div className="mb-8">
              <div className="w-14 h-14 bg-white border-2 border-purple-200 group-hover:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <div className="text-purple-500 group-hover:text-indigo-300 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-purple-600 group-hover:text-indigo-300" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-200">Level 2</h3>
              <h4 className="text-2xl font-bold mb-4 text-purple-900 group-hover:text-white">Decision Guidance</h4>
              <p className="text-lg text-gray-600 group-hover:text-indigo-300 font-medium leading-relaxed">LLM integrates with your data and logic</p>
            </div>
            <div className="text-base text-gray-600 group-hover:text-indigo-300 space-y-3 font-medium">
              <p className="leading-relaxed">• AI uses tools to provide decision guidance</p>
              <p className="leading-relaxed">• Tools include ML models, algorithms, simulations, business rules</p>
            </div>
          </div>

          {/* Level 3 */}
          <div className="bg-white hover:bg-gradient-to-br hover:from-blue-950 hover:via-indigo-950 hover:to-black p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
            <div className="mb-8">
              <div className="w-14 h-14 bg-white border-2 border-purple-200 group-hover:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <div className="text-purple-500 group-hover:text-blue-300 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-purple-600 group-hover:text-blue-300" viewBox="0 0 24 24" fill="none">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-200">Level 3</h3>
              <h4 className="text-2xl font-bold mb-4 text-purple-900 group-hover:text-white">Tribal Codification</h4>
              <p className="text-lg text-gray-600 group-hover:text-blue-300 font-medium leading-relaxed">LLM integrates with your data, logic and human-in-the-loop actions</p>
            </div>
            <div className="text-base text-gray-600 group-hover:text-blue-300 space-y-3 font-medium">
              <p className="leading-relaxed">• Human-in-the-loop driving of actions</p>
              <p className="leading-relaxed">• Operator feedback is improving the AI, creating compounding institutional knowledge</p>
            </div>
          </div>

          {/* Level 4 */}
          <div className="bg-white hover:bg-gradient-to-br hover:from-violet-950 hover:via-blue-950 hover:to-black p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
            <div className="mb-8">
              <div className="w-14 h-14 bg-white border-2 border-purple-200 group-hover:bg-violet-900/30 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <div className="text-purple-500 group-hover:text-violet-300 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-purple-600 group-hover:text-violet-300" viewBox="0 0 24 24" fill="none">
                    <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-violet-200">Level 4</h3>
              <h4 className="text-2xl font-bold mb-4 text-purple-900 group-hover:text-white">Automated Action by AI Agents</h4>
              <p className="text-lg text-gray-600 group-hover:text-violet-300 font-medium leading-relaxed">LLM integrates with your data, logic, operators and autonomous actions</p>
            </div>
            <div className="text-base text-gray-600 group-hover:text-violet-300 space-y-3 font-medium">
              <p className="leading-relaxed">• AI autonomously driving certain actions and workflows</p>
              <p className="leading-relaxed">• Human Operators monitor results and deal with edge cases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

