import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] })

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
    <body className= {`bg-[#888888] ${inter.className}`}>
      <main className="max-w-6xl mx-auto min-h-screen">
        {children}
        <Toaster />
      </main>
    </body>
  </html>
  )
}
