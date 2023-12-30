import Form from '@/components/form'
import { cookies } from 'next/headers'

export default function Auth() {  
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  console.log(token)
  return (
    <main>
      <h1>Auth</h1>
      {token ? (
        <button>Logout</button>
      ) : (
        <>
        <Form action="register"/>
        <Form action="login"/>
        </>
      )}
    </main>
  )
}