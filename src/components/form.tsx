"use client";

import { useState, useRef} from 'react'
import axios from 'axios'
import { setCookie } from 'cookies-next'
import { useAuth, useError, useForm } from '@/hooks'
import { useRouter } from 'next/navigation'
import { formItems } from '@/items/formItems';
import Input from './input';
import { motion } from "framer-motion";


export default function Form({ action }: { action: 'login' | 'register' }) {
  const { setToken } = useAuth();
  const { error, setError} = useError();
  const { form, setForm, updateField } = useForm();
  const [isLogin, setIsLogin] = useState(false);

  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter();

  const initialError = formItems.reduce(
    (acc, item) => ({ ...acc, [item.name]: "" }),
    { formStatus: "" }
  );

  const initialForm = formItems.reduce(
    (acc, item) => ({ ...acc, [item.name]: "" }),{}
  );

  const validate = () => {

    let valid = true;

    {formItems.map((item) => {
      if((!form[item.name as keyof typeof form]) && valid) {
        const updatedErorr = { ...initialError, [item.name]: item.errorRequire };
        setError(updatedErorr);
        valid = false;
      } else if (valid && (item.regex && !new RegExp(item.regex).test(form[item.name as keyof typeof form]))) {
        const updatedErorr = { ...initialError, [item.name]: item.errorRegex };
        setError(updatedErorr);
        valid = false;
      }
    })}

    return valid ? true : false
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validate();
    
    if (!isValid) {
      return
    } else {
      setError(initialError)
    }

    try {
      setIsLogin(true);

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
        const updatedErorr = { ...initialError, formStatus: (error as any).response.data.message };
          setError(updatedErorr);
        } catch (error) {
          // If Error is not from server
          const updatedErorr = { ...initialError, formStatus: "Something went wrong" };
          setError(updatedErorr);
        }
        
      return
    }
      setIsLogin(false)
      setForm({ ...initialForm})
      formRef.current?.reset()  
      setError(initialError)

    }
    return (
       <form onSubmit={handleSubmit} ref={formRef} className='p-2 mt-2 w-80 flex flex-col items-center gap-6 rounded-md py-10 px-6 bg-white'>
        {formItems.map(({name, label, type, placeholder}) => (
           <motion.label  
           key={name} 
           htmlFor={name}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.2 }}
           className="text-sm font-medium flex flex-col gap-2 w-full"
         >
             {label}
           <Input
              type={type}
              key={name}
              error={error[name as keyof typeof error]}
              name={name}
              value={form[name as keyof typeof form]}
              placeholder={placeholder}
              onChange={updateField}
           />
         </motion.label>
        ))}
          <span className='h-14 w-full text-sm text-red-500'>
            {Object.keys(error).map((key) => (
              <p key={key}>
                {error[key as keyof typeof error]}
              </p>
          ))}
          </span>
          <button type="submit" className={`${isLogin ? 'bg-red-300 cursor-default' : 'bg-primary cursor-pointer'} transition-all py-2 px-6 text-white rounded-lg`}>
            {isLogin ? 'Loading...' : (
              action === 'login' ? "Login" : "Register"
            )}
          </button>
       </form>
    )
  }
  