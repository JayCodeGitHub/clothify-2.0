import Form from '@/components/form'
import AuthNavBar from '@/components/authNavbar'

export default function Register() {  
  return (
    <div className='flex flex-col'>
         <AuthNavBar/>
        <Form action="register"/>
    </div>
  )
}