import { Input } from '@/components/Input'
import { AuthIcon } from '@/components/AuthIcon'
import { useCallback, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

export default function Auth () {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState('login')

  const router = useRouter()

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, [])

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/'
      })

      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }, [email, password, router])

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      })

      login()
    } catch (error) {
      console.log(error)
    }
  }, [email, name, password, login])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className='bg-black w-full h-full md:bg-opacity-50'>
        <nav className='px-8 md:px-12 py-5'>
          <img src='/images/logo.png' alt='Logo' className='h-12' />
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black/70 px-10 py-10 md:px-16 md:py-16 self-center mt-2 md:w-3/4 md:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              {variant === 'login' ? 'Sign In' : 'Sign Up'}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant === 'register' && (
                <Input
                  label='Username'
                  onChange={(event: any) => setName(event.target.value)}
                  id='name'
                  value={name}
                />
              )}
              <Input
                label='Email'
                onChange={(event: any) => setEmail(event.target.value)}
                id='email'
                type='email'
                value={email}
              />
              <Input
                label='Password'
                onChange={(event: any) => setPassword(event.target.value)}
                id='password'
                type='password'
                value={password}
              />
              <button onClick={variant === 'login' ? login : register} className='bg-red-600 py-3 font-medium text-white rounded-md w-full mt-7 hover:bg-red-700 transition'>
                {variant === 'login' ? 'Sign In' : 'Sign Up'}
              </button>
              <div className='flex flex-row justify-center items-center gap-4 mt-8'>
                <AuthIcon onClick={() => signIn('google', { callbackUrl: '/' })}>
                  <FcGoogle size={32} />
                </AuthIcon>
                <AuthIcon onClick={() => signIn('github', { callbackUrl: '/' })}>
                  <FaGithub size={32} />
                </AuthIcon>
              </div>
              <p className='text-neutral-500 mt-12'>
                {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                  {variant === 'login' ? 'Sign up now' : 'Sign in now'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
