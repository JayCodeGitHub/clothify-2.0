export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex w-full h-rest justify-center items-center'>
        {children}
    </main>
  )
}
