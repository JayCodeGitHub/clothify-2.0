import AuthNavBar from '@/components/authNavbar'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex flex-col gap-2 w-full h-rest justify-center items-center'>
        <AuthNavBar/>
        {children}
    </main>
  )
}
