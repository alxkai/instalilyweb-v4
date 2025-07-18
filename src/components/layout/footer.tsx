import Link from "next/link"
import Image from "next/image"

interface FooterLink {
  name: string
  href: string
  external?: boolean
}

export function Footer() {
  const footerLinks: Record<string, FooterLink[]> = {
    Features: [
      { name: "Book a Demo", href: "/get-started" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "News", href: "/news" },
      { name: "Careers", href: "/careers" },
    ],
    Resources: [
      { name: "AI Dispatch", href: "/ai-dispatch" },
    ],
  }

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="block mb-6">
              <span className="text-2xl font-semibold">InstaLILY</span>
            </Link>
            <div className="flex gap-2">
              <a href="#" className="hover:opacity-80 transition-opacity"><span className="text-sm">LinkedIn</span></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><span className="text-sm">Twitter</span></a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 InstaLILY. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 