'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, createContext, useEffect, useState } from 'react'

import { userProvider } from '@/actions/userProvider'
import { login } from '@/http/login'
import { AppError } from '@/interfaces/AppError'
import { User } from '@/interfaces/User'
import { isAppError } from '@/validations/isAppError'

interface SignInData {
  email: string
  password: string
}

interface AuthContextData {
  user: User | null
  signIn: (data: SignInData) => Promise<AppError | undefined>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  const router = useRouter()

  // Load logged user in context
  useEffect(() => {
    const provideUser = async () => {
      const user = await userProvider()

      if (user) setUser(user)
    }

    provideUser()
  }, [])

  // Authenticate user and load in context
  async function signIn({ email, password }: SignInData): Promise<AppError | undefined> {
    const result = await login({ email, password })

    if (isAppError(result)) return result

    setUser(user)

    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
