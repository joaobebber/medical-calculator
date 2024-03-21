'use server'

import { revalidatePath } from 'next/cache'

import { put } from '@/api/methods'
import { getErrorMessage } from '@/errors/getErrorMessage'
import { AppError } from '@/interfaces/AppError'

interface UpdateEmailRequest {
  email: string
}

export async function updateEmail({ email }: UpdateEmailRequest): Promise<AppError | void> {
  try {
    await put('/users/me', {
      email,
    })
  } catch (error) {
    return {
      error: getErrorMessage(error),
    }
  }

  revalidatePath('/profile')
}
