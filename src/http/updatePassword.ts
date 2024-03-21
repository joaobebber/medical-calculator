'use server'

import { revalidatePath } from 'next/cache'

import { put } from '@/api/methods'
import { getErrorMessage } from '@/errors/getErrorMessage'
import { AppError } from '@/interfaces/AppError'

interface UpdatePasswordRequest {
  password: string
}

export async function updatePassword({ password }: UpdatePasswordRequest): Promise<AppError | void> {
  try {
    await put('/users/me', {
      password,
    })
  } catch (error) {
    return {
      error: getErrorMessage(error),
    }
  }

  revalidatePath('/profile')
}
