import MainFooter from '@/components/MainFooter'
import MainNav from '@/components/MainNav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <MainNav/>
  <main className="bg-light-grey">
      {children}
  </main>
    {/* footer */}
    <MainFooter />
  </>
  )
}

