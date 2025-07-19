import Image from "next/image"

interface ProfileData {
  name: string
  role: string
  bio: string
  profileImage: string  // URL string from Sanity
  order: number
} 
 
interface AboutFoundersProps { 
  profileData: ProfileData[]
}

export function AboutFounders({ profileData }: AboutFoundersProps) {
  // Debug log to see the data structure
  console.log('Profile Data:', JSON.stringify(profileData, null, 2))

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Team</h2>
          <div className="prose prose-lg text-gray-600">
            <p> 
              Meet the talented individuals behind InstaLILY who are passionate about transforming how businesses operate with AI.
            </p>
          </div>
        </div> 
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {profileData?.map((profile, index) => { 
            // Debug log for each profile
            console.log(`Profile ${index}:`, profile) 
            
            return (
              <div key={index} className="space-y-6">
                {profile.profileImage && (
                  <div className="aspect-[1/1] w-full rounded-2xl overflow-hidden">
                    <Image
                      src={profile.profileImage}
                      alt={profile.name || 'Team member'}
                      className="object-cover w-full h-full"
                      width={400}
                      height={400}
                      style={{ filter: "grayscale(100%)" }}
                    />
                  </div>
                )} 
                <div>
                  <h3 className="text-2xl font-semibold">{profile.name}</h3>
                  <p className="text-purple-600 mb-4">{profile.role}</p>
                  <div className="prose prose-lg text-gray-600">
                    <p>{profile.bio}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 
