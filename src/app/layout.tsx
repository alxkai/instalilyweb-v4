import { IBM_Plex_Sans } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://instalily.ai'),
  title: {
    default: "InstaLILY AI | Autonomous AI Agents that work for your enterprise",
    template: "%s | InstaLILY AI"
  },
  description: "Enterprise AI Automation | AI Agents for Sales & Ops | Instalily deploys AI agents that plug into Salesforce, SAP, and ERPs to automate sales, service, and back-office workflows.",
  keywords: [
    "AI automation",
    "enterprise AI",
    "B2B workflows",
    "AI agents",
    "Salesforce automation",
    "SAP integration",
    "ERP automation",
    "workflow automation",
    "client services AI",
    "sales automation"
  ],
  authors: [{ name: "InstaLILY AI Team" }],
  creator: "InstaLILY AI",
  publisher: "InstaLILY AI",
  openGraph: {
    title: "InstaLILY AI | Autonomous AI Agents that work for your enterprise",
    description: "Enterprise AI Automation | AI Agents for Sales & Ops | Instalily deploys AI agents that plug into Salesforce, SAP, and ERPs to automate sales, service, and back-office workflows.",
    url: "https://instalily.ai/",
    siteName: "InstaLILY AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InstaLILY AI - Autonomous AI Agents for Enterprise"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaLILY AI | Autonomous AI Agents that work for your enterprise",
    description: "Enterprise AI Automation | AI Agents for Sales & Ops | Instalily deploys AI agents that plug into Salesforce, SAP, and ERPs to automate sales, service, and back-office workflows.",
    images: ["/og-image.jpg"],
    creator: "@InstalilyAI"
  },
  robots: {
    index: process.env.ALLOW_INDEXING === 'true' ? undefined : false,
    follow: process.env.ALLOW_INDEXING === 'true' ? undefined : false,
    googleBot: {
      index: process.env.ALLOW_INDEXING === 'true' ? undefined : false,
      follow: process.env.ALLOW_INDEXING === 'true' ? undefined : false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "https://instalily.ai"
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon-32x32.png'
  }
};

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning={true}>
        <svg className="hidden">
          <filter id="grainy">
            <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="3" stitchTiles="stitch"/>
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
