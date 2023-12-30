import Form from '@/components/form'
import LogOut from '@/components/logout'

export default function Auth() {    
  return (
    <main>
      <h1>Auth</h1>
      <Form action="register"/>
      <Form action="login"/>
      <LogOut />
    </main>
  )
}
  