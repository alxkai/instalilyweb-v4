"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  isBlack?: boolean
}

export function MobileNav({ isBlack }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.mobile-nav') && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [isOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div className="md:hidden mobile-nav">
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setIsOpen(true)}
        className={`relative z-50 ${isBlack ? "text-white" : "text-black"}`}
      >
        <Menu className="h-6 w-6 transform scale-150" />
      </Button>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu */}
      <div 
        className={`fixed right-0 top-0 h-full w-[300px] bg-background p-6 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4"
        >
          <X className="h-4 w-4" />
        </Button>

        <nav className="flex flex-col gap-8 mt-12">
          <Link 
            href="/" 
            className="text-2xl font-medium hover:opacity-80"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          {/* <Link 
            href="/platform" 
            className="text-2xl font-medium hover:opacity-80"
            onClick={() => setIsOpen(false)}
          >
            Platform
          </Link>
          <Link 
            href="/deploy" 
            className="text-2xl font-medium hover:opacity-80"
            onClick={() => setIsOpen(false)}
          >
            Deploy
          </Link>
          <Link 
            href="/case-studies" 
            className="text-2xl font-medium hover:opacity-80"
            onClick={() => setIsOpen(false)}
          >
            Case Studies
          </Link> */}
          <Link 
            href="/about" 
            className="text-2xl font-medium hover:opacity-80"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/news" 
            className="text-2xl font-medium hover:opacity-80"
            onClick={() => setIsOpen(false)}
          >
            News
          </Link>
          <Link 
            href="/ai-dispatch" 
            className="text-2xl font-medium hover:opacity-80"
            onClick={() => setIsOpen(false)}
          >
            AI Dispatch
          </Link>
          <Link 
            href="/careers" 
            className="text-2xl font-medium hover:opacity-80"
            onClick={() => setIsOpen(false)}
          >
            Careers
          </Link>
        </nav>
      </div>
    </div>
  )
} 