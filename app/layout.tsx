import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })
const mcFont = localFont({ src: './MC-REGULAR.otf', variable: "--font-mc" })

export const metadata: Metadata = {
  title: 'HealthyHuman',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mcFont.className, inter.className}`}>
        <Nav zIndex='z-50 fixed' />
        {children}
      </body>
    </html>
  )
}
