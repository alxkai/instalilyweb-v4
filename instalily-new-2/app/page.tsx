import { getProfile } from "@/lib/sanity"
import { HomePageClient } from "@/components/home/home-page-client"

interface ProfileType {
  _id: string
  name: string
  position: string
  description: string
  img: any
  role: string
  order: number
}

export default async function Home() {
  const allProfiles = await getProfile()
  
  const profiles = allProfiles.filter((profile: ProfileType) => 
    profile.role === "founder" || 
    profile.role === "dev" || 
    profile.role === "design" || 
    profile.role === "business"
  )
  
  return <HomePageClient profiles={profiles} />
}

