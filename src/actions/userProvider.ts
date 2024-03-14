'use server'

import { cookies } from 'next/headers'

import { getMe } from '@/api/requests/users'
import { User } from '@/interfaces/User'

export async function userProvider(): Promise<User | null> {
  const token = cookies().get('@medcalc.token')?.value

  if (token) return getMe()

  return null
}
