import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const ah = localFont({
  src: './AH.woff2',
  display: 'swap',
  variable: '--font-ah',
})

export const metadata: Metadata = {
  title: 'RasabounTrip Connect',
  description: 'RasabounTrip website with NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
