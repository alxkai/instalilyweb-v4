import { Nav } from "@/components/layout/nav"
import { Footer } from "@/components/layout/footer"
import { FullWidthCTA } from "@/components/layout/full-width-cta"
import { getProfile } from "@/lib/sanity"
import { AboutHero } from "@/components/layout/about-hero"
import { ProfileSection } from "@/components/about/profile-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About InstaLILY AI | Founders, Mission, and Team",
  description: "Learn about InstaLILY AI's mission to revolutionize enterprise workflows with autonomous AI agents. Meet our team and discover our vision for the future of B2B automation.",
  keywords: [
    "InstaLILY team",
    "AI automation company",
    "enterprise AI founders",
    "B2B workflow automation",
    "AI agent company",
    "autonomous AI agents"
  ],
  openGraph: {
    title: "About InstaLILY AI | Founders, Mission, and Team",
    description: "Learn about InstaLILY AI's mission to revolutionize enterprise workflows with autonomous AI agents.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About InstaLILY AI | Founders, Mission, and Team",
    description: "Learn about InstaLILY AI's mission to revolutionize enterprise workflows with autonomous AI agents."
  },
  alternates: {
    canonical: "https://instalily.ai/about"
  }
};

// This makes the page dynamic to handle Sanity data
export const revalidate = 3600 // revalidate every hour

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
  logos?: {
    _ref: string
  }[]
  order: number
}

export default async function AboutPage() {
  const founderList: ProfileType[] = [];
  const devList: ProfileType[] = [];
  const designList: ProfileType[] = [];
  const businessList: ProfileType[] = [];
  const advisorList: ProfileType[] = [];

  try {
    for (const profile of await getProfile()) {
      if (profile.role === "founder") founderList.push(profile);
      else if (profile.role === "dev") devList.push(profile);
      else if (profile.role === "design") designList.push(profile);
      else if (profile.role === "business") businessList.push(profile);
      else if (profile.role === "advisor") advisorList.push(profile);
    }
  } catch (error) {
    console.error("Error fetching profiles:", error);
  }

  return (
    <div className="min-h-screen bg-[#fdfff7]">
      <div className="sticky top-0 z-[100] w-full">
        <div className="w-full max-w-[1340px] mx-auto sm:pt-4">
          <Nav />
        </div>
      </div>
      
      <main className="-mt-[90px]">
        <AboutHero
          title="Our Team"
          description="We're a team of experts in AI, machine learning, engineering, and product design, with over a decade of collaborative experience in building enterprise solutions."
        />
        
        {/* Team Section */}
        <section className="bg-[#fdfff7] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Founders */}
            {founderList.length > 0 && (
              <div className="mb-20">
                <h3 className="title-text mb-8">Leadership</h3>
                <ProfileSection profileList={founderList} />
              </div>
            )}

            {/* Engineering & Product */}
            {devList.length > 0 && (
              <div className="mb-20">
                <h3 className="title-text mb-8">Engineering & Product</h3>
                <ProfileSection profileList={devList} />
              </div>
            )}

            {/* Design */}
            {designList.length > 0 && (
              <div className="mb-20">
                <h3 className="title-text mb-8">Design</h3>
                <ProfileSection profileList={designList} />
              </div>
            )}

            {/* Business */}
            {businessList.length > 0 && (
              <div className="mb-0">
                <h3 className="title-text mb-8">Business & Growth</h3>
                <ProfileSection profileList={businessList} />
              </div>
            )}

            {/* Show message if no profiles found */}
            {founderList.length === 0 && devList.length === 0 && designList.length === 0 && businessList.length === 0 && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold mb-4">Team Profiles</h2>
                <p className="text-gray-600">
                  Team profiles will be loaded from Sanity CMS. Make sure the Sanity connection is working properly.
                </p>
              </div>
            )}
          </div>
        </section>

        <FullWidthCTA />
      </main>
      <Footer />
    </div>
  )
} 