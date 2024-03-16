'use server'

import { get } from '@/api/methods'
import { getErrorMessage } from '@/errors/getErrorMessage'
import { AppError } from '@/interfaces/AppError'
import { User } from '@/interfaces/User'

interface GetUsersData {
  users: User[]
}

export async function getUsers(): Promise<AppError | User[]> {
  try {
    const { users } = await get<GetUsersData>('/users')

    return users
  } catch (error) {
    return {
      error: getErrorMessage(error),
    }
  }
}
