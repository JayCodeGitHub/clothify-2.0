import { cookies } from 'next/headers'

export default function Profile() {  
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  console.log(token)
  return (
    <main>
     <h1>Profile</h1>
    </main>
  )
}