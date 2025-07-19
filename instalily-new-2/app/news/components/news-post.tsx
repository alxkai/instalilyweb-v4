"use client"

import { PortableText } from "@portabletext/react"
import { urlForImage } from "@/lib/sanity"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PostType {
  _id: string
  name: string
  description: string
  hidden: boolean
  gated: boolean
  createdAt: string
  slug: {
    current: string
  }
  thumbnail: {
    asset: {
      _ref: string
    }
  }
  externalUrl?: string
  videoUrl?: string
  content: any[]
}

interface NewsPostProps {
  post: PostType
}

const VimeoEmbed = ({ url }: { url: string }) => {
  // Handle both full URLs and direct video IDs
  const videoId = url.includes('vimeo.com') 
    ? url.split('/').pop()
    : url

  if (!videoId) return null
  
  return (
    <div className="relative w-full aspect-video mb-12">
      <iframe
        src={`https://player.vimeo.com/video/${videoId}`}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export function NewsPost({ post }: NewsPostProps) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })

  if (post.hidden) return null

  const thumbnailUrl = urlForImage(post.thumbnail)

  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{post.description}</p>
        <time className="text-gray-600">{formattedDate}</time>
      </header>

      {post.videoUrl ? (
        <VimeoEmbed url={post.videoUrl} />
      ) : thumbnailUrl && (
        <div className="relative w-full aspect-video mb-12">
          <Image
            src={thumbnailUrl}
            alt={post.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <PortableText 
          value={post.content}
          components={{
            block: {
              h1: ({children}) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
              h2: ({children}) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
              h3: ({children}) => <h3 className="text-2xl font-bold mt-8 mb-4">{children}</h3>,
              normal: ({children}) => <p className="text-lg text-gray-700 mb-4">{children}</p>,
            }
          }}
        />
      </div>

      <div className="mt-16 text-center">
        <Link 
          href="/news" 
          className="relative inline-flex items-center justify-center rounded-full px-8 py-3 bg-black hover:bg-gray-900 text-white font-medium group transition-all duration-200 hover:-translate-y-1"
        >
          <ArrowLeft className="absolute left-4 w-4 h-4 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          <span className="relative ml-1">Return to News</span>
        </Link>
      </div>
    </article>
  )
} 