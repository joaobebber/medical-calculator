'use server'

import { cookies } from 'next/headers'

import { User } from '@/interfaces/User'

import { post } from '../methods'
import { getMe } from './users'

interface Request {
  email: string
  password: string
}

export async function login({ email, password }: Request): Promise<User> {
  const { token } = await post<{ token: string }>('/sessions', {
    email,
    password,
  })

  cookies().set('@medcalc.token', token, {
    maxAge: 20, // 20 seconds (60 * 60 * 24)
  })

  const user = await getMe()

  return user
}
