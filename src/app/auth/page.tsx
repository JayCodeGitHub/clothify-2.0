"use client";

import { useState} from 'react'

export default function Auth() {
    const [form, setForm] = useState({
      email: '',
      password: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setForm({
        ...form,
        [name]: value,
      })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      console.log(form)
    }
    return (
      <main>
       <h1>Auth</h1>
       <form onSubmit={handleSubmit} className='bg-red-500 p-2 w-60 flex flex-col gap-2'>
          <input type="email" name='email' onChange={handleChange}/>
          <input type="password" name='password' onChange={handleChange}/>
          <button type="submit">Register</button>
       </form>
      </main>
    )
  }
  