import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, BarChart } from "lucide-react"

export function StatsSection() {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-center text-2xl font-bold mb-12">Change the game with Writer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <Shield className="h-8 w-8 text-[#6C5CE7] mb-4" />
              <h3 className="font-semibold mb-2">Enterprise security</h3>
              <p className="text-sm text-gray-600">SOC 2 Type II certified, HIPAA, GDPR, and CCPA compliant</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-[#6C5CE7] mb-4" />
              <h3 className="font-semibold mb-2">67% faster content creation</h3>
              <p className="text-sm text-gray-600">Accelerate your workflow with AI assistance</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <BarChart className="h-8 w-8 text-[#6C5CE7] mb-4" />
              <h3 className="font-semibold mb-2">15x ROI</h3>
              <p className="text-sm text-gray-600">Proven results across enterprise deployments</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

