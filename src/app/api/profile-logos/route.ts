import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

export async function GET() {
  try {
    const query = `*[_type == "profile"] {
      _id,
      "logos": previousCompanies[]{
        "name": company,
        "img": logo,
        "width": width
      }
    }`
    
    const profiles = await client.fetch(query)
    
    const profileLogos: Record<string, any[]> = {}
    profiles.forEach((profile: any) => {
      if (profile.logos && profile.logos.length > 0) {
        profileLogos[profile._id] = profile.logos
      }
    })
    
    return NextResponse.json(profileLogos)
  } catch (error) {
    console.error('Error fetching profile logos:', error)
    return NextResponse.json({}, { status: 500 })
  }
} 