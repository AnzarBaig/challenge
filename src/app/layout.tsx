import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Challenge',
  description: 'Just trying to complete the Challenge given by Jorge Ferreiro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=1024"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
