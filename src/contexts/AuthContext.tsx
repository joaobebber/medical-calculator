'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, createContext, useEffect, useState } from 'react'

import { userProvider } from '@/actions/userProvider'
import { login } from '@/api/requests/login'
import { getErrorMessage } from '@/errors/getErrorMessage'
import { User } from '@/interfaces/User'

interface SignInData {
  email: string
  password: string
}

interface AuthContextData {
  user: User | null
  isAuthenticated: boolean
  signIn: (data: SignInData) => Promise<{ error: string } | undefined>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  // Not used yet
  const isAuthenticated = !!user

  // Load logged user in context
  useEffect(() => {
    const provideUser = async () => {
      const user = await userProvider()

      if (user) setUser(user)
    }

    provideUser()
  }, [])

  // Authenticate user and load in context
  async function signIn({ email, password }: SignInData) {
    try {
      const user = await login({ email, password })
      
      setUser(user)
    } catch (error) {
      return {
        error: getErrorMessage(error)
      }
    }

    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
