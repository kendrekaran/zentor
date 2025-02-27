import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zentor | Digital Solution Agency',
  description: 'Transform your digital presence with Zentor. We offer web development, SEO, branding, digital advertising, social media, and AI solutions.',
  keywords: 'Zentor, digital agency, web development, SEO, branding, digital marketing',
  openGraph: {
    title: 'Zentor | Digital Solution Agency',
    description: 'Transform your digital presence with Zentor',
    images: '/logo1.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo1.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
