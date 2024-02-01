"use client";

import { useState, useRef} from 'react'
import axios from 'axios'
import { setCookie } from 'cookies-next'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

export default function Form({ action }: { action: 'login' | 'register' }) {
    const initialForm = {
      email: '',
      password: '',
    }

    const formRef = useRef<HTMLFormElement>(null)
    const { setToken } = useAuth();
    const router = useRouter();
    const [error, setError] = useState<null | string>(null)
    const [form, setForm] = useState({ ...initialForm});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setForm({
        ...form,
        [name]: value,
      })
    }

    const validate = () => {
      if(!form.email) {
        setError('Email is required')
        return false
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
        setError('Invalid email')
        return false
      }

      if(!form.password) {
        setError('Password is required')
        return false
      } else if (form.password.length < 6) {
        setError('Password must be at least 6 characters')
        return false
      }
      return true
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const isValid = validate();
        if (!isValid) {
          return
        } else {
          setError(null)
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
        setForm({ ...initialForm})
        formRef.current?.reset()
        
        setError(null)

    }
    return (
       <form onSubmit={handleSubmit} ref={formRef} className='p-2 mt-2 w-80 flex flex-col items-center gap-6 rounded-md py-10 px-6 bg-white'>
          <span className='flex flex-col gap-2 w-full'>
            <label className='text-sm self-start'>Email address</label>
            <input type="text" name='email' placeholder='Your Email Address' onChange={handleChange} className='p-2 w-full rounded-md text-sm bg-secondary'/>
          </span>
          <span className='flex flex-col gap-2 w-full'>
          <label className='text-sm self-start'>Password</label>
          <input type="password" name='password' placeholder='password' onChange={handleChange} className='p-2 w-full rounded-md text-sm bg-secondary'/>
          </span>
          <span className='h-14 w-full text-sm text-red-500'>
            <p>{error}</p>
          </span>
          <button type="submit" className=' py-2 px-6 bg-primary text-white rounded-lg'>
            {action === 'login' ? "Login" : "Register"}
          </button>
       </form>
    )
  }
  