"use client"


import './globals.css'
import { Footer, Navbar } from '@/components'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

 const metadata = {
  title: 'Car hub',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
