import { CartContextProvider } from '@/context/cart.context'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Avion',
  description: 'Every thing U need is here for u',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContextProvider>
          {children}
        </CartContextProvider>
      </body>
    </html>
  )
}
