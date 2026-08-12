import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shravani Pawar — Software Engineer',
  description:
    'Portfolio of Shravani Pawar, a software engineer building reliable, scalable backend systems and production-ready software with Java, Spring Boot, REST APIs, MySQL and AWS.',
  keywords: [
    'Shravani Pawar',
    'Software Engineer',
    'Backend Engineer',
    'Java',
    'Spring Boot',
    'REST APIs',
    'MySQL',
    'AWS',
  ],
  openGraph: {
    title: 'Shravani Pawar — Software Engineer',
    description:
      'Building reliable, scalable backend systems and production-ready software.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
