import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { groq } from 'next-sanity'
import { PostType, OpenPositionType } from './types'

const config = {
  projectId: 'facn3pk3',
  dataset: 'production',
  apiVersion: '2024-02-20',
  useCdn: true,
}

export const client = createClient(config)

const builder = imageUrlBuilder(client)

interface SanityImageSource {
  asset?: {
    _ref?: string
  }
}

export function urlForImage(source: SanityImageSource) {
  if (!source?.asset?._ref) return null
  return builder.image(source).url()
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function query(q: string): Promise<any[]> {
  try {
    console.log("Executing Sanity query:", q)
    const result = await client.fetch(q)
    console.log("Sanity query result:", JSON.stringify(result, null, 2))
    return result
  } catch (error) {
    console.error('Error fetching Sanity data:', error)
    console.log('Query that failed:', q)
    return []
  }
}

export async function getProfile() {
  const queryStr = `*[_type == "profile"] {
    _id,
    name,
    position,
    description,
    img,
    role,
    "logos": previousCompanies[]{
      "name": company,
      "img": logo,
      "width": width
    },
    order
  } | order(order asc)`
  
  const result = await query(queryStr)
  return result
}

export async function getPosts(): Promise<PostType[]> {
  const queryStr = groq`*[_type == "post"]{
    _id,
    name,
    description,
    hidden,
    gated,
    createdAt,
    slug,
    thumbnail,
    externalUrl,
    videoUrl,
    content
  } | order(createdAt desc)`
  
  return await query(queryStr)
}

export async function getPost(slug: string): Promise<PostType | null> {
  try {
    console.log("Fetching post with slug:", slug)
    const result = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        _id,
        name,
        description,
        hidden,
        gated,
        createdAt,
        slug,
        thumbnail,
        externalUrl,
        videoUrl,
        content,
        images
      }`,
      { slug }
    );
    console.log("Sanity query result:", JSON.stringify(result, null, 2))
    return result || null;
  } catch (error) {
    console.error("Error fetching post:", error)
    return null;
  }
}

export async function getOpenPositions(): Promise<OpenPositionType[]> {
  const queryStr = groq`*[_type == "openPosition"]{
    _id,
    title,
    category,
    type,
    url,
    hidden,
    slug
  } | order(_createdAt desc)`
  
  return await query(queryStr)
}

type SiteResourceQueryResult = {
  key: string;
  url: string;
}

type SiteResourceUrlMap = {
  [key: string]: string;
}

export async function getSiteResources(keys: string[] | "*"): Promise<SiteResourceUrlMap> {
  let filter = "";
  if (keys !== "*") {
    const keysString = keys.map(key => `"${key}"`).join(",");
    filter = `&&key in [${keysString}]`;
  }
  
  const queryStr = groq`*[_type=="siteResource"${filter}] { key, "url": file.asset->url }`
  
  try {
    console.log("Executing Sanity query:", queryStr)
    const results = await client.fetch<SiteResourceQueryResult[]>(queryStr)
    console.log("Site resources result:", JSON.stringify(results, null, 2))
    
    return results.reduce((acc: SiteResourceUrlMap, resource) => {
      acc[resource.key] = resource.url || "";
      return acc;
    }, {});
  } catch (error) {
    console.error('Error fetching site resources:', error)
    return {}
  }
} 