import MainFooter from '@/components/MainFooter'
import MainNav from '@/components/MainNav'
import ProductNav from '@/components/ProductNav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    < ProductNav/>
      <main className="bg-light-grey flex flex-col place-items-center">
      {children}
  </main>
    {/* footer */}
    <MainFooter />
  </>
  )
}

