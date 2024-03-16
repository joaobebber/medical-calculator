'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { APIError } from '@/errors/APIError'
import { User } from '@/interfaces/User'

import { get, post } from '../methods'

interface CreateUserProps {
  name: string
  email: string
  password: string
}

export async function createUser({ name, email, password }: CreateUserProps): Promise<void> {
  const response = await post('/users', {
    name,
    email,
    password,
  })

  if (response instanceof APIError) throw new Error(response.message)

  redirect('/login')
}

interface GetUsersData {
  users: User[]
}

export async function getUsers(): Promise<User[]> {
  const response = await get<GetUsersData>('/users')

  if (response instanceof APIError) throw new Error(response.message)

  const { users } = response

  return users
}

interface GetMeData {
  user: User
}

export async function getMe(): Promise<User> {
  const response = await get<GetMeData>('/users/me')

  if (response instanceof APIError) throw new Error(response.message)

  const { user } = response

  cookies().set('@medcalc.user.id', user.id, {
    maxAge: Number(process.env.TOKEN_MAX_AGE),
  })

  return user
}
