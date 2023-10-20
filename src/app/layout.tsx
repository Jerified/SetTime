import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'

const inter = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Time Saver',
  description: 'A time saver website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className= {`bg-antiquewhite ${inter.className}`}>
      <main className="">
        <Navbar />
        {children}
      </main>
    </body>
  </html>
  )
}
