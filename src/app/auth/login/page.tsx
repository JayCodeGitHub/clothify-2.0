import Form from '@/components/form'
import AuthNavBar from '@/components/authNavbar'

export default function Login() {  
  return (
    <div className='flex flex-col'>
        <AuthNavBar/>
        <Form action="login"/>
    </div>
  )
}