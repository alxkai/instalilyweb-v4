import { client } from '@/lib/sanity'
import { PostType } from './schemas/post'
import { OpenPositionType } from './schemas/openPosition'

export async function getPosts(): Promise<PostType[]> {
  const query = `*[_type == "post"] {
    _id,
    name,
    description,
    externalUrl,
    thumbnail,
    slug,
    createdAt,
    hidden
  } | order(createdAt desc)`

  try {
    const posts = await client.fetch(query)
    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export async function getPost(slug: string): Promise<PostType | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    name,
    description,
    externalUrl,
    thumbnail,
    slug,
    createdAt,
    hidden
  }`

  try {
    const post = await client.fetch(query, { slug })
    return post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function getOpenPositions(): Promise<OpenPositionType[]> {
  return client.fetch(`*[_type == "openPosition"] | order(_createdAt desc)`)
} 