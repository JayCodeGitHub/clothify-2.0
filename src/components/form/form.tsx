"use client";

import { useState} from 'react'
import axios from 'axios'

export default function Form() {
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(form)
        const { data } = await axios.post('/api/auth/register', form)
        console.log(data);
    }
    return (
       <form onSubmit={handleSubmit} className='bg-red-500 p-2 w-60 flex flex-col gap-2'>
          <input type="email" name='email' onChange={handleChange}/>
          <input type="password" name='password' onChange={handleChange}/>
          <button type="submit">Register</button>
       </form>
    )
  }
  