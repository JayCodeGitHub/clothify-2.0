"use client";

import { useState, useRef} from 'react'
import axios from 'axios'
import { setCookie } from 'cookies-next'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

export default function Form({ action }: { action: 'login' | 'register' }) {
    const formRef = useRef<HTMLFormElement>(null)
    const { setToken } = useAuth();
    const router = useRouter();
    const [error, setError] = useState('')
    const [form, setForm] = useState({
      email: '',
      password: '',
    });

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
          if (action === 'login') {
            const { data } = await axios.post('/api/auth/login', form)
            setCookie('token', data)
            setToken(data);
            router.push('/profile')
          } else if (action === 'register') { 
            const { data } = await axios.post('/api/auth/register', form)
            setCookie('token', data);
            setToken(data);
            router.push('/profile')
          }
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
       <form onSubmit={handleSubmit} ref={formRef} className='bg-primary p-2 mt-2 w-60 flex flex-col gap-2'>
          <input type="email" name='email' onChange={handleChange}/>
          <input type="password" name='password' onChange={handleChange}/>
          <span className='h-14 w-full'>
            <p>{error}</p>
          </span>
          {action === 'login' ? <button type="submit">Login</button> : <button type="submit">Register</button>}
       </form>
    )
  }
  