import { groq } from "next-sanity";
import { client } from "@/lib/sanity";
import { PostType, DemoVideoType, DeckType, OpenPositionType, ProfileType } from './types_new';

async function query(q: string): Promise<Object[]> {
    return await client.fetch(q);
}

export async function getProfile(): Promise<ProfileType[]> {
    return <ProfileType[]>await query(
        groq`*[_type == "profile"] | order(order) {
        name, position, description, role, img, logos[]->
        }`
    );
}

export async function getAllDemoVideo(): Promise<DemoVideoType[]> {
    return <DemoVideoType[]>await query(
        groq`*[_type == "demoVideo"] | order(createdAt desc)`
    );
}

export async function getDemoVideo(id: string): Promise<DemoVideoType | null> {
    const results = <DemoVideoType[]>await query(
        groq`*[_type=="demoVideo" && (_id=="${id}" || slug.current=="${id}")]`
    );
    return results.length ? results[0] : null;
}


export async function getPosts(): Promise<PostType[]> {
    return await client.fetch(groq`*[_type == "post"]{
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
    } | order(createdAt desc)`);
}



export async function getPost(slug: string): Promise<PostType | null> {
    const results = <PostType[]>await query(
        groq`*[_type=="post"&&slug.current=="${slug}"]`
    );
    return results.length ? results[0] : null;
}

export async function getOpenPositions(): Promise<OpenPositionType[]> {
    return <OpenPositionType[]>await query(
        groq`*[_type == "openPosition"]`
    );
}

export async function getDecks(): Promise<DeckType[]> {
    return <DeckType[]>await query(
        groq`*[_type == "deck"] {
            ...,
            slides[] {
                ...,
                gif->,
                video->
            }
        }`
    );
}

export async function getDeckFromAudience(category: "client" | "series-a" | "all", clientId: string): Promise<DeckType | null> {
    let filter = `category == "${category}"`;
    if (category === "all") {
        filter = `category in ["client", "series-a"]`;
    }
    const results = <DeckType[]>await query(
        groq`*[_type == "deck" && ${filter} && count((audiences[].clientId)[@ == "${clientId}"]) > 0] {
            ...,
            slides[] {
                ...,
                gif->,
                video->
            }
        }`
    );
    return results.length ? results[0] : null;
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
    const results = <SiteResourceQueryResult[]>await query(
        groq`*[_type=="siteResource"${filter}] { key, "url": file.asset->url }`
    );
    return results.reduce((acc: SiteResourceUrlMap, resource) => {
        acc[resource.key] = resource.url || "";
        return acc;
    }, {});
} 