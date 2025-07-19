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
  img: any
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
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (!window.profileLogosPromise) {
      window.profileLogosPromise = fetch('/api/profile-logos')
        .then(response => {
          if (!response.ok) throw new Error(`Failed to fetch logos: ${response.status}`)
          return response.json()
        })
        .then(data => data)
        .catch(error => {
          console.error("Error fetching logos:", error)
          return {}
        })
    }

    window.profileLogosPromise
      .then(allLogos => {
        const profileLogos = allLogos[profileId] || []
        setLogos(profileLogos)
        setLoading(false)
      })
      .catch(err => {
        console.error(`Error processing logos for ${profileName} (ID: ${profileId}):`, err)
        setError("Failed to load logos")
        setLoading(false)
      })
  }, [profileId, profileName])

  if (loading || error || !logos || logos.length === 0) {
    return null
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
    <p className="text-gray-500 text-sm mt-1 truncate">{displayName}</p>
  )
}

declare global {
  interface Window {
    profileLogosPromise?: Promise<Record<string, ProfileLogoType[]>>
  }
}

export function TeamSection({ profiles }: TeamSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">Our Team</h2>
          <p className="mt-4 text-xl text-gray-600">Meet the team building the future of AI agents.</p>
        </div>
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 md:gap-x-8 gap-y-12 justify-center">
            {profiles.map(profile => {
              const imgUrl = urlForImage(profile.img);
              if (!imgUrl) return null;
              const firstName = profile.name.split(' ')[0];

              return (
                <div key={profile._id} className="text-center">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto">
                    <Image
                        src={imgUrl}
                        alt={profile.name}
                        fill
                        className="rounded-full object-cover grayscale"
                        style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{firstName}</h3>
                  <LogoSection profileId={profile._id} profileName={profile.name} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 