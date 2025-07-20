import { getProfile } from "@/lib/sanity"
import { HomePageClient } from "../components/home/home-page-client"

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
  let profiles: ProfileType[] = [];
  
  try {
    const allProfiles = await getProfile();
    profiles = allProfiles.filter((profile: ProfileType) => 
      profile.role === "founder" || 
      profile.role === "dev" || 
      profile.role === "design" || 
      profile.role === "business"
    );
  } catch (error) {
    console.error("Error fetching profiles:", error);
  }
  
  return <HomePageClient profiles={profiles} />
}
