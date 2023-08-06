import ProductFooter from '@/components/ProductFooter'
import ProductNav from '@/components/ProductNav'
import ProductTopNav from '@/components/ProductTopNav'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Avion',
  description: 'Every thing U need is here for u',
}

export default function RootLayout({
  children,params: { id }
}: {
  children: React.ReactNode,params: { id:string }
}) {
  return (
    <>
      <ProductTopNav />
      <ProductNav />
      
      <main className='bg-light-grey md:px-14'>
        {children}
      </main>
      <ProductFooter />
    </>
  )
}
