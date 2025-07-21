import { getOpenPositions, getSiteResources } from "@/lib/sanity"
import CareersPageClient from "./page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers at InstaLILY AI | Join Our AI Revolution",
  description: "Join InstaLILY AI and help build the future of enterprise automation. Explore open positions in engineering, business, and design at our innovative AI company.",
  keywords: [
    "InstaLILY careers",
    "AI company jobs",
    "enterprise AI jobs",
    "B2B automation careers",
    "AI engineering jobs",
    "machine learning careers"
  ],
  openGraph: {
    title: "Careers at InstaLILY AI | Join Our AI Revolution",
    description: "Join InstaLILY AI and help build the future of enterprise automation. Explore open positions in engineering, business, and design.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at InstaLILY AI | Join Our AI Revolution",
    description: "Join InstaLILY AI and help build the future of enterprise automation."
  },
  alternates: {
    canonical: "https://instalily.ai/careers"
  }
};

export default async function CareersPage() {
  const positions = await getOpenPositions()
  
  const teamPhotosMap = await getSiteResources([...Array(6).keys()].map(i => `team-${i + 1}`))
  const photos = Object.values(teamPhotosMap).sort(() => Math.random() - 0.5)
  
  return <CareersPageClient positions={positions} photos={photos} />
} 