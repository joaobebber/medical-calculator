'use server'

import { cookies } from 'next/headers'

import { getErrorMessage } from '@/errors/getErrorMessage'
import { AppError } from '@/interfaces/AppError'
import { User } from '@/interfaces/User'

import { post } from '../api/methods'
import { getMe } from './getMe'

interface LoginRequest {
  email: string
  password: string
}

interface LoginResponse {
  token: string
}

export async function login({ email, password }: LoginRequest): Promise<AppError | User> {
  try {
    const { token } = await post<LoginResponse>('/sessions', {
      email,
      password,
    })

    cookies().set('@medcalc.token', token, {
      maxAge: Number(process.env.TOKEN_MAX_AGE),
    })

    const user = await getMe()

    return user
  } catch (error) {
    return {
      error: getErrorMessage(error),
    }
  }
}
