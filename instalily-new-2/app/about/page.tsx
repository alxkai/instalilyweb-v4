import { NavBar } from "@/components/layout/nav-bar"
import { Footer } from "@/components/layout/footer"
import { CTASection } from "@/components/layout/cta-section"
import { getProfile } from "@/lib/sanity"
import { ProfileSection } from "./components/profile-section"
import { AboutHero } from "./components/hero"

// This makes the page dynamic to handle Sanity data
export const revalidate = 3600 // revalidate every hour

interface ProfileType {
  _id: string
  name: string
  position: string
  description: string
  img: any
  role: string
  logos?: any[]
  order: number
}

export default async function AboutPage() {
  const founderList: ProfileType[] = [];
  const devList: ProfileType[] = [];
  const designList: ProfileType[] = [];
  const businessList: ProfileType[] = [];
  const advisorList: ProfileType[] = [];

  for (const profile of await getProfile()) {
    if (profile.role === "founder") founderList.push(profile);
    else if (profile.role === "dev") devList.push(profile);
    else if (profile.role === "design") designList.push(profile);
    else if (profile.role === "business") businessList.push(profile);
    else if (profile.role === "advisor") advisorList.push(profile);
  }

  return (
    <>
      <NavBar />
      <main>
        {/* Hero Section */}
        <AboutHero
          title="Our Team"
          description="We're a team of experts in AI, machine learning, engineering, and product design, with over a decade of collaborative experience in building enterprise solutions."
        />

        {/* Team Section */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Founders */}
            {founderList.length > 0 && (
              <div className="mb-20">
                <h3 className="text-3xl font-semibold mb-8">Leadership</h3>
                <ProfileSection profileList={founderList} />
              </div>
            )}

            {/* Engineering & Product */}
            {devList.length > 0 && (
              <div className="mb-20">
                <h3 className="text-3xl font-semibold mb-8">Engineering & Product</h3>
                <ProfileSection profileList={devList} />
              </div>
            )}

            {/* Design */}
            {designList.length > 0 && (
              <div className="mb-20">
                <h3 className="text-3xl font-semibold mb-8">Design</h3>
                <ProfileSection profileList={designList} />
              </div>
            )}

            {/* Business */}
            {businessList.length > 0 && (
              <div className="mb-0">
                <h3 className="text-3xl font-semibold mb-8">Business & Growth</h3>
                <ProfileSection profileList={businessList} />
              </div>
            )}
          </div>
        </section>

        {/* Advisors Section - Commented out
        {advisorList.length > 0 && (
          <section className="bg-gray-50 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="max-w-3xl mb-16">
                <h2 className="text-4xl font-bold mb-6">Investors & Advisors</h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Our team is supported by industry leaders and visionaries who share our 
                    mission of transforming enterprise operations through AI innovation.
                  </p>
                </div>
              </div>
              <ProfileSection profileList={advisorList} />
            </div>
          </section>
        )}
        */}

        {/* CTA Section */}
        <div className="bg-[#F4F1FF]">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  )
} 
