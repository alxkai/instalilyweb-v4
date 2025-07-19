import {
  AlertTriangle,
  Clock,
  FileText,
  TrendingUp,
  Network,
  Bot,
  Sparkles,
} from "lucide-react"
import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSectionWrapper } from "../layout/animated-section-wrapper"

export const ProblemSolutionSection = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section ref={ref} className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-y-24 sm:gap-y-32">
          <div className="block">
            {/* Introducing Section */}
            <div className="text-center space-y-4">
              <AnimatedSectionWrapper>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
                  Introducing InstaWorkers™
                </h2>
              </AnimatedSectionWrapper>
              <AnimatedSectionWrapper delay={150}>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Our InstaWorkers™ are autonomous AI agents that plug into the systems you already own. They act as a digital workforce to accelerate sales, automate service, and streamline operations—freeing your teams to solve problems, not get buried by them.
                </p>
              </AnimatedSectionWrapper>
            </div>
            
            <div className="mx-auto mt-16 flow-root sm:mt-20">
              <AnimatedSectionWrapper delay={300}>
                <div className="max-w-3xl mx-auto">
                  <div className="relative rounded-xl overflow-hidden">
                    <video
                      src="/video/ani-02.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
              </AnimatedSectionWrapper>
            </div>
          </div>

          <div>
            <div className="mx-auto max-w-4xl text-center space-y-4 pt-8 sm:pt-12">
              <AnimatedSectionWrapper>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black text-center">
                  Stop firefighting. Start innovating.
                </h2>
              </AnimatedSectionWrapper>
              <AnimatedSectionWrapper delay={150}>
                <p className="text-xl text-gray-600">
                  Your teams are trapped in manual, repetitive tasks, pulling them away from strategic work. We transform that operational drag into an operational advantage with AI agents.
                </p>
              </AnimatedSectionWrapper>
            </div>

            <div className="mx-auto mt-16 flow-root sm:mt-20">
              <div className="max-w-4xl mx-auto">
                <AnimatedSectionWrapper delay={450}>
                  <div className="w-full h-full flex flex-col">
                    <Tabs defaultValue="problem" className="w-full h-full flex flex-col">
                      <TabsList className="grid w-full grid-cols-2 bg-gradient-to-b from-purple-50 to-white p-2 h-auto rounded-3xl shadow-lg border border-purple-100">
                        <TabsTrigger value="problem" className="group relative flex-col gap-2 items-center text-center p-3 rounded-2xl transition-all duration-300 ease-in-out data-[state=active]:bg-white data-[state=active]:shadow-md hover:bg-white/60">
                          <AlertTriangle className="w-8 h-8 text-gray-500 group-data-[state=active]:text-rose-500 transition-colors duration-300 mb-1" strokeWidth={1.5} />
                          <span className="font-semibold text-sm text-gray-800">The Problem</span>
                        </TabsTrigger>
                        <TabsTrigger value="solution" className="group relative flex-col gap-2 items-center text-center p-3 rounded-2xl transition-all duration-300 ease-in-out data-[state=active]:bg-white data-[state=active]:shadow-md hover:bg-white/60">
                          <Sparkles className="w-8 h-8 text-purple-400 group-data-[state=active]:text-purple-600 transition-colors duration-300 mb-1" strokeWidth={1.5} />
                          <span className="font-semibold text-sm text-gray-800">The Solution</span>
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="problem" className="mt-4 flex-grow">
                        <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center h-full">
                          <div className="space-y-4">
                            <div className="flex items-start gap-4">
                              <AlertTriangle className="w-6 h-6 text-rose-300 mt-1 flex-shrink-0" />
                              <p className="text-lg text-rose-100">
                                Teams are buried in low-value work, leading to burnout, high turnover, and missed revenue opportunities.
                              </p>
                            </div>
                            <div className="flex items-start gap-4">
                              <Clock className="w-6 h-6 text-rose-300 mt-1 flex-shrink-0" />
                              <p className="text-lg text-rose-100">
                                Legacy systems create data silos and fragmented workflows, making it impossible to get a single source of truth.
                              </p>
                            </div>
                            <div className="flex items-start gap-4">
                              <FileText className="w-6 h-6 text-rose-300 mt-1 flex-shrink-0" />
                              <p className="text-lg text-rose-100">
                                Valuable "tribal knowledge" isn't codified, so when experienced team members leave, their expertise leaves with them.
                              </p>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="solution" className="mt-4 flex-grow">
                        <div className="bg-gradient-to-br from-purple-950 to-black text-white rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center h-full">
                          <div className="space-y-4">
                            <div className="flex items-start gap-4">
                              <TrendingUp className="w-6 h-6 text-purple-300 mt-1 flex-shrink-0" />
                              <p className="text-lg text-purple-200">
                                AI-powered sales acceleration. InstaWorkers™ proactively identify at-risk accounts, draft outreach, and automate upsells inside your CRM.
                              </p>
                            </div>
                            <div className="flex items-start gap-4">
                              <Network className="w-6 h-6 text-purple-300 mt-1 flex-shrink-0" />
                              <p className="text-lg text-purple-200">
                                A unified intelligence layer. Our multi-agent platform connects CRMs, ERPs, and knowledge bases to execute tasks across your entire workflow.
                              </p>
                            </div>
                            <div className="flex items-start gap-4">
                              <Bot className="w-6 h-6 text-purple-300 mt-1 flex-shrink-0" />
                              <p className="text-lg text-purple-200">
                                Autonomous operational support. Your AI workforce embeds domain logic to predict parts, generate repair instructions, and auto-order replacements 24/7.
                              </p>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </AnimatedSectionWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

ProblemSolutionSection.displayName = "ProblemSolutionSection" 