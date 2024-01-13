import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '.././globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store | HealthyHuman',
  description: '',
}

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={inter.className}>
      {children}
    </section>
  )
}
