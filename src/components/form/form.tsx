"use client";

import { useState, useRef} from 'react'
import axios from 'axios'

export default function Form() {
    const formRef = useRef<HTMLFormElement>(null)
    const [error, setError] = useState('')
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

        if (!form.email || !form.password) {
          setError('Email and password are required')
          return
        }

        try {
          const { data } = await axios.post('/api/auth/register', form)
          console.log(data);
      } catch (error) {
          console.log(error);
          if((error as any).response.data.message) {
            setError((error as any).response.data.message)
          }
          return
      }
        setForm({
          email: '',
          password: '',
        })
        formRef.current?.reset()
        setError('')

    }
    return (
       <form onSubmit={handleSubmit} ref={formRef} className='bg-red-500 p-2 w-60 flex flex-col gap-2'>
          <input type="email" name='email' onChange={handleChange}/>
          <input type="password" name='password' onChange={handleChange}/>
          <span className='h-14 w-full'>
            <p>{error}</p>
          </span>
          <button type="submit">Register</button>
       </form>
    )
  }
  