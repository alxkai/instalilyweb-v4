import { getOpenPositions, getSiteResources } from "@/lib/sanity"
import CareersPageClient from "./page-client"

export default async function CareersPage() {
  const positions = await getOpenPositions()
  
  const teamPhotosMap = await getSiteResources([...Array(6).keys()].map(i => `team-${i + 1}`))
  const photos = Object.values(teamPhotosMap).sort(() => Math.random() - 0.5)
  
  return <CareersPageClient positions={positions} photos={photos} />
} 