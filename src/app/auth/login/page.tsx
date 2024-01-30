import Form from '@/components/form'
import Link from 'next/link'

export default function Login() {  
  return (
    <div className='flex flex-col'>
        <span className='flex'>
            <Link href='/auth/login'>
                Login
            </Link>
            <Link href='/auth/register'>
                Register
            </Link>
        </span>
        <Form action="login"/>
    </div>
  )
}