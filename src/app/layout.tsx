import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pet Store',
  description: 'Come buy and hire pets',
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
        <Footer />
      </main>
    </body>
  </html>
  )
}
