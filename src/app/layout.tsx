import './globals.css'
import { Open_Sans } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans'})

export const metadata = {
  title: 'Tienda de muebles en Bizkaia - Muebles Alonso',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
