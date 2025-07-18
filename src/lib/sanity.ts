import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity project configuration
const config = {
  projectId: 'facn3pk3',
  dataset: 'production',
  apiVersion: '2024-02-20',
  useCdn: true,
}

// Create the client
export const client = createClient(config)

// Set up image URL builder
const builder = imageUrlBuilder(client)

export function urlForImage(source: any) {
  if (!source?.asset?._ref) return null
  return builder.image(source).url()
}

export async function getProfile() {
  const query = `*[_type == "profile"] {
    _id,
    name,
    position,
    description,
    img,
    role,
    order
  } | order(order asc)`
  
  const result = await client.fetch(query)
  return result
} 