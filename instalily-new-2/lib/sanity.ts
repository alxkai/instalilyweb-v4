import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Your existing project configuration
const config = {
  projectId: 'facn3pk3',
  dataset: 'production',
  apiVersion: '2024-02-20',
  useCdn: true,
}

// Create the client with existing config
export const client = createClient(config)

// Optional: Create a test client if you want to test changes before migrating
export const testClient = createClient({
  ...config,
  // Override any settings for testing
  useCdn: false, // Disable CDN for testing to get fresh data
})

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
    "logos": previousCompanies[]{
      "name": company,
      "img": logo,
      "width": width
    },
    order
  } | order(order asc)`
  
  console.log("Executing Sanity query:", query)
  const result = await client.fetch(query)
  console.log("Sanity query result:", JSON.stringify(result, null, 2))
  return result
}

// Helper function to fetch data with better error handling
export async function fetchSanityData(query: string) {
  try {
    const data = await client.fetch(query)
    console.log('Sanity Response:', JSON.stringify(data, null, 2))
    return data
  } catch (error) {
    console.error('Error fetching Sanity data:', error)
    console.log('Query that failed:', query)
    return null
  }
}

export async function getPost(slug: string) {
  return await client.fetch(
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
      content
    }`,
    { slug }
  )
}

// Function to get customer logo site resources
export async function getCustomerLogos() {
  const query = `*[_type == "siteResource" && key match "customer-*"] {
    _id,
    key,
    "url": file.asset->url
  }`
  
  try {
    const logos = await client.fetch(query)
    console.log("Customer logos from Sanity:", logos)
    
    // Return just the URLs as an array, matching the original site's expectations
    return logos.map((logo: any) => logo.url).filter(Boolean)
  } catch (error) {
    console.error("Error fetching customer logos:", error)
    return []
  }
}

// Function to get the SRS Distribution logo specifically
export async function getSRSLogo() {
  const query = `*[_type == "siteResource" && key match "customer-srs*"] {
    _id,
    key,
    "url": file.asset->url
  }`
  
  try {
    const logos = await client.fetch(query)
    console.log("SRS logo from Sanity:", logos)
    
    // Return the first matching URL or null if not found
    return logos[0]?.url || null
  } catch (error) {
    console.error("Error fetching SRS logo:", error)
    return null
  }
}

// Function to get a specific site resource by key
export async function getSiteResource(key: string) {
  const query = `*[_type == "siteResource" && key == $key][0] {
    _id,
    key,
    "url": file.asset->url
  }`
  
  try {
    const resource = await client.fetch(query, { key })
    console.log(`Site resource for key ${key}:`, resource)
    
    // Return the URL or null if not found
    return resource?.url || null
  } catch (error) {
    console.error(`Error fetching site resource for key ${key}:`, error)
    return null
  }
} 