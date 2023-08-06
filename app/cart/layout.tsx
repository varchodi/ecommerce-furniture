import MainFooter from '@/components/MainFooter'
import MainNav from '@/components/MainNav'

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
      <MainNav />
      <main className='bg-light-grey md:px-14'>
        {children}
      </main>
      <MainFooter />
    </>
  )
}
