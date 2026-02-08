import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist in Santa Monica, CA',
  description:
    'Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica, California specializing in anxiety, trauma, EMDR, and burnout therapy for high-achieving adults. In-person and telehealth sessions available.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
