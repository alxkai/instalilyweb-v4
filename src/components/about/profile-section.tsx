'use client'
import { urlForImage } from "@/lib/sanity"
import { FC, useEffect, useState } from "react"
import Image from "next/image"

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
}

interface LogoSectionProps {
  profileId: string
  profileName: string
}

// Component to load and display logos for a profile
const LogoSection = ({ profileId, profileName }: LogoSectionProps) => {
  const [logos, setLogos] = useState<ProfileLogoType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    console.log(`LogoSection mounted for ${profileName} (ID: ${profileId})`);
    
    if (typeof window === 'undefined') return;
    
    if (!window.profileLogosPromise) {
      console.log("Initializing profile logos fetch");
      window.profileLogosPromise = fetch('/api/profile-logos')
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch logos: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log("All logos data received:", Object.keys(data).length, "profiles with logos");
          return data;
        })
        .catch(error => {
          console.error("Error fetching logos:", error);
          return {};
        });
    }
    
    window.profileLogosPromise
      .then(allLogos => {
        console.log(`Accessing logos for ${profileName} (ID: ${profileId})`);
        
        if (Object.keys(allLogos).length === 0) {
          console.log("No logos found in the API response");
        }
        
        const profileLogos = allLogos[profileId] || [];
        console.log(`Found ${profileLogos.length} logos for ${profileName} (ID: ${profileId})`);
        
        if (profileLogos.length > 0) {
          console.log("Logos for", profileName, ":", profileLogos);
        }
        
        setLogos(profileLogos);
        setLoading(false);
      })
      .catch(err => {
        console.error(`Error processing logos for ${profileName} (ID: ${profileId}):`, err);
        setError("Failed to load logos");
        setLoading(false);
      });
  }, [profileId, profileName]);
  
  if (process.env.NODE_ENV === 'development') {
    if (loading) {
      return <div className="text-xs text-gray-400">Loading logos...</div>;
    }
    
    if (error) {
      return <div className="text-xs text-red-400">Error: {error}</div>;
    }
  } else {
    if (loading || error) {
      return null;
    }
  }
  
  if (!logos || logos.length === 0) {
    return null;
  }

  return (
    <div className="flex sm:pb-4 ml-2">
      {logos.map((logo, index) => {
        if (!logo.url) {
          console.log(`Logo at index ${index} has no URL:`, logo);
          return null;
        }
        
        return (
          <div className="mr-2 my-auto select-none" key={index}>
            <img
              src={logo.url}
              alt={logo.name || `Logo ${index + 1}`}
              width={logo.width || 100}
              height={logo.width || 100}
              className="object-contain select-none"
              draggable={false}
              onError={(e) => {
                console.error(`Error loading logo image: ${logo.url}`);
                e.currentTarget.style.background = '#f3f4f6';
                e.currentTarget.style.width = `${logo.width}px`;
                e.currentTarget.style.height = `${logo.width}px`;
                e.currentTarget.alt = '';
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

declare global {
  interface Window {
    profileLogosPromise?: Promise<Record<string, ProfileLogoType[]>>;
  }
}

const ProfileCard: FC<ProfileType> = ({
  _id,
  name,
  position,
  description,
  img,
}) => {
  const imgUrl = urlForImage(img)
  if (!imgUrl) return null

  return (
    <div>
      <div className="aspect-[3/4] bg-white shadow-lg rounded-lg select-none relative overflow-hidden">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <Image 
            src={imgUrl} 
            alt={name}
            fill
            className="object-cover object-center select-none grayscale hover:grayscale-0 transition-all duration-300"
            style={{ objectPosition: 'center 0px' }}
            draggable={false}
          />
        </div>
      </div>
      <div className="p-2">
        <p className="text-lg mt-1 text-gray-500 font-semibold">{name}</p>
        <p className="text-md mb-2 text-muted-foreground">{position}</p>
        <p className="text-sm text-gray-500 sm:leading-relaxed mb-1">
          {description}
        </p>
      </div>
      <LogoSection profileId={_id} profileName={name} />
    </div>
  )
}

interface ProfileListProp {
  profileList: ProfileType[]
}

export function ProfileSection({ profileList }: ProfileListProp) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
      {profileList.map((profile, index) => (
        <div key={index}>
          <ProfileCard {...profile} />
        </div>
      ))}
    </div>
  )
} 