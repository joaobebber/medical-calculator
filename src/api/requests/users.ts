'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { User } from '@/interfaces/User'

import { get, post } from '../methods'

interface CreateUserProps {
  name: string
  email: string
  password: string
}

export async function createUser({ name, email, password }: CreateUserProps): Promise<void> {
  await post('/users', {
    name,
    email,
    password,
  })

  redirect('/login')
}

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
