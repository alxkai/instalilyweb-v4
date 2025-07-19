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
      { name: "Book a Demo", href: "/book-a-demo" },
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
    <footer className="bg-[#181818] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="block mb-6">
              <Image
                src="/assets/logo_white.svg"
                alt="InstaLILY"
                width={120}
                height={30}
                className="w-auto h-12"
              />
            </Link>
            <div className="flex gap-2">
              <Link 
                href="https://www.linkedin.com/company/instalily" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:bg-gray-800 p-1 rounded transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-gray-400 hover:text-white"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
                </svg>
              </Link>
              <Link 
                href="https://x.com/InstalilyAI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:bg-gray-800 p-1 rounded transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-gray-400 hover:text-white"
                >
                  <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                </svg>
              </Link>
              <Link 
                href="https://www.instagram.com/instalily.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:bg-gray-800 p-1 rounded transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-gray-400 hover:text-white"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
              </Link>
              <Link 
                href="https://instalilyai.substack.com/p/theaidispatch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:bg-gray-800 p-1.5 rounded transition-color ml-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="text-gray-400 hover:text-white"
                >
                  <path d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z"/>
                </svg>
              </Link>
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
              © 2025 InstaLILY. All rights reserved.
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