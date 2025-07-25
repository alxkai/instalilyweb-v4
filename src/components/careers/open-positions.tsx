"use client"

import { OpenPositionType } from "@/lib/types"
import { useState, forwardRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface OpenPositionsProps {
  positions: OpenPositionType[]
}

const getBadgeVariant = (current: string, selected: string) => {
  return current === selected ? "default" : "outline"
}

const getCategoryBadgeStyle = (category: string) => {
  switch (category?.toLowerCase()) {
    case "engineering":
      return "bg-orange-100 hover:bg-orange-100 text-black border border-orange-200"
    case "business":
      return "bg-pink-100 hover:bg-pink-100 text-black border border-pink-200"
    case "design":
      return "bg-cyan-100 hover:bg-cyan-100 text-black border border-cyan-200"
    default:
      return "bg-gray-100 text-gray-700 border border-gray-200"
  }
}

const getTypeBadgeStyle = (type: string) => {
  switch (type?.toLowerCase()) {
    case "internship":
      return "bg-yellow-100 hover:bg-yellow-100 text-black border border-yellow-200"
    default:
      return "bg-gray-100 hover:bg-gray-100 text-gray-700 border border-gray-200"
  }
}

const JobCard = ({ position }: { position: OpenPositionType }) => {
  const handleClick = () => {
    console.log("JobCard clicked:", position.title, position)
    
    if (position.title === "Open Position") {
      window.open("https://forms.gle/WNJ3cbUxHusUJ5mQ8", "_blank")
      return
    }
    
    if (position.slug?.current) {
      const url = `https://portal.instalily.ai/jobs/${position.slug.current}`
      console.log("Opening URL:", url)
      window.open(url, "_blank")
    } else if (position.url) {
      console.log("Opening position URL:", position.url)
      window.open(position.url, "_blank")
    } else {
      console.log("No URL found for position:", position)
    }
  }

  return (
    <Card 
      className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex gap-2 md:gap-4 flex-col md:flex-row flex-grow md:items-center">
          <h3 className="text-xl font-semibold">{position.title}</h3>
          {position.category && (
            <Badge className={`${getCategoryBadgeStyle(position.category)} w-fit`}>
              {position.category}
            </Badge>
          )}
          <div className="flex flex-col gap-2 md:flex-row md:justify-end md:gap-4 md:flex-1">
            {position.type && (
              <Badge className={`${getTypeBadgeStyle(position.type)} w-fit`}>
                {position.type}
              </Badge>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <span className="text-black hover:underline font-semibold">
            {position.title === "Open Position" ? "Submit Resume →" : "Apply →"}
          </span>
        </div>
      </div>
    </Card>
  )
}

export const OpenPositions = forwardRef<HTMLDivElement, OpenPositionsProps>(({ positions }, ref) => {
  const [selectedType, setSelectedType] = useState<string>("All")
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All")

  console.log("OpenPositions render:", { selectedType, selectedDepartment, positions: positions.length })

  const filteredPositions = positions.filter((position) => {
    const typeMatch = selectedType === "All" || position.type === selectedType
    const categoryMatch = selectedDepartment === "All" || position.category === selectedDepartment
    const result = !position.hidden && typeMatch && categoryMatch
    
    if (!result) {
      console.log("Filtering out position:", position.title, { 
        hidden: position.hidden, 
        typeMatch, 
        categoryMatch, 
        positionType: position.type, 
        positionCategory: position.category 
      })
    }
    
    return result
  }).sort((a, b) => {
    const categoryOrder: { [key: string]: number } = {
      'Engineering': 0,
      'Design': 1,
      'Business': 2
    }
    
    const categoryComparison = (categoryOrder[a.category || ''] ?? 999) - (categoryOrder[b.category || ''] ?? 999)
    if (categoryComparison !== 0) return categoryComparison
    
    return a.type === 'Internship' ? 1 : b.type === 'Internship' ? -1 : 0
  })

  console.log("Filtered positions:", filteredPositions.length)

  const openPosition: OpenPositionType = {
    _id: "open-position",
    title: "Open Position",
    type: "",
    category: "",
    url: "https://forms.gle/WNJ3cbUxHusUJ5mQ8",
    hidden: false,
    slug: { 
      current: "open-position", 
      _type: "slug" 
    }
  }

  const handleTypeChange = (type: string) => {
    console.log("Type filter changed:", type)
    setSelectedType(type)
  }

  const handleDepartmentChange = (department: string) => {
    console.log("Department filter changed:", department)
    setSelectedDepartment(department)
  }

  return (
    <section ref={ref} className="bg-white py-12 sm:py-16 scroll-mt-12" id="jobs">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold">Open Positions</h2>

        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Type</p>
                <div className="flex flex-wrap gap-2">
                  {["All", "Full-time", "Internship"].map((type) => (
                    <Badge
                      key={type}
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      variant={getBadgeVariant(type, selectedType) as any}
                      className="cursor-pointer hover:bg-black hover:text-white border border-gray-200"
                      onClick={() => handleTypeChange(type)}
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Department</p>
                <div className="flex flex-wrap gap-2">
                  {["All", "Engineering", "Business", "Design"].map((department) => (
                    <Badge
                      key={department}
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      variant={getBadgeVariant(department, selectedDepartment) as any}
                      className="cursor-pointer hover:bg-black hover:text-white border border-gray-200"
                      onClick={() => handleDepartmentChange(department)}
                    >
                      {department}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {filteredPositions.map((position) => (
                <JobCard key={position._id} position={position} />
              ))}
              <JobCard position={openPosition} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

OpenPositions.displayName = "OpenPositions" 