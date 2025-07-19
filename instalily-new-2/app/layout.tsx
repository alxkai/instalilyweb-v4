import { IBM_Plex_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "InstaLILY AI | Autonomous AI Agents that work for your enterprise",
  openGraph: {
    title: "InstaLILY AI | Autonomous AI Agents that work for your enterprise",
    description:
      "Enterprise AI Automation | AI Agents for Sales & Ops | Instalily deploys AI agents that plug into Salesforce, SAP, and ERPs to automate sales, service, and back-office workflows.",
    url: "https://instalily.ai/",
    siteName: "InstaLILY AI",
  },
  robots: {
    index: process.env.ALLOW_INDEXING === 'true' ? undefined : false,
    follow: process.env.ALLOW_INDEXING === 'true' ? undefined : false,
  },
  description:
    "Enterprise AI Automation | AI Agents for Sales & Ops | Instalily deploys AI agents that plug into Salesforce, SAP, and ERPs to automate sales, service, and back-office workflows.",
};

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <head>
        <title>InstaLILY AI | Autonomous AI Agenta that work for your Enterprise</title>
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <svg className="hidden">
          <filter id="grainy">
            <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="3" stitchTiles="stitch"/>
          </filter>
        </svg>
        {children} <Analytics /> 
      </body>
    </html>
  )
}

