'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, createContext, useEffect, useState } from 'react'

import { logout } from '@/actions/logout'
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
  refreshUser: () => Promise<void>
  signIn: (data: SignInData) => Promise<AppError | undefined>
  signOut: () => Promise<void>
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
    refreshUser()
  }, [])

  // Refresh user data
  async function refreshUser() {
    const user = await userProvider()

    if (user) setUser(user)
  }

  // Authenticate user and load in context
  async function signIn({ email, password }: SignInData): Promise<AppError | undefined> {
    const result = await login({ email, password })

    if (isAppError(result)) return result

    setUser(result)

    router.push('/')
  }

  // Remove authentication
  async function signOut() {
    await logout()

    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, refreshUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
