'use client'

import { useRouter } from 'next/navigation'
import { parseCookies, setCookie } from 'nookies'
import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from '@/services/api'

interface User {
  name: string
  email: string
  avatarUrl: string
}

interface SignInData {
  email: string
  password: string
}

interface AuthContextData {
  user: User | null
  isAuthenticated: boolean
  signIn: (data: SignInData) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  
  const isAuthenticated = !!user

  useEffect(() => {
    const { '@medcalc.token': token } = parseCookies()

    if (token) {
      // Chamada para a API para obter dados de usuário ***
      const user = {
        name: 'João Bebber',
        email: 'joao.gbebber@gmail.com',
        avatarUrl: 'https://github.com/JoaoBebber.png'
      }
      // ***

      setUser(user)
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    // Chamada para a API para obter o JWT ***
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _unused = { email, password }
    const token = '14c51189-9591-441c-a4b7-8865e5fcdff8'
    const user = {
      name: 'João Bebber',
      email: 'joao.gbebber@gmail.com',
      avatarUrl: 'https://github.com/JoaoBebber.png'
    }
    // ***

    setCookie(undefined, '@medcalc.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    api.defaults.headers['Authorization'] = `Bearer ${token}`

    setUser(user)

    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
