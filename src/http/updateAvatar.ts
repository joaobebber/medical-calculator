'use server'

import { revalidatePath } from 'next/cache'

import { patchAvatar } from '@/api/methods'
import { getErrorMessage } from '@/errors/getErrorMessage'
import { AppError } from '@/interfaces/AppError'

interface UpdateAvatarRequest {
  formData: FormData
}

export async function updateAvatar({ formData }: UpdateAvatarRequest): Promise<AppError | void> {
  try {
    await patchAvatar('/users/avatar', formData)
  } catch (error) {
    return {
      error: getErrorMessage(error),
    }
  }

  revalidatePath('/profile')
}
