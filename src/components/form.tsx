"use client";

import { useState, useRef} from 'react'
import axios from 'axios'
import { setCookie } from 'cookies-next'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { formItems } from '@/items/formItems';

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
    const [isLogin, setIsLogin] = useState(false)

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
          setIsLogin(true)
          if (action === 'login') {


            // artificial delay
            let [res] = await Promise.allSettled([
              axios.post('/api/auth/login', form),
              new Promise((resolve) => setTimeout(resolve, 1000))
            ])

            if (res.status === 'rejected') {
              throw res.reason
            }
            
            const { data } = res.status === 'fulfilled' &&  res.value || {};

            setCookie('token', data)
            setToken(data);
            router.push('/profile')
          } else if (action === 'register') { 

              // artificial delay
              let [res] = await Promise.allSettled([
                axios.post('/api/auth/register', form),
                new Promise((resolve) => setTimeout(resolve, 1000))
              ])
  
              if (res.status === 'rejected') {
                throw res.reason
              }
              
            const { data } = res.status === 'fulfilled' &&  res.value || {};
            setCookie('token', data);
            setToken(data);
            router.push('/profile')
          }
      } catch (error) {
        setIsLogin(false)
        try {
          // If Error is from server
          setError((error as any).response.data.message)
        } catch (error) {
          // If Error is not from server
          setError('Something went wrong')
        }
          return
      }
        setIsLogin(false)
        setForm({ ...initialForm})
        formRef.current?.reset()
        
        setError(null)

    }
    return (
       <form onSubmit={handleSubmit} ref={formRef} className='p-2 mt-2 w-80 flex flex-col items-center gap-6 rounded-md py-10 px-6 bg-white'>
        {formItems.map(({name, label, type, placeholder}) => (
            <span key={name} className='flex flex-col gap-2 w-full'>
              <label className='text-sm self-start'>{label}</label>
              <input type={type} name={name} placeholder={placeholder} onChange={handleChange} className='p-2 w-full rounded-md text-sm bg-secondary'/>
            </span>
        ))}
          <span className='h-14 w-full text-sm text-red-500'>
            <p>{error}</p>
          </span>
          <button type="submit" className={`${isLogin ? 'bg-red-300 cursor-default' : 'bg-primary cursor-pointer'} transition-all py-2 px-6 text-white rounded-lg`}>
            {isLogin ? 'Loading...' : (
              action === 'login' ? "Login" : "Register"
            )}
          </button>
       </form>
    )
  }
  