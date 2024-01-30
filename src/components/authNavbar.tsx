import Link from 'next/link'

export default function AuthNavBar() {  
  return (
        <span className='flex justify-around w-full py-2'>
            <Link href='/auth/login'>
                Login
            </Link>
            <Link href='/auth/register'>
                Register
            </Link>
        </span>
  )
}