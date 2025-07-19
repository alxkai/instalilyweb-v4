"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MobileNav } from "@/components/layout/mobile-nav"
import Image from "next/image"

export function NavBar({ problemSolutionRef }: { problemSolutionRef?: React.RefObject<HTMLDivElement> }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [pastTestimonial, setPastTestimonial] = useState(false)
  const pathname = usePathname()
  const isProductPage = pathname === "/platform" || pathname === "/deploy"
  const isDeployPage = pathname === "/deploy"

  useEffect(() => {
    const handleScroll = () => {
      let heroHeight = 216; // Default value
      if (problemSolutionRef?.current) {
        heroHeight = problemSolutionRef.current.offsetTop - 80; // Subtracting navbar height
      }
      setIsScrolled(window.scrollY > heroHeight);

      // Check if we've scrolled past the testimonial section on the deploy page
      if (isDeployPage) {
        // Increase position to avoid premature shifting
        const testimonialPosition = 2800 
        setPastTestimonial(window.scrollY > testimonialPosition)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDeployPage, problemSolutionRef])

  const shouldBeTransparent = false
  const isBlack = (isDeployPage && !pastTestimonial) || 
                 (pathname === "/platform" && !isScrolled) || 
                 (!isScrolled && (pathname === "/" || pathname === "/careers" || pathname === "/about" || pathname === "/news" || pathname === "/ai-dispatch"))

  return (
    <div className={`sticky top-0 z-50 transition-colors duration-200 ${isBlack ? "bg-black" : "bg-white"}`}>
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex-1">
          <Link href="/">
            <Image
              src={isBlack ? "/logo_w.png" : "/logo_b.png"}
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          <Link href="/" className={`uppercase text-sm font-semibold hover:opacity-80 ${isBlack ? "text-white" : "text-gray-600"}`}>
            Home
          </Link>
          {/* <Link href="/platform" className={`uppercase text-sm font-semibold hover:opacity-80 ${isBlack ? "text-white" : "text-gray-600"}`}>
            Platform
          </Link>
          <Link href="/deploy" className={`uppercase text-sm font-semibold hover:opacity-80 ${isBlack ? "text-white" : "text-gray-600"}`}>
            Deploy
          </Link>
          <Link href="/case-studies" className={`uppercase text-sm font-semibold hover:opacity-80 ${isBlack ? "text-white" : "text-gray-600"}`}>
            Case Studies
          </Link> */}
          <Link href="/about" className={`uppercase text-sm font-semibold hover:opacity-80 ${isBlack ? "text-white" : "text-gray-600"}`}>
            About
          </Link>
          <Link href="/news" className={`uppercase text-sm font-semibold hover:opacity-80 ${isBlack ? "text-white" : "text-gray-600"}`}>
            News
          </Link>
          <Link href="/ai-dispatch" className={`uppercase text-sm font-semibold hover:opacity-80 ${isBlack ? "text-white" : "text-gray-600"}`}>
            AI Dispatch
          </Link>
          <Link href="/careers" className={`uppercase text-sm font-semibold hover:opacity-80 ${isBlack ? "text-white" : "text-gray-600"}`}>
            Careers
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-end">
          <Link 
            href="/get-started" 
            className={`text-sm font-semibold px-4 py-2 rounded-full transition-colors border ${
              isBlack 
                ? "border-white bg-transparent text-white hover:bg-white hover:text-black" 
                : "border-black bg-transparent text-black hover:bg-black hover:text-white"
            }`}
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-end gap-4 flex-1">
          <Link 
            href="/get-started"
            className={`text-sm font-semibold px-4 py-2 rounded-full transition-colors border ${
              isBlack 
                ? "border-white bg-transparent text-white hover:bg-white hover:text-black" 
                : "border-black bg-transparent text-black hover:bg-black hover:text-white"
            }`}
          >
            Book a Demo
          </Link>
          <MobileNav isBlack={isBlack} />
        </div>
      </nav>
    </div>
  )
}

