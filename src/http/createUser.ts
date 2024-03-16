'use server'

import { redirect } from 'next/navigation'

import { post } from '@/api/methods'
import { getErrorMessage } from '@/errors/getErrorMessage'
import { AppError } from '@/interfaces/AppError'

interface CreateUserRequest {
  name: string
  email: string
  password: string
}

export async function createUser({ name, email, password }: CreateUserRequest): Promise<AppError | void> {
  try {
    await post('/users', {
      name,
      email,
      password,
    })
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }

  redirect('/login')
}
