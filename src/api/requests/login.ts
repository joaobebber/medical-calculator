'use server'

import { cookies } from 'next/headers'

import { APIError } from '@/errors/APIError'
import { User } from '@/interfaces/User'

import { post } from '../methods'
import { getMe } from './users'

interface LoginRequest {
  email: string
  password: string
}

interface LoginResponse {
  token: string
}

export async function login({ email, password }: LoginRequest): Promise<User> {
  const response = await post<LoginResponse>('/sessions', {
    email,
    password,
  })

  if (response instanceof APIError) throw new Error(response.message)

  const { token } = response

  cookies().set('@medcalc.token', token, {
    maxAge: Number(process.env.TOKEN_MAX_AGE),
  })

  const user = await getMe()

  return user
}
