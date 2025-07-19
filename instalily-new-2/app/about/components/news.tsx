import Link from "next/link"
import { getPosts } from "@/sanity/query"
import { urlForImage } from "@/lib/sanity"
import { PostType } from "@/sanity/schemas/post"

function NewsCard({ name, description, externalUrl, thumbnail, slug }: PostType) {
  const link = externalUrl || `/news/${slug.current}`
  const imageUrl = thumbnail ? urlForImage(thumbnail) || undefined : undefined
  
  return (
    <Link 
      href={link} 
      className="block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
      {...(externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {imageUrl && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{name}</h3>
      <p className="text-gray-600 text-lg">{description}</p>
    </Link>
  )
}

export async function AboutNews() {
  const newsItems = await getPosts()

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-semibold text-center">Latest News</h2>
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems
              .filter(item => !item.hidden)
              .map((item) => (
                <NewsCard key={item._id} {...item} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
} 