import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import '../globals.css'
import ProductNavbar from '@/components/Home/Navbar/productNavbar'
import FirstSection from '@/components/Products/FirstSection'
import SecondSection from '@/components/Products/SecondSection'
import ThirdSection from '@/components/Products/ThirdSection'
import FourthSection from '@/components/Products/FourthSection'
import SixthSection from '@/components/Products/SixthSection'
import FifthSection from '@/components/Products/FifthSection'
import SeventhSection from '@/components/Products/SeventhSection'
import EighthSection from '@/components/Home/EighthSection'
import Footer from '@/components/Home/Footer'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asana',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ProductNavbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        {children}
        <Footer />
        </body>
    </html>
  )
}
