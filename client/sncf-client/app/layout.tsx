import './globals.css'
import type { Metadata } from 'next'



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
    <html lang="fr">
      <body className='bg-[#F3F3F8] min-h-screen flex flex-col'>{children}</body>
    </html>
  )
}
