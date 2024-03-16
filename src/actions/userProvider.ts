'use server'

import { cookies } from 'next/headers'

import { getMe } from '@/http/getMe'
import { User } from '@/interfaces/User'
import { isAppError } from '@/validations/isAppError'

export async function userProvider(): Promise<User | null> {
  const token = cookies().get('@medcalc.token')?.value

  if (token) {
    const result = await getMe()

    if (isAppError(result)) return null

    return result
  }

  return null
}
