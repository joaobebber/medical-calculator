'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, createContext, useEffect, useState } from 'react'

import { userProvider } from '@/actions/userProvider'
import { login } from '@/api/requests/login'
import { User } from '@/interfaces/User'

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
    const provideUser = async () => {
      const user = await userProvider()

      if (user) setUser(user)
    }

    provideUser()
  }, [])

  async function signIn({ email, password }: SignInData) {
    const user = await login({ email, password })

    setUser(user)

    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
