import Form from '@/components/form'

export default function Auth() {  
  return (
    <main className='w-full h-rest flex justify-center items-center'>
      <h1>Auth</h1>
        <Form action="register"/>
        <Form action="login"/>
    </main>
  )
}