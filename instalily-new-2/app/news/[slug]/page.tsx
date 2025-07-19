import { Metadata } from "next"
import { getPost } from "@/lib/sanity"
import { NewsPost } from "../components/news-post"
import { NavBar } from "@/components/layout/nav-bar"
import { Footer } from "@/components/layout/footer"

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  return post 
    ? { title: `${post.name} | InstaLILY News`, description: post.description }
    : { title: 'Post Not Found | InstaLILY News' }
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <>
      <NavBar />
      <main>
        <NewsPost post={post} />
      </main>
      <Footer />
    </>
  )
} 