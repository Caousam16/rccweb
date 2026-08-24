import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RCC Cabling and Network Solutions Corp.',
  description:
    'Expert system integration services for CCTV, CATV, FDAS, PABX, Fiber Optic, Structured Cabling, and Sound Systems.',
  keywords: [
    'CCTV installation',
    'network cabling',
    'fiber optic',
    'FDAS',
    'PABX',
    'system integration',
    'structured cabling',
  ],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#d9d9e7',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          font-sans
          antialiased
          min-h-screen
          overflow-x-hidden
        `}
      >
        {children}

        {process.env.NODE_ENV === 'production' && (
          <Analytics />
        )}
      </body>
    </html>
  )
}