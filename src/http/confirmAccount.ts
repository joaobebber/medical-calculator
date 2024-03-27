'use server'

import { redirect } from 'next/navigation'

import { getErrorMessage } from '@/errors/getErrorMessage'
import { AppError } from '@/interfaces/AppError'

import { post } from '../api/methods'

interface LoginRequest {
  token: string
}

export async function confirmAccount({ token }: LoginRequest): Promise<AppError | void> {
  try {
    await post('/users/confirm-account', {
      token,
    })
  } catch (error) {
    return {
      error: getErrorMessage(error),
    }
  }

  redirect('/login')
}
