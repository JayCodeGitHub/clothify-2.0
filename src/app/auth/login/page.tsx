import Form from '@/components/form'

export default function Login() {  
  return (
    <div className='flex flex-col'>
        <h1>Login</h1>
        <Form action="login"/>
    </div>
  )
}