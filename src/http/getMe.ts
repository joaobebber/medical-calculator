'use server'

import { cookies } from 'next/headers'

import { get } from '@/api/methods'
import { getErrorMessage } from '@/errors/getErrorMessage'
import { AppError } from '@/interfaces/AppError'
import { User } from '@/interfaces/User'

interface GetMeData {
  user: User
}

export async function getMe(): Promise<AppError | User> {
  try {
    const { user } = await get<GetMeData>('/users/me')

    cookies().set('@medcalc.user.id', user.id, {
      maxAge: Number(process.env.TOKEN_MAX_AGE),
    })
  
    return user
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
