'use server'

import { cookies } from 'next/headers'

import { User } from '@/interfaces/User'

import { get } from '../methods'

export async function getUsers(): Promise<User[]> {
  const users = await get<User[]>('/users')

  return users
}

export async function getMe(): Promise<User> {
  const user = await get<User>('/users/me')

  cookies().set('@medcalc.user.id', user.id, {
    maxAge: 20, // 20 seconds (60 * 60 * 24)
  })

  return user
}
