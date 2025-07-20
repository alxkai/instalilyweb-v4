"use client"

import Image from "next/image"
import { urlForImage } from "@/lib/sanity"
import { useEffect, useState } from "react"

interface ProfileLogoType {
  name: string
  url?: string
  width: number
}

interface ProfileType {
  _id: string
  name: string
  position: string
  description: string
  img: {
    asset: {
      _ref: string
    }
  }
  role: string
  order: number
}

interface TeamSectionProps {
  profiles: ProfileType[]
}

interface LogoSectionProps {
  profileId: string
  profileName: string
}

const LogoSection = ({ profileId, profileName }: LogoSectionProps) => {
  const [logos, setLogos] = useState<ProfileLogoType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (!window.profileLogosPromise) {
      window.profileLogosPromise = fetch('/api/profile-logos')
        .then(response => {
          if (!response.ok) throw new Error(`Failed to fetch logos: ${response.status}`)
          return response.json()
        })
        .catch(error => {
          console.error("Error fetching logos:", error)
          return {}
        })
    }

    window.profileLogosPromise
      .then((allLogos: Record<string, ProfileLogoType[]>) => {
        const profileLogos = allLogos[profileId] || []
        setLogos(profileLogos)
        setLoading(false)
      })
      .catch((err: Error) => {
        console.error(`Error processing logos for ${profileName} (ID: ${profileId}):`, err)
        setLoading(false)
      })
  }, [profileId, profileName])

  if (loading || !logos || logos.length === 0) {
    return <div className="h-4" />; // Placeholder for spacing
  }

  const primaryLogo = logos[0];
  let displayName = primaryLogo.name;

  const transformations: Record<string, string> = {
    'credit': 'Credit Suisse',
    'mattress firm': 'Mattress Firm',
    'cal': 'UC Berkeley',
    'u penn': 'UPenn',
    'zuckerman institute': 'Columbia',
    'university of toronto': 'U Toronto',
  };

  const lowerCaseName = displayName.toLowerCase().trim();
  if (transformations[lowerCaseName]) {
    displayName = transformations[lowerCaseName];
  } else {
    displayName = displayName.replace(/University/gi, '').replace(/College/gi, '').trim();
  }

  return (
    <p className="text-[10px] text-gray-500 truncate">{displayName}</p>
  )
}

declare global {
  interface Window {
    profileLogosPromise?: Promise<Record<string, ProfileLogoType[]>>
  }
}

export function TeamSection({ profiles }: TeamSectionProps) {
  return (
    <section className="pt-8 pb-24 md:pb-32 bg-[#FDFFF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Pushing the boundaries<br />
            of AI development
          </h2>
          <p className="text-lg text-gray-600">
            Meet the team building the future of AI agents.
          </p>
        </div>
        
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-8 max-w-6xl mx-auto">
          {profiles.map(profile => {
            const imgUrl = urlForImage(profile.img);
            if (!imgUrl) return null;
            const firstName = profile.name.split(' ')[0];

            return (
              <div key={profile._id} className="text-center">
                <div className="relative w-20 h-20 mx-auto">
                  <Image
                      src={imgUrl}
                      alt={profile.name}
                      fill
                      sizes="(max-width: 768px) 10vw, (max-width: 1200px) 8vw, 80px"
                      className="rounded-full object-cover grayscale"
                      style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                <h3 className="mt-3 text-xs font-medium text-gray-900">{firstName}</h3>
                <LogoSection profileId={profile._id} profileName={profile.name} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 