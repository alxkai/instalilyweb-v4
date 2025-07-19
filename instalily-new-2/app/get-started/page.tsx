import { NavBar } from "@/components/layout/nav-bar"
import { Footer } from "@/components/layout/footer"
import { GetStartedHero } from "./components/hero"

export default function GetStartedPage() {
  return (
    <>
      <NavBar />
      <main>
        <GetStartedHero />
      </main>
      <Footer />
    </>
  )
} 
