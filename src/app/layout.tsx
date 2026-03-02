import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FilmOS - Digital Film Operating System',
  description: 'The complete Digital Film Operating System that transforms film production from concept to distribution',
  keywords: 'film production, digital filmmaking, movie production, film management, entertainment technology',
  authors: [{ name: 'FilmOS Team' }],
  creator: 'FilmOS',
  publisher: 'FilmOS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://filmos.com',
    title: 'FilmOS - Digital Film Operating System',
    description: 'The complete Digital Film Operating System that transforms film production from concept to distribution',
    siteName: 'FilmOS',
    images: [
      {
        url: 'https://filmos.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FilmOS - Digital Film Operating System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FilmOS - Digital Film Operating System',
    description: 'The complete Digital Film Operating System that transforms film production from concept to distribution',
    images: ['https://filmos.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}